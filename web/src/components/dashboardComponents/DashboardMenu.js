import React from 'react'
import purpleLogo from '../../images/purplelogo.svg'
import './DashboardMenu.css';


function DashboardMenu({
  activeTab,
  setActiveTab,
  signOut
}) {
  return ( 
    <div className="row py-4 background-purple side-menu text-center">
      <h3 className="col-s-6 col-md-12 white-heading">Admin Dashboard</h3>
      <div className="overflow text-center mb-4">
        <img className="logo col-s-6 col-md-12 w-75" src={ purpleLogo } />
      </div>
      <div className="col-6 col-md-12 p-0 mb-2">
        <a href="javascript:void(0);" onClick={ (event) => { setActiveTab('asda') } } className="sidemenu-button">
          Home
        </a>
      </div>
      <div className="col-6 col-md-12 p-0 mb-2">
        <a href="javascript:void(0);" onClick="" className="sidemenu-button">
          Upload New Content
        </a>
      </div>
      <div className="col-6 col-md-12 p-0 mb-2">
        <a href="javascript:void(0);" onClick="" className="sidemenu-button">
          View/Edit Content
        </a>
      </div>
      <div className="col-6 col-md-12 p-0 mb-2">
        <a href="javascript:void(0);" onClick="" className="sidemenu-button">
          Email Subscribers
        </a>
      </div>
      <div className="col-6 col-md-12 p-0 mb-2">
        <a href="javascript:void(0);" onClick={ (event) => { signOut() } } className="sidemenu-button">
          Logout
        </a>
      </div>

    </div>
  )
}

export default DashboardMenu