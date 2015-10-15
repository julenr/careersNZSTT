/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state, props) => {
  return {
    //closed: state._getJobs.data.JobsCards[props.id].Closed
  }
})
class UndoPanel extends React.Component {

  clickFlip = () => {
    //this.props.dispatch(actionCreators.jobCardFlip(this.props.id));
  }

  render() {
    //let { jobCard, fliped, closed } = this.props;
    //let classes = classNames( this.props.className, {
    //  'careers-card job': true,
    //  'careers-card job flip': fliped
    //} );

    return (
      <div>
        UNDO PANEL
      </div>
    );
  }
}

export default UndoPanel;