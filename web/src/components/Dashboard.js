import React from 'react'
import GoogleAnalytics from './dashboardComponents/GoogleAnalytics'
import DashboardMenu from './dashboardComponents/DashboardMenu'
import './Dashboard.css';

function Dashboard({
  screenName,
  subscriberCount,
  onAddContent,
  onViewEditContent,
  onEmailSubscribers,
  onBlogArticle,
  onSignOut,
  onTabClick
}) {
  return (
    <div className="row">

      <div className="col-md-3 col-lg-3 col-12">
        <DashboardMenu 
          activeTab={ 'email' }
          signOut={ (event) => { onSignOut() } }
          setActiveTab={ (word) => { onTabClick() } }
        />
      </div>
      
      <div className="col-md-9 col-lg-9 col-12 background-white">
        <div>{ subscriberCount }</div>
        <div>Subscribers</div>
        
        <button
          onClick={ 
            (event) => {  // Event listener
              // Call function 'onAddContent'
              // when button 'Add Content' is clicked
              onAddContent()
            }
          }
        >
          Add Content  
        </button>
        
        <button
          onClick={ 
            (event) => {  // Event listener
              // Call function 'onViewEditContent'
              // when button 'View Edit Content' is clicked
              onViewEditContent()
            }
          }
        >
          View Edit Content
        </button>
        
        <button
          onClick={ 
            (event) => {  // Event listener
              // Call function 'onEmailSubscribers'
              // when button 'Email Subscribers' is clicked
              onEmailSubscribers()
            }
          }
        >
          Email Subscribers
        </button>

        <button
          onClick={ 
            (event) => {  // Event listener
              // Call function 'onBlogArticle'
              // when button 'Blog Article' is clicked
              onBlogArticle()
            }
          }
        >
          Blog Article
        </button>
        
        <GoogleAnalytics title={ 'Google Analytics Placeholder' }/>
      </div>
    </div>
  )
}

export default Dashboard