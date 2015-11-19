/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Sticky from 'react-sticky';

import { Link } from 'react-router';

class ProgressBar extends React.Component {
  render() {
    const customStyleObject = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }
    const minResults = this.props.ListViewLinkMinResults < this.props.Results;
    const maxResults = this.props.ListViewLinkMaxResults > this.props.Results;

    return (
      <div className="progress-bar pinned">
        <div className="page-wrapper">
          <div className="plan-help-popup">
            <a href="link_to_help_page_for_non_js_users" className="help-trigger">
              <img className="avatar" src={require('../../assets/images/placeholders/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="54" height="54" />
              <span className="text">Need help?</span>
            </a>
          </div>
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
          <a href="https://www.surveymonkey.com/r/ZD2VTVG" className="feedback-button" target="_blank">Feedback</a>
        </div>
      </div>
    );
  }
}

export default ProgressBar;