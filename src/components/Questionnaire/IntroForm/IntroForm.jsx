/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import Avatar from '../../subcomponents/Avatar';

class IntroForm extends React.Component {
  render() {
    var memberName = this.props.memberName;
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': memberName
    } );

    return (
      <div className="fieldset first-question active">
        <p>To get started answer the question below…</p>
        <div className="field text">
          <label htmlFor="q1-name">First up, what is your name?</label>
          <div className="text">
            <input
              className="text"
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
               href="javascript: void 0"
               onClick={ () => this.props.firstQuestion()} //Just render 1st question
              >
              Next<span className="icon-arrow-down"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  updateMemberName = (e, name) => {
    this.props.setMemberName(name);
  }

}

export default IntroForm;
