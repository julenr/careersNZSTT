/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import { connect } from 'react-redux';

import Avatar from '../../subcomponents/Avatar';


function mapStateToProps(state) {
  return {
    blurb: state._questionnaire.data.Intro.Blurb,
    introTitle: state._questionnaire.data.Intro.Title
  };
}

class QuestionnaireHeader extends React.Component {

/*
    <div class="title">
      <img src="../assets/images/placeholders/placeholder-avatar-video.jpg" width="347" height="347" alt="John" id="intro-video-placeholder">
      <p><strong>Hi there, I'm John.</strong> Welcome to Change up!</p>
      <div class="clear"></div>
    </div>
    <p class="blurb">This website will help you find a course and a better job based on the skills you have and the things you want from work and study.
      <br>
      <a href="#" class="play-video">Play video</a>
    </p>
    <div class="clear"></div>
    */
  render() {

    const {blurb, introTitle} = this.props;

    return (
      <div className="questions-intro">
        <div className="page-wrapper">
          <h1 className="access">Questions</h1>
          <div className="title">
            {
                this.shouldShowVideo() ?
                    <div dangerouslySetInnerHTML={{__html: this.props.intro.Video.EmbedHTML}} />
                    :
                    <img src={this.props.intro.Image.Medium.Src} width="347" height="347"
              alt="John" id="intro-video-placeholder" onClick={() => this.showVideo()}/>
            }
            <div dangerouslySetInnerHTML={{__html: introTitle}} />
            <div class="clear"></div>
          </div>
          <p className="blurb">
            {blurb}<br/>
            {this.isVideoType() ? <a href="javascript: void 0" className="play-video" onClick={() => this.showVideo()}>Play video</a> : ''}
          </p>
          <div className="clear"></div>
        </div>
      </div>
    );
  }

  shouldShowVideo = () => {
    return this.isVideoType() && this.props.toShowVideo;
  }

  isVideoType = () => this.props.intro.FeatureType === 'Video';

  showVideo = () => {
    this.props.showVideo();
  }
}


export default connect(
  mapStateToProps
)(QuestionnaireHeader);
