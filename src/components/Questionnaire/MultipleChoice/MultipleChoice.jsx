/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';

import Avatar from '../../subcomponents/Avatar';

class MultipleChoice extends React.Component {

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.option0).focus();
  }

  render() {
    var question = this.props.questionnaire[this.props.id];
    this.nextButtonActive = false;
    const alternativeSelected = (this.props.questionnaire[this.props.id].Selected === -1);
    let classes = classNames({
      'basic': true,
      'selected': alternativeSelected
    });
    this.scrollElementID = `MultipleChoice${this.props.id}`;

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          {
            (question.HintPosition  === 'Top' && question.HintText) ?
            <p className="help">{question.HintText}</p> : ''
          }
          <ul data-type="checkbox" className="checkbox">
            {question.QuestionResponses.map(this.renderResponses)}
            {this.renderShowMoreButton()}
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

        <div className={ classNames({'submit': true, 'submit active': this.nextButtonActive}) }>
          <a className="button next"
             href="javascript:void 0"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >That looks right<span className="icon-arrow-down"></span>
          </a>
        </div>
        {
          (question.HintPosition === 'Bottom' && question.HintText) ?
          <p className="help">{question.HintText}</p> : ''
        }
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderShowMoreButton = () => {
    if(this.props.questionnaire[this.props.id].Visible !== 1000 && this.props.questionnaire[this.props.id].QuestionResponses.length > this.props.questionnaire[this.props.id].Visible) {
      return (
          <li className="basic trigger-reveal-additional-options" href="javascript: void 0" onClick={ this.showMore } >
          Show me some more options
          </li>
      );
    }
  }

  renderResponses = (response, idx) => {
    const visible = this.props.questionnaire[this.props.id].Visible;
    if (idx >= visible) {
      return;
    }

    if(response.Selected) this.nextButtonActive = true;

    let className = classNames({
      'selected': response.Selected
    });

    return (
      <li key={idx}
            onClick={ () => this.props.responseClickedMultipleChoice(this.props.id, idx)}
            ref={`option${idx}`}
            tabIndex="0" className={ className }
        >
        <span className="icon-tick"></span>
        {response.ResponseText}
      </li>
    );
  }

  alternativeClicked = (alternativeQuestionID) => {
    this.props.responseClickedAlternativeOfMultipleChoice(this.props.id);
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  nextClicked = (nextID) => {
    scrollTo(this.scrollElementID, -120);
    this.props.nextQuestion(this.props.id, nextID)
  }

  showMore = () => {
    this.props.showMoreOptions(this.props.id);
  }
}

export default MultipleChoice;
