// components/SelectionCard.jsx
import React from "react";
import "./SelectionCard.css";

function SelectionCard({
  selectedBook,
  selectedChapter,
  bibleBooks,
  chapterCount,
  onBookChange,
  onChapterChange
}) {
  return (
    <div className="selection-card">
      {/* Book Selection */}
      <div className="selection-group">
        <label className="selection-label">Select a Book</label>
        <select
          value={selectedBook}
          onChange={(e) => onBookChange(e.target.value)}
          className="selection-dropdown"
        >
          <option value="">Choose a book...</option>
          {bibleBooks.map((book) => (
            <option key={book.name} value={book.name}>
              {book.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chapter Selection */}
      {selectedBook && (
        <div className="selection-group">
          <label className="selection-label">Select a Chapter</label>
          <select
            value={selectedChapter}
            onChange={(e) => onChapterChange(e.target.value)}
            className="selection-dropdown"
          >
            <option value="">Choose a chapter...</option>
            {Array.from({ length: chapterCount }, (_, i) => i + 1).map((chapter) => (
              <option key={chapter} value={chapter}>
                Chapter {chapter}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default SelectionCard;