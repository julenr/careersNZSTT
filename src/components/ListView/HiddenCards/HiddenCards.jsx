/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import JobCard from '../JobCard/JobCard';
import QualificationCard from '../QualificationCard';
import InstitutionCard from '../InstitutionCard';

class HiddenCards extends React.Component {

  render() {
    var { jobsCards, qualificationsPanel, institutionsPanel } = this.props;

    return (
      <div className="page-maincontent results-hidden">
        <div className="page-wrapper">
          <div className="careers-card-wrapper">
            {jobsCards.map(this.renderJobsCards)}
            {qualificationsPanel.Courses.map(this.renderQualificationsCards)}
            {institutionsPanel.Institutions.map(this.renderInstitutionsCards)}
          </div>
        </div>
      </div>
    );
  }

  renderJobsCards = (jobCard, idx) => {
    if(jobCard.Closed) {
      return (
        <JobCard key={idx} id={idx} hidden="true" {...this.props}/>
      );
    }
  }

  renderQualificationsCards = (courseCard, idx) => {
    if(courseCard.Closed) {
      return (
        <QualificationCard key={idx} id={idx} hidden="true" {...this.props}/>
      );
    }
  }

  renderInstitutionsCards = (institutionCard, idx) => {
    if(institutionCard.Closed) {
      return (
        <InstitutionCard key={idx} id={idx} hidden="true" {...this.props}/>
      );
    }
  }

}

export default HiddenCards;