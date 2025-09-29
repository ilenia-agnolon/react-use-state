import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import languages from "../languages.js";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  return (
    <>
      {/* macro-container */}
      <div className="container">
        {/* titolo */}
        <h1 className="mb-4 text-start bg-light">Learn Web development</h1>

        {/* lista bottoni */}
        <div className="d-flex gap-2 mb-4">
          {languages.map((language) => (
            <button
              key={language.id}
              type="button"
              className="btn btn-primary m-1"
              onClick={() => setSelectedLanguage(language)}
            >
              {language.title}
            </button>
          ))}
        </div>

        {/* testo */}
        {selectedLanguage && (
          <div className="card text-start">
            <h4 className="card-title">{selectedLanguage.title}</h4>
            <p className="card-text">{selectedLanguage.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
