/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class RemoveQualificationCardModal extends React.Component {

  render() {
    let qualificationCard = this.props.qualificationsPanel.Courses[this.props.removeQualificationCardModalID];
    if(this.props.removeQualificationCardModalID >= 0) {
      return (
        <Modal isOpen={this.props.showRemoveQualificationCardModal}>
          <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
            <div className="ReactModal__Content ReactModal__Content--after-open modal modal-remove">
              <h2 className="modal-title">{`Remove ${qualificationCard.Title}`}</h2>
              <div className="form">
                <p>You are removing the course <strong>{qualificationCard.Title}</strong> from your list</p>
                <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveQualificationCard} >Remove <span
                  className="tablet desktop">{qualificationCard.Title} only</span></a>
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

  closeModalAndRemoveQualificationCard = () => {
    this.props.closeQualificationCard(this.props.removeQualificationCardModalID);
    this.props.closeRemoveQualificationCardModal();
  }

  cancelModal = () => {
    this.props.closeRemoveQualificationCardModal();
  }

}

export default RemoveQualificationCardModal;
