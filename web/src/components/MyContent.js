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
        youtubeURL={ 'https://www.youtube.com/watch?v=gMwvC6533vQ' }
        description={ 'body' }
      />
    </div>
  )
}

export default MyContent