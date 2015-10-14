/**
 * Created by jr1500 on 30/09/15.
 */

import './TextInput.scss';

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

@connect((state, props) => {
  return {
    questions: state._questionnaire.data.Questions[props.id-1]
  }
})
class TextInput extends React.Component {
  render() {
    var { questions } = this.props;
    return (
      <div className="field radio with-avatar">
        <Avatar />
        <div className="field text">
          <label for="q1-name">{questions.Description}</label>
          <div className="text">
            <input className="text" name="q1-name" id="q1-name" type="text" data-type="input" value={questions.PlaceHolder}/>
          </div>
          <div className="submit">
            <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default TextInput;
