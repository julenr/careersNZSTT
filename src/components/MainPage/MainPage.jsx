/**
 * Created by jr1500 on 30/09/15.
 */

import './MainPage.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux'
import * as actionCreators from '../../redux/action-creators'

@connect((state /*, props*/) => {
  return {
    reduxState: state,
    frozen: state._time.frozen,
    time: state._time.time
  }
})
class MainPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Main Page</h1>
      </div>
    )
  }
}

export default MainPage;