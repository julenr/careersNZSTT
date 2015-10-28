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

class YesNo extends React.Component {

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.option0).focus();
  }

  render() {
    var question = this.props.questionnaire[this.props.id];
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar inline">
          <Avatar />
          <label>{question.Description}</label>
          <ul data-type="radio" className="radio">
            {question.QuestionResponses.map(this.renderResponses)}
            <li tabIndex="0"
                className="basic"
                onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) }
              >
              <span className="icon-tick"></span>
              {question.AlternativeText}
            </li>
          </ul>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderResponses = (response, idx) => {
    const selected = (this.props.questionnaire[this.props.id].Selected === idx);
    let classes = classNames(
      {
        'selected': selected
      }
    );
    return (
      <li
        className={ classes }
        tabIndex="0"
        ref={`option${idx}`}
        key={idx}
        onClick={ () => this.onClick(idx) }
      >
        <span className="icon-tick"></span>{response.ResponseText}
      </li>
    );
  }

  alternativeClicked = (alternativeQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  onClick = (idx) => {
    scrollTo(this.scrollElementID, -120);
    this.props.clickedYesNo(this.props.id, idx)
    this.props.nextQuestion(this.props.id, this.props.questionnaire[this.props.id].QuestionResponses[idx].NextQuestionID)
  }

}

export default YesNo;
