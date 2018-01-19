import React, { Fragment } from 'react'
import Content2 from './Content2'
import ContentFilter from './ContentFilter'

function ContentLibrary({
  screenName,
  contents,
  catFilterToApp,
  catFilter,
  bodyFilterToApp,
  bodyFilter
  
}) {
  console.log(bodyFilter, 'first')
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
      />
      <h2>Fitlering for: { catFilter }</h2>
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
  )
}

export default ContentLibrary