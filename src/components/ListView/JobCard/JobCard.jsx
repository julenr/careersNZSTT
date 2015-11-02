/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    // This is needed here in order to show the flipping effect
    flipped: state._listViewData.data.JobsCards[ownProps.id].Flipped
  };
}

class JobCard extends React.Component {

  render() {
    let { hidden, flipped } = this.props;
    let jobCard = this.props.jobsCards[this.props.id];
    let classes = classNames( this.props.className, {
      'careers-card job': true,
      'careers-card job flip': flipped
    } );

    if(jobCard.Closed && !this.props.hidden) {
      return <span />;
    }
    else {
      return (
        <div>
          <article className={ classes }>
            <div className="card front">
              <div className="liner">
                <header>
                  <h3 className="title">{jobCard.Title}</h3>
                  <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span
                    className="icon-cross"></span></a>
                  <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard}
                     title="Show this job in my list again"><span
                    className="icon-plus-circle"></span></a>

                  <div className="sectors">
                    <a href="javascript: void 0">
                      <ul>
                        <li title="Manufacturing and technology" className="sector-yellow">
                          Manufacturing and technology
                        </li>
                        <li title="Construction and infrastructure" className="sector-blue">
                          Construction and infrastructure
                        </li>
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
                    <dd>{jobCard.Pay}<br/>{jobCard.PerTime}</dd>
                  </dl>
                  <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>More about this job <span
                    className="icon-refresh"></span></a>
                </div>
              </div>
              <footer>
                <a className="card-actions" href="javascript: void 0" onClick={this.showQualificationsPanel}>How do I train for this job?</a>
                <a className="card-actions reinstate-card" href="javascript: void 0" onClick={this.openCard}>Show
                  this job in my list again</a>
              </footer>
            </div>

            <div className="card back">
              <div className="liner">
                <header>
                  <h3 className="title">{jobCard.Title}</h3>
                  <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span
                    className="icon-cross"></span></a>
                </header>
                <div className="description">{jobCard.Description}</div>
                <a className="action-skills-match divider"
                   href="javascript: void 0"
                   onClick={() => this.props.openMatchSkillsModal(this.props.id)}
                  >
                  See your <em>skills match</em>for this job
                </a>
                <dl>
                  <dt>Interests:</dt>
                  <dd>{jobCard.Interests}</dd>
                  <dt>Work conditions:</dt>
                  <dd>{jobCard.WorkConditions}</dd>
                  <dt>Vocational pathways: <span className="icon-help tooltip"
                                                 title="This is a tooltip">&nbsp;</span></dt>
                  <dd>
                    <ul className="sector-simple-list">
                      <li className="sector-purple">{jobCard.VocationalPathways}</li>
                    </ul>
                  </dd>
                </dl>
                <div className="layout-row divider">
                  <a className="action-joblink-external" href="javascript: void 0">Full job info on Careers NZ
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
  }

  showQualificationsPanel = () => {
    this.props.closeInstitutionsPanel();
    this.props.openQualificationsPanel();
  }

  flipCard = () => {
    this.props.flipJobCard(this.props.id);
  }

  closeCard = () => {
    if(this.props.flipped){
      this.flipCard();
    }
    this.props.openRemoveJobCardModal(this.props.id);
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