import React from 'react'

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
    <div>
      <h2>{ title }</h2>

      <div>Date added placeholder</div>
      <div>{ youtubeURL }</div>
      
      <h2>{ category }</h2>
      <h2>{ bodyPart }</h2>
      <div>{ description }</div>

      <div className="container">
        <iframe title="MMA" className="player" type="text/html" width="100%" height="100%" src={videoSrc} frameborder="0"/>
      </div>
    </div>
  )
}

export default Content