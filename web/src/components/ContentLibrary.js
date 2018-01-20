import React, { Fragment } from 'react'
import Content2 from './Content2'
import ContentFilter from './ContentFilter'
import './ContentLibrary.css';

function ContentLibrary({
  screenName,
  contents,
  showFilter,
  filterToggleToApp,
  catFilterToApp,
  catFilter,
  bodyFilterToApp,
  bodyFilter
  
}) {
  // Filter code start
  let videos = []
  let catFilteredArray = []
  let bodyFilteredArray = []
  // contents["contents"]
  if (catFilter.length < 1 && bodyFilter.length < 1) {
    videos = contents
  }
  else if (catFilter.length > 0 && bodyFilter.length < 1 ) {
    catFilter.map((filterWord) => {
      catFilteredArray= catFilteredArray.concat(contents.filter(content => {
        return content.category === filterWord
      }))
    })
    videos = catFilteredArray
  }
  else if (catFilter.length < 1 && bodyFilter.length > 0 ) {
    bodyFilter.map((filterWord) => {
      bodyFilteredArray= bodyFilteredArray.concat(contents.filter(content => {
        return content.bodyPart === filterWord
      }))
    })
    videos = bodyFilteredArray
  }
  else {
    // if both filters need to be run
    catFilter.map((filterWord) => {
      catFilteredArray= catFilteredArray.concat(contents.filter(content => {
        return content.category === filterWord
      }))
    })
    bodyFilter.map((filterWord) => {
      bodyFilteredArray= bodyFilteredArray.concat(contents.filter(content => {
        return content.bodyPart === filterWord
      }))
    })
    videos = catFilteredArray.filter((n) => bodyFilteredArray.includes(n))
  }
  // Filter Code End

  return (
    <div>
      <ContentFilter
        onCatFilterToggle={ (word) => {
          catFilterToApp(word)
        }}
        onBodyFilterToggle={ (word) => {
          bodyFilterToApp(word)
        }}
        catFilter={catFilter}
        bodyFilter={bodyFilter}
        filterToggle={ (event) => filterToggleToApp() }
        showFilter={showFilter}
      />
      <h2 className='heading'>EXERCISES</h2>
      <div className='video-container'>
      {
        videos.map((content) => {
          return (
            <Fragment key={content._id}>
                <Content2
                  {...content}
                  title={content.title}
                  category={content.category}
                  bodyPart={content.bodyPart}
                  youtubeURL={content.youtubeURL}
                  description={content.description}
                  id={content._id}
                />
            </Fragment>
          )
        })
      }
      </div>
    </div>
  )
}

export default ContentLibrary