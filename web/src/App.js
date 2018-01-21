import React, { Component, Fragment } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Subscribe from './components/Subscribe';
import SubscribePopUp from './components/SubscribePopUp';
import FindOutMoreButton from './components/FindOutMoreButton';
import PrimaryNav from './components/PrimaryNav'
import 'bootstrap/dist/css/bootstrap.css'

import { createSubscribers } from './api/subscribers'

class App extends Component {
  state = {
    showMenu: false,
    showSubscribeBox: false,
    // error: null,
    // decodedToken: getDecodedToken(), // Restore the previous signed in data
    // contents: null
  }
  // Event handler for menu toggle
  onMenuToggle = () => {
    const showMenu = this.state.showMenu
    this.setState({ showMenu: !showMenu })
  }
  onSubscribeToggle = () => {
    console.log('this worked')
    const { showSubscribeBox } = this.state
    this.setState({ showSubscribeBox: !showSubscribeBox })
  }
  // Event handlers for Dashboard
  onAddContent = () => {
    console.log('Add Content button clicked')
  }
  onViewEditContent = () => {
    console.log('ViewEditContent button clicked')
  }
  onEmailSubscribers = () => {
    console.log('EmailSubscribers button clicked')
  }
  onBlogArticle = () => {
    console.log('BlogArticle button clicked')
  }

  // Event handlers for Add Content Screen
  onPreview = () => {
    console.log('Preview button clicked')
  }
  onSave = () => {
    console.log('Save button clicked')
  }
  onCreateSubscriber = (email) => {
    createSubscribers(email)
      .then((newSubscriber) => {
        alert('You have successfully subscribed!')
        console.log('new subcriber', newSubscriber)
        this.onSubscribeToggle()
      })
      .catch((error) => {
        alert('Oops, something went wrong!\n\nEither you have already subscribed or an error has occurred.')
        console.log('new subscriber error', error)
      })
  }

  render() {
    const { showMenu, error, decodedToken, contents, showSubscribeBox } = this.state
    const signedIn = !!decodedToken
    return (
      <div className="App Site">
        <div className="Site-content">
          <PrimaryNav />
          <div className="main">
            <LandingPage />
          </div>
        </div>

        <SubscribePopUp
          popupClassWidth={showSubscribeBox ? ('w-100') : null}
          onClickSubscribe={this.onSubscribeToggle}
          onSubmitEmail={this.onCreateSubscriber}
        />
      </div >
    );
  }
}

export default App;
