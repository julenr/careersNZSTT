/**
 * Created by jr1500 on 30/09/15.
 */

import './Avatar.scss';
import classNames from 'classnames';

import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <span>
        <img className="avatar" src={require('../../../assets/images/avatars/action-plan-help-avatar-1.jpg')}  width="153" height="199" alt="John"/>
      </span>
    );
  }
}

export default Avatar;