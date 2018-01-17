import React from 'react'
import JitsmobLogo from '../images/JitsmobLogo.svg'
import TopBar from './TopBar'
import Content from './Content'

function AddContentForm({
  screenName,
  onPreview,
  onSave
}) {
  return (
    <form
      onPreview={(event) => {
        // Prevent old-school form submission
        event.preventDefault()

        const form = event.target
        const elements = form.elements // Allows looking up fields using their 'name' attributes
        // Get entered values from fields
        const bodypart = elements.bodypart.value
        const category = elements.category.value
        const youtubeLink = elements.youtubeLink.value
        const body = elements.body.value // body is the description of the content

        // Pass this information along to the parent component
        onPreview({ bodypart, category, youtubeLink, body })
      }}

      onSave={(event) => {
        // Prevent old-school form submission
        event.preventDefault()

        const form = event.target
        const elements = form.elements // Allows looking up fields using their 'name' attributes
        // Get entered values from fields
        const bodypart = elements.bodypart.value
        const category = elements.category.value
        const youtubeLink = elements.youtubeLink.value
        const body = elements.body.value // body is the description of the content

        // Pass this information along to the parent component
        onSave({ bodypart, category, youtubeLink, body })
      }}
    >
      <TopBar image={JitsmobLogo} alt={'Jitsmob logo'} />
      <h1>{screenName}</h1>

      <h1>Preview:</h1>
      <Content
        title={'title'}
        subtitle={'category'}
        youtubeURL={'youtubeLink'}
        description={'body'}
      />

      <h1>Editor:</h1>

      <input
        type='textfield'
        name='bodypart'
      />

      <select name='category'>
        <option value='injury prevention'>INJURY PREVENTION</option>
        <option value='maximizing performance'>MAXIMIZING PERFORMANCE</option>
        <option value='other'>OTHER</option>
      </select>

      <input
        type='textfield'
        name='youtubeLink'
      />

      <textarea
        name='body'
      />

      <button
        onClick={
          (event) => {  // Event listener
            // Call function 'onPreview'
            // when button 'Preview' is clicked
            onPreview()
          }
        }
      >
        Preview
      </button>

      <button
        onClick={
          (event) => {  // Event listener
            // Call function 'onSave'
            // when button 'Save' is clicked
            onSave()
          }
        }
      >
        Save
      </button>
    </form>
  )
}

export default AddContentForm