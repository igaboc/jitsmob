import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import AddContentForm from './components/AddContentForm'
import MyContent from './components/MyContent'

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
      <div className="App">

        <SignInForm
          screenName={'Admin Sign In'}
          onSignIn={this.onSignIn}
        />

        <Dashboard
          screenName={'Dashboard'}
          subscriberCount={'0'}
          onAddContent={this.onAddContent}
          onViewEditContent={this.onViewEditContent}
          onEmailSubscribers={this.onEmailSubscribers}
          onBlogArticle={this.onBlogArticle}
        />

        <AddContentForm
          screenName={'Add Content'}
          onPreview={this.onPreview}
          onSave={this.onSave}
        />

        <MyContent
          screenName={'My Content'}
        />
      </div>
    );
  }
}

export default App;
