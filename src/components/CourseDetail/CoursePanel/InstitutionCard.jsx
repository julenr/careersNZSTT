/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

class InstitutionCard extends React.Component {

  render() {
    let { courseCard } = this.props;
    return (
      <article className="careers-card course">
        <div className="card front">
          <div className="liner">
            <header>
              <h3 className="title">{courseCard.Title}</h3>
            </header>
            <dl className="divider">
              <dt>Location:</dt>
              <dd>{courseCard.Location}</dd>
            </dl>
            <Link className="button" to="/course-detail" onClick={() => this.linkClick(courseCard.CourseID)}>
              <span>View this course
                <span className="icon-arrow-right"></span>
              </span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  linkClick = (courseID) => {
    this.props.getCourseDetails(courseID);
  }
}

export default InstitutionCard;