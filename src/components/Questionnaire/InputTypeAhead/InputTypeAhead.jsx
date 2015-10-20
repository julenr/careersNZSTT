/**
 * Created by jr1500 on 30/09/15.
 */
import './TypeAhead.scss';

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
var Typeahead = require('react-typeahead').Typeahead;

import Avatar from '../../subcomponents/Avatar';

class InputTypeAhead extends React.Component {
  render() {
    var question = this.props.questions[this.props.id];
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': question.Text
    } );

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
          <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
        </div>
      </div>
    );
  }
}

export default InputTypeAhead;