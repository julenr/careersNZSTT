/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from '../../libs/react-redux';

import * as actionCreators from '../../redux/general-actions';
import Footer from '../Footer/Footer.jsx';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer.jsx';


function mapStateToProps(state, ownProps) {
  return {
    loaded: state._mainPage.loaded,
    loading: state._mainPage.loading,
    mainPage: state._mainPage.data
  };
}

class MainPage extends React.Component {
  render () {
    if (this.props.loaded) {
      return <Content {...this.props}/>
    }
    else {
      if(!this.props.loading) {
        let urlSegment = this.props.route.path;
        this.props.getLinkedPagesHTML(urlSegment);
      }
      return (
        <div>
          <div className="spinner"></div>
        </div>
      );
    }
  }
}

class Content extends React.Component {
  getHtmlContent() {
    let { mainPage } = this.props;
    return mainPage.FeatureType === 'Video' ? mainPage.Video.EmbedHTML : mainPage.Image.Medium.EmbedHTML;
  }

  componentDidMount() {
    this.props.setCurrentRoute('MainPage');
  }

  render () {
    var { mainPage } = this.props;
    return (
      <div>
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="nav-link-back">
              <a href="javascript: void 0" onClick={this.goBack}>Back</a>
            </div>
            <section className="content-wrapper">
              <h1>{mainPage.Title}</h1>
              <figure className="intro-image" dangerouslySetInnerHTML={{__html: this.getHtmlContent()}} />
              <div className="intro-text">
                <p>{mainPage.Intro}</p>
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

  goBack() {
    window.history.back();
  }
}

export default connect(
  mapStateToProps, {
      ...actionCreators
    }
)(MainPage);