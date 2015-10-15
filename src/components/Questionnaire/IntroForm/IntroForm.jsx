/**
 * Created by jr1500 on 30/09/15.
 */

import './IntroForm.scss';

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class IntroForm extends React.Component {
  render() {
    return (
      <div className="fieldset first-question active">
        <p>To get started answer the question below…</p>
        <div className="field text">
          <label htmlFor="q1-name">First up, what is your name?</label>
          <div className="text">
            <input className="text" name="q1-name" id="q1-name" type="text" data-type="input" />
          </div>
          <div className="submit active">
            <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroForm;
