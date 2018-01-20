import React, { Fragment } from 'react'
import GoogleAnalytics from './dashboardComponents/GoogleAnalytics'
import DashboardMenu from './dashboardComponents/DashboardMenu'
import ContentForm from './dashboardComponents/ContentForm'
import MyContent from './dashboardComponents/MyContent'
import { Route } from 'react-router-dom'


function Dashboard({
  subscriberCount,
  onAddContent,
  onViewEditContent,
  onEmailSubscribers,
  onBlogArticle,
  onSignOut,
  onTabClick,
  url,
  contents,
  onEditToApp,
  editedContentID,
  onEditSave
}) {
  return (
    <div className="row">

      <div className="col-md-3 col-lg-3 col-12">
        <DashboardMenu
          signOut={(event) => { onSignOut() }}
        />
      </div>
      <div className="col-md-9 col-lg-9 col-12 background-white">

        <Route path={url} exact render={() => (
          <Fragment>
            hello world
                <div>{subscriberCount}</div>
            <div>Subscribers</div>
            <GoogleAnalytics title={'Google Analytics Placeholder'} />
          </Fragment>
        )} />
        <Route path={url + '/newcontent'} render={() => (
          <Fragment>
            {/* <h1>New Content</h1> */}
            <ContentForm
              screenName="Upload New Content onto JitsMob Website"
              onPreview='null'
              onSubmit={(contentData) => onAddContent(contentData)} />
          </Fragment>
        )} />
        <Route path={url + '/mycontent'} render={() => (
          <Fragment>
            {contents &&
              <MyContent
                contents={contents}
                editedContentID = {editedContentID}
                onEditContent={
                  (id) => {
                    onEditToApp(id)
                  }
                }
                renderEditForm={ (content) => (
                  <ContentForm
                    initialContent={ content }
                    screenName={ 'Edit Content' }
                    onSubmit={
                      (info) => {
                        onEditSave(info)
                      }
                    }
                  />
                ) }
              />
            }
          </Fragment>
        )} />
        <Route path={url + '/contactsubscribers'} render={() => (
          <Fragment>
            <h1>Email your subscribers</h1>
          </Fragment>
        )} />

      </div>
    </div>
  )
}

export default Dashboard