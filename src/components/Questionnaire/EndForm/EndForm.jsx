/**
 * Created by jr1500 on 30/09/15.
 */

import './EndForm.scss';

import React from 'react';
import classNames from 'classnames';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class EndForm extends React.Component {
  render() {
    return (
      <div className="fieldset last active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>Thanks user-name, we have everything we need and have made a list of jobs/courses just for you.</label>
        </div>
        <div className="submit active">
          <a className="button next" href="#">Great, show me! <span className="icon-arrow-right"></span></a>
        </div>
      </div>
    );
  }
}

export default EndForm;
