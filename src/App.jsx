import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import languages from "../languages.js";
import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  return (
    <>
      <h1>Learn Web development</h1>

      {/* lista bottoni */}
      <div>
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language)}
          >
            {language.title}
          </button>
        ))}
      </div>

      {/* testo */}
      {selectedLanguage && (
        <div>
          <h2>{selectedLanguage.title}</h2>
          <p>{selectedLanguage.description}</p>
        </div>
      )}
    </>
  );
}

export default App;
