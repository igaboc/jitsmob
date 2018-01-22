import React, { Fragment } from 'react'
import Content from './Content'
import './ShowPage.css'
import facebookLogo from '../images/240px-Facebook_new.svg'
import MetaTags from 'react-meta-tags'

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
      <MetaTags>
        <title>{ x.title }</title>
        <meta property="og:url" content={`http://jitsmob.netlify.com/showpage/${x._id}`} />
        <meta name="description" content={x.description} />
        <meta property="og:title" content={x.title}/>
        <meta property="og:image" content={ youtubeID } />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="227904387752343" />
        <description>{x.description}</description>
      </MetaTags>
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