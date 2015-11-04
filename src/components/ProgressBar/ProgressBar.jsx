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
      <Sticky topOffset={-100000} stickyStyle={customStyleObject}>
      <div className="progress-bar">
        <div className="page-wrapper">
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
        </div>
      </div>
      </Sticky>
    );
  }
}

export default ProgressBar;