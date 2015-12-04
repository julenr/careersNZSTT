/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router';

const ResetToolModal = (props) => {
  return (
    <Modal isOpen={props.showResetToolModal} onRequestClose={() => closeModal(props)}>
        <div className="modal-table"><div className="modal-liner"><div className="modal modal-confirm-reset">
          <h2 className="modal-title">{props.resetModal.Title}</h2>
          <div dangerouslySetInnerHTML={{__html: props.resetModal.Content}} />
          <div className="submit">
            <Link className="button-solid" to="/" onClick={() => resetApp(props)}>
              <span>
                Yes, reset
              </span>
            </Link>
            <br/>
            <a href="javascript:void 0" className="button-simple" onClick={() => closeModal(props)}>Cancel</a>
          </div>
          <a className="action-close icon-cross" href="javascript:void 0" onClick={() => closeModal(props)}>&nbsp;</a>
        </div></div></div>
    </Modal>
  );
}

const resetApp = (props) => {
  props.closeResetToolModal();
  props.getQuestionnaire();
}

const closeModal = (props) => {
  props.closeResetToolModal();
}

export default ResetToolModal;
