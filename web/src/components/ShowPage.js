import React, { Fragment } from 'react'
import Content from './Content'
import './ShowPage.css'
import facebookLogo from '../images/240px-Facebook_new.svg'
import {Helmet} from "react-helmet";

function ShowPage({
  screenName,
  contents,
  id
}) {

  var x, youtubeID

  for (var i = 0; i < contents['contents'].length; i = i + 1) {
    if (contents['contents'][i]._id === id) {
      x = contents['contents'][i]
      youtubeID = "https://img.youtube.com/vi/" + x.youtubeURL.split('=')[1] + "/sddefault.jpg"
    }
  }


  return (
    <Fragment>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jitsmob: Juijitsu and MMA Mobility Training" />
        <meta property="og:description" content="You won't regret it" />

      </Helmet>
      <div class="show_page_div">
        <h1>{screenName}</h1>

        <Content
          title={x.title}
          category={x.category}
          bodyPart={x.bodyPart}
          youtubeURL={x.youtubeURL}
          description={x.description}
        />
        {// Added rel="noopener noreferrer for extra security"
        }
        
        <a href={`https://www.facebook.com/sharer/sharer.php?u=http://jitsmob.netlify.com/showpage/${x._id}`} target="_blank" rel="noopener noreferrer" >
          Share on Facebook
          <img src={ facebookLogo } alt="Share on Facebook"></img>
        </a>
      </div>
    </Fragment>
  )
}

export default ShowPage