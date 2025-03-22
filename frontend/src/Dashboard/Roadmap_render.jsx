import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoadmapItem = ({ roadmap, index, userId }) => {
    // Initialize expanded state for all steps
    const [expandedSteps, setExpandedSteps] = useState(() => {
        // Create initial state with first step expanded
        const initialState = {};
        if (roadmap.steps && roadmap.steps.length > 0) {
            roadmap.steps.forEach((step, idx) => {
                initialState[step.id] = idx === 0; // First step is expanded by default
            });
        }
        return initialState;
    });

    // State for language preference
    const [language, setLanguage] = useState("english"); // Default to English

    // State for currently playing video
    const [currentVideo, setCurrentVideo] = useState(null);

    // State for user's completed lectures - restructured to be more reliable
    const [completedLectures, setCompletedLectures] = useState({});

    // State to track if data is being saved
    const [isSaving, setIsSaving] = useState(false);

    // Fetch user completion data on component mount
    // Fetch user completion data on component mount
// Fetch user completion data on component mount
useEffect(() => {
    const fetchUserCompletionData = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("No token found, user is not authenticated.");
            return;
        }

        try {
            const response = await axios.get(
                `http://localhost:4001/api/users/${userId}/progress/${roadmap.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            
            if (response.data && response.data.completedLectures) {
                // Find the mismatched format - the database has {stepId: true} but we need {stepId: {lectureId: true}}
                
                const formattedCompletedLectures = {};
                
                // For each step in the roadmap
                roadmap.steps.forEach(step => {
                    // Initialize the step object
                    formattedCompletedLectures[step.id] = {};
                    
                    // If the step is marked as completed in the database
                    if (response.data.completedLectures[step.id]) {
                        // Mark all lectures in this step as completed
                        step.lectures.forEach(lecture => {
                            formattedCompletedLectures[step.id][lecture.id] = true;
                        });
                    }
                });
                
                setCompletedLectures(formattedCompletedLectures);
            }
        } catch (error) {
            console.error("Failed to fetch user progress:", error);

            if (error.response?.status === 401) {
                console.warn("Token expired or invalid. Logging out user...");
                localStorage.removeItem("token");
                // Optionally redirect to login page or handle re-authentication
            }
        }
    };

    if (userId && roadmap?.id) {
        fetchUserCompletionData();
    }
}, [userId, roadmap?.id]);

    // Add event listener to close modal on escape key
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && currentVideo) {
                setCurrentVideo(null);
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Prevent scrolling on body when modal is open
        if (currentVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
        };
    }, [currentVideo]);

    // Toggle function for step expansion
    const toggleStep = (stepId) => {
        setExpandedSteps({
            ...expandedSteps,
            [stepId]: !expandedSteps[stepId]
        });
    };

    // Function to extract YouTube video ID from URL
    const extractYouTubeInfo = (url) => {
        if (!url) return null;

        // Check if it's a playlist URL
        const playlistRegExp = /^.*(youtube.com\/playlist\?list=)([^#&?]*).*/;
        const playlistMatch = url.match(playlistRegExp);

        if (playlistMatch && playlistMatch[2]) {
            return {
                type: 'playlist',
                id: playlistMatch[2]
            };
        }

        // Check if it's a regular video URL
        const videoRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const videoMatch = url.match(videoRegExp);

        if (videoMatch && videoMatch[2].length === 11) {
            return {
                type: 'video',
                id: videoMatch[2]
            };
        }

        return null;
    };

    const handleVideoClick = (lecture) => {
        console.log("Video icon clicked", lecture);

        if (!lecture || !lecture.resources) {
            console.error("No resources found for this lecture");
            return;
        }

        if (!lecture.resources[language] || !Array.isArray(lecture.resources[language]) || lecture.resources[language].length === 0) {
            console.warn(`No ${language} videos available for this lecture`);
            return;
        }

        const videoUrl = lecture.resources[language][0];
        console.log("Video URL:", videoUrl);

        const youtubeInfo = extractYouTubeInfo(videoUrl);
        console.log("Extracted YouTube Info:", youtubeInfo);

        if (youtubeInfo) {
            if (youtubeInfo.type === 'video') {
                // For regular videos
                setCurrentVideo({
                    id: youtubeInfo.id,
                    url: videoUrl,
                    title: lecture.title,
                    type: 'video'
                });
            } else if (youtubeInfo.type === 'playlist') {
                // For playlists
                setCurrentVideo({
                    id: youtubeInfo.id,
                    url: videoUrl,
                    title: lecture.title,
                    type: 'playlist'
                });
            }
        } else {
            console.error("Could not extract YouTube info from URL:", videoUrl);
        }
    };

    // Toggle language preference
    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === "english" ? "hindi" : "english");
    };

    // Close the video player
    const closeVideo = (e) => {
        if (e) e.stopPropagation();
        setCurrentVideo(null);
    };

    // Handler for clicking outside the modal content to close
    const handleOutsideClick = (e) => {
        if (e.target.className === 'video-modal') {
            closeVideo();
        }
    };

    // Fixed isLectureCompleted function with proper type checking
    const isLectureCompleted = (lectureId, stepId) => {
        // Check if completedLectures exists
        if (!completedLectures) return false;
        
        // Check if stepId exists in completedLectures and is an object
        if (!completedLectures[stepId] || typeof completedLectures[stepId] !== 'object') {
            return false;
        }
        
        // Check if lectureId exists in completedLectures[stepId]
        return !!completedLectures[stepId][lectureId];
    };

    // Fixed toggleLectureCompletion function with proper object initialization
    const toggleLectureCompletion = async (lectureId, stepId, isCompleted) => {
        try {
            setIsSaving(true);

            // Update the state with the new completion status
            setCompletedLectures(prevState => {
                const newState = { ...prevState };
                
                // Ensure stepId exists and is an object
                if (!newState[stepId] || typeof newState[stepId] !== 'object') {
                    newState[stepId] = {};
                }
                
                // Set the completion status
                newState[stepId][lectureId] = isCompleted;
                
                return newState;
            });

            // Send update to the backend
            const completionData = {
                userId,
                roadmapId: roadmap.id,
                stepId,
                lectureId,
                isCompleted
            };
            await axios.post('http://localhost:4001/api/users/progress/update', completionData);
        } catch (error) {
            console.error("Failed to update completion status:", error);
        } finally {
            setIsSaving(false);
        }
    };

    // Calculate completion statistics for a specific step
    const calculateStepStats = (stepId) => {
        const step = roadmap.steps.find(s => s.id === stepId);
        if (!step) return { completed: 0, total: 0 };

        let completed = 0;
        let total = 0;

        step.lectures.forEach(lecture => {
            total += 1;
            if (isLectureCompleted(lecture.id, stepId)) {
                completed += 1;
            }
        });

        return { completed, total };
    };

    // Calculate overall roadmap completion statistics
    const calculateRoadmapStats = () => {
        let completed = 0;
        let total = 0;

        roadmap.steps.forEach(step => {
            step.lectures.forEach(lecture => {
                total += 1;
                if (isLectureCompleted(lecture.id, step.id)) {
                    completed += 1;
                }
            });
        });

        return { completed, total };
    };

    // Get roadmap stats
    const roadmapStats = calculateRoadmapStats();

    return (
        <div className="roadmap-accordion">
            {/* Video Player Modal */}
            {currentVideo && (
                <div
                    className="video-modal"
                    onClick={handleOutsideClick}
                >
                    <div className="video-modal-content">
                        <div className="video-modal-header">
                            <div className="video-title">{currentVideo.title || "Video"}</div>
                            <div className="video-controls">
                                <a
                                    href={currentVideo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="youtube-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Watch on YouTube
                                </a>
                                <button className="close-btn" onClick={closeVideo}>×</button>
                            </div>
                        </div>
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="450"
                                src={currentVideo.type === 'playlist'
                                    ? `https://www.youtube.com/embed/videoseries?list=${currentVideo.id}&autoplay=1`
                                    : `https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            <div className="roadmap-title">
                <h2>{roadmap.title}</h2>
                <div className="progress-text">
                    {roadmapStats.completed}/{roadmapStats.total} completed
                </div>
                <div className="language-toggle">
                    <button
                        onClick={toggleLanguage}
                        className={`language-btn ${language === "english" ? "active" : ""}`}
                    >
                        {language === "english" ? "🇬🇧 English" : "🇮🇳 Hindi"}
                    </button>
                </div>
            </div>
            {roadmap.steps && roadmap.steps.map((step) => {
                const stepStats = calculateStepStats(step.id);

                return (
                    <div className="step-container" key={step.id}>
                        <div
                            className={`step-header ${expandedSteps[step.id] ? 'active' : ''}`}
                            onClick={() => toggleStep(step.id)}
                        >
                            <div className="step-number">
                                <div className="number">{step.number}</div>
                                <div className="step-title">{step.title}</div>
                            </div>
                            <div className="step-progress">{stepStats.completed}/{stepStats.total}</div>
                        </div>
                        <div className={`step-content ${expandedSteps[step.id] ? 'active' : ''}`}>
                            <ul className="lecture-list">
                                {step.lectures && step.lectures.map((lecture) => {
                                    const lectureCompleted = isLectureCompleted(lecture.id, step.id);

                                    return (
                                        <li key={lecture.id} className={`lecture-item ${lectureCompleted ? 'completed' : ''}`}>
                                            <div
                                                className={`lecture-icon ${lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0 ? 'has-video' : 'no-video'}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    if (lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0) {
                                                        handleVideoClick(lecture);
                                                    } else {
                                                        console.warn("No video available for this lecture in", language);
                                                    }
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            </div>
                                            <div className="lecture-info">
                                                <div className="lecture-title">{lecture.title}</div>
                                                <div className="lecture-meta">
                                                    <span className="lecture-duration">{lecture.duration}</span>
                                                    {lecture.resources && lecture.resources[language] && lecture.resources[language].length > 0 && (
                                                        <span className="lecture-resources">
                                                            ({lecture.resources[language].length} resources)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="lecture-completion-checkbox" onClick={(e) => e.stopPropagation()}>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox-${roadmap.id}-${step.id}-${lecture.id}`}
                                                    checked={lectureCompleted}
                                                    onChange={(e) => toggleLectureCompletion(lecture.id, step.id, e.target.checked)}
                                                    disabled={isSaving}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                                <label
                                                    htmlFor={`checkbox-${roadmap.id}-${step.id}-${lecture.id}`}
                                                    className="checkmark-container"
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <span className={`checkmark ${lectureCompleted ? 'checked' : ''}`}></span>
                                                </label>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}

            {/* Saving indicator */}
            {isSaving && (
                <div className="saving-indicator">
                    Saving progress...
                </div>
            )}
        </div>
    );
};

export default RoadmapItem;