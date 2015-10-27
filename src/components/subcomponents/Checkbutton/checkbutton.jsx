/**
 * Created by jr1500 on 30/09/15.
 */

import classNames from 'classnames';

import React from 'react';

class Checkbutton extends React.Component {


  render() {
    let classes = classNames(
      {
        'checkbox-item': true,
        'checkbox-item selected': this.props.selected
      }
    );

    return (
      <span className={ classes } >
        <span className="icon-tick"></span>
        {this.props.value}
      </span>
    );
  }
}

export default Checkbutton;