import "../styles/mcq.css";
import React, { useState, useEffect } from 'react';

const MCQPractice = ({ mcqs }) => {
    const [activeSubject, setActiveSubject] = useState("DSA");
    const [searchTerm, setSearchTerm] = useState("");
    const [showAnswer, setShowAnswer] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;

    // Add a check to ensure mcqs is provided and has the expected format
    const subjects = mcqs ? Object.keys(mcqs) : [];
    // If no subjects are available, set a default empty array for the active subject
    useEffect(() => {
        if (subjects.length > 0 && !mcqs[activeSubject]) {
            setActiveSubject(subjects[0]);
        }
    }, [mcqs, activeSubject, subjects]);

    // Filter questions based on search term
    const filteredQuestions = searchTerm
        ? (mcqs ? Object.values(mcqs).flat().filter(q =>
            q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.id.toLowerCase().includes(searchTerm.toLowerCase())
        ) : [])
        : (mcqs && mcqs[activeSubject] ? mcqs[activeSubject] : []);

    // Calculate pagination
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);
    const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleAnswer = (questionId) => {
        setShowAnswer(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const handleOptionSelect = (questionId, selectedOption) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption
        }));
    };

    const resetFilters = () => {
        setSearchTerm("");
        setShowAnswer({});
        setSelectedAnswers({});
        setCurrentPage(1);
    };

    // Check if an answer is correct
    const isCorrectAnswer = (question, selectedOption) => {
        return question.correctAnswer === selectedOption;
    };

    // Calculate total questions for progress tracking
    const totalQuestions = mcqs ? Object.values(mcqs).flat().length : 0;

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>MCQ Practice Hub</h1>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search questions or IDs..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button className="reset-button" onClick={resetFilters}>
                            Reset
                        </button>
                    )}
                </div>
            </header>

            <div className="content-wrapper">
                <nav className="subjects-nav">
                    <h2>Subjects</h2>
                    {subjects.length > 0 ? (
                        <ul className="subject-list">
                            {subjects.map(subject => (
                                <li
                                    key={subject}
                                    className={activeSubject === subject ? "active" : ""}
                                    onClick={() => {
                                        setActiveSubject(subject);
                                        setSearchTerm("");
                                        setCurrentPage(1);
                                    }}
                                >
                                    {subject}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No subjects available</p>
                    )}
                    <div className="stats-container">
                        <h3>Your Progress</h3>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${totalQuestions > 0 ? (Object.keys(selectedAnswers).length / totalQuestions * 100) : 0}%`
                                }}
                            ></div>
                        </div>
                        <p>{Object.keys(selectedAnswers).length} of {totalQuestions} answered</p>
                    </div>
                </nav>

                <main className="question-area">
                    <h2>{searchTerm ? "Search Results" : activeSubject + " Questions"}</h2>

                    {currentQuestions.length > 0 ? (
                        <>
                            <div className="questions-container">
                                {currentQuestions.map((question, index) => (
                                    <div
                                        key={question.id}
                                        className={`question-card ${showAnswer[question.id] ? "expanded" : ""}`}
                                    >
                                        <div className="question-header">
                                            <span className="question-id">{question.id}</span>
                                            <span className="question-number">Q{indexOfFirstQuestion + index + 1}</span>
                                        </div>

                                        <h3 className="question-text">{question.questionText}</h3>

                                        <ul className="options-list">
                                            {question.options.map((option, optIndex) => (
                                                <li
                                                    key={optIndex}
                                                    className={`
                            option-item 
                            ${selectedAnswers[question.id] === option ? "selected" : ""}
                            ${showAnswer[question.id] && question.correctAnswer === option ? "correct" : ""}
                            ${showAnswer[question.id] && selectedAnswers[question.id] === option &&
                                                            !isCorrectAnswer(question, option) ? "incorrect" : ""}
                          `}
                                                    onClick={() => handleOptionSelect(question.id, option)}
                                                >
                                                    <span className="option-marker">{String.fromCharCode(65 + optIndex)}</span>
                                                    <span className="option-text">{option}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="question-footer">
                                            <button
                                                className="check-answer-btn"
                                                onClick={() => toggleAnswer(question.id)}
                                            >
                                                {showAnswer[question.id] ? "Hide Answer" : "Check Answer"}
                                            </button>
                                        </div>

                                        {showAnswer[question.id] && (
                                            <div className="answer-explanation">
                                                <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
                                                <p><strong>Explanation:</strong> {question.explanation}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="pagination">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="page-btn"
                                    >
                                        &laquo;
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="page-btn"
                                    >
                                        &raquo;
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="no-results">
                            <p>No questions found. Try a different search term or subject.</p>
                            <button className="reset-button" onClick={resetFilters}>
                                Reset Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MCQPractice;