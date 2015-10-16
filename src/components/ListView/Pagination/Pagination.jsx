/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

class Pagination extends React.Component {

  render() {
    return (
      <div className="page-maincontent">
        <div className="page-wrapper">
          <ul className="pagination">
            <li className="summary">Showing 1-12 of 33 jobs</li>
            <li className="next"><a href="#">See 12 more jobs/courses</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Pagination;