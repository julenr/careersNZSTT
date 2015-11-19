/**
 * Created by jr1500.
 */

import React from 'react';

class CoursePanel extends React.Component {

  render() {
    return (
      <div className="course-panel jobs" id="panel-course">
        <h2>Other providers who offer this course:</h2>

        <div className="careers-card-wrapper">
          include('includes/course-card.php');
          include('includes/course-card.php');
          include('includes/course-card.php');
        </div>

        <div className="panel-options">
          <a href="#" className="button show-more">Show more courses</a>
        </div>

      </div>
    );
  }

}

export default CoursePanel;
