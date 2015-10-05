/**
 * Created by jr1500 on 30/09/15.
 */

import './QuestionsPage.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router'

class QuestionsPage extends React.Component {
  render() {
    return (
      <div className="questions-intro">
        <div className="page-wrapper">
          <h1 className="access">Questions</h1>
          <div className="title">
            <img src={require('../../assets/images/avatars/intro-avatar-1.png')} width="153" height="199" alt="John" />
            <p><strong>Hi there, I'm John.</strong> Welcome to Change up!</p>
             <div className="clear"></div>
          </div>
          <p className="blurb">This website will help you find a course and a better job based on the skills you have and the things you want from work and study.</p>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default QuestionsPage;