Bible Companion – Chapter by Chapter Study for Teens 📖
A mobile-friendly React web app that helps teens explore the Bible chapter-by-chapter in an easy, relatable way.
Features

📚 Complete Bible books (Genesis → Revelation)
🔍 Chapter-by-chapter navigation
🤖 AI-powered explanations via OpenRouter API
📱 Mobile-responsive design
🎨 Clean, modern UI with soft colors
🔒 Secure local storage for API keys

Project Structure
bible-companion/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ApiKeyModal.jsx
│   │   ├── ApiKeyModal.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── SelectionCard.jsx
│   │   ├── SelectionCard.css
│   │   ├── LoadingState.jsx
│   │   ├── LoadingState.css
│   │   ├── ErrorState.jsx
│   │   ├── ErrorState.css
│   │   ├── Explanation.jsx
│   │   └── Explanation.css
│   ├── data/
│   │   └── bibleBooks.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
Installation

Clone the repository:

bashgit clone <your-repo-url>
cd bible-companion

Install dependencies:

bashnpm install

Start the development server:

bashnpm start

Open http://localhost:3000 to view it in your browser.

Setup
Getting an OpenRouter API Key

Visit OpenRouter.ai
Sign up for an account
Navigate to the API Keys section
Generate a new API key
Copy the key and paste it into the app when prompted

Usage

Enter API Key: On first launch, you'll be prompted to enter your OpenRouter API key
Select a Book: Choose from any book of the Bible (Genesis through Revelation)
Select a Chapter: Pick a chapter number from the selected book
View Explanation: The app will automatically fetch an AI-generated explanation tailored for teens

Customization
Changing the AI Model
To use a different AI model, edit the fetchExplanation function in src/App.jsx:
javascriptmodel: "gpt-3.5-turbo", // Change this to another model like "gpt-4" or "claude-2"
Available models can be found in the OpenRouter documentation.
Modifying the System Prompt
To customize how the AI explains Bible passages, edit the system message in src/App.jsx:
javascript{
  role: "system",
  content: "Your custom instructions here..."
}
Technologies Used

React 18
CSS3
OpenRouter API
localStorage for API key storage

Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Mobile browsers (iOS Safari, Chrome Mobile)

License
MIT License - feel free to use this project for personal or educational purposes.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
Support
If you encounter any issues or have questions, please open an issue on GitHub.