/**
 * Created by jr1500 on 30/09/15.
 */

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
      'tag': true,
      'tag selected': this.state.checked
    } );

    return (
      <span className={ classes } tabIndex="0" onClick={this.click}>
        {this.props.value}
        <span className="icon-cancel-circle" onClick={ () => this.props.removeTag(this.props.id, this.props.tagId)}></span>
      </span>
    );
  }
}

export default Checkbutton;