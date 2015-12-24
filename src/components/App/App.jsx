/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { connect } from '../../libs/react-redux';
import { Router, Route, Link } from 'react-router';

import * as actionCreators from '../../redux/general-actions';
import { getListViewData, addSkillToQuestion, closeLoginModal, logIn, resetLoginUserID } from '../../redux/questionnaire-actions.js';
import { resetListViewState } from '../../redux/listview-actions.js';

import Header from '../Header/Header.jsx';
import Login from '../Modals/Login.jsx';
import DetailsSaved from '../Modals/DetailsSaved.jsx';
import ResetToolModal from '../Modals/ResetToolModal.jsx';

function mapStateToProps(state) {
  return {
    showSkillsModal: state._footerData.showSkillsModal,
    showAddSkillsModal: state._footerData.showAddSkillsModal,
    addSkillsToQuestionID: state._footerData.addSkillsToQuestionID,
    showCheckSkillsModal: state._footerData.showCheckSkillsModal,
    skillsSelected: state._questionnaire.data.Skills.Selected,
    popularSkillsLoading: state._footerData.data.PopularJobs.Loading,
    popularSkillsSelected: state._footerData.data.PopularJobs.Skills,
    popularJobs: state._footerData.data.PopularJobs,
    currentRoute: state._mainPage.currentRoute,
    popularJobsVisible: state._footerData.data.PopularJobs.Visible,
    typeAheadItemsContainer: state._questionnaire.TypeAheadItemsContainer,
    showLoginModal: state._questionnaire.showLoginModal,
    loginForm: state._footerData.data.LoginForm,
    showDetailsSavedModal: state._questionnaire.showDetailsSavedModal,
    showResetToolModal: state._footerData.showResetToolModal,
    vocationalPathwaysModal: state._footerData.data.VocationalPathwaysModal,
    showVocationalPathwaysModal: state._footerData.ShowVocationalPathwaysModal,
    vocationalPathways: state._footerData.data.VocationalPathways,
    member: state._questionnaire.data.Member,
    resetModal: state._footerData.data.ResetModal,
    refresh: state._questionnaire.data.refresh // This value if changed somewhere triggers the component render method
  };
}

class App extends React.Component {
  render() {
    //nb. js class is necessary to work with the stylesheet we've been given...
    return (
      <div id="shell" className="js">
        <Header {...this.props} />
        {this.props.children || 'Welcome to Careers NZ'}
        <Login {...this.props}/>
        <DetailsSaved {...this.props}/>
        <ResetToolModal {...this.props}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    getListViewData,
    addSkillToQuestion,
    closeLoginModal,
    logIn,
    resetLoginUserID,
    resetListViewState
  }
)(App);

