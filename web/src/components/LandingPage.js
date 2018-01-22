import React from 'react';
import FindOutMoreButton from './FindOutMoreButton';
import './LandingPage.css';
import './../images/SpineMobs.png'
import Tao from './../images/AboutMePhoto.png'
import Laptop from './../images/Laptop.svg'

function LandingPage({

}) {
  return (
    <div className='fonts'>
      <div className='landing-section-wrapper0'>
        <div className='wrapper0-image'>
          <div className='wrapper0-opacity'>
            <div className='wrapper0-padding'>
              <div className='landing-page-text'>
                <div className='responsive-group'>
                  <div className='responsive-row-main'>
                    <h3 className='landing-page-para'>Boost Your</h3>
                    <h2 className='landing-page-para'>Jiu-Jitsu Performance</h2>
                    {/* <FindOutMoreButton /> */}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-section-wrapper1'>
        <div className='landing-page-text'>
          <div className='responsive-group'>
            <div className='responsive-row-description wrapper1-text-spacing'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Boost Performance</h3>
              <p>Increased range of motion can generate power and promote efficiency of functional movements through improved position and posture.</p>
              <button className='responsive-button1'>Watch Mobility Videos Now</button>
            </div>
            <div className='responsive-row-description wrapper1-text-spacing'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Optimise Range of Motion</h3>
              <p>Range of Motion is optimized through the strengthening of ligaments and tendons while simultaneously removing excess fascia through specific stretching routines.</p>
              <button className='responsive-button2'>Improve Performance Now</button>
            </div>
            <div className='responsive-row-description wrapper1-text-spacing'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Accelerate Recovery</h3>
              <p>Recovery is increased through the natural release of hyaluronic acid while simultaneously resetting the central nervous system.</p>
              <button className='responsive-button3'>Watch Mobility Videos Now</button>
            </div>
          </div>
          <h3>Want to be kept up-to-date with any new content</h3>
          <button>Subscribe Here</button>
        </div>
      </div>

      <div className='landing-section-wrapper2'>
        <div className='landing-page-text2'>
          <div className='row'>
            <div className='col-md-6 col-12 px-auto'>
              <img className="w-75 about-me-photo" alt="Tao" src={Tao} />
            </div>
            <div className='col-md-6 col-12'>
              <h3 className='landing-page-text2h landing-page-para'>HI, I’m Tao</h3>
              <p className='landing-page-para'>Jitsmob aims to accelerate, improve and optimize your performance in Juijitsu.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-section-wrapper3'>
        <div className='landing-page-text'>
          <h2>NEW APPLICATION COMING SOON</h2>
          <p>Be among the first to know</p>
          <p>Subscribe for Updates <br />
            <button>Subscribe</button></p>
          <img className='wrapper3-laptop-image' alt="Laptop" src={Laptop} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage