import React, { Fragment } from 'react'
import './ContentForMyContent.css'

function Content({
  title,
  category,
  bodyPart,
  youtubeURL,
  description,
  _id,
  onEdit,
  onDelete
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
    <Fragment>
    <div className="row my-2">
      <div className="col-md-2">
        <p><strong>Title: </strong>{ title }</p>
        <p><strong>Category: </strong>{category}</p>
        <p><strong>Body Part: </strong>{bodyPart}</p>
      </div>

      <div className="col-md-5">
      <p><strong>Youtube Link: </strong>{ youtubeURL }</p>
        <p><strong>Description: </strong>{ description }</p>
      </div>
      
      <div className="col-md-3 col-8 col-sm-offset-2">
        <iframe title="MMA" className="player" type="text/html" width="100%" height="auto" src={videoSrc} frameBorder="0" />
      </div>

      <div className="col-md-2 text-center py-auto">
        <a className="btn-purple link-styling" href={`/showpage/${ _id }`}>View</a>
        <br />
        <span className="btn-yellow link-styling" onClick={ onEdit }>Edit</span>
        <br />
        <span className="btn-delete link-styling" onClick={ onDelete }>Delete</span>        
      </div>

      
    </div>
    <hr/>
    </Fragment>
  )
}

export default Content