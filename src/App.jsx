// App.jsx
import React, { useState, useEffect } from "react";
import { bibleBooks } from "./data/bibleBooks";
import ApiKeyModal from "./components/ApiKeyModal";
import Header from "./components/Header";
import SelectionCard from "./components/SelectionCard";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import Explanation from "./components/Explanation";
import "./App.css";

function App() {
  // State management
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 // Check for API key on mount
useEffect(() => {
  // First check for environment variable
  const envKey = process.env.REACT_APP_OPENROUTER_API_KEY;
  
  if (envKey) {
    setApiKey(envKey);
  } else {
    // Fall back to localStorage
    const storedKey = localStorage.getItem("openrouter_api_key");
    if (storedKey) {
      setApiKey(storedKey);
    } else {
      setShowApiKeyModal(true);
    }
  }
}, []);

  // Handle API key submission
  const handleSaveApiKey = (key) => {
    if (key.trim()) {
      localStorage.setItem("openrouter_api_key", key.trim());
      setApiKey(key.trim());
      setShowApiKeyModal(false);
    }
  };

  // Get number of chapters for selected book
  const getChapterCount = () => {
    const book = bibleBooks.find(b => b.name === selectedBook);
    return book ? book.chapters : 0;
  };

  // Reset chapter when book changes
  useEffect(() => {
    setSelectedChapter("");
    setExplanation("");
    setError("");
  }, [selectedBook]);

  // Fetch explanation when both book and chapter are selected
  useEffect(() => {
    if (selectedBook && selectedChapter && apiKey) {
      fetchExplanation();
    }
  }, [selectedBook, selectedChapter]);

  // API call to OpenRouter
  const fetchExplanation = async () => {
    setLoading(true);
    setError("");
    setExplanation("");

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // Change model here if needed
          messages: [
            {
              role: "system",
              content: "You are an experienced Sunday school teacher. Please walk through the selected Bible book and chapter with an 18-year-old audience in simple, relatable language. Highlight what the passage means, who it's about, and why it's important for understanding Jesus and faith today."
            },
            {
              role: "user",
              content: `Explain ${selectedBook} chapter ${selectedChapter}.`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch explanation. Please check your API key and try again.");
      }

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content || "No explanation available.";
      setExplanation(message);
    } catch (err) {
      setError(err.message || "There was a problem fetching the explanation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* API Key Modal */}
      {showApiKeyModal && (
        <ApiKeyModal
          onSave={handleSaveApiKey}
          onClose={() => setShowApiKeyModal(false)}
        />
      )}

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Header */}
        <Header
          hasApiKey={!!apiKey}
          onChangeApiKey={() => setShowApiKeyModal(true)}
        />

        {/* Selection Card */}
        <SelectionCard
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          bibleBooks={bibleBooks}
          chapterCount={getChapterCount()}
          onBookChange={setSelectedBook}
          onChapterChange={setSelectedChapter}
        />

        {/* Loading State */}
        {loading && <LoadingState />}

        {/* Error State */}
        {error && <ErrorState error={error} />}

        {/* Explanation */}
        {explanation && !loading && (
          <Explanation
            book={selectedBook}
            chapter={selectedChapter}
            explanation={explanation}
          />
        )}
      </div>
    </div>
  );
}

export default App;
