// components/ApiKeyModal.jsx
import React, { useState } from "react";
import "./ApiKeyModal.css";

function ApiKeyModal({ onSave, onClose }) {
  const [tempApiKey, setTempApiKey] = useState("");

  const handleSave = () => {
    if (tempApiKey.trim()) {
      onSave(tempApiKey);
      setTempApiKey("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Welcome! 📖</h2>
        <p className="modal-description">
          To get started, please enter your OpenRouter API key. Your key will be stored locally and securely.
        </p>
        <input
          type="password"
          value={tempApiKey}
          onChange={(e) => setTempApiKey(e.target.value)}
          placeholder="Enter your API key"
          className="modal-input"
          onKeyPress={(e) => e.key === "Enter" && handleSave()}
        />
        <button
          onClick={handleSave}
          className="modal-button"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default ApiKeyModal;