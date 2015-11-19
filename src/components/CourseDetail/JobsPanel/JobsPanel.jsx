/**
 * Created by jr1500.
 */

import React from 'react';
import JobCard from './JobCard';

const JobsPanel = (props) => {
  const { Title, JobsCards } = props.course.Jobs;

  return (
    <div className="course-panel jobs" id="panel-jobs">
      <h2>{ Title }</h2>
      <div className="careers-card-wrapper">
        {JobsCards.map(renderJob)}
      </div>
      <div className="panel-options">
        <a href="#" className="button show-more">Show more jobs</a>
      </div>
    </div>
  );

}

const renderJob = (job, idx) => {
  return (
    <JobCard key={idx} id={idx} jobCard={job} />
  );
}

export default JobsPanel;
