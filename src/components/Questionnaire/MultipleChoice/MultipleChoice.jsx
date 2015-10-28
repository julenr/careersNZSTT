/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class MultipleChoice extends React.Component {

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.option0).focus();
  }

  render() {
    var question = this.props.questionnaire[this.props.id];
    this.nextButtonActive = false;
    this.scrollElementID = uuid.v1();

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
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >That looks right<span className="icon-arrow-down"></span>
          </a>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    if(response.Selected) this.nextButtonActive = true;
    return (
      <span key={idx}
            onClick={ () => this.props.responseClickedMultipleChoice(this.props.id, idx)}
            ref={`option${idx}`}
            tabIndex="0"
        >
        <Checkbutton key={idx} value={response.ResponseText} selected={response.Selected} />
      </span>
    );
  }

  nextClicked = (nextID) => {
    scrollTo(this.scrollElementID, -120);
    this.props.nextQuestion(this.props.id, nextID)
  }

}

export default MultipleChoice;
