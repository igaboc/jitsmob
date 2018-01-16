import React, { Fragment } from 'react'
import FindOutMoreButton from './FindOutMoreButton'

function LandingPage({

}) {
  return (
    <div>
      <p>Jitsmob logo</p>
      <img src="http://placeholder.pics/svg/100x100" style={{ textAlign: "left" }} alt="Placeholder" />

      <Fragment>
        <p>Boost Your</p>
        <p>Jiu-Jitsu Performance</p>
        <p>Thousands of Jiu-Jitsu athletes worldwide incorporate JitsMob into their daily workout routine</p>
        <FindOutMoreButton />
        <br />
      </Fragment>

      <div className='landing-section-wrapper1'>
        <p>Boost Performance</p>
        <p>Increased range of motion can generate power and promote efficiency of functional movements through improved position and posture.</p>

        <p>Optimise Range of Motion</p>
        <p>Range of Motion is optimized through the strengthening of ligaments and tendons while simultaneously removing excess fascia through specific stretching routines.</p>

        <p>Accelerate Recovery</p>
        <p>Recovery is increased through the natural release of hyaluronic acid while simultaneously resetting the central nervous system.</p>
      </div>

      <div className='landing-section-wrapper2'>
        <p>HI, I’m Tao</p>

        <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />

        <p>Jitsmob aims to aceelerate, imrpove and optimize your performance in Juijitsu.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='landing-section-wrapper3'>
        <p>Follow Us</p>
        <p>Social media icons</p>

        <div class='row mt-4 justify-content-center'>
          <Fragment>
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />

            <div class='w-100'></div>

            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />

            <div class='w-100'></div>

            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
            <img src="http://placeholder.pics/svg/100x100" alt="Placeholder" />
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default LandingPage