import React from "react";
import './MyWorkout.css';
import NextUp from './NextUp'

function MyWorkout({
  userworkout,
  contents,
  onRemoveContentFromMyWorkout,
  removetoApp,
}) { 
  return (
    <div className='mb-3'>
      <h2>MY WORKOUT</h2>

      <h2>Next Up</h2>
      <NextUp 
        workoutsMinusSelected={userworkout}
        removeFromMyWorkout={ (id) => {
          removeToApp(id)
        } }
      />
    </div>
  )
}


export default MyWorkout;
