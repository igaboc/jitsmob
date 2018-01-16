import React, { Component, Fragment } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import FindOutMoreButton from './components/FindOutMoreButton';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  /*
  // Event handlers for signing in and out
  onSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((decodedToken) => {
        this.setState({ decodedToken })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  onSignOut = () => {
    signOutNow()
    this.setState({ decodedToken: null })
  }
  */

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

  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className='temp-header'>
            <h1>Header</h1>
          </div>
          <div className="main">
            <LandingPage />
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
