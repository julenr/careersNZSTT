/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';

import Avatar from '../../subcomponents/Avatar';

class TextInput extends React.Component {
  render() {
    const question = this.props.questionnaire[this.props.id];
    const firstQuestion = (this.props.id === 0);
    const firstQuestionClass = (firstQuestion) ? 'fieldset first-question active' : 'fieldset active';
    const firstQuestionNoAvatar = (firstQuestion) ? 'field text ' : 'field text with-avatar';

    let classes = classNames(
      {
        'submit': true,
        'submit active': question.Text
      }
    );
    this.scrollElementID = `TextInput${this.props.id}`;
    return (
      <div className={firstQuestionClass}>
        {(firstQuestion) ? <p>To get started answer the question below…</p>: ''}
        <div className={firstQuestionNoAvatar}>
          {(!firstQuestion) ? <Avatar /> : ''}
          <label htmlFor="q1-name">{question.Description}</label>
          <div className="text">
            {
              (question.HintPosition === 'Top' && question.HintText) ?
              <p className="help">{question.HintText}</p> : ''
            }
            <input className="text"
                   autoFocus
                   ref="inputText"
                   onKeyUp={ (e) => this.updateTextValue(e, this.props.id, this.refs.inputText.value) }
                   type="text"
                   data-type="input"
                   defaultValue={question.Text}
                   placeholder={question.Placeholder}
              />
              {
                  (question.HintPosition === 'Bottom' && question.HintText) ?
                  <p className="help">{question.HintText}</p> : ''
              }
              {
              (question.HasAlternative) ?
                  <a className="option-basic" href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                    {question.AlternativeText}
                    <span className="icon-arrow-right"></span>
                  </a>
                  :
                  ''
            }
          </div>
        </div>
        <div className={ classes }>
          <a className="button next"
             href="javascript: void 0"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >Next<span className="icon-arrow-down"></span>
          </a>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  alternativeClicked = (alternativeQuestionID) => {
    this.refs.inputText.value = '';
    this.props.setInputText(this.props.id, this.refs.inputText.value)
    scrollTo(this.scrollElementID, -110);
    this.props.setNextQuestionId(alternativeQuestionID);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  nextClicked = (nextQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.setNextQuestionId(nextQuestionID);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

  updateTextValue = (e, id, text) => {
    if(e.key === 'Enter' && this.refs.inputText.value !== ''){
      this.nextClicked(this.props.questionnaire[this.props.id].NextQuestionID);
    }
    else {
      this.props.setInputText(id, this.refs.inputText.value)
    }
  }

}

export default TextInput;
