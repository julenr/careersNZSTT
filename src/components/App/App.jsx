/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/general-actions';
import { getListViewData, addSkillToQuestion } from '../../redux/questionnaire-actions.js';
import { resetListViewState } from '../../redux/listview-actions.js';

import Header from '../Header/Header.jsx';

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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    getListViewData,
    addSkillToQuestion
  }
)(App);

