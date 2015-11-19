/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

class RemoveActionModal extends React.Component {

  render() {

    const {actionForRemovalIndex} = this.props;

    return (
      <Modal isOpen={this.props.isRemoveActionModalShown}>
          <div className="modal modal-edit-skills">
            <h2 className="modal-title">Remove action</h2>
            <p><strong>You are removing this action from your action plan.</strong></p>
            <div className="submit">
              <a href="javascript:void 0" className="button-solid" onClick={() => this.removeAction(actionForRemovalIndex)}>Remove this action</a>
              <br/>
              <a href="javascript:void 0" className="button-simple" onClick={this.cancelRemoveActionModal}>Cancel</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelRemoveActionModal}>&nbsp;</a>
          </div>
      </Modal>
    );
  }

  removeAction = (index) => {
    this.props.removeSuggestedAction(index);
    this.props.closeRemoveActionModal();
  }

  cancelRemoveActionModal = () => {
    this.props.closeRemoveActionModal();
  }

}

export default RemoveActionModal;
