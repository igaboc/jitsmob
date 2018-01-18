import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content from './Content'
//import { findEntry } from '../api/contents'

function ShowPage({
  screenName,
  contents,
  id
}) {

  var x 
  console.log('Showpage')
  console.log(contents, id)
  
  /* contents['contents'].forEach((content) => {
    if(content._id === id) {
      x = content
    }
  }) */ 
  console.log(contents['contents'].length)
  console.log(contents['contents'][0]._id)
  for(var i = 0; i < contents['contents'].length; i = i + 1)
  {
    if(contents['contents'][i]._id === id) {
      x = contents['contents'][i]
      console.log('match')
    }
    console.log(i)
    console.log(contents['contents'][i]._id, id)
  }
  
  //x = contents['contents'][0]
  console.log(x)

  /* function isId(contents, id) { 
    return contents. === id;
  } */
  //console.log(contents.find((video) => (video._id === id)))

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
      
      <Content
                //{...content}
                title={ x.title }
                category={ x.category }
                bodyPart={ x.bodyPart }
                youtubeURL={x.youtubeURL }
                description={ x.description }
              />
      
       
    </div>
  ) 
}

export default ShowPage