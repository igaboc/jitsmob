import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Header/Navbar</h1>

        {/* <LandingPage /> */}

        <h2>Footer (Subcribe component, fixed scrolling)</h2>

      </div >
    );
  }
}

export default App;
