import React from 'react'
import './Content.css'

function Content({
  title,
  category,
  bodyPart,
  youtubeURL,
  description
}) {

  var youtubeLink = youtubeURL // Get copy of youtubeURL
  var words = youtubeLink.split('=') // Split youtubeLink by '=' signs
  var x = words[1] // Extract part of youtubeLink after '='

  var video = x // video to to get copy of youtubeURL after '='
  var autoplay = "0"
  var rel = "0"
  var modest = "1"

  var videoSrc = "https://www.youtube.com/embed/" +
    video + "?autoplay=" +
    autoplay + "&rel=" +
    rel + "&modestbranding=" +
    modest

  return (
    <div className="content">
      <div className="row">
        <div className="col-12 col-md-12">
          <h2 className="content_h2_bodypart">{bodyPart}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12">
          <iframe title="MMA"  type="text/html" width="100%" height="300vw" src={videoSrc} frameBorder="0" className="content_iframe"/>
        </div>
      </div>

      <div className="row under_iframe_top">
        <div className="col-12 col-md-6">
          <h2 className="content_title">{title}</h2>
          <div className="content_category"> Category: {category}</div>
        </div>
        
        <div className="col-12 col-md-6">
          <div className="content_div_description">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Content