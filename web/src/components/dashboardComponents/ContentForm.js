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
        let title = elements.title.value
        let category = elements.category.value
        let bodyPart = elements.bodyPart.value
        let youtubeURL = elements.youtubeURL.value
        let description = elements.description.value  // body is the description of the content

        // Pass this information along to the parent component
        onSubmit({ title, category, bodyPart, youtubeURL, description })
        // Clear form fields
        elements.title.value = ""
        elements.category.value = ""
        elements.bodyPart.value = ""
        elements.youtubeURL.value = ""
        elements.description.value = ""
        alert("Content saved.")
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
      <div className="row">
        <div className="form-group col-md-6 col-12">
          <label>
            {'Title: '}
          </label>
          <input
            className="form-control"
            type='textfield'
            name='title'
            defaultValue={ initialContent.title }
          />
        </div>
      </div>
      <div className="row"> 
        <div className="form-group col-md-2 col-6">
          <label>
            {'Category: '}
          </label>
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
        </div>

        <div className="form-group col-md-2 col-6">
          <label>
            {'Body Part: '}
          </label>
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
        </div>

        <div className="form-group col-md-4 col-12">
          <label>
            {'YouTube URL: '}
          </label>
          <input
            className="form-control"
            type='textfield'
            name='youtubeURL'
            defaultValue={ initialContent.youtubeURL }
          />
        </div>
        <div className="col-md-4 col-12"/>
      </div>
      <div className="row">
        <div className="form-group col-md-8 col-12">
          <label>
            {'Description: '}
          </label>
          <textarea
            className="form-control"
            type='textarea'
            name='description'
            defaultValue={ initialContent.description }
            rows="4"
          />
        </div>
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