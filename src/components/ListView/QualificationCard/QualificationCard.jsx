/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { scrollTo } from '../../../libs/helpers';
import { connect } from 'react-redux';

import { textFitToContainer } from '../../../libs/helpers.js';

function mapStateToProps(state, ownProps) {
  return {
    qualification: state._listViewData.data.QualificationsPanel.Courses[ownProps.id]
  };
}
class QualificationCard extends React.Component {
  render() {
    let qualification = this.props.qualification;

    const style = {
      fontSize: textFitToContainer(qualification.Title) + 'px'
    }
    return (
      <article className="careers-card qualification">
        <div className="card front">
          <div className="liner">
            <header>
              <h3 className="title" style={style}>{qualification.Title}</h3>
              <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}><span className="icon-cross"></span></a>
              <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard} title="Show this course in my list again"><span className="icon-plus-circle"></span></a>
              <div className="sectors">
                <a href="javascript: void 0">
                  <ul>
                    <li title="Manufacturing and technology" className="sector-yellow">Manufacturing and technology</li>
                    <li title="Construction and infrastructure" className="sector-blue">Construction and infrastructure</li>
                  </ul>
                  <span className="more">More</span>
                </a>
              </div>
            </header>
            <p className="provider">
              {qualification.Institution}
            </p>
            <p className="description divider">
              {qualification.Description}
            </p>
            <dl className="divider">
              <dt>Vocational pathways: <span className="icon-help tooltip" title="This is a tooltip">&nbsp;</span></dt>
              <dd>
                <ul className="sector-simple-list">
                  <li className="sector-purple">Social and community services</li>
                  <li className="sector-red">Manufacturing and technology</li>
                </ul>
              </dd>
              <dt>Level:</dt>
              <dd>{qualification.Level} <span className="icon-help" title="This is a tooltip. lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem"></span></dd>
              <dt>This course can lead to jobs like:</dt>
              <dd>{qualification.LeadsTo}</dd>
            </dl>
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

  showInstitutionsPanel = () => {
    this.props.setCurrentQualificationID(this.props.id);
    this.props.getInstitutionByID(this.props.qualification.QualificationID);
    this.props.openInstitutionsPanel();
    scrollTo('institutions-panel-scroll-point', -120);
  }

  closeCard = () => {
    this.props.openRemoveQualificationCardModal(this.props.id);
  }

  openCard = () => {
    this.props.openQualificationCard(this.props.id);
  }
}

export default connect(
  mapStateToProps
)(QualificationCard);