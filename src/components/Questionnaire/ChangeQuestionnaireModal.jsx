/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Modal from 'react-modal';

class ChangeQuestionnaireModal extends React.Component {

  render() {
    const customStyles = {
      content : {
        bottom                : '30%',
        transform             : 'translate(0%, 0%)'
      }
    }

    return (
      <Modal isOpen={this.props.changeQuestionnaireModal} style={customStyles}>
          <div className="modal modal-change-question">
            <h2 className="modal-title">Answers will be lost</h2>
            <p>Changing your answer for this question will mean some of the answers you've already entered will be lost. Do you wish to continue.</p>
            <div className="submit">
              <a className="button-solid" href="javascript:void 0" onClick={this.changeQuestion}>Change answer</a><br/>
              <a className="button-simple" href="javascript:void 0" onClick={this.closeModal}>Cancel</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.closeModal}>&nbsp;</a>
          </div>
      </Modal>
    );
  }

  closeModal = () => {
    this.props.closeChangeQuestionnaireModal();
  }

  changeQuestion= () => {
    this.props.resetListViewLoaderFlag();
    this.props.changeCurrentQuestion();
    this.props.closeChangeQuestionnaireModal();
  }

}

export default ChangeQuestionnaireModal;
