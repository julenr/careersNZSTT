/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Avatar from '../../subcomponents/Avatar';

class TagCloud extends React.Component {
  render() {
    var question = this.props.questions[this.props.id];
    this.nextButtonActive = false;

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          <p className="help">Use the <span className="icon-cancel-circle">
            </span> to <strong>remove</strong> a skill you don't have or don't want to have.
          </p>
          <div className="question-tags" data-type="tag">
            {question.QuestionResponses.map(this.renderTags)}
            <div tabIndex="0" className="tag add-more"><span className="icon-plus-circle"></span>Add more</div>
            <span tabIndex="0"
                  className="tag select-all"
                  onClick={ () => this.props.sellectAllTagCloud(this.props.id)}>
              Select all
            </span>
          </div>
        </div>
        <div className={ classNames({'submit': true, 'submit active': this.nextButtonActive}) }>
          <a className="button next" href="javascript:void 0">That looks about right<span className="icon-arrow-down"></span></a>
        </div>
      </div>
    );
  }

  renderTags = (response, idx) => {
    if(response.Removed) {
      return ( <span /> );
    }
    else {
      let classes = classNames( this.props.className, {
        'tag': true,
        'tag selected': response.Selected
      } );
      if(response.Selected) this.nextButtonActive = true;
      return (
      <span key={idx} onClick={ () => this.props.responseClickedMultipleChoice(this.props.id, idx)}>
        <span className={ classes } key={uuid.v4()} tabIndex="0" >
          {response.ResponseText}
          <span
            className="icon-cancel-circle"
            key={uuid.v4()}
            onClick={ () => this.props.removeTag(this.props.id, idx)}
            >
          </span>
        </span>
      </span>
      );
    }
  }

}


export default TagCloud;
