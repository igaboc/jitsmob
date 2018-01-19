import React from 'react'
import Content from './Content'

function ShowPage({
  screenName,
  contents,
  id
}) {

  var x
  
  for (var i = 0; i < contents['contents'].length; i = i + 1) {
    if (contents['contents'][i]._id === id) {
      x = contents['contents'][i]
    }
  }

  return (
    <div>
      <h1>{screenName}</h1>

      <Content
        title={x.title}
        category={x.category}
        bodyPart={x.bodyPart}
        youtubeURL={x.youtubeURL}
        description={x.description}
      />
    </div>
  )
}

export default ShowPage