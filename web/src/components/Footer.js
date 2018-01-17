import React from 'react';
import SubscribePopUp from './SubscribePopUp'
import './Footer.css';

function Footer({
  onClickSubscribe
}) {
  return (
    <div className='footer'>
      <footer>
        <a href="#" onClick={(event) => {
          console.log('clicked')
          onClickSubscribe()
        }}>Subscribe</a>
      </footer>
    </div>
  )
}

export default Footer