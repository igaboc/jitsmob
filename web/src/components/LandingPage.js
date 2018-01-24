import React, { Fragment } from 'react';
import './LandingPage.css';
import './../images/SpineMobs.png' /*Hero image with transparent background*/
import Tao from './../images/AboutMePhoto.png'
import Laptop from './../images/Laptop.svg'
import Mobility from './../images/Mobility.svg'
import Strength from './../images/Strength.svg'
import InjuryPrevention from './../images/InjuryPrevention.svg'
import { Link } from 'react-router-dom'

function LandingPage({
  onClickSubscribe,
  onClickMobilityVideos,
  onClickStrengthVideos,
  onClickInjuryPreventionVideos,
}) {
  return (
    <div className='fonts'>
      <Fragment>
        <div className='landing-section-wrapper0'>
          <div className='wrapper0-image'>
            <div className='wrapper0-opacity'>
              <div className='wrapper0-padding'>
                <div className='landing-page-text'>
                  <div className='responsive-group'>
                    <div className='responsive-row-main'>
                      <h3 className='landing-page-para wrapper0-text'>BOOST YOUR</h3>
                      <h2 className='landing-page-para'>Jiu-Jitsu Performance</h2>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      <Fragment>
        <div className='landing-section-wrapper1'>
          <div className='landing-page-text'>
            <div className='responsive-group'>
              <div className='responsive-row-description wrapper1-text-spacing'>
                <img className='mobility-image' src={Mobility} alt="Mobility Icon" />
                <h3 className='landing-page-para'>Mobility</h3>
                <p>Range of Motion is optimized through the strengthening of ligaments and tendons while simultaneously removing excess fascia through specific stretching routines.</p>
                <Link to='/exercises' className='responsive-button1 btn-purple watch-videos' onClick={(event) => { onClickMobilityVideos() }} >Watch Mobility Videos Now</Link>
                <br />
              </div>
              <div className='responsive-row-description wrapper1-text-spacing'>
                <img className='injury-prevention-image' src={InjuryPrevention} alt="Injury Prevention Icon" />
                <h3 className='landing-page-para'>Injury Prevention</h3>
                <p>Recovery is increased through the natural release of hyaluronic acid while simultaneously resetting the central nervous system.</p>
                <span> <Link to='/exercises' className='responsive-button3 btn-purple watch-videos' onClick={(event) => { onClickInjuryPreventionVideos() }}>Watch Injury Prevention Videos Now</Link></span>
                <br />
              </div>
              <div className='responsive-row-description wrapper1-text-spacing'>
                <img className='strength-image' src={Strength} alt="Strength Icon" />
                <h3 className='landing-page-para'>Improve Strength</h3>
                <p>Increased range of motion can generate power and promote efficiency of functional movements through improved position and posture.</p>
                <Link to='/exercises' className='responsive-button2 btn-purple watch-videos' onClick={(event) => { onClickStrengthVideos() }}>Watch Strength Videos Now</Link>
                <br />
              </div>
              <br />
            </div>
            <h3>Want to be kept up-to-date with any new content</h3>
            <div className='pt-2'>
              <span className="subscribe-landing btn-purple" onClick={(event) => { onClickSubscribe() }}>SUBSCRIBE HERE</span>
            </div>
            <div className='icon-credits pt-4'>
              <br />
              <div>Icons made by <a className='icon-credits' href="http://www.freepik.com" title="Freepik">Freepik</a> from <a className='icon-credits' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a className='icon-credits' href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
              <div>Icons made by <a className='icon-credits' href="https://www.flaticon.com/authors/picol" title="Picol">Picol</a> from <a className='icon-credits' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a className='icon-credits' href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
          </div>
        </div>
      </Fragment>

      <Fragment>
        <div className='landing-section-wrapper2' id="about">
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
      </Fragment>

      <Fragment>
        <div className='landing-section-wrapper3'>
          <div className='landing-page-text'>
            <h2>NEW APPLICATION COMING SOON</h2>
            <p>Be among the first to know</p>
            <div className='pb-3 mb-3'>
              <span className="subscribe-landing btn-purple" onClick={(event) => { onClickSubscribe() }}>SUBSCRIBE FOR UPDATES</span>
            </div>
            <img className='wrapper3-laptop-image' alt="Laptop" src={Laptop} />
          </div>
        </div>

      </Fragment>


    </div>
  )
}

export default LandingPage