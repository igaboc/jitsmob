import React from 'react'
import './Content2.css';

function Content2({
  title,
  category,
  bodyPart,
  youtubeURL,
  description,
  id,
  contentInWorkout,
  onWishListAdd,
  userSignedIn
}) {

  var youtubeLink = youtubeURL // Get copy of youtubeURL
  var words = youtubeLink.split('=') // Split youtubeLink by '=' signs
  var x = words[1] // Extract part of youtubeLink after '='

  var video = x // video to to get copy of youtubeURL after '='
  var autoplay = "0"
  var rel = "0"
  var modest = "1"

  // var videoSrc = "https://www.youtube.com/embed/" + 
  //     video + "?autoplay=" + 
  //     autoplay + "&rel=" + 
  //     rel + "&modestbranding=" +
  //     modest

  var videoSrc = "https://img.youtube.com/vi/" + 
      video +
      "/sddefault.jpg"


  function truncateText(description, maxLength) {
    var element = description,
        truncated = element;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

  return (
    <div className='card'>
      
      <div className="card-img-top">
        {/* <iframe title="MMA" className="player" type="text/html" width="100%" height="100%" src={videoSrc} frameBorder="0"/> */}
        <a href={`/showpage/${id}`}>
          <img className="card-img-top" src={videoSrc} alt="Card image cap" />
        </a>
      </div>
      
      <div className='card-block'>
        <a href={`/showpage/${id}`}>
          <h4 className='card-title'>{ truncateText(title, 50) }</h4>
        </a>
        <p className='card-text'><small class="text-muted">{ category }, { bodyPart }</small></p>
        <div className="row">
          <div className={ userSignedIn ? ('col-8') : ('col-12') }>
            <p className='card-text'>{ truncateText(description, 100) }</p>
          </div>
          { !contentInWorkout ? ( 
            <div className="col-4 pr-4">
              <button className="btn-yellow" onClick={ (event) => onWishListAdd(id) }>Add to Workout</button>
            </div>
          ) : (
            <div className="col-4 pr-4">
              <button className="btn-yellow">Already in Workout</button>
            </div>
          )
          }
        </div>
      </div>

    </div>
  )
}

export default Content2