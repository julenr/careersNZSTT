/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

import JobCard from '../JobCard/JobCard';
import CourseCard from '../CourseCard';
import InstitutionCard from '../InstitutionCard';

@connect((state, props) => {
  return {
    jobsCards: state._listViewData.data.JobsCards,
    courseCards: state._listViewData.data.CourseOptionPanel.Courses,
    institutionsCards: state._listViewData.data.InstitutionsPanel.Institutions
  }
})
class HiddenCards extends React.Component {

  render() {
    var { jobsCards, courseCards, institutionsCards } = this.props;

    return (
      <div className="page-maincontent results-hidden">
        <div className="page-wrapper">
          <div className="careers-card-wrapper">
            {jobsCards.map(this.renderJobsCards)}
            {courseCards.map(this.renderCoursesCards)}
            {institutionsCards.map(this.renderInstitutionsCards)}
          </div>
        </div>
      </div>
    );
  }

  renderJobsCards(jobCard, idx) {
    if(jobCard.Closed)
      return (
        <JobCard key={idx} id={idx} hidden="true"/>
      );
    else
      return;
  }

  renderCoursesCards(courseCard, idx) {
    if(courseCard.Closed)
      return (
        <CourseCard key={idx} id={idx} hidden="true"/>
      );
    else
      return;
  }

  renderInstitutionsCards(institutionCard, idx) {
    if(institutionCard.Closed)
      return (
        <InstitutionCard key={idx} id={idx} hidden="true"/>
      );
    else
      return;
  }
}

export default HiddenCards;