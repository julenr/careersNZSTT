/**
 * Created by jr1500 on 30/09/15.
 */

import './MainPage.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';

import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer.jsx';

@connect((state /*, props*/) => {
  return {
    title: state._mainPage.data.Title,  //TODO: Change to lowercase
    intro: state._mainPage.data.Intro,
    content: state._mainPage.data.Content,
    videoHTML: state._mainPage.data.Video.EmbedHTML,
    loading: state._mainPage.loading
  }
})
class MainPage extends React.Component {
  render () {
    var { title, intro, content, videoHTML, loading } = this.props;
    var attrs = {};
    console.log(title, intro, content, loading);
    if (loading) {
      attrs = {
        disabled: true
      }
    }

    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <div className="nav-link-back">
            <a href="#">Back to lorem ipsum</a>
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
    )
  }
}

export default MainPage;