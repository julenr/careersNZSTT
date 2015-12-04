/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import JobCard from '../JobCard/JobCard';
import QualificationCard from '../QualificationCard';
import InstitutionCard from '../InstitutionCard';

class HiddenCards extends React.Component {

  render() {
    const { jobsCards, qualificationsPanel, institutionsPanel, hiddenPanel } = this.props;
    let classes = classNames(
      {
      'page-maincontent results-hidden': true,
      'page-maincontent results-hidden active': !hiddenPanel.Closed
    } );
    let arrow = classNames(
      {
        'active': !hiddenPanel.Closed
      } );

    return (
      <div className={ classes }>
        <div className="page-wrapper">
          <div className="results-hidden-link">
            <a href="javascript: void 0" className={arrow} onClick={this.props.swapHiddenPanelVisible}>
              Hidden jobs/courses
              <span className="icon-arrow-down-long"></span>
            </a>
          </div>
          <div className="careers-card-wrapper">
            <div className="careers-card-wrapper">
              <ReactCSSTransitionGroup
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionName={{
                enter: 'animated',
                enterActive: 'fadeIn',
                leave: 'animated',
                leaveActive: 'fadeOut'
                }}
                >
                {jobsCards.map(this.renderJobsCards)}
                {qualificationsPanel.Courses.map(this.renderQualificationsCards)}
                {institutionsPanel.CourseCards.map(this.renderInstitutionsCards)}
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