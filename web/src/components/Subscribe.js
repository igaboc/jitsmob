import React from 'react';
import SubscribePopUp from './SubscribePopUp'
import './Subscribe.css';

function Footer({
  onClickSubscribe
}) {
  return (
    <div className='footer'>
      <footer>
        <a className='remove-decor' href="#" onClick={(event) => {
          console.log('clicked')
          onClickSubscribe()
        }}>Subscribe</a>
      </footer>
    </div>
  )
}

export default Footer