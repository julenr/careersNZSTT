/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';

import Avatar from '../../subcomponents/Avatar';

class YesNo extends React.Component {

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.option0).focus();
  }

  render() {
    var question = this.props.questionnaire[this.props.id];
    const alternativeSelected = (this.props.questionnaire[this.props.id].Selected === -1);
    let classes = classNames({
      'basic': true,
      'selected': alternativeSelected
    });
    this.scrollElementID = `YesNo${this.props.id}`;
    return (
      <div className="fieldset active">
        <div className="field radio with-avatar inline">
          <Avatar />
          <label>{question.Description}</label>
          {
            (question.HintPosition === 'Top' && question.HintText) ?
            <p className="help">{question.HintText}</p> : ''
          }
          <ul data-type="radio" className="radio">
            {question.QuestionResponses.map(this.renderResponses)}
            {
              (question.HasAlternative) ?
                  <li className={ classes } href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                    <span className="icon-tick"></span>
                    {question.AlternativeText}
                    <span className="icon-arrow-right"></span>
                  </li>
                  :
                  ''
            }
          </ul>
        </div>
        {
          (question.HintPosition === 'Bottom' && question.HintText) ?
          <p className="help">{question.HintText}</p> : ''
        }
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
    this.props.responseClickedAlternativeOfSingleChoice(this.props.id);
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
