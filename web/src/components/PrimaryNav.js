import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import jitsmobLogo from '../Grouplogo.svg';
import './PrimaryNav.css';
// import { NavLink } from 'react-router-dom'

function PrimaryNav({
  menuClassWidth,
  onMenuClick,

}) {
  return (
    <Fragment>

      <div className="topnav row py-2" id="myTopnav">
        <div className="col-2 text-center success">
          <img className="logo" src={jitsmobLogo} alt="JitsMob Logo" />
        </div>
        <div className="col-10 col-lg-9 pr-5">
          <a className="ml-4 pt-3 pb-2" href="/exercises">Exercises</a>
          <a className="mx-4 pt-3 pb-2" href="/admin">Admin (for now only)</a>
          <a className="mx-4 pt-3 pb-2" href="/signin">Login (for now only)</a>
          <span className="py-2 icon" onClick={(event) => { onMenuClick() }}>&#9776;</span>
        </div>
        <div className="col-lg-1" />
      </div>


      <div className={`overlay ${menuClassWidth}`}>
        <a href="no-script-url: 0" className="closebtn" onClick={(event) => { onMenuClick() }} >&times;</a>
        <div className="overlay-content">
          <a href="/admin">Admin (for now only)</a>
          <a href="/signin">Login (for now only)</a>
          <a href="/exercises">Exercises</a>
          <a href="/">Home</a>
          <a href="contact">Contact</a>
        </div>
      </div>
    </Fragment>
  );
}


export default PrimaryNav;
