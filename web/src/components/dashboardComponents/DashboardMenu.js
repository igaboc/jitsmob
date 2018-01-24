import React, {Fragment} from 'react';
import purpleLogo from '../../images/purplelogo.svg';
import './DashboardMenu.css';
import { NavLink } from 'react-router-dom'

function DashboardMenu({
  activeTab,
  setActiveTab,
  signOut,
}) {
  return (
    <Fragment>
      <div className=" background-purple text-center pt-4 row">
        <h3 className="col-s-6 col-md-12 white-heading">Admin Dashboard</h3>
      </div>
      <div className="row py-4 background-purple text-center background-purple side-menu">
        <div className="">
          <div className="row">
          <div className="overflow text-center mb-4">
            <img className="logo col-s-6 col-md-12 w-75" src={ purpleLogo } alt=""/>
          </div>
          <div className="col-6 col-md-12 p-0 mb-2">
            <NavLink exact to="/admin" className="sidemenu-button" activeClassName="admin-active" >
              Home
            </NavLink>
          </div>
          <div className="col-6 col-md-12 p-0 mb-2">
            <NavLink to="/admin/newcontent" className="sidemenu-button" activeClassName="admin-active">
              Upload New Content
            </NavLink>
          </div>
          <div className="col-6 col-md-12 p-0 mb-2">
            <NavLink to="/admin/mycontent" activeClassName="admin-active" className="sidemenu-button">
              View/Edit Content
            </NavLink>
          </div>
          <div className="col-6 col-md-12 p-0 mb-2">
            <NavLink to="/admin/contactsubscribers" activeClassName="admin-active" className="sidemenu-button">
              Email Subscribers
            </NavLink>
          </div>
          <div className="col-6 col-md-12 p-0 mb-2">
            <span onClick={ (event) => { signOut('adminToken') } } className="sidemenu-button">
              Logout
            </span>
          </div>
          </div>
        </div>
        
      </div>
    </Fragment>
  )
}

export default DashboardMenu