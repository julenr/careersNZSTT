/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class SingleChoice extends React.Component {
  render() {
    var question = this.props.questionnaire[this.props.id];
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          <div data-type="radio" className="checkbox radio">
            {question.QuestionResponses.map(this.renderResponses)}
          </div>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    const selected = (this.props.questionnaire[this.props.id].Selected === idx);
    return (
      <span key={idx} onClick={ () => this.onClick(idx)}>
        <Checkbutton key={idx} value={response.ResponseText} selected={selected} />
      </span>
    );
  }

  onClick = (idx) => {
    scrollTo(this.scrollElementID, -120);
    this.props.responseClickedSingleChoice(this.props.id, idx)
    this.props.nextQuestion(this.props.id, this.props.questionnaire[this.props.id].QuestionResponses[idx].NextQuestionID)
  }

}

export default SingleChoice;

