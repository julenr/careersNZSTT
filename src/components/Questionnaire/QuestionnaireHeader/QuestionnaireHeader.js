/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Avatar from '../../subcomponents/Avatar';

class QuestionnaireHeader extends React.Component {
  render() {
    return (
      <div className="questions-intro">
        <div className="page-wrapper">
          <h1 className="access">Questions</h1>

          <div className="title">
            <img src={require('../../../assets/images/placeholders/placeholder-avatar-video.jpg')} width="347" height="347"
                 alt="John" id="intro-video-placeholder"/>

            <p><strong>Hi there, I'm John.</strong> Welcome to Change up!</p>

            <div className="clear"></div>
          </div>
          <p className="blurb">
            This website will help you find a course and a better job based on the skills you have
            and the things you want from work and study.
            <br />
            <a href="#" className="play-video">Play video</a>
          </p>

          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default QuestionnaireHeader;
