import React from 'react';
import './SubscribePopUp.css';

function SubscribePopUp({
  popupClassWidth,
  onClickSubscribe,
  onSubmitEmail
}) {
  return (
    <div className={`overlay ${popupClassWidth}`}>
      <div className="popup-box" id='popupjs'>
        <div className="popup-text">
          <a onClick={(event) => { onClickSubscribe() }} className="exit-cursor">X</a>
          <h2>Subscribe</h2>
          <p>Receive updates when new content is added</p>

          <form
            onSubmit={(event) => {
              // Prevent old-school form submission
              event.preventDefault()

              const form = event.target
              const elements = form.elements
              const email = elements.email.value
              // action = "/google"
              // method = "POST"
              onSubmitEmail({ email })
              console.log(email)
            }}
          >

            {'Email:'}
            <input
              type="text"
              name="email"
              placeholder="your_email@something.com"
            />

            <div className="form-spacing"></div>

            <input
              type="submit"
              value="Subscribe!"
            />

          </form>

        </div>
      </div>
    </div >

  )
}

export default SubscribePopUp