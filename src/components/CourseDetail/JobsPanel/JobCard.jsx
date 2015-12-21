/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Tooltip from 'rc-tooltip';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';
import { textFitToContainer } from '../../../libs/helpers.js';
import * as actionCreators from '../../../redux/coursedetail-actions';

function mapStateToProps(state, ownProps) {
  return {
    // This is needed here in order to show the flipping effect
    flipped: state._courseDetail.data.Jobs.JobsCards[ownProps.id].Flipped,
  };
}

class JobCard extends React.Component {

  render() {
    const { flipped, tooltips, jobCard } = this.props;
    let classes = classNames( this.props.className, {
      'careers-card job': true,
      'careers-card job flip': flipped
    } );
    const stylefront = {
      fontSize: textFitToContainer(jobCard.Title, 20, 39, 25)
    }
    const styleback = {
      fontSize: textFitToContainer(jobCard.Title, 13, 22, 45)
    }

    return (
      <div>
        <article className={ classes }>
          <div className="card front">
            <div className="liner">
              <header>
                <h3 className="title" style={stylefront}>{this.splitStringWithZeroWithCharacter(jobCard.Title, '/')}</h3>
                <div className="maori-title">{jobCard.MaoriTitle}</div>
                <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}>
                  <span className="icon-cross" /></a>
                <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard}
                   title="Show this job in my list again">
                  <span className="icon-plus-circle" />
                </a>
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
                  <dt>Demand:</dt>
                  <dd><span
                    className={`progress-bar-status amount-${this.roundProgressBarValues(jobCard.Demand)}`}>{jobCard.Demand}%</span>
                  </dd>
                  <dt className="pay">Pay:</dt>
                  {
                    this.renderPay(jobCard)
                    }
                </dl>
                <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>
                  More about this job <span className="icon-refresh" />
                </a>
              </div>
            </div>
            <footer>
              <span className="card-actions">&nbsp;</span>
            </footer>
          </div>

          <div className="card back">
            <div className="liner">
              <header>
                <h3 className="title" style={styleback}>{this.splitStringWithZeroWithCharacter(jobCard.Title, '/')}</h3>
                <div className="maori-title">{jobCard.MaoriTitle}</div>
                <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}>
                  <span className="icon-cross" /></a>
              </header>
              <div className="description">
                <div className="overflow">
                  {jobCard.Description}
                </div>
                <a className="action-skills-match divider"
                  href="javascript: void 0"
                  onClick={() => this.props.openMatchSkillsModal(this.props.id)}
                >Compare the skills you have with the skills you need for this job.</a>
              </div>
              <dl>
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
              <span className="card-actions">&nbsp;</span>
            </footer>
          </div>
        </article>
      </div>
    );
  }

  renderPay = (jobCard) => {
    switch (jobCard.PerTime.toLowerCase()){
      case 'per year':
      case 'per hour': {
        return <dd className="pay">{jobCard.Pay}<br/>{jobCard.PerTime.toLowerCase()}</dd>
      }
      default:
        return <dd className="pay">Varied</dd>

    }
  }

  renderPathwaySwatch = (title, idx) => {
    return (<li title={title} key={idx} className={`sector-${this.props.vocationalPathways[title]}`}>{title}</li>);
  }

  flipCard = () => {
    this.props.flipJobCard(this.props.id);
  }

  roundProgressBarValues = (Value) => {
    return (Math.round(Value/10)*10);
  }

  splitStringWithZeroWithCharacter = (string = '', character = ' ') => {
    return string.replace(character, '/\u200B');
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(JobCard);