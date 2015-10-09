/**
 * Created by jr1500.
 */

import './Footer.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router';

class AppFooter extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-wrapper">
          <div className="layout-col-3 layout-col">
            <div className="site-name">
              Name of tool is a website that helps you find a course and a better job based on the skills you have and the things you want from work and study.
            </div>
          </div>
          <div className="layout-col-6 layout-col">
            <nav className="nav-footer">
              <ul>
                <li><Link to="/providerconnect">Test Provider &amp; Connect</Link></li>
                <li><a href="/">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </nav>
          </div>
          <div className="layout-col-3 layout-col">
            <div className="logo-title">Proudly brought to you by</div>
            <ul className="footer-logos">
              <li className="careers-nz"><a href="http://www.careersnz.govt.nz/" className="careersnz-logo" title="Visit the Careers New Zealand home page. "><img src={require('../../assets/images/logos/careersnz-logo.png')} width="138" height="50" alt="Careers New Zealand logo" /></a></li>
              <li className="nz-govt"><a href="https://www.govt.nz/" title="newzealand.govt.nz - connecting you to New Zealand central and local government services."><img src={require('../../assets/images/logos/nz-govt-logo-large.png')} width="157" height="21" alt="New Zealand Government logo" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;