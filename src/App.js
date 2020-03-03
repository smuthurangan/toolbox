import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import toolbox from './toolbox-with-tools-vector-10867343.jpg'
import HomeComponent from "./HomeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="#"
          onClick={handleClick}
          rel="noopener noreferrer"
        >
            <img src={toolbox} className="App-logo" alt="logo"  />

        </a>
      </header>
    </div>
  );
}
function handleClick(e) {
    console.log("here");
    ReactDOM.render(<HomeComponent/>, document.getElementById('root'))
}

export default App;
