import React, {Fragment} from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content2 from './Content2'

function ContentLibrary({
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
              <Content2
                {...content}
                title={ content.title }
                category={ content.category }
                bodyPart={ content.bodyPart }
                youtubeURL={content.youtubeURL }
                description={ content.description }
                id={ content._id}
              />
            </Fragment> 
          )
        })   
      } 
    </div>
  )
}

export default ContentLibrary