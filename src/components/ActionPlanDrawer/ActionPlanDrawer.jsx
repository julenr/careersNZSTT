/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';


class ActionPlanDrawer extends React.Component {

  render () {
    return (
      <section className="action-plan closed">
        <header className="plan-header">
          <div className="page-wrapper">
            <h2 className="plan-title">Your action plan <span className="plan-count"><span className="item-count">5</span> items</span></h2>
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
