// components/LoadingState.jsx
import React from "react";
import "./LoadingState.css";

function LoadingState() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Generating explanation...</p>
    </div>
  );
}

export default LoadingState;