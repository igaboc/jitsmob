import React, { Component, Fragment } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <td>Header/Navbar</td>
          <td>Jitsmob</td>
        </Fragment>

        <LandingPage />

        <Fragment>
          <div>
            <h2>Footer (Subcribe component, fixed scrolling)</h2>
          </div>
        </Fragment>

      </div >
    );
  }
}

export default App;
