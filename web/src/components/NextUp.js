import React from "react";
import './NextUp.css';

function NextUp({
  contents
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
          {console.log('Next Up Playlist - Contents', contents)}
        {/* {
          contents.map((content) => (
            <tr>
              <th scope="row">1</th>
              <td>{content.title}</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            
          ))
        } */}
          </tbody>
        </table>

    </div>
  )
}


export default NextUp;
