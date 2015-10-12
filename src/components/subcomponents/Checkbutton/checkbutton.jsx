/**
 * Created by jr1500 on 30/09/15.
 */

import './checkbutton.scss';
import classNames from 'classnames';

import React from 'react';

class Checkbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: this.props.selected};
  }

  click = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    let classes = classNames( this.props.className, {
      'checkbox-item': true,
      'checkbox-item selected': this.state.checked
    } );

    return (
      <span className={ classes } onClick={this.click}>
        <span className="icon-tick"></span>
        {this.props.value}
      </span>
    );
  }
}

export default Checkbutton;