import React from 'react';
import './SubscribePopUp.css';

function SubscribePopUp({
  popupClassWidth,
  onClickSubscribe,
  onSubmitEmail
}) {
  return (
    <div className={`overlay ${popupClassWidth}`}>
      <div className="popup-box">
        <div className="popup-text">
          <a onClick={(event) => { onClickSubscribe() }} className="exit-cursor">&times;</a>
          <h2 className='subscribe-text-head'>SUBSCRIBE</h2>
          <p className='subscribe-text-body'>Receive updates when new content is added</p>

          <form
            action="https://netlify.us17.list-manage.com/subscribe/post"
            method="POST"

          // onSubmit={(event) => {
          //   // Prevent old-school form submission
          //   event.preventDefault()

          //   const form = event.target
          //   const elements = form.elements
          //   const email = elements.MERGE0.value
          //   // action = "/google"
          //   // method = "POST"
          //   onSubmitEmail({ email })
          //   console.log(email)
          // }}
          >
            <input type="hidden" name="u" value="b743ade8d059da5b58446311b" />
            <input type="hidden" name="id" value="1f958097b0" />
            {'Email:'}
            <input
              type="email"
              name="MERGE0"
              id="MERGE0"
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