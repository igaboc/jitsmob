import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import jitsmobLogo from '../Grouplogo.svg';
import './PrimaryNav.css';
import Subscribe from './Subscribe'
import { NavLink } from 'react-router-dom'

function PrimaryNav({
  menuClassWidth,
  onMenuClick,
  onClickSubscribe
}) {
  return (
    <Fragment>

      <div className="topnav row py-2" id="myTopnav">
        <div className="col-2 text-center success">
          <a href="/">
            <img className="logo" src={jitsmobLogo} alt="JitsMob Logo" />
          </a>
        </div>
        <div className="col-10 col-lg-9 pr-5">
        {/* <div>
          <Subscribe
          onClickSubscribe={(event) => onClickSubscribe()}
          buttonType='btn-purple'
          buttonDescription='Subscribe'
          />
        </div> */}
          {/* <a className="ml-4 pt-3 pb-2" href="/exercises">Exercises</a>
          <a className="mx-4 pt-3 pb-2" href="/admin">Admin (for now only)</a>
        <a className="mx-4 pt-3 pb-2" href="/signin">Login (for now only)</a> */}
          
          <span className="navlink mx-4 pt-3 pb-2" onClick={ (event) => {onClickSubscribe() }}><div className='btn-purple'>SUBSCRIBE</div></span>
          <NavLink activeClassName="active-navlink" className="navlink mx-4 pt-3 pb-2" exact to="/">Contact</NavLink>
          <NavLink activeClassName="active-navlink" className="navlink mx-4 pt-3 pb-2" to="/exercises">Workouts</NavLink>
          <NavLink activeClassName="active-navlink" className="navlink mx-4 pt-3 pb-2" to="/#about">About</NavLink>
          <span className="py-2 icon" onClick={(event) => { onMenuClick() }}>&#9776;</span>
        </div>
        <div className="col-lg-1" />
      </div>


      <div className={`overlay ${menuClassWidth}`}>
        <a href="no-script-url: 0" className="closebtn" onClick={(event) => { onMenuClick() }} >&times;</a>
        <div className="overlay-content">
          <a href="/">Home</a>
          <a href="/#about">About JitsMob</a>
          <a href="/exercises">Workouts</a>
          <a href="mailto:jitsmob@jitsmob.com">Contact Us</a>
          <span onClick={ (event) => {onClickSubscribe() }}>Subscribe</span>

        </div>
      </div>
    </Fragment>
  );
}


export default PrimaryNav;
