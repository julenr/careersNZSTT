/**
 * Created by jr1500.
 */

import React from 'react';
import JobCard from './JobCard';
import MatchSkillsModalCourseDetail from './MatchSkillsModalCourseDetail';

const JobsPanel = (props) => {
  const { Title, JobsCards } = props.course.Jobs;

  return (
    <div className="course-panel jobs" >
      <h2>{ Title }</h2>
      <div className="careers-card-wrapper">
        {JobsCards.map((job, idx) => renderJob(job, idx, props))}
      </div>
      <div className="panel-options">
      </div>
      <MatchSkillsModalCourseDetail {...props}/>
    </div>
  );

}

const renderJob = (job, idx, props) => {
  return (
    <JobCard key={idx} id={idx}
             jobCard={job}
             openMatchSkillsModal={props.openMatchSkillsModal}
             vocationalPathways={props.vocationalPathways}
             tooltips={props.tooltips}

    />
  );
}

export default JobsPanel;
