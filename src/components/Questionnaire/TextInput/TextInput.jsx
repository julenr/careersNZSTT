/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class TextInput extends React.Component {
  render() {
    var question = this.props.questions[this.props.id];
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': question.Text
    } );

    return (
      <div className="fieldset active">
        <div className="field text with-avatar">
          <Avatar />
          <label htmlFor="q2-sample">{question.Description}</label>
          <p className="help">An example of help text</p>
          <div className="text">
            <input className="text"
                   name="q2-sample"
                   id="q2-sample"
                   ref="inputText"
                   onKeyUp={ () => this.props.setInputText(this.props.id, this.refs.inputText.value)}
                   type="text"
                   data-type="input"
                   defaultValue={question.Text}
                   placeholder={question.PlaceHolder}
              />
            <p className="help">An example of hint text in an alternate location</p>
          </div>
        </div>
        <div className={ classes }>
          <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
        </div>
      </div>
    );
  }
}

export default TextInput;
