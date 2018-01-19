import React from 'react'
import './ContentFilter.css';

function ContentFilter({
  onCatFilterToggle
}) {

  
  return (
    <div className="container-fluid background-grey py-5">
      <div className="container-fluid text-center">
        <h2 className="heading-font">Focus on...</h2>
      </div>

      <div>
        <div className="row">
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <span
              className="heading-font py-2 filter-button purple py-2"
              onClick={ (event) => {
                onCatFilterToggle('Mobility')
              }}
            >
              Mobility
            </span>
          </div>
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <span
              className="heading-font filter-button purple py-2"
              onClick={ (event) => {
                onCatFilterToggle('Strength')
              }}
            >
              Strength
            </span>
          </div>
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <span
              className="heading-font filter-button purple py-2"
              onClick={ (event) => {
                onCatFilterToggle('Injury Prevention')
              }}
            >
              Injury Prevention
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <span
              className="heading-font filter-button black py-2"
              onClick=""
            >
              Shoulders
            </span>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <span
              className="heading-font filter-button black py-2"
              onClick=""
            >
              Spine
            </span>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <span
              className="heading-font filter-button black py-2"
              onClick=""
            >
              Legs
            </span>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <span
              className="heading-font filter-button black py-2"
              onClick=""
            >
              Hip
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-2">
        <a
          className="arrow"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample" 
        />
      </div>
    </div>
  )
}

export default ContentFilter