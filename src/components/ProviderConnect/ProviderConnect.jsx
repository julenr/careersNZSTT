/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/general-actions';

@connect((state /*, props*/) => {
  return {
    reduxState: state,
    frozen: state._time.frozen
  }
})
class ProviderConnect extends React.Component {

  buttonClick = () => {
    this.props.dispatch(actionCreators.getStateButton(300))
  }

  render () {
    var { frozen, reduxState } = this.props
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
      <button onClick={this.buttonClick}>Get state!</button>
    )
  }
}

export default ProviderConnect;