import React from 'react'

function AddContentForm({
  screenName,
  onPreview,
  onSubmit,
  initialContent={}
}) {
  return (
    <form
      // const onPreview={ (event) => {
      //   // Prevent old-school form submission
      //   event.preventDefault()

      //   const form = event.target
      //   const elements = form.elements // Allows looking up fields using their 'name' attributes
      //   // Get entered values from fields
      //   const title = elements.title.value
      //   const category = elements.category.value
      //   const bodyPart = elements.bodyPart.value
      //   const youtubeURL = elements.youtubeURL.value
      //   const description = elements.description.value // body is the description of the content

      //   // Pass this information along to the parent component
      //   onPreview({ title, category, bodyPart, youtubeURL, description })
      // } }

      onSubmit={(event) => {
        // Prevent old-school form submission
        event.preventDefault()
        const form = event.target
        const elements = form.elements // Allows looking up fields using their 'name' attributes
        // Get entered values from fields
        const title = elements.title.value
        const category = elements.category.value
        const bodyPart = elements.bodyPart.value
        const youtubeURL = elements.youtubeURL.value
        const description = elements.description.value  // body is the description of the content

        // Pass this information along to the parent component
        onSubmit({ title, category, bodyPart, youtubeURL, description })
      }}
    >
      {/* <TopBar image={ JitsmobLogo } alt={ 'Jitsmob logo' }/> */}

      {/* <h1>Preview:</h1>
      <Content
        title={ 'title' }
        category={ 'category' }
        bodyPart={ 'bodyPart' }
        youtubeURL={ 'youtubeLink' }
        description={ 'body' }
      /> */}

      <h1>{screenName}</h1>
      <div className="form-group">
        <label>
          {'Title: '}
          <input
            className="form-control"
            type='textfield'
            name='title'
            defaultValue={ initialContent.title }
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          {'Category: '}
          <select
            name='category'
            className="form-control"
            defaultValue={ initialContent.category }
          >
            <option selected>...</option>
            <option value='Mobility'>Mobility</option>
            <option value='Strength'>Strength</option>
            <option value='Injury Prevention'>Injury</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <label>
          {'Body Part: '}
          <select
            name='bodyPart'
            className="form-control"
            defaultValue={ initialContent.bodyPart }
          >
            <option selected>...</option>
            <option value='Shoulders'>Shoulders</option>
            <option value='Hips'>Hips</option>
            <option value='Legs'>Legs</option>
            <option value='Spine'>Spine</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <label>
          {'YouTube URL: '}
          <input
            className="form-control"
            type='textfield'
            name='youtubeURL'
            defaultValue={ initialContent.youtubeURL }
          />
        </label>
      </div>


      <div className="form-group">
        <label>
          {'Description: '}
          <textarea
            className="form-control"
            type='textarea'
            name='description'
            defaultValue={ initialContent.description }
          />
        </label>
      </div>

      {/* <button
        onClick={ 
          (event) => {  // Event listener
            // Call function 'onPreview'
            // when button 'Preview' is clicked
            onPreview()
          }
        }
        className="btn-purple"
      >
        Preview 
      </button> */}

      <button
        // onClick={ 
        //   (event) => {  // Event listener
        //     // Call function 'onSave'
        //     // when button 'Save' is clicked
        //     console.log('initialclick')
        //     onSave()
        //   }
        // }
        className="btn-jits"
      >
        Save
      </button>

    </form>
  )
}

export default AddContentForm