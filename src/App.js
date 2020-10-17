import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../src/components/Nav";
// import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';


function App() {
  return (
    <>
    <Navigation/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
      <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button id="FourSteps" variant="secondary" size="lg" block>
    Block level button
  </Button>
    </>
  );
}

export default App;
