/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import * as constants from '../../../constants/pagination-constants'


class Pagination extends React.Component {


  render() {
    const { paginationLimit, visibleCardsCount, ListType } = this.props;

    let isMoreCards = visibleCardsCount > paginationLimit,
        paginationIncrement = this.getPaginationIncrement(visibleCardsCount, paginationLimit),
        showingCount = this.getShowingCount(visibleCardsCount, paginationLimit),
        itemType = ListType === 'Job' ? 'jobs' : 'courses';

    return (
      <div className="page-maincontent">
        <div className="page-wrapper">
          <ul className="pagination">
            <li className="summary">Showing {showingCount} of {visibleCardsCount} {itemType}</li>
            {
                isMoreCards ?
                <li className="next"><a onClick={() => this.increasePaginationLimit(paginationIncrement)}
                                        href="javascript: void 0">See {paginationIncrement} more {itemType}</a></li>
                    : ''
            }
          </ul>
        </div>
      </div>
    );
  }

  increasePaginationLimit = (paginationIncrement) => {
    this.props.increasePaginationLimit(paginationIncrement);
  }

  getPaginationIncrement = (visibleCardsCount, paginationLimit) => {
    let diff = visibleCardsCount - paginationLimit;
    if (diff >= constants.paginationIncrement) {
      return constants.paginationIncrement;
    }
    return diff;
  }

  getShowingCount = (visibleCardsCount, paginationLimit) => {
    if(visibleCardsCount <= paginationLimit) {
      return visibleCardsCount;
    }
    return paginationLimit;
  }
}

export default Pagination;