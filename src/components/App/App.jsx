/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/general-actions';

import Header from '../Header/Header.jsx';

function mapStateToProps(state) {
  return {
    showSkillsModal: state._footerData.showSkillsModal,
    showAddSkillsModal: state._footerData.showAddSkillsModal,
    showCheckSkillsModal: state._footerData.showCheckSkillsModal,
    skillsSelected: state._questionnaire.data.Skills.Selected,
    popularSkillsLoading: state._footerData.data.PopularJobs.Loading,

    popularSkillsSelected: state._footerData.data.PopularJobs.Skills,
    popularJobs: state._footerData.data.PopularJobs,

    popularJobsVisible: state._footerData.data.PopularJobs.Visible,
    typeAheadItemsContainer: state._questionnaire.TypeAheadItemsContainer,
    refresh: state._questionnaire.data.refresh // This value if changed somewhere triggers the component render method
  };
}

class App extends React.Component {
  render() {
    return (
      <div id="shell">
        <Header {...this.props} />
        {this.props.children || 'Welcome to Careers NZ'}
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  actionCreators
)(App);

