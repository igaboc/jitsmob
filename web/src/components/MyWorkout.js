import React from "react";
import './MyWorkout.css';
import NextUp from './NextUp'

function MyWorkout({
  contents,
  onRemoveContentFromMyWorkout
}) { 
  return (
    <div className='mb-3'>
      <h2>MY WORKOUT</h2>

      <h2>Next Up</h2>
      <NextUp 
        contents={contents}
      />
    </div>
  )
}


export default MyWorkout;
