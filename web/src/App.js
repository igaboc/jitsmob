import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage';
import SubscribePopUp from './components/SubscribePopUp';
import PrimaryNav from './components/PrimaryNav'
import ContentLibrary from './components/ContentLibrary'
import ShowPage from './components/ShowPage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import { signIn, signOutNow } from './api/auth'
import { getDecodedToken } from './api/token'
import { listContents, addContents, updateContent, deleteContent } from './api/contents'
import { createSubscriber } from './api/subscribers'


class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showFilter: true,
      showSubscribeBox: false,
      error: null,
      decodedToken: getDecodedToken(), // Restore the previous signed in data
      contents: null,
      catFilter: [],
      bodyFilter: [],
      editedContentID: null,
      // State for pagination of content library
      currentPage: 1,
      contentPerPage: 9
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
      alert(error)
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
      .then((newContent) => {
        this.setState((prevState) => {
          // Append to end of existing contents
          const updatedContent = prevState.contents.contents.concat(newContent)
          return {
            contents: { contents: updatedContent }
          }
        })
        console.log('Successfully added new content to database', newContent)
      })
      .catch((error) => {
        this.setState({ error })
        console.log('Error received when adding content', error)
      })
  }
  onBeginEditContent = (id) => {
    console.log(id)
    // Have popup window ask admin for confirmation to edit content
    if(window.confirm('Are you sure you want to edit contents?')) {
      this.setState({ editedContentID: id }) // If yes, run code to edit content
    }
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
    // Have popup window ask admin for confirmation to delete
    if (window.confirm('Are you sure you want to delete?')) {
      deleteContent(id) // If yes, run code to delete content
      .then(() => {
        this.load()
      })
      .catch((error) => {
        this.setState({ error })
      })
    }
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

  // Event handler for pagination of content library
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  // Direct to content library
  toContentLibrary() {

    console.log('this worked')
  }

  // const { showSubscribeBox } = this.state
  // this.setState({ showSubscribeBox: !showSubscribeBox })


  render() {
    const { showMenu, showSubscribeBox, decodedToken, contents, catFilter, bodyFilter, showFilter, editedContentID, currentPage, contentPerPage } = this.state
    const adminSignedIn = !!decodedToken

    return (
      <div className="App">

        <Router>
          <Fragment>
            <Switch>
              <Route path='/admin' />
              <Route path='/signup' />
              <Route render={() => (
                <PrimaryNav
                  menuClassWidth={showMenu ? 'w-100' : 'null'}
                  onMenuClick={this.onMenuToggle}
                  onClickSubscribe={this.onSubscribeToggle}
                />
              )} />
            </Switch>
            <Switch>
              <Route path='/' exact render={() => (
                <LandingPage
                  onClickSubscribe={this.onSubscribeToggle}
                  onClickMobilityVideos={(filterWord) => { this.onCatFilterEvent('Mobility') }}
                  onClickStrengthVideos={(filterWord) => { this.onCatFilterEvent('Strength') }}
                  onClickInjuryPreventionVideos={(filterWord) => {
                    console.log('clicked')
                    this.onCatFilterEvent('Injury Prevention')
                  }}
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
                <SignInForm
                  screenName={'Admin Sign In'}
                  onSignIn={this.onSignIn}
                />
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
                    />
                  }
                </Fragment>
              )} />

              <Route path='/exercises/:id' render={({ match }) => (
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

            <Switch>
              <Route path='/admin' />
              <Route path='/signup' />
              <Route render={() => (
                <Footer
                  onClickSubscribe={this.onSubscribeToggle}
                />
              )} />
            </Switch>

          </Fragment>

        </Router>
        <SubscribePopUp
          popupClassWidth={showSubscribeBox ? ('w-100') : null}
          onClickSubscribe={this.onSubscribeToggle}
          onSubmitEmail={this.onCreateSubscriber}
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
    // initGA()
    // logPageView()
    
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
