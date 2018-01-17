import React from 'react';
import './SubscribePopUp.css';

function SubscribePopUp({

}) {
  return (
    <div className='popup' id='popupjs'>
      <h2>Subscribe</h2>


      <a href="#" onclick="show('popup2')">Show popup (:before & :after)</a>

      <p>This is a popup!</p>
      <p>Overlay uses <b>:before</b> and <b>:after</b> pseudo-classes.</p>
      <p>(This one does block elements on the background)</p>
      <a href="#" onclick="hide('popup2')">Ok!</a>

    </div>
  )
}

export default SubscribePopUp