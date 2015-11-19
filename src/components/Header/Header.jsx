/**
 * Created by jr1500 on 30/09/15.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router';

import { scrollTo } from '../../libs/helpers';
import EditSkillsModal from '../Modals/EditSkills.jsx';
import AddSkillsModal from '../Modals/AddSkills.jsx';
import CheckSkillsModal from '../Modals/CheckSkills.jsx';

class Header extends React.Component {

  render() {
    return (
      <header className="page-header" id="top">
        <div className="page-wrapper">
          <Link to="/" className="home-logo" title="Return to the Change Up home page. ">Change Up</Link>
          <a href="http://www.careersnz.govt.nz/" className="careersnz-logo" title="Visit the Careers New Zealand home page. ">Careers New Zealand</a>
          <img src={require('../../assets/images/logos/skills-transition-tool-logo-print.png')} width="295" height="35" className="print" alt="" />
          <nav className="header-tools">
            <ul>
              <li className="tool-edit"><a href="#">Edit</a>
                {
                  (this.props.currentRoute === 'ListView') ?
                    this.renderListViewMenu()
                    :
                    ''
                }
              </li>
              {/* <li className="tool-save"><a href="#">Save</a></li> */ }
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
        <EditSkillsModal {...this.props}/>
        <AddSkillsModal {...this.props}/>
        <CheckSkillsModal {...this.props}/>
      </header>
    );
  }

  openSkillsModal = () => {
    this.props.openSkillsModal();
  }

  renderListViewMenu = () => {
    return (
      <ul>
        <li><a href="javascript: void 0" onClick={this.openSkillsModal}>Edit your skills</a></li>
        <li><a href="javascript: void 0" onClick={() => scrollTo('preferences-panel', -70)}>Edit your preferences</a></li>
      </ul>
    );
  }

}

export default Header;