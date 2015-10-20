/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class SingleChoice extends React.Component {
  render() {
    var question = this.props.questions[this.props.id];

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          <div data-type="radio" className="checkbox radio">
            {question.QuestionResponses.map(this.renderResponses)}
          </div>
        </div>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    const selected = (this.props.questions[this.props.id].Selected === idx);
    return (
      <span key={idx} onClick={ () => this.props.responseClickedSingleChoice(this.props.id, idx)}>
        <Checkbutton key={uuid.v4()} value={response.ResponseText} selected={selected} />
      </span>
    );
  }

}

export default SingleChoice;

