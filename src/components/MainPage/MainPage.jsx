/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/general-actions';
import Footer from '../Footer/Footer.jsx';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer.jsx';


function mapStateToProps(state, ownProps) {
  return {
    loaded: state._mainPage.loaded,
    mainPage: state._mainPage.data
  };
}

class MainPage extends React.Component {
  render () {
    if (this.props.loaded) {
      return <Content {...this.props}/>
    }
    else
      return (
        <div>
          <div className="spinner"></div>
        </div>
      );
  }

  componentDidMount() {
    this.props.setCurrentRoute('MainPage');
  }
}

class Content extends React.Component {
  getHtmlContent() {
    let { mainPage } = this.props;
    return mainPage.FeatureType === 'Video' ? mainPage.Video.EmbedHTML : mainPage.Image.Medium.EmbedHTML;
  }
  render () {
    var { mainPage } = this.props;
    return (
      <div>
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="nav-link-back">
              <a href="#">Back</a>
            </div>
            <section className="content-wrapper">
              <h1>{ JSON.stringify(mainPage.Title, null, 2) }</h1>
              <div className="capionImage video" dangerouslySetInnerHTML={{__html: this.getHtmlContent()}} />
              <div className="intro-text">
                <p>{ JSON.stringify(mainPage.Intro, null, 2) }</p>
              </div>
              <div dangerouslySetInnerHTML={{__html: mainPage.Content}} />
            </section>
          </div>
          <ActionPlanDrawer />
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(
  mapStateToProps, {
      ...actionCreators
    }
)(MainPage);