import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content from './Content'

function MyContent({
  screenName
  
}) {
  return (
    <div>
      <TopBar image={ JitsmobLogo } alt={ 'Jitsmob logo' }/>
      <h1>{ screenName }</h1>
      
      <Content
        title={ 'category' }
        subtitle={ 'bodypart' }
        youtubeURL={ 'youtubeLink' }
        description={ 'body' }
      />
    </div>
  )
}

export default MyContent