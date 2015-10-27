/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';
import Loader from 'react-loader';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/questionnaire-actions';
import store from '../../../redux/create-store';

import Avatar from '../../subcomponents/Avatar';

function mapStateToProps(state, ownProps) {
  return {
    skillsLoaded: state._questionnaire.data.Questionnaire[ownProps.id].Loaded,
  };
}

class TagCloud extends React.Component {
  componentWillMount() {
    store.dispatch(actionCreators.dumpSkillsIntoTagCloud());
  }
  render() {
    var { skillsLoaded } = this.props;
    console.log(skillsLoaded);
    if(skillsLoaded) {
      return <TagCloudContent {...this.props} />;
    }
    else {
      return (
        <div>
          <Loader />
        </div>
      );
    }
  }
}

class TagCloudContent extends React.Component {
  render() {
    var question = this.props.questionnaire[this.props.id];
    this.nextButtonActive = false;
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          <p className="help">Use the <span className="icon-cancel-circle">
            </span> to <strong>remove</strong> a skill you don't have or don't want to have.
          </p>
          <div className="question-tags" data-type="tag">
            {question.QuestionResponses.map(this.renderTags)}
            <div tabIndex="0" className="tag add-more"><span className="icon-plus-circle"></span>Add more</div>
            <span tabIndex="0"
                  className="tag select-all"
                  onClick={ () => this.props.sellectAllTagCloud(this.props.id)}>
              Select all
            </span>
          </div>
        </div>
        <div className={ classNames({'submit': true, 'submit active': this.nextButtonActive}) }>
          <a className="button next"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >That looks about right<span className="icon-arrow-down"></span>
          </a>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderTags = (response, idx) => {
    if(response.Removed) {
      return ( <span key={idx} /> );
    }
    else {
      let classes = classNames( this.props.className, {
        'tag': true,
        'tag selected': response.Selected
      } );
      if(response.Selected) this.nextButtonActive = true;
      return (
      <span key={idx} onClick={ () => this.props.responseClickedTagCloud(this.props.id, idx)}>
        <span className={ classes } key={idx} tabIndex="0" >
          {response.Title}
          <span
            className="icon-cancel-circle"
            key={idx}
            onClick={ () => this.props.removeTag(this.props.id, idx)}
            >
          </span>
        </span>
      </span>
      );
    }
  }

  nextClicked = (nextID) => {
    scrollTo(this.scrollElementID, -120);
    this.props.nextQuestion(this.props.id, nextID);
  }

}


export default connect(
  mapStateToProps
)(TagCloud);