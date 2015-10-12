/**
 * Created by jr1500 on 30/09/15.
 */

import './ActionPlanDrawer.scss';

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
class ActionPlanDrawer extends React.Component {

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
      <section className="action-plan closed">{/* <!-- Note: add the 'open' CSS class here, if you want this opened on page load -->*/ }
        <header className="plan-header">
          <div className="page-wrapper">
            {/* <!-- Note: Add a click event to this element to trigger the open/close --> */}
            <h2 className="plan-title">Your action plan <span className="plan-count"><span className="item-count">8</span> items</span></h2>
            <div className="plan-help">
              <a href="link_to_help_page_for_non_js_users" className="help-trigger">
                <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="54" height="54" />
                Need help?
              </a>
            </div>
            <a href="#" className="plan-trigger"><span className="open"><span className="icon-chevron-up">&nbsp;</span><span className="text">Open</span></span><span className="close"><span className="icon-chevron-down">&nbsp;</span><span className="text">Close</span></span></a>
          </div>
        </header>
      </section>
    );
  }
}

export default ActionPlanDrawer;