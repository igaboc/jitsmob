import React, { Fragment } from 'react'
import ContentForMyContent from './ContentForMyContent'

function MyContent({
  screenName,
  contents,
  onEditContent,
  editedContentID,
  renderEditForm,
}) {
  const videos = contents
 
  return (
    <div>
      <h1 className="heading-font">My Content</h1>
      { 
        videos.map((content) => {
          return (
            <Fragment key={ content._id }>
              <ContentForMyContent
                {...content}
                onEdit={ () => {
                  onEditContent(content._id)
                }} 
                title={ content.title }
                category={ content.category }
                bodyPart={ content.bodyPart }
                youtubeURL={content.youtubeURL }
                description={ content.description }
                
              />
              { editedContentID === content._id &&
                renderEditForm(content)
              }
            </Fragment> 
          )
        }) 
      } 
    </div>
  )
}

export default MyContent