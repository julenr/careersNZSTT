/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';

import Avatar from '../../subcomponents/Avatar';
import _ from 'lodash';
import classNames from 'classnames';

class SingleChoice extends React.Component {

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.option0).focus();
  }

  render() {
    const question = this.props.questionnaire[this.props.id];
    const alternativeSelected = (this.props.questionnaire[this.props.id].Selected === -1);
    const firstQuestion = (this.props.id === 0);
    const firstQuestionClass = (firstQuestion) ? 'fieldset first-question active' : 'fieldset active';
    const firstQuestionNoAvatar = (firstQuestion) ? 'field radio' : 'field radio with-avatar';

    let classes = classNames({
      'basic': true,
      'selected': alternativeSelected
    });
    this.scrollElementID = `SingleChoice${this.props.id}`;

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
          <ul data-type="radio" className="radio">
            {question.QuestionResponses.map(this.renderResponses)}
            {
              (question.HasAlternative) ?
                  <li className={ classes } href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                    <span className="icon-tick"></span>
                    {question.AlternativeText}
                    <span className="icon-arrow-right"></span>
                  </li>
                  :
                  ''
            }
          </ul>
        </div>
        {
          (question.HintPosition === 'Bottom' && question.HintText) ?
          <p className="help">{question.HintText}</p> : ''
        }
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    const selected = (this.props.questionnaire[this.props.id].Selected === idx);
    let classes = classNames(
        {
          'selected': selected
        }
    );

    return (
      <li key={idx}
            onClick={ () => this.onClick(idx)}
            onKeyUp={ (e) => this.onKeyUp(e, idx)}
            ref={`option${idx}`}
            tabIndex="0" className={ classes }
        >
        <span className="icon-tick"></span>
          {response.ResponseText}
      </li>
    );
  }

  alternativeClicked = (alternativeNextQuestionID) => {
    //deselect options
    this.props.responseClickedAlternativeOfSingleChoice(this.props.id);
    scrollTo(this.scrollElementID, -110);
    this.props.setNextQuestionId(alternativeNextQuestionID);
    this.props.nextQuestion(this.props.id, alternativeNextQuestionID);
  }

  onKeyUp = (event, idx) => {
    if(event.key === 'Enter' || event.key === ' ') {
      this.onClick(idx);
    }
  }

  onClick = (idx) => {
    scrollTo(this.scrollElementID, -120);
    this.props.responseClickedSingleChoice(this.props.id, idx)
    //Check if there is only a nextQuestionID for all the responses
    let nextID = this.props.questionnaire[this.props.id].QuestionResponses[idx].NextQuestionID;
    if(nextID === 0){
      nextID = this.props.questionnaire[this.props.id].NextQuestionID;
    }
    this.props.setNextQuestionId(nextID);
    this.props.nextQuestion(this.props.id, nextID)
  }

}

export default SingleChoice;

