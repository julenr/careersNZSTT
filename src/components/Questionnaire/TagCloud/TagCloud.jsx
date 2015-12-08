/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';

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
    const { skillsLoaded } = this.props;
    const question = this.props.questionnaire[this.props.id];
    const firstQuestion = (this.props.id === 0);
    const firstQuestionClass = (firstQuestion) ? 'fieldset first-question active' : 'fieldset active';
    const firstQuestionNoAvatar = (firstQuestion) ? 'field radio' : 'field radio with-avatar';

    this.nextButtonActive = false;
    this.scrollElementID = `TagCloud${this.props.id}`;

    if(skillsLoaded) {
      return (
        <div className={firstQuestionClass}>
          {(firstQuestion) ? <p>To get started answer the question below…</p>: ''}
          <div className={firstQuestionNoAvatar}>
            {(!firstQuestion) ? <Avatar /> : ''}
            <label>{question.Description}</label>
            {
              (question.HintPosition === 'Top' && question.HintText) ?
              <p className="help">{question.HintText}</p> : ''
              }
            <div className="question-tags" data-type="tag">
              {
                question.QuestionResponses.map(this.renderTags)
                }
              <div tabIndex="0"
                   className="tag add-more"
                   onClick={ () => this.props.openAddSkillsModal(this.props.questionnaire[this.props.id].ID)}
              >
                <span className="icon-plus-circle"></span>
                Add more
              </div>
            <span tabIndex="0"
                  className="tag select-all"
                  onClick={ () => this.props.selectAllTagCloud(this.props.id)}
            >
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
          {
            (question.HintPosition === 'Bottom' && question.HintText) ?
            <p className="help">{question.HintText}</p> : ''
            }
          <span id={this.scrollElementID}></span>
        </div>
      );
    } else {
      return <div className="spinner inline"></div>;
    }
  }

  renderTags = (response, idx) => {
    let classes = classNames( this.props.className, {
      'tag': true,
      'tag selected': response.Selected
    } );
    if(response.Selected) this.nextButtonActive = true;
    return (
    <span key={idx}
          onClick={() => this.tagClicked(idx)}
          onKeyUp={(e) => this.onKeyUp(e, idx)}
    >
      <span className={ classes } key={idx} tabIndex="0" >
        <span className="icon-tick">
        </span>
        {response.Title}
      </span>
    </span>
    );
  }

  onKeyUp = (event, idx) => {
    if(event.key === 'Enter' || event.key === ' ') {
      this.tagClicked(idx);
    }
  }

  tagClicked = (idx) => {
    this.props.responseClickedTagCloud(this.props.id, idx)
  }

  nextClicked = (nextID) => {
    scrollTo(this.scrollElementID, -120);
    this.props.setNextQuestionId(nextID);
    this.props.nextQuestion(this.props.id, nextID);
  }

}


export default connect(
  mapStateToProps
)(TagCloud);
