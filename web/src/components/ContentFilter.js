import React from 'react'
import './ContentFilter.css';

function ContentFilter({
  onCatFilterToggle,
  onBodyFilterToggle,
  catFilter,
  bodyFilter,
  filterToggle,
  showFilter
}) {
  let strength, mobility, injuryPrevention, shoulders, legs, hips, spine = false
  console.log('boolean:', showFilter)
  if (catFilter.length > 0) {
    catFilter.includes('Strength') ? strength = true : null
    catFilter.includes('Mobility') ? mobility = true : null
    catFilter.includes('Injury Prevention') ? injuryPrevention = true : null
  }

  if (bodyFilter.length > 0) {
    bodyFilter.includes('Shoulders') ? shoulders = true : null
    bodyFilter.includes('Legs') ? legs = true : null
    bodyFilter.includes('Hips') ? hips = true : null
    bodyFilter.includes('Spine') ? spine = true : null
  }

  return (
    <div className="container-fluid background-grey py-5">
      <div className="container-fluid text-center">
        <h2 className="heading-font">Focus on...</h2>
      </div>

      <div className={`filter-collapse ${!showFilter && 'h-0'}`}>
        <div className="row">
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <div className={`border-bottom-clear ${mobility && 'activeFilter'}`}>
              <span
                className="heading-font py-2 filter-button purple py-2"
                onClick={ (event) => {
                  onCatFilterToggle('Mobility')
                }}
              >
                Mobility
              </span>
            </div>
          </div>
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <div className={`border-bottom-clear ${strength && 'activeFilter'}`}>
              <span
                className="heading-font filter-button purple py-2"
                onClick={ (event) => {
                  onCatFilterToggle('Strength')
                }}
              >
                Strength
              </span>
            </div>
          </div>
          <div className="col-md-4 col-6 text-center mt-2 px-1">
            <div className={`border-bottom-clear ${injuryPrevention && 'activeFilter'}`}>
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
        </div>

        <div className="row">
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <div className={`border-bottom-clear ${shoulders && 'activeFilter'}`}>
              <span
                className="heading-font filter-button black py-2"
                onClick={(event) => {
                  onBodyFilterToggle('Shoulders')
                }}
              >
                Shoulders
              </span>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <div className={`border-bottom-clear ${spine && 'activeFilter'}`}>
              <span
                className="heading-font filter-button black py-2"
                onClick={(event) => {
                  onBodyFilterToggle('Spine')
                }}
              >
                Spine
              </span>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <div className={`border-bottom-clear ${legs && 'activeFilter'}`}>
              <span
                className="heading-font filter-button black py-2"
                onClick={(event) => {
                  onBodyFilterToggle('Legs')
                }}
              >
                Legs
              </span>
            </div>
          </div>
          <div className="col-md-3 col-6 text-center px-1 mt-2">
            <div className={`border-bottom-clear ${hips && 'activeFilter'}`}>
              <span
                className="heading-font filter-button black py-2"
                onClick={(event) => {
                  onBodyFilterToggle('Hips')
                }}
              >
                Hip
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center mt-2">
        <span
          className="arrow"
          onClick={ (event) => {
            filterToggle()
          }}
        />
      </div>
    </div>
  )
}

export default ContentFilter