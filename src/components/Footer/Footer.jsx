/**
 * Created by jr1500.
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import * as actionCreators from '../../redux/general-actions';


function mapStateToProps(state) {
  return {
    text: state._footerData.data.Footer.Text,
    links: state._footerData.data.Footer.Menu,
    loading: state._mainPage.loading
  };
}

class AppFooter extends React.Component {
  render() {
    var { text, links, loading } = this.props;

    return (
      <footer className="page-footer">
        <div className="page-wrapper">
          <div className="layout-col-3 layout-col">
            <div className="site-name">
              { JSON.stringify(text, null, 2) }
            </div>
            <div className="onet-logo">
              This tool uses O*NET data<br/>
                version X.X.
              <a href="http://www.onetcenter.org/overview.html"><img src={require('../../assets/images/logos/onet-logo.png')} width="118" height="48" alt="O*NET in-it" /></a> 
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
                <img className="print" src={require('../../assets/images/logos/careersnz-logo-print.png')} width="140" alt="Careers New Zealand logo" />
              </li>
              <li className="nz-govt">
                <a href="https://www.govt.nz/" title="newzealand.govt.nz - connecting you to New Zealand central and local government services.">
                  <img src={require('../../assets/images/logos/nz-govt-logo-large.png')} width="157" height="21" alt="New Zealand Government logo" />
                </a>
                <img className="print" src={require('../../assets/images/logos/nz-govt-logo-print.png')} width="160" alt="New Zealand Government logo" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  renderLinks = (link) => {
    return (
      <Link key={uuid.v4()}
            to={'/' + link.URLSegment}
            title={link.Title}
            onClick={() => this.linkClick(link.URLSegment)}
        >
        {link.Title}
      </Link>
    );
  }

  linkClick = (URLSegment) => {
    this.props.getLinkedPagesHTML(URLSegment);
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(AppFooter);
