/**
 * Created by jr1500 on 30/09/15.
 */

import './ProviderConnect.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';

@connect((state /*, props*/) => {
  return {
    reduxState: state,
    frozen: state._time.frozen,
    time: state._time.time
  }
})
class ProviderConnect extends React.Component {

  onTimeButtonClick = () => {
    this.props.dispatch(actionCreators.getTime(500))
  }

  render () {
    var { frozen, time, reduxState } = this.props
    var attrs = {}

    if (frozen) {
      attrs = {
        disabled: true
      }
    }

    return (
      <div>
        <h1>Provider and @connect</h1>
        <br />
        {this.renderButton()}
        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
      </div>
    )
  }

  renderButton = () => {
    return (
      <button onClick={this.onTimeButtonClick}>Get state!</button>
    )
  }
}

export default ProviderConnect;