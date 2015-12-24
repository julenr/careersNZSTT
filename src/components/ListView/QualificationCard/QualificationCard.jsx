/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import { connect } from '../../../libs/react-redux';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';

import { textFitToContainer } from '../../../libs/helpers.js';

function mapStateToProps(state, ownProps) {
  return {
    qualification: state._listViewData.data.QualificationsPanel.Courses[ownProps.id],
    flipped: state._listViewData.data.QualificationsPanel.Courses[ownProps.id].Flipped,
  };
}

const MAX_WORD_NUMBER_LEADS_TO = 22;

class QualificationCard extends React.Component {

  componentDidUpdate = () => {
    if( !this.props.qualification.DescriptionOverflow && this.checkOverflow(`description${this.props.id}`)){
      this.props.qualificationCardDescriptionOverflow(this.props.id);
    }
  }

  render() {
    const { flipped, tooltips } = this.props;
    const qualification = this.props.qualification;
    let classes = classNames( this.props.className, {
      'careers-card qualification': true,
      'careers-card qualification flip': flipped
    } );
    const stylefront = {
      fontSize: textFitToContainer(qualification.Title, 17, 39, 31)
    }
    const styleback = {
      fontSize: textFitToContainer(qualification.Title, 19, 30, 41)
    }
    

    return (
      <article className={ classes }>
        <div className="card front">
          <div className="liner">
            <header>
              <h3 className="title" style={stylefront}>{qualification.Title}</h3>
              <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span className="icon-cross"></span></a>
              <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard} title="Show this course in my list again"><span className="icon-plus-circle"></span></a>
              <div className="sectors">
                <a href="javascript: void 0" onClick={this.props.openVocationalPathwaysModal}>
                  <ul>
                    { _.map(qualification.VocationalPathways, this.renderPathwaySwatch) }
                  </ul>
                  <span className="more">More</span>
                </a>
              </div>
            </header>
            <p className="provider">at&nbsp;
              {
                (qualification.Institutions.length > 1) ?
                  `${qualification.Institutions.length} providers`
                  :
                  qualification.Institutions[0]
              }
            </p>
            <div className="layout-row divider">
              <div className="level">
                Level: {qualification.Level}&nbsp;
                  <Tooltip
                    animation="zoom"
                    trigger="click"
                    overlayClassName="job-card-tooltip"
                    overlay={
                      <div className="field radio with-avatar">
                        {tooltips.QualificationCard}
                      </div>
                      }
                  >
                    <span className="icon-help tooltip" title={tooltips.QualificationCardLevel} />
                  </Tooltip>
              </div>
              <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>More about this course <span className="icon-refresh"></span></a>
            </div>
            <div className="course-leads-to">
              <p>
                {
                  this.leadsToTruncated(qualification.LeadsTo)
                  }
              </p>
            </div>            
          </div>
          <footer>
            <a className="card-actions" href="javascript: void 0" onClick={this.showInstitutionsPanel}>
              Where can I do this course?
            </a>
            <a className="card-actions reinstate-card" href="javascript: void 0" onClick={this.openCard}>
              Show this course in my list again
            </a>
          </footer>
        </div>

        <div className="card back">
          <div className="liner">
            <header>
              <h3 className="title" style={styleback}>{qualification.Title}</h3>
              <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span className="icon-cross"></span></a>
              <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard} title="Show this course in my list again"><span className="icon-plus-circle"></span></a>
            </header>
            <div className="description" id={`description${this.props.id}`}>
              {qualification.DescriptionText}
            </div>
            <div className="layout-row divider">
              <a className="action-flip" href="javascript: void 0" onClick={this.flipCard}>Go back <span className="icon-refresh"></span></a>
              <span>
              {
                (qualification.DescriptionOverflow) ?
                <a className="action-view-description" href="javascript: void 0" onClick={this.showFullDescription}>View full course description</a>
                  :
                  ''
                }
              </span>
            </div>
          </div>
          <footer>
            <a className="card-actions" href="javascript: void 0" onClick={this.showInstitutionsPanel}>
              Where can I do this course?
            </a>
            <a className="card-actions reinstate-card" href="javascript: void 0" onClick={this.openCard}>
              Show this course in my list again
            </a>
          </footer>
        </div>
      </article>
    );
  }

  checkOverflow = (id) => {
    const el = document.getElementById(id);
    const curOverflow = el.style.overflow;
    let isOverflowing;

    if(!curOverflow || curOverflow === 'visible') {
      el.style.overflow = 'hidden';
    }
    isOverflowing = el.clientHeight < el.scrollHeight;
    el.style.overflow = curOverflow;
    return isOverflowing;
  }

  leadsToTruncated = (leadsTo) => {
    const wholeString = `This course can lead to jobs like: ${leadsTo}`;

    if(wholeString.split(' ').length > MAX_WORD_NUMBER_LEADS_TO) {
      return `${wholeString.split(' ').splice(0, MAX_WORD_NUMBER_LEADS_TO).join(' ')}...`;
    } else {
      return wholeString;
    }
  };

  renderPathwaySwatch = (title, idx) => {
    return (<li title={title} key={idx} className={`sector-${this.props.vocationalPathways[title]}`}>{title}</li>);
  }

  showInstitutionsPanel = () => {
    this.props.setCurrentQualificationID(this.props.id);
    this.props.setSplitIndexCardPoint(this.props.id, 'Course');
    this.props.getInstitutionByID(this.props.qualification.QualificationID);
    this.props.openInstitutionsPanel();
    scrollTo('institutions-panel-scroll-point', -120);
  }
  
  flipCard = () => {
    this.props.flipQualificationCard(this.props.id);
  }

  closeCard = () => {
    this.props.openRemoveQualificationCardModal(this.props.id);
  }

  showFullDescription = () => {
    this.props.setCurrentQualificationID(this.props.id);
    this.props.showQualificationFullDescriptionModal();
  }

  openCard = () => {
    this.props.openQualificationCard(this.props.id);
  }
}

export default connect(
  mapStateToProps
)(QualificationCard);