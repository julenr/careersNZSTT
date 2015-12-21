/**
 * Created by jr1500 on 30/09/15.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router';

import scrollTo from '../../libs/scrollTo/scrollTo.js';
import EditSkillsModal from '../Modals/EditSkills.jsx';
import AddSkillsModal from '../Modals/AddSkills';
import CheckSkillsModal from '../Modals/CheckSkills';
import VocationalPathwaysModal from '../Modals/VocationalPathwaysModal';

class Header extends React.Component {
  render() {
    return (
      <header className="page-header" id="top">
        <div className="page-wrapper">
          <Link to="/" className="home-logo" title="Return to the Skills Builder home page. ">Skills Builder</Link>
          <a href="http://www.careersnz.govt.nz/" className="careersnz-logo" title="Visit the Careers New Zealand home page. ">Careers New Zealand</a>
          <img src={require('../../assets/images/logos/skills-transition-tool-logo-print.png')} width="295" height="35" className="print" alt="" />
          <nav className="header-tools">
            <ul>
              <li className="tool-edit"><a href="javascript:void 0">Edit</a>
                {
                  (this.props.currentRoute === 'ListView') ?
                    this.renderListViewMenu() : ''
                }
                {
                  (this.props.currentRoute === 'CourseDetail') ?
                    this.renderCourseDetailMenu() : ''
                  }
                {
                  (this.props.currentRoute === 'Questionnaire' && this.props.member.UserID === null && false) ?
                    this.renderQuestionnaireMenu() : ''
                }
              </li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>
        <EditSkillsModal {...this.props}/>
        <AddSkillsModal {...this.props}/>
        <CheckSkillsModal {...this.props}/>
        <VocationalPathwaysModal {...this.props} />
      </header>
    );
  }

  renderCourseDetailMenu = () => {
    return (
      <ul>
        {
          (this.props.member.UserID === null && false) ?
            <li><a href="javascript: void 0" onClick={this.props.openLoginModal}>Save</a></li>
            :
            ''
          }
      </ul>
    );
  };

  renderQuestionnaireMenu = () => {
    return (
      <ul>
        <li><a href="javascript: void 0" onClick={this.props.openLoginModal}>Load saved details</a></li>
      </ul>
    );
  };

  renderListViewMenu = () => {
    return (
      <ul>
        <li><a href="javascript: void 0" onClick={this.props.openSkillsModal}>Edit your skills</a></li>
        <li><a href="javascript: void 0" onClick={() => scrollTo('preferences-panel', -70)}>Edit your preferences</a></li>
        {
          (this.props.member.UserID === null && false) ?
            <li><a href="javascript: void 0" onClick={this.props.openLoginModal}>Save</a></li>
            :
            ''
          }
      </ul>
    );
  }
}

export default Header;