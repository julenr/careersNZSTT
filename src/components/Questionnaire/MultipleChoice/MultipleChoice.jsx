/**
 * Created by jr1500 on 30/09/15.
 */

import './MultipleChoice.scss';

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
class MultipleChoice extends React.Component {
  render() {
    var { questions } = this.props;
    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{questions.Description}</label>
          <div data-type="checkbox" className="checkbox">
            {questions.QuestionResponses.map(this.renderQuestions)}
          </div>
        </div>

        <div className="submit active">
          <a className="button next" href="#">That looks right<span className="icon-arrow-down"></span></a>
        </div>
      </div>
    );
  }

  renderQuestions = (question, idx) => {
    return (
      <span key={idx} onClick={this.questionClick.bind(null, idx)}>
        <Checkbutton key={uuid.v4()} value={question.ResponseText} selected={question.selected} />
      </span>
    );
  }

  questionClick = (idx) => {
    this.props.dispatch(actionCreators.questionClicked(this.props.id-1, idx));
  }
}

export default MultipleChoice;
