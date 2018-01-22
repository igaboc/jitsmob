import React, { Fragment } from 'react'
import ContentForMyContent from './ContentForMyContent'

function MyContent({
  screenName,
  contents,
  onEditContent,
  editedContentID,
  renderEditForm,
  onDeleteContent
}) {
  const videos = contents
 
  return (
    <div>
      <div className="container-fluid text-center m-3">
        <h1 className="heading-font pr-5">My Content</h1>
      </div>
      { 
        videos.map((content) => {
          return (
            <Fragment key={ content._id }>
              <ContentForMyContent
                {...content}
                onEdit={ () => {
                  onEditContent(content._id)
                }} 
                onDelete={ () => {
                  onDeleteContent(content._id)
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