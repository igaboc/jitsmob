import React, { Fragment } from 'react'
import Content from './Content'
import './ShowPage.css'
import facebookLogo from '../images/240px-Facebook_new.svg'
import Content2 from './Content2'
import './ContentLibrary.css'

function ShowPage({
  screenName,
  contents,
  id
}) {
  
  // Search through contents for video with id that matches the
  // one being passed in. If match is found, let it equal to 'x'
  var x
  for (var i = 0; i < contents['contents'].length; i = i + 1) {
    if (contents['contents'][i]._id === id) {
      x = contents['contents'][i]
    }
  }

  // Search through contents for videos with same category or 
  // same bodypart as current video.  
  let videos = []
  for (var i = 0; i < contents['contents'].length; i = i + 1) {
    if (contents['contents'][i]._id === id) {
    }
    else {
      if ( (contents['contents'][i].category === x.category) || 
           (contents['contents'][i].bodyPart === x.bodyPart) ) {
        videos = videos.concat(contents['contents'][i])
      }
    }
  }

  return (
    <div class="show_page_div">
      
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

      
      <h2 className="recommended">Recommended for you</h2>
      
      {// Recommend videos that are in same category or talks
       // about the same bodypart as current video
        <div className='video-container'>
          {
            videos.map((content) => {
              return (
                <Fragment key={content._id}>
                 <Content2
                    {...content}
                    title={content.title}
                    category={content.category}
                    bodyPart={content.bodyPart}
                    youtubeURL={content.youtubeURL}
                    description={content.description}
                    id={content._id}
                  />
                </Fragment>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default ShowPage