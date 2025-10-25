// components/Header.jsx
import React from "react";
import "./Header.css";

function Header({ hasApiKey, onChangeApiKey }) {
  return (
    <div className="header-container">
      <h1 className="header-title">Bible Companion 📖</h1>
      <p className="header-subtitle">Chapter by Chapter Study for Teens</p>
      {hasApiKey && (
        <button
          onClick={onChangeApiKey}
          className="change-key-button"
        >
          Change API Key
        </button>
      )}
    </div>
  );
}

export default Header;