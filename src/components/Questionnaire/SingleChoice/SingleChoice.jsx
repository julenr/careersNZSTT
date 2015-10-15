/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';

import Checkbutton from '../../subcomponents/Checkbutton';
import Avatar from '../../subcomponents/Avatar';

class SingleChoice extends React.Component {
  render() {
    return (
      <div className="field radio with-avatar">
        <Avatar />
        <label>{this.props.value}</label>
        <div data-type="checkbox" className="checkbox">
          {this.props.options.map(this.renderOptions)}
        </div>
      </div>
    );
  }

  renderOptions(options) {
    return (
      <Checkbutton key={uuid.v4()} value={options.ResponseText} selected={options.selected}/>
    );
  }
}

export default SingleChoice;
