import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content from './Content'

function MyContent({
  screenName,
  contents
}) {
  return (
    <div>
      <TopBar image={JitsmobLogo} alt={'Jitsmob logo'} />
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