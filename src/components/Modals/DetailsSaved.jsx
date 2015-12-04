/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Modal from 'react-modal';

const DetailsSaved = (props) => {
  return (
    <Modal isOpen={props.showDetailsSavedModal} onRequestClose={() => closeModal(props)}>
      <div className="modal-table"><div className="modal-liner"><div className="modal modal-login-confirmation">
        <h2 className="modal-title">Details saved</h2>
        <p>{`Thanks for logging in, ${props.member.Name}. From now on any changes you make will be automatically saved for you.`}</p>
        <div className="submit">
          <a href="javascript:void 0" className="button-solid" onClick={() => closeModal(props)}>Return</a>
        </div>
        <a className="action-close icon-cross" href="javascript:void 0" onClick={() => closeModal(props)}>&nbsp;</a>
      </div></div></div>
    </Modal>
  );
}

const closeModal = (props) => {
  if(props.currentRoute === 'Questionnaire') {
    props.loadSavedState();
  } else {
    props.closeDetailsSavedModal();
  }
}

export default DetailsSaved;
