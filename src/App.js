import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="animation-one">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="animation-two-container">
        <div className="center">
          <div className="arrow"></div>
        </div>
        <div className="text">Scroll Down</div>
      </div>
      <div className="animation-three-container">
        <ul className="bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
