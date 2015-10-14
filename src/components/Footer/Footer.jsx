/**
 * Created by jr1500.
 */

import './Footer.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import * as actionCreators from '../../redux/action-creators';

@connect((state, props) => {
  return {
    text: state._footerData.data.Footer.Text,
    links: state._footerData.data.Footer.Menu,
    loading: state._mainPage.loading
  }
})
class AppFooter extends React.Component {
  render() {
    var { text, links, loading } = this.props;
    var attrs = {};
    if (loading) {
      attrs = {
        disabled: true
      }
    }
    return (
      <footer className="page-footer">
        <div className="page-wrapper">
          <div className="layout-col-3 layout-col">
            <div className="site-name">
              { JSON.stringify(text, null, 2) }
            </div>
          </div>
          <div className="layout-col-6 layout-col">
            <nav className="nav-footer">
              <ul>
                <li>
                  {links.map(this.renderLinks)}
                  <Link to="/providerconnect">Get State</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="layout-col-3 layout-col">
            <div className="logo-title">Proudly brought to you by</div>
            <ul className="footer-logos">
              <li className="careers-nz">
                <a href="http://www.careersnz.govt.nz/" className="careersnz-logo" title="Visit the Careers New Zealand home page. ">
                  <img src={require('../../assets/images/logos/careersnz-logo.png')} width="138" height="50" alt="Careers New Zealand logo" />
                </a>
              </li>
              <li className="nz-govt">
                <a href="https://www.govt.nz/" title="newzealand.govt.nz - connecting you to New Zealand central and local government services.">
                  <img src={require('../../assets/images/logos/nz-govt-logo-large.png')} width="157" height="21" alt="New Zealand Government logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  renderLinks = (options) => {
    return (
      <Link key={uuid.v4()} to={'/' + options.URLSegment} title={options.Title} onClick={this.linkClick.bind(null, options.URLSegment)}>{options.Title}</Link>
    );
  }

  linkClick = (URLSegment) => {
    console.log('clicked link');
    this.props.dispatch(actionCreators.getLinkedPagesHTML(URLSegment));
  }
}

export default AppFooter;