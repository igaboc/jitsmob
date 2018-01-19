import React, { Fragment } from 'react'
import Content2 from './Content2'
import ContentFilter from './ContentFilter'

function ContentLibrary({
  screenName,
  contents,
  catFilterToApp,
  catFilter,
}) {

  let videos = []
  // contents["contents"]
  if (catFilter.length < 1) {
    videos = contents
  }
  else {
    let filteredArray = []
      catFilter.map((filterWord) => {
        filteredArray= filteredArray.concat(contents.filter(content => {
          return content.category === filterWord
        }))
      })
      console.log(filteredArray)
    videos = filteredArray
  } 

  return (
    <div>
      <ContentFilter
        onCatFilterToggle={ (word) => {
          catFilterToApp(word)
        }}
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