import React from 'react'
// import Content from './Content'

function MyContent({
  screenName,
  contents
}) {
  return (
    <div>
      <h1>{screenName}</h1>

      {/* {
         contents.map((content) => {
          return (
           <Content
            {...contents}
            title={ content.title }
            subtitle={ content.subtitle }
            youtubeURL={content.youtubeURL }
            description={ content.description }
          /> 
          )
        }) 
      } */}
    </div>
  )
}

export default MyContent