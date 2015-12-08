/**
 * Created by jr1500.
 */

import React from 'react';
import Tooltip from 'rc-tooltip';

class MainPanel extends React.Component {

  render() {
    const { CourseTitle, ProviderName, Intro, Blurb, Summary } = this.props.course.CourseDetails;

    return (
      <article className="course-detail">
        <header>
          <h1>{CourseTitle}<span className="location">{ProviderName}</span></h1>
        </header>
        <div className="layout-row">
          <div className="layout-col-7 layout-col">
            <div className="course-intro" dangerouslySetInnerHTML={{__html: Intro}}/>
            <figure className="intro-image" dangerouslySetInnerHTML={{__html: Blurb}} />
            <ul className="course-links">
              <li><a href="#panel-next-steps"><strong>Take the next step</strong> <span className="icon-arrow-down"></span></a></li>
              <li><a href="#panel-worried-about">I'm worried about something <span className="icon-arrow-down"></span></a></li>
              <li><a href="#panel-jobs">Which jobs can I get with this course?<span className="icon-arrow-down"></span></a></li>
            </ul>
          </div>
          <div className="layout-col-5 layout-col">
            <dl className="course-summary">
              <dt>Level:</dt>
              <dd>{Summary.Level}&nbsp;
                <Tooltip
                  animation="zoom"
                  trigger="click"
                  overlayStyle={{zIndex:1000}}
                  overlayClassName="job-card-tooltip"
                  overlay={
                      <div className="field radio with-avatar">
                        {this.props.tooltips.CourseDetailsLevel}
                      </div>
                      }
                  >
                  <span className="icon-help tooltip" />
                </Tooltip>
              </dd>
              <dt>Location:</dt>
              <dd>{Summary.Location}</dd>
              <dt>Vocational pathways:&nbsp;
                <Tooltip
                  animation="zoom"
                  trigger="click"
                  overlayStyle={{zIndex:1000}}
                  overlayClassName="job-card-tooltip"
                  overlay={
                    <div className="field radio with-avatar">
                      {this.props.tooltips.CourseDetailsVocationalPathways}
                    </div>
                    }
                  >
                  <span className="icon-help tooltip" />
                </Tooltip>
              </dt>
              <dd>
                <ul className="sector-simple-list">
                  {Summary.VocationalPathways.map(this.renderVocationalPathways)}
                </ul>
              </dd>
            </dl>
            <ul className="course-links">
              <li><a href="#">More information on the Careers NZ website <span className="icon-arrow-right"></span></a></li>
            </ul>
          </div>
        </div>
      </article>
    );
  }

  renderVocationalPathways = (item, idx) => {
    return (
      <li key={idx} title={item} className="sector-yellow">{item}</li>
    );
  }

}

export default MainPanel;
