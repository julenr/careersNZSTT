/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Sticky from '../subcomponents/Sticky/Sticky.jsx';
import Tooltip from 'rc-tooltip';
import { Link } from 'react-router';
import { connect } from '../../libs/react-redux';

function mapStateToProps(state) {
  return {
    helpPopup: state._footerData.data.HelpPopup,
    survey: state._footerData.data.Survey
  }
}

class ProgressBar extends React.Component {
  render() {
    const customStyleObject = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    };
    const minResults = this.props.ListViewLinkMinResults < this.props.Results;
    const maxResults = this.props.ListViewLinkMaxResults > this.props.Results;
    return (
      <Sticky stickyStyle={customStyleObject}>
        <div className="progress-bar">
          <div id="help-popup-container" className="page-wrapper">
            <Tooltip
              trigger="click"
              placement="top"
              overlayClassName="no-arrow help-tooltip"
              getTooltipContainer={() => document.getElementById('help-popup-container')}
              overlay={
              <div className="plan-help-popup">
                <div className="help-popup">
                  <div className="second-view">
                    <div className="help-title">We can give you a hand. <strong>Get in touch now...</strong></div>
                    <ul>
                      <li><a href={this.props.helpPopup.Link1Link} target={this.props.helpPopup.Link1OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link1Text}</a></li>
                      <li><a href={this.props.helpPopup.Link2Link} target={this.props.helpPopup.Link2OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link2Text}</a></li>
                      <li><a href={this.props.helpPopup.Link3Link} target={this.props.helpPopup.Link3OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link3Text}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              }
              >
              <div className="plan-help-popup">
                <a href="javascript: void 0;" className="help-trigger">
                  <img className="avatar" src={require('../../assets/images/placeholders/action-plan-help-avatar-2.jpg')} alt="Help assistant. " width="54" height="54" />
                  <span className="text">Need help?</span>
                </a>
              </div>
            </Tooltip>
            <span className={`progress-bar-status amount-${(Math.round(this.props.Percentage/10)*10)}`}>&nbsp;</span>
            <ol>
              <li className="step-1 active">
                {`${this.props.Text} `}
                {
                  (minResults && maxResults) ?
                    <Link to="/list-view" ><span onClick={ this.props.onClickViewList }>{this.props.ListViewLinkText}</span></Link>
                    :
                    ''
                }
              </li>
            </ol>
            {
              this.props.survey ?
                  <a href={this.props.survey.Link} className="feedback-button" target={this.props.survey.Target}>{this.props.survey.Text}</a>
                  :
                  ''
            }
          </div>
        </div>
      </Sticky>
    );
  }
}

export default connect(
    mapStateToProps,
    {}
)(ProgressBar);