/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

import Avatar from '../../subcomponents/Avatar';

class TextInput extends React.Component {
  render() {
    var question = this.props.questionnaire[this.props.id];
    let classes = classNames(
      {
        'submit': true,
        'submit active': question.Text
      }
    );
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset active">
        <div className="field text with-avatar">
          <Avatar />
          <label htmlFor="q2-sample">{question.Description}</label>
          <p className="help">An example of help text</p>
          <div className="text">
            <input className="text"
                   ref="inputText"
                   onKeyUp={ (e) => this.updateTextValue(e, this.props.id, this.refs.inputText.value) }
                   type="text"
                   data-type="input"
                   defaultValue={question.Text}
                   placeholder={question.PlaceHolder}
              />
            <p className="help">An example of hint text in an alternate location</p>
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

  nextClicked = (nextQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

  updateTextValue = (e, id, text) => {
    this.props.setInputText(id, this.refs.inputText.value)
  }

}

export default TextInput;
