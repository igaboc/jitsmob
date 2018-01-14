import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import GoogleAnalytics from './GoogleAnalytics'

function Dashboard({
  screenName,
  subscriberCount,
  onAddContent,
  onViewEditContent,
  onEmailSubscribers,
  onBlogArticle
}) {
  return (
    <div>
      <TopBar image={ JitsmobLogo } alt={ 'Jitsmob logo' }/>
      <h1>{ screenName }</h1>

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
  )
}

export default Dashboard