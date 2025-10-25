// components/ErrorState.jsx
import React from "react";
import "./ErrorState.css";

function ErrorState({ error }) {
  return (
    <div className="error-container">
      <p className="error-text">⚠️ {error}</p>
    </div>
  );
}

export default ErrorState;