import React, { Fragment } from 'react'
import Content from './Content'

function MyContent({
  screenName,
  contents
}) {
  const videos = contents["contents"]
 
  return (
    <div>
      <h1>{screenName}</h1>
      
      { 
        videos.map((content) => {
          console.log(content)
          return (
            <Fragment key={ content._id }>
              <Content
                {...content}
                title={ content.title }
                category={ content.category }
                bodyPart={ content.bodyPart }
                youtubeURL={content.youtubeURL }
                description={ content.description }
              />
            </Fragment> 
          )
        }) 
      } 
    </div>
  )
}

export default MyContent