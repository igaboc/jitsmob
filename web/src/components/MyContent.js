import React, { Fragment } from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content from './Content'

function MyContent({
  screenName,
  contents
}) {

  const videos = contents["contents"]
  
  return (
    <div>
      <TopBar image={JitsmobLogo} alt={'Jitsmob logo'} />
      <h1>{screenName}</h1>
      
      { 
        videos.map((content) => {
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