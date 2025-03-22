import React, { useState } from 'react';

const NotesSection = ({ notes }) => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Group notes by year
    const notesByYear = {
        '1st Year': [],
        '2nd Year': [],
        '3rd Year': [],
        '4th Year': []
    };

    notes.forEach(note => {
        // Assuming each note has a 'year' property
        if (note.year) {
            notesByYear[note.year].push(note);
        }
    });

    // Filter notes based on search query
    const filterNotes = (notesArray) => {
        if (!searchQuery) return notesArray;

        return notesArray.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (note.subjectCode && note.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    };

    // Open drive link in new tab
    const openDriveLink = (url) => {
        window.open(url, '_blank');
    };

    // Render notes for selected year or filtered notes
    const renderNotes = () => {
        if (searchQuery) {
            // Show all notes that match the search query
            const allFilteredNotes = Object.values(notesByYear)
                .flat()
                .filter(note =>
                    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (note.subjectCode && note.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()))
                );

            return (
                <div className="search-results">
                    <h3>Search Results for "{searchQuery}"</h3>
                    {allFilteredNotes.length > 0 ? (
                        <div className="notes-grid">
                            {allFilteredNotes.map((note, index) => renderNoteCard(note, index))}
                        </div>
                    ) : (
                        <p>No notes found matching your search.</p>
                    )}
                </div>
            );
        }

        if (selectedYear) {
            // Show notes for the selected year
            const yearNotes = notesByYear[selectedYear];

            return (
                <div className="year-notes">
                    <h3>{selectedYear} Notes</h3>
                    {yearNotes.length > 0 ? (
                        <div className="notes-grid">
                            {yearNotes.map((note, index) => renderNoteCard(note, index))}
                        </div>
                    ) : (
                        <p>No notes available for {selectedYear}.</p>
                    )}
                </div>
            );
        }

        // Default: show year folders
        return (
            <div className="year-folders-grid">
                {Object.keys(notesByYear).map(year => (
                    <div
                        key={year}
                        className="year-folder"
                        onClick={() => setSelectedYear(year)}
                    >
                        <div className="folder-icon">
                            <i className="fas fa-folder"></i>
                        </div>
                        <h3>{year}</h3>
                        <p>{notesByYear[year].length} notes</p>
                    </div>
                ))}
            </div>
        );
    };

    // Render individual note card
    const renderNoteCard = (note, index) => (
        <div key={note.id || index} className="note-card">
            <h4>{note.title}</h4>
            {note.subjectCode && <span className="subject-code">{note.subjectCode}</span>}
            <div className="note-footer">
                <span className="date">{note.date}</span>
                <button
                    className="download-button"
                    onClick={() => openDriveLink(note.driveLink)}
                >
                    <i className="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    );

    return (
        <div className="notes-section">
            <div className="notes-header">
                <h2>Notes</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by subject code or title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {selectedYear && !searchQuery && (
                        <button className="back-button" onClick={() => setSelectedYear(null)}>
                            Back to All Years
                        </button>
                    )}
                </div>
            </div>

            <div className="notes-content">
                {renderNotes()}
            </div>
        </div>
    );
};

export default NotesSection;