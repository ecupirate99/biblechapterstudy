// components/Explanation.jsx
import React from "react";
import "./Explanation.css";

function Explanation({ book, chapter, explanation }) {
  return (
    <div className="explanation-container">
      <h2 className="explanation-title">
        {book} Chapter {chapter}
      </h2>
      <div className="explanation-text">
        {explanation}
      </div>
    </div>
  );
}

export default Explanation;