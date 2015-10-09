/**
 * Created by jr1500 on 30/09/15.
 */

import './ProgressBar.scss';

import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="page-wrapper">
          <span className="progress-bar-status amount-10">&nbsp;</span>
          <ol>
            <li className="step-1 active">You've made the first step, you're here!</li>
            <li className="step-2">Good start user-name! We just need to know a little more to make a good list for you.</li>
            <li className="step-3">So far we have a list of 123 job/courses, tell us a little more to narrow it down a bit.</li>
            <li className="step-4">That's better, we've got it down to 23 courses. <a href="#">Show me them now</a></li>
            <li className="step-5">Great, we've got a nice list of 9 jobs/courses. <a href="#">Show me!</a></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default ProgressBar;