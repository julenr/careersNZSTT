/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class RemoveInstitutionCardModal extends React.Component {

  render() {
    let institutionCard = this.props.institutionsPanel.Institutions[this.props.removeInstitutionCardModalID];
    if(this.props.removeInstitutionCardModalID >= 0) {
      return (
        <Modal isOpen={this.props.showRemoveInstitutionCardModal}>
            <div className="modal modal-remove">
              <h2 className="modal-title">{`Remove ${institutionCard.Title}`}</h2>
              <div className="form">
                <p>You are removing the course-provider <strong>{institutionCard.Title}</strong> from your list</p>
                <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveInstitutionCard} >Remove <span
                  className="tablet desktop">{institutionCard.Title} only</span></a>
              </div>
              <div className="submit">
                <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal}>Cancel</a>
              </div>
              <a className="action-close icon-cross" href="javascript:void 0"
                 onClick={this.cancelModal}>&nbsp;</a>
            </div>
        </Modal>
      );
    }
    else {
      return <span />
    }
  }

  closeModalAndRemoveInstitutionCard = () => {
    this.props.closeInstitutionCard(this.props.removeInstitutionCardModalID);
    this.props.closeRemoveInstitutionCardModal();
  }

  cancelModal = () => {
    this.props.closeRemoveInstitutionCardModal();
  }

}

export default RemoveInstitutionCardModal;
