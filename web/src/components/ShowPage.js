import React from 'react'
import Content from './Content'
import './ShowPage.css'
import facebookLogo from '../images/240px-Facebook_new.svg'

function ShowPage({
  screenName,
  contents,
  id
}) {

  var x
  // Search through contents for video with id that matches the
  // one being passed in. If match is found, let it equal to 'x'
  for (var i = 0; i < contents['contents'].length; i = i + 1) {
    if (contents['contents'][i]._id === id) {
      x = contents['contents'][i]
    }
  }

  return (
    <div class="show_page_div">
      <h1>{screenName}</h1>

      <Content
        title={ x.title }
        category={ x.category }
        bodyPart={ x.bodyPart }
        youtubeURL={ x.youtubeURL }
        description={ x.description }
      />
      { // Draw 'Share on Facebook button',
        // added rel="noopener noreferrer for extra security"
      }
      <div className="share_on_facebook_div">
      <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank" rel="noopener noreferrer" className="share_on_facebook_link">
        <button className="share_on_facebook_button">
          <img src={ facebookLogo } alt="Share on Facebook" className="facebook_logo"></img>
          <span className="share_on_facebook_words">Share</span>  
        </button>
      </a>
      </div>
    </div>
  )
}

export default ShowPage