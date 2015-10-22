/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

import * as actionCreators from '../../../redux/general-actions';

import Avatar from '../../subcomponents/Avatar';

class EndForm extends React.Component {
  render() {
    return (
      <div className="fieldset last active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>
            Thanks {this.props.memberName}, we have everything we need and have made a list of jobs/courses just for you.
          </label>
        </div>
        <div className="submit active">
          <Link className="button next" to="/list-view" onClick={this.linkClick}>Great, show me! <span className="icon-arrow-right"></span></Link>
        </div>
      </div>
    );
  }

  linkClick = () => {
    this.props.getListViewData();
  }
}

export default EndForm;
