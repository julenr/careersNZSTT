/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

import UndoPanel from './UndoPanel';
import HelpPanel from './HelpPanel';

@connect((state, props) => {
  return {
    //jobCard: state._getJobs.data.JobsCards[props.id],
    //fliped: state._getJobs.data.JobsCards[props.id].Fliped,
    //closed: state._getJobs.data.JobsCards[props.id].Closed
  }
})
class ListViewHeader extends React.Component {

  clickFlip = () => {
    //this.props.dispatch(actionCreators.jobCardFlip(this.props.id));
  }

  clickClose = () => {
    //this.props.dispatch(actionCreators.jobClosed(this.props.id));
  }

  render() {
    //let { jobCard, fliped, closed } = this.props;
    //let classes = classNames( this.props.className, {
    //  'careers-card job': true,
    //  'careers-card job flip': fliped
    //} );

    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <h1 className="results-title"> <span className="select-menu"> <a href="#" className="select-menu-trigger">Job<span className="icon-arrow-down"></span></a>
            <ul data-type="select" className="ui-menu">
              <li tabindex="0" value="1">Job</li>
              <li tabindex="0" value="2">Course</li>
            </ul>
            </span> suggestions based on <a href="#">your skills</a>
          </h1>
          <p className="results-subtitle"><strong>23 courses</strong> are hidden, <a href="#">edit your preferences</a></p>

          <UndoPanel />
          <HelpPanel />

        </div>
      </div>
    );
  }
}

export default ListViewHeader;