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
                <img className="avatar" src="../images/placeholders/action-plan-help-avatar-1.jpg" alt="Help assistant. " width="54" height="54" />
                Need help?
              </a>
              <div className="help-popup">
                <div className="first-view">
                  <div className="help-title">If you get stuck or want to talk about your options don't hesitate to get in touch but clicking here.<br>
                    </br>
                    <strong>Got it, thanks.</strong>
                  </div>
                </div>
                <div className="second-view">
                  <div className="help-title">We can give you a hand. <strong>Get in touch now...</strong></div>
                    <ul>
                      <li><a href="tel:0800222733" className="plan-button">Call 0800 222 733</a></li>
                      <li><a href="#" className="plan-button">Chat online</a></li>
                      <li><a href="#" className="plan-button">Read online help</a></li>
                    </ul>
                </div>
              </div>
            </div>
            <a href="#" className="plan-trigger"><span className="open"><span className="icon-chevron-up">&nbsp;</span><span className="text">Open</span></span><span className="close"><span className="icon-chevron-down">&nbsp;</span><span className="text">Close</span></span></a>
          </div>
        </header>
        <div className="plan-liner">
          <section className="plan-content">
            <div className="page-wrapper">
              <h2 className="access">Action plans</h2>
              <section className="layout-col-4 layout-col plan-suggestion-actions">
                <h3>Suggested actions</h3>
              </section>
              <section className="layout-col-4 layout-col plan-qualification">
                <h3><a href="#">Qualification name short <span className="provider">at provider name</span></a></h3>
              </section>
              <section className="layout-col-4 layout-col plan-qualification">
                <h3><a href="#">Qualification name short <span className="provider">at provider name</span></a></h3>
              </section>
            </div>
          </section>
          <footer className="plan-footer">
            <div className="page-wrapper">
              <ul className="plan-tools">
                <li><a href="#" className="plan-button email-plan">Email <span className="desktop">plan</span></a></li>
                <li><a href="#" className="plan-button download-plan">Download <span className="desktop">plan</span></a></li>
                <li className="desktop"><a href="#" className="plan-button print-plan">Print plan</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

export default ActionPlanDrawer;