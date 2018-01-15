import React from 'react'
import { Player } from 'video-react'

function Content({
  title,
  subtitle,
  youtubeURL,
  description
}) {

  var video= "5hqYwZgNbDs"// TSKSR Budokan 2009 demo //"mYFaghHyMKc" // music video: Family of the Year - Hero [Boyhood] (Official)
  var autoplay="0"
  var rel="0"
  var modest="1"

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
      
      <video src="tsksr_demo_budokan2009.webm"/>
      
      <h2>{ subtitle }</h2>
      <div>{ description }</div>

      <div className="container">
        <iframe className="player" type="text/html" width="100%" height="100%" src={videoSrc} frameborder="0"/>
      </div>

    </div>
  )
}

export default Content