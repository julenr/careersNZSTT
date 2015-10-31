/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class RemoveQualificationCardModal extends React.Component {

  render() {
    let jobCard = this.props.jobsCards[this.props.checkSkillsID];
    return (
      <Modal isOpen={this.props.showRemoveJobCardModal} >

        <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
          <div className="ReactModal__Content ReactModal__Content--after-open modal modal-remove">
            <h2 className="modal-title">Remove [job-title]</h2>
            <div className="form">
              <p>You are removing the job <strong>[job-title]</strong> from your list</p>
              <a href="#" className="button-solid">Remove <span className="tablet desktop">[job-title] only</span></a>
            </div>
            <p>If you'd prefer you can remove all jobs from your list with similar conditions:</p>
            <p><a href="#" className="button">Remove all outdoor jobs <span className="amount">(4 jobs)</span></a></p>
            <p><a href="#" className="button">Remove all shift work jobs <span className="amount">(4 jobs)</span></a></p>
            <div className="submit">
              <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal}>Cancel</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.closeModal}>&nbsp;</a>
          </div>
        </div>

      </Modal>
    );
  }

  closeModal = () => {
    this.props.closeJobCardModal();
  }

  cancelModal = () => {
    this.props.cancelJobCardModal();
  }

}

export default RemoveQualificationCardModal;
