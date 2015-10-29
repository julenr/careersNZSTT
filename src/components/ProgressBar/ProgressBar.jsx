/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Sticky from 'react-sticky';

class ProgressBar extends React.Component {
  render() {
    var customStyleObject = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }

    return (
      <Sticky topOffset={-100000} stickyStyle={customStyleObject}>
      <div className="progress-bar">
        <div className="page-wrapper">
          <span className={`progress-bar-status amount-${(Math.round(this.props.Percentage/10)*10)}`}>&nbsp;</span>
          <ol>
            <li className="step-1 active">{this.props.Text}</li>
          </ol>
        </div>
      </div>
      </Sticky>
    );
  }
}

export default ProgressBar;