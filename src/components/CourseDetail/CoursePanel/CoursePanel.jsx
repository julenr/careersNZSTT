/**
 * Created by jr1500.
 */

import React from 'react';
import InstitutionCard from './InstitutionCard';

const CoursePanel = (props) => {
  const { Title, Institutions } = props.course.Courses;

  return (
    <div className="course-panel jobs" id="panel-course">
      <h2>{Title}</h2>

      <div className="careers-card-wrapper">
        {Institutions.map((item, idx) => renderInstitutionsCards(item, idx, props))}
      </div>

      <div className="panel-options">
        {/*<a href="javascript:void 0" className="button show-more">Show more courses</a>*/}
      </div>
    </div>
  );
}

const renderInstitutionsCards = (institutionCard, idx, props) => {
  return (
    <InstitutionCard key={idx} id={idx} courseCard={institutionCard} getCourseDetails={props.getCourseDetails} />
  );
}

export default CoursePanel;
