import React from "react";
import './NextUp.css';

function NextUp({
  workoutsMinusSelected,
  removeFromMyWorkout,

}) { 
  return (
    <div className='mb-3'>
      <h2>Next Up</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Categories</th>
            <th scope="col">Duration</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log('Next Up Playlist - Contents', contents)} */}
        {
          
          workoutsMinusSelected ? (workoutsMinusSelected.map((content) => (
            <tr>
              <th scope="row">1</th>
              <td>{content.title}</td>
              <td>{content.category} {content.bodyPart} </td>
              <td><button className="btn-yellow">Play</button></td>
              <td><button 
                className="btn-yellow" 
                onClick={ (event) => {
                  removeFromMyWorkout(content._id)
                }}
                >Remove
              </button></td>
            </tr>
            
          ))) : (
            <h1>No content</h1>
          )
        }
          </tbody>
        </table>

    </div>
  )
}


export default NextUp;
