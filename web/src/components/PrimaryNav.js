import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import jitsmobLogo from '../Grouplogo.svg';
import './PrimaryNav.css';


function PrimaryNav({
  menuClassWidth,
  onMenuClick
}) {
  return (
  <Fragment>
  
    <div className="topnav row py-2" id="myTopnav">
      <div className="col-2 text-center success">
        <img className="logo" src={ jitsmobLogo } />
      </div>
      <div className="col-10 col-lg-9 pr-5">
        <a className="ml-4 pt-4 pb-2" href="#news">News</a>
        <a className="mx-4 pt-4 pb-2" href="#contact">Contact</a>
        <a className="mx-4 pt-4 pb-2" href="#about">About</a>
        <a className="mr-4 pt-4 pb-2 active" href="#home">Home</a>
        <a className="py-2 icon" href="javascript:void(0);" onClick={ (event) => { onMenuClick() } }>&#9776;</a>
      </div>
      <div className="col-lg-1"/>
    </div>
  

    <div className={`overlay ${ menuClassWidth }`}>
      <a href="javascript:void(0)" class="closebtn" onClick={ (event) => { onMenuClick() } } >&times;</a>
      <div className="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </Fragment>
  );
}


export default PrimaryNav;
