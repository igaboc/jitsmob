import React, { Component, Fragment } from 'react';
import './App.css';
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import AddContentForm from './components/AddContentForm'
import Content from './components/Content'
import MyContent from './components/MyContent'
import LandingPage from './components/LandingPage';
import { signIn, signUp, signOutNow } from './api/auth'
import { getDecodedToken } from './api/token'
import { listContents } from './api/contents'

class App extends Component {
  state = {
    error: null,
    decodedToken: getDecodedToken(), // Restore the previous signed in data
    contents: null
  }
  
  // Event handlers for signing in and out
  onSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((decodedToken) => {
        this.setState({ decodedToken })
        console.log('Decoded token: ', decodedToken)
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  onSignOut = () => {
    signOutNow()
    this.setState({ decodedToken: null })
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

  render() {
    const { error, decodedToken, contents } = this.state
    const signedIn = !!decodedToken
    
    return (
      <div className="App">

        <Fragment>
          <td>Header/Navbar</td>
          <td>Jitsmob</td>
        </Fragment>

        <LandingPage />

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
          contents={ listContents()/*contents ? contents : []*/ }
        />
      
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

  load() {
    const saveError = (error) => {
      this.setState({ error })
    }

    // Load for everyone
    listContents()
      .then((contents) => {
        this.setState({ contents })
        console.log(contents)
      })
      .catch(saveError)

    const { decodedToken } = this.state
    const signedIn = !!decodedToken
  }
  
  // When this App first appears on screen
  componentDidMount() {
    this.load()
  }
}

export default App;
