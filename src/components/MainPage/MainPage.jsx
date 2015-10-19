/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Loader from 'react-loader';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';

import Footer from '../Footer/Footer.jsx';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer.jsx';

@connect((state) => {
  return {
    loaded: state._mainPage.loaded
  }
})
class MainPage extends React.Component {
  render () {
    var { loaded } = this.props;

    if (loaded)
      return <Content />;
    else
      return (
        <div>
          <Loader loaded={loaded} />
        </div>
      );
  }
}

@connect((state) => {
  console.log('connect');
  return {
    featureType: state._mainPage.data.FeatureType,
    title: state._mainPage.data.Title,
    intro: state._mainPage.data.Intro,
    content: state._mainPage.data.Content,
    image: state._mainPage.data.Image,
    videoHTML: state._mainPage.data.Video.EmbedHTML,
    loading: state._mainPage.loading
  }
})
class Content extends React.Component {
  render () {
    var { title, intro, content, videoHTML, loading } = this.props;
    var attrs = {};
    if (loading) {
      attrs = {
        disabled: true
      }
    }

    return (
      <div>
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="nav-link-back">
              <a href="#">Back</a>
            </div>
            <section className="content-wrapper">
              <h1>{ JSON.stringify(title, null, 2) }</h1>

              <div className="capionImage video" dangerouslySetInnerHTML={{__html: videoHTML}} />

              <div className="intro-text">
                <p>{ JSON.stringify(intro, null, 2) }</p>
              </div>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </section>
          </div>
          <ActionPlanDrawer />
        </div>
        <Footer />
      </div>
    )
  }
}

export default MainPage;