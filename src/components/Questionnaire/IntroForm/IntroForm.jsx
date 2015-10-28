/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

import Avatar from '../../subcomponents/Avatar';

class IntroForm extends React.Component {
  render() {
    var memberName = this.props.memberName;
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': memberName
    } );
    this.scrollElementID = uuid.v1();

    return (
      <div className="fieldset first-question active">
        <p>To get started answer the question below…</p>
        <div className="field text">
          <label htmlFor="q1-name">First up, what is your name?</label>
          <div className="text">
            <input
              className="text"
              autoFocus
              name="q1-name"
              id="q1-name"
              ref="memberName"
              onKeyUp={ (e) => this.updateMemberName(e, this.refs.memberName.value) }
              type="text"
              data-type="input"
              defaultValue={memberName}
              placeholder="Your name"
              />
          </div>
          <div className={ classes }>
            <a className="button next"
                 onClick={ () => this.nextClicked() } //Just render 1st question
                >
                Next<span className="icon-arrow-down"></span>
            </a>
          </div>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  nextClicked = () => {
    scrollTo(this.scrollElementID, -120);
    this.props.firstQuestion();
  }

  updateMemberName = (e, name) => {
    if(e.key === 'Enter' && name !== ''){
      this.nextClicked();
    }
    else {
      this.props.setMemberName(name);
    }
  }

}

export default IntroForm;
