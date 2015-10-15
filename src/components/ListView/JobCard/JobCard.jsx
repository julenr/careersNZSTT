/**
 * Created by jr1500 on 30/09/15.
 */

import './JobCard.scss';

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state, props) => {
  return {
    jobCard: state._getJobs.data.JobsCards[props.id]
  }
})
class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fliped: this.props.fliped};
  }

  click = () => {
    console.log('clicked');
    this.setState({fliped: !this.state.fliped});
  }

  render() {
    let { jobCard } = this.props;
    let classes = classNames( this.props.className, {
      'careers-card job': true,
      'careers-card job flip': this.state.fliped
    } );
    return (
      <div>
        <article  className={ classes }>
          <div className="card front">
            <div className="liner">
              <header>
                <h3 className="title">{jobCard.Title}</h3>
                <a href="#" className="action-remove" onClick={this.closeButtonClick}><span className="icon-cross"></span></a>
                <a href="#" className="action-reinstate" title="Show this job in my list again"><span className="icon-plus-circle"></span></a>
                <div className="sectors">
                  <a href="#">
                    <ul>
                      <li title="Manufacturing and technology" className="sector-yellow">Manufacturing and technology</li>
                      <li title="Construction and infrastructure" className="sector-blue">Construction and infrastructure</li>
                    </ul>
                    <span className="more">More</span>
                  </a>
                </div>
              </header>
              <div className="image">
                <img src={jobCard.Image} alt="Add alt text. " width="317" height="201" />
              </div>
              <div className="layout-row">
                <dl>
                  <dt>Skills match:</dt>
                  <dd><span className={`progress-bar-status amount-${jobCard.SkillsMatch}`}>{jobCard.SkillsMatch}%</span></dd>
                  <dt>Interests:</dt>
                  <dd><span className={`progress-bar-status amount-${jobCard.Interest}`}>{jobCard.Interest}%</span></dd>
                  <dt>Demand:</dt>
                  <dd><span className={`progress-bar-status amount-${jobCard.Demand}`}>{jobCard.Demand}%</span></dd>
                  <dt>Pay:</dt>
                  <dd>{jobCard.Pay}<br/>{jobCard.PerTime}</dd>
                </dl>
                  <span className="action-flip" href="#" onClick={this.click}>More about this job <span className="icon-refresh"></span></span>
              </div>
            </div>
            <footer>
              <a className="card-actions" href="#">How do I train for this job?</a>
              <a className="card-actions reinstate-card" href="#">Show this job in my list again</a>
            </footer>
          </div>

          <div className="card back">
            <div className="liner">
              <header>
                <h3 className="title">{jobCard.Title}</h3>
                <a href="#" className="action-remove"><span className="icon-cross"></span></a>
              </header>
              <div className="description">{jobCard.Description}</div>
              <a href="#" className="action-skills-match divider">See your <em>skills match</em> for this job</a>
              <dl>
                <dt>Interests:</dt>
                <dd>{jobCard.Interests}</dd>
                <dt>Work conditions:</dt>
                <dd>{jobCard.WorkConditions}</dd>
                <dt>Vocational pathways: <span className="icon-help tooltip" title="This is a tooltip">&nbsp;</span></dt>
                <dd>
                  <ul className="sector-simple-list">
                    <li className="sector-purple">{jobCard.VocationalPathways}</li>
                  </ul>
                </dd>
              </dl>
              <div className="layout-row divider">
                <a className="action-joblink-external" href="#">Full job info on Careers NZ website</a>
                <span className="action-flip" href="#" onClick={this.click}>
                  Go back <span className="icon-refresh"></span>
                </span>
              </div>
            </div>
            <footer>
              <a className="card-actions" href="#">How do I train for this job?</a>
            </footer>
          </div>
        </article>
      </div>
    );
  }

  closeButtonClick = () => {
    this.props.dispatch(actionCreators.jobClosed(this.props.id));
    //this.forceUpdate();
  }
}

export default JobCard;