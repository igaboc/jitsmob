import React from 'react'
import { Player } from 'video-react'

function Content({
  title,
  subtitle,
  youtubeURL,
  description
}) {
  return (
    <div>
      <h2>{ title }</h2>

      <div>Date added placeholder</div>
      <div>{ youtubeURL }</div>
      
      
    
    

      

      
      <h2>{ subtitle }</h2>
      <div>{ description }</div>
    </div>
  )
}

export default Content