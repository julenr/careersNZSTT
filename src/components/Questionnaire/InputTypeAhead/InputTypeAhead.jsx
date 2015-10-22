/**
 * Created by jr1500 on 30/09/15.
 */
import './TypeAhead.scss';

import React from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

var Typeahead = require('react-typeahead').Typeahead;

import Avatar from '../../subcomponents/Avatar';

class InputTypeAhead extends React.Component {
  render() {
    var question = this.props.questionnaire[this.props.id];
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': question.Text
    } );
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset active">
        <div className="field text with-avatar">
          <Avatar />
          <label htmlFor="q2-sample">{question.Description}</label>
          <div className="text">
            <Typeahead
              ref="typeAhead"
              customClasses={{
                input: 'text',
                typeahead: 'topcoat-list',
                results: 'topcoat-list__container',
                listItem: 'topcoat-list__item',
                token: 'topcoat-button',
                customAdd: 'topcoat-addme'
              }}
              value={question.Text}
              placeholder={question.PlaceHolder}
              onKeyUp={ () => this.props.setTypeAheadText(this.props.id, this.refs.typeAhead) }
              onBlur={ () => this.props.setTypeAheadText(this.props.id, this.refs.typeAhead) }
              options={question.QuestionResponses}
              maxVisible={10}
              />
          </div>
        </div>
        <div className={ classes }>
          <a className="button next"
             href="javascript:void 0"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >Next<span className="icon-arrow-down"></span>
          </a>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  nextClicked = (nextQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

}

export default InputTypeAhead;