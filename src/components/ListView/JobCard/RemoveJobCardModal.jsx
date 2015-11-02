/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class RemoveJobCardModal extends React.Component {

  render() {
    let jobCard = this.props.jobsCards[this.props.removeJobCardModalID];
    if(this.props.removeJobCardModalID >= 0) {
      return (
        <Modal isOpen={this.props.showRemoveJobCardModal}>
          <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
            <div className="ReactModal__Content ReactModal__Content--after-open modal modal-remove">
              <h2 className="modal-title">{`Remove ${jobCard.Title}`}</h2>
              <div className="form">
                <p>You are removing the job <strong>{jobCard.Title}</strong> from your list</p>
                <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveJobCard} >Remove <span
                  className="tablet desktop">{jobCard.Title} only</span></a>
              </div>
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

  closeModalAndRemoveJobCard = () => {
    this.props.closeJobCard(this.props.removeJobCardModalID);
    this.props.closeRemoveJobCardModal();
  }

  cancelModal = () => {
    this.props.closeRemoveJobCardModal();
  }

}

export default RemoveJobCardModal;
