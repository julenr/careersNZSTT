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
        <Modal isOpen={this.props.showRemoveJobCardModal}>
          <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
            <div className="ReactModal__Content ReactModal__Content--after-open modal modal-remove">
              <h2 className="modal-title">{`Remove ${jobCard.Title}`}</h2>
              <div className="form">
                <p>You are removing the job <strong>{jobCard.Title}</strong> from your list</p>
                <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveJobCard} >
                  Remove <span className="tablet desktop">{jobCard.Title} only</span>
                </a>
              </div>
              {this.groupJobsByWorkConditions()}
              <div className="submit">
                <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal}>Cancel</a>
              </div>
              <a className="action-close icon-cross" href="javascript:void 0"
                 onClick={this.cancelModal}>&nbsp;</a>
            </div>
          </div>
        </Modal>
      );
    }
    else {
      return <span />
    }
  }

  groupJobsByWorkConditions = () => {

    let joinedWorkConditions = _(this.props.jobsCards)
      .map((jobCard) =>{return (!jobCard.Closed) ? jobCard.WorkConditions : [];})
      .flatten()
      .value();

    let groupedWorkConditions = _.countBy(joinedWorkConditions);
    let uniqueWorkConditions = _(joinedWorkConditions)
      .uniq()
      .remove((workCondition) => (groupedWorkConditions[workCondition] > 1))
      .value();

    const removeButtons = uniqueWorkConditions.map((workCondition, idx) => {
      if(groupedWorkConditions[workCondition]) {
        return (
          <span key={idx}>
            {(idx === 0) ? <p>If you'd prefer you can remove all jobs from your list with similar conditions:</p> : ''}
            <p>
              <a href="javascript:void 0" className="button">
              {`Remove all ${workCondition} jobs `}
                <span className="amount">
                  <span>{`(${groupedWorkConditions[workCondition]} jobs)`}</span>
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

  closeModalAndRemoveJobCard = () => {
    this.props.closeJobCard(this.props.jobCardSelectedID);
    this.props.closeRemoveJobCardModal();
  }

  cancelModal = () => {
    this.props.closeRemoveJobCardModal();
  }

}

export default RemoveJobCardModal;
