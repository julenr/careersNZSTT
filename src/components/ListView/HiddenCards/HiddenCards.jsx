/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import JobCard from '../JobCard/JobCard';
import QualificationCard from '../QualificationCard';
import InstitutionCard from '../InstitutionCard';

class HiddenCards extends React.Component {

  render() {
    var { jobsCards, qualificationsPanel, institutionsPanel } = this.props;

    return (
      <div className="page-maincontent results-hidden">
        <div className="page-wrapper">
          <div className="results-hidden-link">
            <a href="javascript: void 0">Hidden jobs/courses <span className="icon-arrow-down-long"></span></a>
          </div>
          <div className="careers-card-wrapper">
            <div className="careers-card-wrapper">
              <ReactCSSTransitionGroup
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionName={{
                enter: 'animated',
                enterActive: 'zoomIn',
                leave: 'animated',
                leaveActive: 'zoomOutUp'
                }}
                >
                {jobsCards.map(this.renderJobsCards)}
                {qualificationsPanel.Courses.map(this.renderQualificationsCards)}
                {institutionsPanel.Institutions.map(this.renderInstitutionsCards)}
              </ReactCSSTransitionGroup >
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderJobsCards = (jobCard, idx) => {
    if(jobCard.Closed) {
      return (
        <JobCard key={`jobCard${idx}`} id={idx} {...this.props}/>
      );
    }
  }

  renderQualificationsCards = (courseCard, idx) => {
    if(courseCard.Closed) {
      return (
        <QualificationCard key={`qualificationCard${idx}`} id={idx} {...this.props}/>
      );
    }
  }

  renderInstitutionsCards = (institutionCard, idx) => {
    if(institutionCard.Closed) {
      return (
        <InstitutionCard key={`institutionCard${idx}`} id={idx} {...this.props}/>
      );
    }
  }

}

export default HiddenCards;