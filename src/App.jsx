import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import languages from "../languages.js";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn Web development</h1>

      {/* lista bottoni */}
      <div>
        {languages.map(({ id, title }) => (
          <button key={id}>{title}</button>
        ))}
      </div>

      {/* testo */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit earum
        mollitia eum sequi? Doloribus in nisi, optio incidunt modi minima alias
        exercitationem accusamus vero possimus eos vitae reiciendis aut illum?
      </p>
    </>
  );
}

export default App;
