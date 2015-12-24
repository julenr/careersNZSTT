/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { connect } from '../../../libs/react-redux';
import YouTube from 'react-youtube';

function mapStateToProps(state) {
  return {
    blurb: state._questionnaire.data.Intro.Blurb,
    introTitle: state._questionnaire.data.Intro.Title,
    video: state._questionnaire.data.Intro.Video
  };
}

class QuestionnaireHeader extends React.Component {
  render() {
    const {blurb, introTitle, video} = this.props;
    const opts = {
      height: video.Height,
      width: video.Width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="questions-intro">
        <div className="page-wrapper">
          <h1 className="access">Questions</h1>
          <div className="title">
            {
                this.shouldShowVideo() ?
                  <YouTube
                    url={video.SourceURL}
                    opts={opts}
                    onEnd={this._onEnd}
                  />
                    :
                    <img src={this.props.intro.Image.Medium.Src} width="347" height="347"
              alt="Skills Builder Video" id="intro-video-placeholder" onClick={() => this.showVideo()}/>
            }
            <div dangerouslySetInnerHTML={{__html: introTitle}} />
            <div className="clear"></div>
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

  _onEnd = () => {
    this.props.hideVideo();
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
