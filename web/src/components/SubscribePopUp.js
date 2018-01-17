import React from 'react';
import './SubscribePopUp.css';

function SubscribePopUp({
  popupClassWidth,
  onClickSubscribe
}) {
  return (
    <div className={`overlay ${popupClassWidth}`}>
      <div className="popup-box" id='popupjs'>
        <div className="popup-text">
          <a onClick={(event) => { onClickSubscribe() }} className="exit-cursor">X</a>
          <h2>Subscribe</h2>
          <p>Receive updates when new content is added</p>
          <form>
            Email: <input className="form-display" type="email" name="_replyto" placeholder="your_email@something.com" />
          </form>

        </div>
      </div>
    </div>

  )
}

export default SubscribePopUp