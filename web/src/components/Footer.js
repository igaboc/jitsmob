import React from "react";
import './Footer.css';
import facebookLogo from '../images/facebookLogo.svg'
import youtubeLogo from '../images/youtubeLogo.svg'
import instaLogo from '../images/instaLogo.svg'
import Subscribe from './Subscribe'

function Footer({
  onClickSubscribe
}) {
  return (
    <div className="website-footer">
      <div className='row'>
        <div className="col-xs-6 col-md-2">
          <a href="/#about" className="footer-link">About</a>
        </div>
        <div className="col-xs-6 col-md-2">
          <a href="/exercises" className="footer-link">Workouts</a>
        </div>
        <div className="col-xs-6 col-md-2">
          <a href="mailto:jitsmob@jitsmob.com" className="footer-link">Contact Us</a>
        </div>
        <div className="col-xs-6 col-md-2">
          <span onClick={ (event) => {onClickSubscribe() }} className="footer-link">Subscribe</span>
        </div>
        <div className="col-xs-1 col-md-1">
          <a href="https://www.facebook.com/JitsMob-1854775828114449/?ref=br_rs" target="_blank" ><img src={facebookLogo} className="social-media" /></a>
        </div>
        <div className="col-xs-1 col-md-1">
          <a href="https://www.youtube.com/channel/UCe6FjCO70FkCIqaGkPEyXZQ" target="_blank" className="social-media"><img src={youtubeLogo} className="social-media" /></a>
        </div>
        <div className="col-xs-1 col-md-1">
          <a href="https://www.instagram.com/jitsmob/" target="_blank" ><img src={instaLogo} className="social-media" /></a>
        </div>
      </div>
    </div>

  );
}


export default Footer;
