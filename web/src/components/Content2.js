import React from 'react'

function Content2({
  title,
  category,
  bodyPart,
  youtubeURL,
  description,
  id
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
      <h2>{ bodyPart }</h2>
      
      <div className="container">
        <iframe title="MMA" className="player" type="text/html" width="100%" height="100%" src={videoSrc} frameBorder="0"/>
      </div>
      
      <a href={`/showpage/${id}`}>
        <h2>{ title }</h2>
      </a>
      
      <h2>{ category }</h2>
      
      <div>{ description }</div>
    </div>
  )
}

export default Content2