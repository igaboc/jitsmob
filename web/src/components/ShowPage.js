import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
//import Content from './Content'
//import { findEntry } from '../api/contents'

function ShowPage({
  screenName,
  contents,
  id
}) {

  console.log('Showpage')
  console.log(contents, id)


  console.log(contents.find((video) => (video._id === id)))

  //console.log(contents[])
  //const videos = c()ontents
  
  //const x = videos.find(id)
  //console.log(x)
  /* findEntry(id)
  .then((video) => {
    const myVideo = video
  })
  .catch(saveError) */

  
  

   return (
    <div>
      <TopBar image={JitsmobLogo} alt={'Jitsmob logo'} />
      <h1>{screenName}</h1>
      
      
       
    </div>
  ) 
}

export default ShowPage