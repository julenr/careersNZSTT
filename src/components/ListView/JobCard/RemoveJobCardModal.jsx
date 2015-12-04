/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import _ from 'lodash';

class RemoveJobCardModal extends React.Component {

  render() {
    let jobCard = this.props.jobsCards[this.props.jobCardSelectedID];
    if(this.props.jobCardSelectedID >= 0) {
      return (
        <Modal isOpen={this.props.showRemoveJobCardModal} onRequestClose={this.cancelModal}>
          <div className="modal-table"><div className="modal-liner"><div className="modal modal-remove">
            <h2 className="modal-title">{`Remove ${jobCard.Title}`}</h2>
            <div className="form">
              <p>You are removing the job <strong>{jobCard.Title}</strong> from your list</p>
              <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveJobCard} >
                Remove <span className="tablet desktop">{jobCard.Title} only</span>
              </a>
            </div>
            {this.renderRemoveJobsGroupedByConditions()}
            <div className="submit">
              <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal}>Cancel</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0"
               onClick={this.cancelModal}>&nbsp;</a>
          </div></div></div>
        </Modal>
      );
    }
    else {
      return <span />
    }
  }

  renderRemoveJobsGroupedByConditions = () => {
    let joinedConditions = _(this.props.jobsCards)
      .map((jobCard) =>{
        return (!jobCard.Closed && !jobCard.Filtered) ?
          jobCard.WorkConditions.concat(jobCard.VocationalPathways, jobCard.Interests)
          :
          [];
      })
      .flatten()
      .value();

    let groupedConditions = _.countBy(joinedConditions);
    let uniqueConditions = _(joinedConditions)
      .uniq()
      .remove((Condition) => (groupedConditions[Condition] > 1))
      .value();

    const removeButtons = uniqueConditions.map((condition, idx) => {
      if(groupedConditions[condition]) {
        return (
          <span key={idx}>
            {(idx === 0) ? <p>If you'd prefer you can remove all jobs from your list with similar conditions:</p> : ''}
            <p>
              <a href="javascript:void 0" className="button" onClick={() => this.closeModalAndFilterGroupByCondition(condition)}>
              {`Remove all ${condition} jobs `}
                <span className="amount">
                  <span>{`(${groupedConditions[condition]} jobs)`}</span>
                </span>
              </a>
            </p>
          </span>
        )
      } else {
        return '';
      }
    });

    return removeButtons;
  }

  closeModalAndFilterGroupByCondition = (condition) => {
    this.props.closeRemoveJobCardModal();
    this.props.addJobCardCondition(condition);
    this.props.filterJobCardsByCondition(condition);
  }

  closeModalAndRemoveJobCard = () => {
    this.props.closeRemoveJobCardModal();
    this.props.closeJobCard(this.props.jobCardSelectedID);
  }

  cancelModal = () => {
    this.props.closeRemoveJobCardModal();
  }

}

export default RemoveJobCardModal;
