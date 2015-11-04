/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/general-actions';


function mapStateToProps(state) {
  return {
    reduxState: state
  };
}

class ProviderConnect extends React.Component {

  render () {
    var { reduxState } = this.props

    return (
      <div>
        <h1>APPLICATION STATE</h1>
        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
      </div>
    )
  }

}

export default connect(
  mapStateToProps
)(ProviderConnect);