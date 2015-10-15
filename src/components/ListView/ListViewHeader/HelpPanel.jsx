/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state, props) => {
  return {

  }
})
class HelpPanel extends React.Component {
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
      <div>
        HELP PANEL
      </div>
    );
  }
}

export default HelpPanel;