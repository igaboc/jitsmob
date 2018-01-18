import React, { Fragment } from 'react'
import Content2 from './Content2'

function ContentLibrary({
  screenName,
  contents
}) {

  const videos = contents["contents"]

  return (
    <div>
      <h1>{screenName}</h1>

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
              />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default ContentLibrary