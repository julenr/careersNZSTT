/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Tooltip from 'rc-tooltip';
import { textFitToContainer } from '../../../libs/helpers.js';

function mapStateToProps(state, ownProps) {
  return {
    // This is needed here in order to show the flipping effect
    flipped: state._listViewData.data.JobsCards[ownProps.id].Flipped,
  };
}

class JobCard extends React.Component {

  render() {
    const { flipped, tooltips } = this.props;
    const jobCard = this.props.jobsCards[this.props.id];
    let classes = classNames( this.props.className, {
      'careers-card job': true,
      'careers-card job flip': flipped
    } );
    const style = flipped ? {} : {
      fontSize: textFitToContainer(jobCard.Title) + 'px'
    }
    return (
      <div>
        <article className={ classes }>
          <div className="card front">
            <div className="liner">
              <header>
                <h3 className="title" style={style}>{jobCard.Title}</h3>
                <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span
                  className="icon-cross"></span></a>
                <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard}
                   title="Show this job in my list again"><span
                  className="icon-plus-circle"></span></a>

                <div className="sectors">
                  <a href="javascript: void 0" onClick={this.props.openVocationalPathwaysModal}>
                    <ul>
                      { _.map(jobCard.VocationalPathways, this.renderPathwaySwatch) }
                    </ul>
                    <span className="more">More</span>
                  </a>
                </div>
              </header>
              <div className="image">
                <img src={jobCard.Image} alt={`Image for ${jobCard.Title}`} width="317" height="201"/>
              </div>
              <div className="layout-row">
                <dl>
                  <dt>Skills match:</dt>
                  <dd><span
                    className={`progress-bar-status amount-${this.roundProgressBarValues(jobCard.SkillsMatch)}`}>{jobCard.SkillsMatch}%</span>
                  </dd>
                  <dt>Interests:</dt>
                  <dd><span
                    className={`progress-bar-status amount-${this.roundProgressBarValues(jobCard.Interest)}`}>{jobCard.Interest}%</span>
                  </dd>
                  <dt>Demand:</dt>
                  <dd><span
                    className={`progress-bar-status amount-${this.roundProgressBarValues(jobCard.Demand)}`}>{jobCard.Demand}%</span>
                  </dd>
                  <dt>Pay:</dt>
                  {
                    this.renderPay(jobCard)
                    }
                </dl>
                <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>More about this job <span
                  className="icon-refresh"></span></a>
              </div>
            </div>
            <footer>
              <a className="card-actions" href="javascript: void 0" onClick={this.showQualificationsPanel}>
                How do I train for this job?
              </a>
              <a className="card-actions reinstate-card" href="javascript: void 0" onClick={this.openCard}>
                Show this job in my list again
              </a>
            </footer>
          </div>

          <div className="card back">
            <div className="liner">
              <header>
                <h3 className="title" >{jobCard.Title}</h3>
                <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span
                  className="icon-cross"></span></a>
              </header>
              <div className="description">{jobCard.Description}</div>
              <a className="action-skills-match divider"
                 href="javascript: void 0"
                 onClick={() => this.props.openMatchSkillsModal(this.props.id)}
                >
                See your <em>skills match</em> for this job
              </a>
              <dl>
                <dt>Interests:</dt>
                <dd>{jobCard.Interests}</dd>
                <dt>Work conditions:</dt>
                <dd>{jobCard.WorkConditions}</dd>
                <dt>Vocational pathways:&nbsp;
                  <Tooltip
                    animation="zoom"
                    trigger="click"
                    overlayClassName="job-card-tooltip"
                    overlay={
                      <div className="field radio with-avatar">
                        {tooltips.JobCardVocationalPathways}
                      </div>
                      }
                    >
                    <span className="icon-help tooltip" title={tooltips.JobCardVocationalPathways} />
                  </Tooltip>
                </dt>
                <dd>
                  <ul className="sector-simple-list">
                      { _.map(jobCard.VocationalPathways, this.renderPathwaySwatch) }
                  </ul>
                </dd>
              </dl>
              <div className="layout-row divider">
                <a className="action-joblink-external" href={jobCard.Link}>Full job info on Careers NZ
                  website</a>
                <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>
                  Go back <span className="icon-refresh"></span>
                </a>
              </div>
            </div>
            <footer>
              <a className="card-actions" href="javascript: void 0" onClick={this.showQualificationsPanel}>How do I train for this job?</a>
            </footer>
          </div>
        </article>
      </div>
    );
  }

  renderPay = (jobCard) => {
    switch (jobCard.PerTime.toLowerCase()){
      case 'per year': {
        return <dd>{jobCard.Pay}<br/>{jobCard.PerTime.toLowerCase()}</dd>
      }
      case 'per hour': {
        return <dd>{jobCard.Pay}<br/>{jobCard.PerTime.toLowerCase()}</dd>
      }
      default:
        return <dd>Varied</dd>

    }
  }

  renderPathwaySwatch = (title, idx) => {
    return (<li title={title} key={idx} className={`sector-${this.props.vocationalPathways[title]}`}>{title}</li>);
  }

  preventDefault = (e) => {
    e.preventDefault();
  }

  show = {
    visible: false
  };

  handleVisibleChange = (visible) => {
    this.show = { visible: visible }
  };

  showQualificationsPanel = () => {
    this.props.closeInstitutionsPanel();
    this.props.setCurrentJobID(this.props.id);
    this.props.setSplitIndexCardPoint(this.props.id, 'Job');
    this.props.getQualificationsByJob(this.props.jobsCards[this.props.id].SubJobID);
    this.props.openQualificationsPanel();
  }

  flipCard = () => {
    this.props.flipJobCard(this.props.id);
  }

  closeCard = () => {
    this.props.setCurrentJobID(this.props.id)
    this.props.openRemoveJobCardModal();
  }

  openCard = () => {
    this.props.openJobCard(this.props.id);
  }

  roundProgressBarValues = (Value) => {
    return (Math.round(Value/10)*10);
  }
}

export default connect(
  mapStateToProps
)(JobCard);