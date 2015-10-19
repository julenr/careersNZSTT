/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
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
              onKeyUp={ () => this.updateMemberName(this.refs.memberName.value) }
              type="text"
              data-type="input"
              defaultValue={memberName}
              placeholder="Your name"
              />
          </div>
          <div className={ classes }>
            <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
          </div>
        </div>
      </div>
    );
  }

  updateMemberName = (name) => {
    this.props.setMemberName(name);
  }
}

export default IntroForm;
