const Progress = require("../models/User_Progress");

// Save Video Progress
const saveVideoProgress = async (req, res) => {
    const { userId, videoId, title, watchedTime, totalDuration } = req.body;

    try {
        let progress = await Progress.findOne({ userId });

        if (!progress) {
            progress = new Progress({ userId, videos: [], mcqs: [] });
        }

        const existingVideo = progress.videos.find(v => v.videoId === videoId);
        if (existingVideo) {
            existingVideo.watchedTime = Math.max(existingVideo.watchedTime, watchedTime);
        } else {
            progress.videos.push({ videoId, title, watchedTime, totalDuration });
        }

        await progress.save();
        res.json({ message: "Video progress saved!", progress });
    } catch (error) {
        res.status(500).json({ message: "Error saving video progress", error });
    }
};

// Save MCQ Progress
const saveMcqProgress = async (req, res) => {
    const { userId, questionId, questionText, isCorrect } = req.body;

    try {
        let progress = await Progress.findOne({ userId });

        if (!progress) {
            progress = new Progress({ userId, videos: [], mcqs: [] });
        }

        progress.mcqs.push({ questionId, questionText, isCorrect });

        await progress.save();
        res.json({ message: "MCQ progress saved!", progress });
    } catch (error) {
        res.status(500).json({ message: "Error saving MCQ progress", error });
    }
};

// Get Overall Progress
const getProgress = async (req, res) => {
    const { userId } = req.params;

    try {
        const progress = await Progress.findOne({ userId });
        if (!progress) return res.status(404).json({ message: "No progress found" });

        // Calculate video progress %
        let videoProgress = 0;
        if (progress.videos.length > 0) {
            const totalWatchTime = progress.videos.reduce((sum, v) => sum + v.watchedTime, 0);
            const totalDuration = progress.videos.reduce((sum, v) => sum + v.totalDuration, 0);
            videoProgress = (totalWatchTime / totalDuration) * 100;
        }

        // Calculate MCQ progress %
        let mcqProgress = 0;
        if (progress.mcqs.length > 0) {
            const correctAnswers = progress.mcqs.filter(q => q.isCorrect).length;
            mcqProgress = (correctAnswers / progress.mcqs.length) * 100;
        }

        // Final overall progress (50% weightage each)
        progress.overallProgress = (videoProgress * 0.5) + (mcqProgress * 0.5);

        await progress.save();
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: "Error fetching progress", error });
    }
};

module.exports = { saveVideoProgress, saveMcqProgress, getProgress };
