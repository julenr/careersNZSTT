/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class MultipleChoice extends React.Component {
  render() {
    var question = this.props.questionnaire[this.props.id];
    this.nextButtonActive = false;

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          <div data-type="checkbox" className="checkbox">
            {question.QuestionResponses.map(this.renderResponses)}
          </div>
        </div>

        <div className={ classNames({'submit': true, 'submit active': this.nextButtonActive}) }>
          <a className="button next"
             href="javascript:void 0"
             onClick={ () => this.props.nextQuestion(this.props.id, question.NextQuestionID)}
            >That looks right<span className="icon-arrow-down"></span>
          </a>
        </div>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    if(response.Selected) this.nextButtonActive = true;
    return (
      <span key={idx} onClick={ () => this.props.responseClickedMultipleChoice(this.props.id, idx)}>
        <Checkbutton key={idx} value={response.ResponseText} selected={response.Selected} />
      </span>
    );
  }

}

export default MultipleChoice;
