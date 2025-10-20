import { useState, useEffect } from "react";
import logo from "./logo.gif";
import logo2 from "./logo.png";
import "./App.css";
import About from "./About";

function App() {
  const [isDone, setIsDone] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => setAnimate(true);

  useEffect(() => {
    setTimeout(() => setIsDone(true), 2500);
  });

  return (
    <div>
      {animate ? (
        <About></About>
      ) : (
        <div className="header" onClick={handleClick}>
          <img src={isDone ? logo2 : logo} className="App-logo" alt="logo" />
          <q>
            We connect technology with business needs to create software that
            truly delivers.
          </q>
        </div>
      )}
    </div>
  );
}

export default App;
