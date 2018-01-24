import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage';
import Subscribe from './components/Subscribe';
import SubscribePopUp from './components/SubscribePopUp';
import FindOutMoreButton from './components/FindOutMoreButton';
import PrimaryNav from './components/PrimaryNav'
import ContentLibrary from './components/ContentLibrary'
import MyWorkout from './components/MyWorkout'
import ShowPage from './components/ShowPage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { signIn, signOutNow, userSignIn } from './api/auth'
import { getDecodedToken } from './api/token'
import { listContents, addContents, updateContent, deleteContent } from './api/contents'
import { createSubscriber } from './api/subscribers'
import { listWorkout, addToWorkout, removeFromWorkout } from './api/userworkout'
import { viewBearer, setTokenForAdmin, setTokenForUser } from'./api/init'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showFilter: true,
      showSubscribeBox: false,
      error: null,
      userDecodedToken: getDecodedToken('userToken'),
      decodedToken: getDecodedToken('adminToken'), // Restore the previous signed in data
      contents: null,
      catFilter: [],
      bodyFilter: [],
      editedContentID: null,
      userworkout: null,
      // State for pagination of content library
      currentPage: 1,
      contentPerPage: 9,
      // State for my (logged in users') workouts
      myWorkout: null
    };
    this.handleClick = this.handleClick.bind(this)
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

  onSignOut = (key) => {
    console.log(key)
    signOutNow(key)
    this.setState({
      decodedToken: null,
      userDecodedToken: null
    })
  }

  onUserSignIn = ({ email, password }) => {
    userSignIn({ email, password })
      .then((userDecodedToken) => {
        this.setState({ userDecodedToken })
        console.log('User decoded token: ', userDecodedToken)
      })
      .catch((error) => {
        this.setState({ error })
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
  onBeginEditContent = (id) => {
    console.log(id)
    this.setState({ editedContentID: id })
  }
  onUpdateEditedContent = (contentData) => {
    const { editedContentID } = this.state
    updateContent(contentData, editedContentID)
      .then((updatedContent) => {
        this.setState((prevState) => {
          // Replace in existing products array
          const updatedContents = prevState.contents.contents.map((content) => {
            if (content._id === updatedContent._id) {
              return updatedContent
            }
            else {
              return content
            }
          })
          return {
            contents: { contents: updatedContents },
            editedContentID: null
          }
        })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  onDeleteContent = (id) => {
    deleteContent(id)
      .then(() => {
        this.load()
      })
      .catch((error) => {
        this.setState({ error })
      })
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
  onWishListAdd = (id) => {
    addToWorkout(id)
      .then((userworkout) =>
        // this.setState({ userworkout })
        this.load()
    )
      .catch((error) => {
        console.log('Error received when adding content', error)
      })
  }
  // Event handler for pagination of content library
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  //Event handler for adding contents to users workouts

  removeFromWorkout = (id) => {
    removeFromWorkout(id)
      .then((myWorkout) => {
        this.setState({ myWorkout })
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  render() {
    const { userworkout, showMenu, showSubscribeBox, decodedToken, userDecodedToken, contents, catFilter, bodyFilter, showFilter, editedContentID, currentPage, contentPerPage } = this.state
    const adminSignedIn = !!decodedToken
    const userSignedIn = !!userDecodedToken
    
    if (adminSignedIn) {
      setTokenForAdmin()
    }
    if (userSignedIn) {
      setTokenForUser()
    }

    return (
      <div className="App">

        <Router>
          <Fragment>
            <PrimaryNav
              className=""
              menuClassWidth={showMenu ? 'w-100' : 'null'}
              onMenuClick={this.onMenuToggle}
              onClickSubscribe={this.onSubscribeToggle}
              userSignIn={userSignedIn}
              onSignOut={(key) => this.onSignOut(key)}
            />
            <Switch>
              <Route path='/' exact render={() => (
                <LandingPage
                  onClickSubscribe={this.onSubscribeToggle}
                />
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
                      contents={ contents && contents.contents }
                      onEditToApp={ this.onBeginEditContent }
                      editedContentID={ editedContentID }
                      onEditSave={this.onUpdateEditedContent}
                      onDeleteContent={this.onDeleteContent}
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
                userSignedIn ? (
                  <Redirect to="/" />
                ) : (
                  <SignInForm
                    onUserSignIn={ this.onUserSignIn }
                    admin={false}
                  />
                )
                
              )} />
              <Route path='/myworkout' render={() => (
                userSignedIn ? (
                  <MyWorkout 
                    userworkout= {userworkout}
                    contents= {contents} 
                    removetoApp={this.removefromWorkout}
                  />
                ) : (
                  <SignInForm
                  onUserSignIn={this.onUserSignIn}
                  onSignIn={this.onSignIn}
                  admin={ false }
                />
                )

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
                      currentPage={currentPage}
                      contentPerPage={contentPerPage}
                      onHandleClick={this.handleClick}
                      userworkout={ userworkout && userworkout}
                      onWishListAdd={this.onWishListAdd}
                      userSignedIn={ userSignedIn }
                    />
                  }
                </Fragment>
              )} />

              <Route path='/showpage/:id' render={({ match }) => (
                <Fragment>
                  {contents &&
                    <ShowPage
                      screenName={'Show Page'}
                      contents={contents && contents}
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
    
    listWorkout()
      .then((userworkout) => {
        console.log('workout array', userworkout)
        this.setState({ userworkout })
      })
      .catch(saveError)

  //   const { userDecodedToken } = this.state
  //   const userSignedIn = !!userDecodedToken

  //   if (userSignedIn) {
  //     // Load only for signed in users
  //     listMyWorkout()
  //       .then((myWorkout) => {
  //         this.setState({ myWorkout })
  //       })
  //       .catch(saveError)
  //   }
  //   else {
  //     // Clear sign-in-only data
  //     this.setState({
  //       myWorkout: null
  //     })
  //   }
  }

  // When this App first appears on screen
  componentDidMount() {
    this.load()
    // initGA()
    // logPageView()
    
  }

  // When state changes
  componentDidUpdate(prevProps, prevState) {
    // If just signed in, signed up, or signed out,
    // then the token will have changed
    if (this.state.decodedToken !== prevState.decodedToken || this.state.userDecodedToken !== prevState.userDecodedToken) {
      this.load()
    }
    
  }
}

export default App;
