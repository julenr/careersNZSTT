/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

class RemoveActionModal extends React.Component {

  render() {

    return (
      <Modal isOpen={this.props.isRemoveActionModalShown} onRequestClose={this.cancelRemoveActionModal}>
          <div className="modal-table"><div className="modal-liner"><div className="modal modal-edit-skills">
            <h2 className="modal-title">Remove action</h2>
            <p><strong>You are removing this action from your action plan.</strong></p>
            <div className="submit">
              <a href="javascript:void 0" className="button-solid" onClick={() => this.removeAction()}>Remove this action</a>
              <br/>
              <a href="javascript:void 0" className="button-simple" onClick={this.cancelRemoveActionModal}>Cancel</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelRemoveActionModal}>&nbsp;</a>
          </div></div></div>
      </Modal>
    );
  }

  removeAction = () => {
    // check the suggestedActionForRemovalIndex property to see if we are removing user added action or a suggested action.
    if(_.isNumber(this.props.suggestedActionForRemovalIndex)) {
      this.props.removeSuggestedAction(this.props.suggestedActionForRemovalIndex);
    } else {
      this.props.removeUserAddedAction(this.props.actionForRemovalActionId, this.props.actionForRemovalCourseId,
        this.props.actionForRemovalBarrierId);
    }
    this.props.closeRemoveActionModal();
  }

  cancelRemoveActionModal = () => {
    this.props.closeRemoveActionModal();
  }

}

export default RemoveActionModal;
