import React, { Component, Fragment } from 'react';
import './App.css';
import PrimaryNav from './components/PrimaryNav'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    showMenu: false,
  }
  
  onMenuToggle = () => {
    const showMenu = this.state.showMenu
    this.setState({ showMenu: !showMenu })
  }
  
  render() {
    const { showMenu } = this.state

    return (
      <div className="">
        <PrimaryNav 
          className="" 
          menuClassWidth={ showMenu ? 'w-100' : 'null' }
          onMenuClick= { this.onMenuToggle }
        />
      </div>
    );
  }
}

export default App;
