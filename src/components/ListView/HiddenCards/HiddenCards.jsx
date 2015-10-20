/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/listview-actions';

import JobCard from '../JobCard/JobCard';
import QualificationCard from '../QualificationCard';
import InstitutionCard from '../InstitutionCard';

@connect((state) => {
  return {
    jobsCards: state._listViewData.data.JobsCards,
    qualificationsCard: state._listViewData.data.QualificationsPanel.Courses,
    institutionsCards: state._listViewData.data.InstitutionsPanel.Institutions
  }
})
class HiddenCards extends React.Component {

  render() {
    var { jobsCards, qualificationsCard, institutionsCards } = this.props;

    return (
      <div className="page-maincontent results-hidden">
        <div className="page-wrapper">
          <div className="careers-card-wrapper">
            {jobsCards.map(this.renderJobsCards)}
            {qualificationsCard.map(this.renderQualificationsCards)}
            {institutionsCards.map(this.renderInstitutionsCards)}
          </div>
        </div>
      </div>
    );
  }

  renderJobsCards = (jobCard, idx) => {
    if(jobCard.Closed) {
      return (
        <JobCard key={idx} id={idx} hidden="true"/>
      );
    }
  }

  renderQualificationsCards = (courseCard, idx) => {
    if(courseCard.Closed) {
      return (
        <QualificationCard key={idx} id={idx} hidden="true"/>
      );
    }
  }

  renderInstitutionsCards = (institutionCard, idx) => {
    if(institutionCard.Closed) {
      return (
        <InstitutionCard key={idx} id={idx} hidden="true"/>
      );
    }
  }

}

export default HiddenCards;