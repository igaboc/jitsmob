import React from 'react'
import './Content2.css'

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
      <div className="row">
        <div className="col-12 text-center mb-0">
          <iframe title="MMA" className="w-75 iframe-player" type="text/html" src={videoSrc} frameBorder="0" />
        </div>
        <div className="col-12 mt-0">
          <div className="w-75 mx-auto background-purple mt-0">
            <h2 className="text-white">{title}</h2>
            <p>{category}, {bodyPart}</p>
            <p><strong>Description:</strong>{description}</p>
          </div>
        </div>
      </div>

  )
}

export default Content