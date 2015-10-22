/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
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
             onClick={ () => this.props.nextQuestion(this.props.id, question.NextQuestionID)}
            >Next<span className="icon-arrow-down"></span>
          </a>
        </div>
      </div>
    );
  }

  updateTextValue = (e, id, text) => {
    this.props.setInputText(id, this.refs.inputText.value)
  }

}

export default TextInput;
