import React from 'react';
import FindOutMoreButton from './FindOutMoreButton';
import './LandingPage.css';

function LandingPage({

}) {
  return (
    <div className='fonts'>
      <div className='landing-section-wrapper0'>
        <div className='landing-page-text'>
          <div className='responsive-group'>
            <div className='responsive-row-main'>
              <h3 className='landing-page-para'>Boost Your</h3>
              <h2 className='landing-page-para'>Jiu-Jitsu Performance</h2>
              <p className='landing-page-para'>Thousands of Jiu-Jitsu athletes worldwide incorporate JitsMob into their daily workout routine</p>
              <FindOutMoreButton />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className='landing-section-wrapper1'>
        <div className='landing-page-text'>
          <div className='responsive-group'>
            <div className='responsive-row-description'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Boost Performance</h3>
              <p>Increased range of motion can generate power and promote efficiency of functional movements through improved position and posture.</p>
            </div>
            <div className='responsive-row-description'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Optimise Range of Motion</h3>
              <p>Range of Motion is optimized through the strengthening of ligaments and tendons while simultaneously removing excess fascia through specific stretching routines.</p>
            </div>
            <div className='responsive-row-description'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
              <h3 className='landing-page-para'>Accelerate Recovery</h3>
              <p>Recovery is increased through the natural release of hyaluronic acid while simultaneously resetting the central nervous system.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-section-wrapper2'>
        <div className='landing-page-text2'>
          <div className='responsive-group'>
            <div className='responsive-row-about'>
              <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            </div>
            <div className='responsive-row-about'>
              <h3 className='landing-page-text2h landing-page-para'>HI, I’m Tao</h3>
              <p className='landing-page-para'>Jitsmob aims to accelerate, improve and optimize your performance in Juijitsu.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='landing-section-wrapper3'>
        <div className='landing-page-text'>
          <h2>FOLLOW US</h2>
          <p>Social media icons</p>

          <div className='row mt-4 justify-content-center'>
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />

            <div className='w-100'></div>

            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />

            <div className='w-100'></div>

            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default LandingPage