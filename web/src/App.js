import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import MyContent from './components/MyContent'
import LandingPage from './components/LandingPage';
import Subscribe from './components/Subscribe';
import SubscribePopUp from './components/SubscribePopUp';
import FindOutMoreButton from './components/FindOutMoreButton';
import PrimaryNav from './components/PrimaryNav'
import ContentLibrary from './components/ContentLibrary'
import ShowPage from './components/ShowPage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { signIn, signOutNow } from './api/auth'
import { getDecodedToken } from './api/token'
import { listContents, addContents } from './api/contents'
import { createSubscriber } from './api/subscribers'

class App extends Component {
  state = {
    showMenu: false,
    showFilter: true,
    showSubscribeBox: false,
    // error: null,
    decodedToken: getDecodedToken(), // Restore the previous signed in data
    contents: null,
    catFilter: [],
    bodyFilter: [],
  }

  //Event handlers for signing in and out
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
    this.setState({
      decodedToken: null,
    })
  }

  // Event handler for menu toggle
  onMenuToggle = () => {
    const showMenu = this.state.showMenu
    this.setState({ showMenu: !showMenu })
  }
  // Event handler for category filter
  onCatFilterEvent = (filterWord) => {
    const { catFilter } = this.state
    if (!catFilter.includes(filterWord)) {
      this.setState({
        catFilter: [...catFilter, filterWord]
      })
    }
    else {
      this.setState({
        catFilter: catFilter.filter(f => f !== filterWord)
      })
    }
  }
  // Event Handler for body filter
  onBodyFilterEvent = (filterWord) => {
    const { bodyFilter } = this.state
    if (!bodyFilter.includes(filterWord)) {
      this.setState({
        bodyFilter: [...bodyFilter, filterWord]
      })
    }
    else {
      this.setState({
        bodyFilter: bodyFilter.filter(f => f !== filterWord)
      })
    }
  }
  // Event handler for filter toggle
  onFilterToggle = () => {
    const showFilter = this.state.showFilter
    this.setState({ showFilter: !showFilter })
  }
  // Set State to show subscribe box
  onSubscribeToggle = () => {
    console.log('this worked')
    const { showSubscribeBox } = this.state
    this.setState({ showSubscribeBox: !showSubscribeBox })
  }
  // Create subscribers
  onCreateSubscriber = (email) => {
    createSubscriber(email)
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

  // Event handlers for Dashboard
  onAddContent = (contentData) => {
    addContents(contentData)
      .then((contentData) => {
        console.log('Successfully added new content to database', contentData)
      })
      .catch((error) => {
        console.log('Error received when adding content', error)
      })
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
    createSubscriber(email)
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
    const { showMenu, showSubscribeBox, decodedToken, contents, catFilter, bodyFilter, showFilter } = this.state
    const adminSignedIn = !!decodedToken

    return (
      <div className="App">

        <Router>
          <Fragment>
            <PrimaryNav
              className=""
              menuClassWidth={showMenu ? 'w-100' : 'null'}
              onMenuClick={this.onMenuToggle}
              onClickSubscribe={this.onSubscribeToggle}
            />
            <Switch>
              <Route path='/' exact render={() => (
                <LandingPage />
              )} />

              <Route path='/admin' render={({ match }) => (

                adminSignedIn ? (
                  <Fragment>
                    <Dashboard
                      url={match.url}
                      screenName={'Dashboard'}
                      subscriberCount={'0'}
                      onSignOut={this.onSignOut}
                      onAddContent={this.onAddContent}
                      onViewEditContent={this.onViewEditContent}
                      onEmailSubscribers={this.onEmailSubscribers}
                      onBlogArticle={this.onBlogArticle}
                    />

                  </Fragment>
                ) : (
                    <SignInForm
                      onSignIn={this.onSignIn}
                      admin={true}
                    />
                  )

              )} />

              <Route path='/signin' exact render={() => (
                <SignInForm
                  screenName={'Admin Sign In'}
                  onSignIn={this.onSignIn}
                />
              )} />

              <Route path='/mycontent' exact render={() => (
                <Fragment>
                  {contents &&
                    <MyContent
                      screenName={'My Content'}
                      contents={contents}
                    />
                  }
                </Fragment>
              )} />

              <Route path='/exercises' exact render={() => (
                <Fragment>
                  {contents &&
                    <ContentLibrary
                      screenName={'Content Library'}
                      contents={contents["contents"]}
                      showFilter={showFilter}
                      filterToggleToApp={this.onFilterToggle}
                      catFilter={catFilter}
                      catFilterToApp={(word) => {
                        this.onCatFilterEvent(word)
                      }}
                      bodyFilter={bodyFilter}
                      bodyFilterToApp={(word) => {
                        this.onBodyFilterEvent(word)
                      }}
                    />
                  }
                </Fragment>
              )} />

              <Route path='/showpage/:id' render={({ match }) => (
                <Fragment>
                  {contents &&
                    <ShowPage
                      screenName={'Show Page'}
                      contents={contents}
                      id={match.params.id}
                    />
                  }
                </Fragment>
              )} />

            </Switch>
          </Fragment>
        </Router>
        <SubscribePopUp
          popupClassWidth={showSubscribeBox ? ('w-100') : null}
          onClickSubscribe={this.onSubscribeToggle}
          onSubmitEmail={this.onCreateSubscriber}
        />
        <Footer 
          onClickSubscribe={this.onSubscribeToggle}
        />
      </div>
    );
  }

  load() {
    const saveError = (error) => {
      this.setState({ error })
    }
    //Load for everyone
    listContents()
      .then((contents) => {
        this.setState({ contents })
      })
      .catch(saveError)
  }

  // When this App first appears on screen
  componentDidMount() {
    this.load()
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    // If just signed in, signed up, or signed out,
    // then the token will have changed
    if (this.state.decodedToken !== prevState.decodedToken) {
      this.load()
    }
  }
}

export default App;
