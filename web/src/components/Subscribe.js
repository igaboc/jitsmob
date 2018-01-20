import React from 'react';
// import SubscribePopUp from './SubscribePopUp'
import './Subscribe.css';

function Subscribe({
  onClickSubscribe,
  buttonType,
  buttonDescription
}) {
  return (

    <div>
      <button className={buttonType} onClick={(event) => {
        console.log('clicked')
        onClickSubscribe()
      }}>
        <a className='remove-decor'>{buttonDescription}</a>
      </button>
    </div>



    // <div className='footer'>
    //   <footer>
    //     <a className='remove-decor' href="#" onClick={(event) => {
    //       console.log('clicked')
    //       // onClickSubscribe()
    //     }}>Subscribe</a>
    //   </footer>
    // </div>
  )
}

export default Subscribe