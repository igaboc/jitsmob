import React from "react";
import './MyWorkout.css';
import NextUp from './NextUp'
import Content from'./Content'

function MyWorkout({
  removeFromMyWorkout,
  userworkout,
  contents,
  onRemoveContentFromMyWorkout,
  selectedExercise,
  selectedContent
}) { 



  return (
    <div className='mb-3'>
      <div className="row">

        <div className="col-12 text-center">
          <h2>MY WORKOUTS</h2>
        </div>
      </div>
        { selectedContent ? (
          <Content 
            {...selectedContent}
          />
        ) : (
          <h1>Choose a video to play</h1>
        ) 
        }
      
      <NextUp 
      userworkout={ userworkout }

        removeFromMyWorkout= {(id) => {
          removeFromMyWorkout(id)
        }}
        selectedExercise= {(id) => {
          selectedExercise(id)
        }}
        selectedContent={selectedContent}
      />
    </div>
  )
}


export default MyWorkout;
