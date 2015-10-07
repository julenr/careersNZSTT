/**
 * Created by jr1500 on 30/09/15.
 */
import './Header.scss';
import React from 'react';
import { Router, Route, Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <header className="page-header" id="top">
        <div className="page-wrapper">
          <Link to="/" className="home-logo" title="Return to the Change Up home page. ">Change Up</Link>
          <a href="http://www.careersnz.govt.nz/" className="careersnz-logo" title="Visit the Careers New Zealand home page. ">Careers New Zealand</a>
          <img src={require('../../assets/images/logos/skills-transition-tool-logo-print.png')} width="200" className="print" alt="" />
          <nav className="header-tools">
            <ul>
              <li className="tool-edit"><a href="#">Edit</a>
                <ul>
                  <li><Link to="/questions">Edit your skills</Link></li>
                  <li><a href="#">Edit your preferences</a></li>
                </ul>
              </li>
              <li className="tool-save"><a href="#">Save</a></li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
      </header>
    );
  }
}

export default Header;