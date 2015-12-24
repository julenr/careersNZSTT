/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Modal from 'react-modal';
import _ from 'lodash';

const VocationalPathwaysModal = (props) => {
  return (
    <Modal isOpen={props.showVocationalPathwaysModal} onRequestClose={() => closeModal(props)}>
      <div className="modal-table" onClick={() => closeModal(props)}>
        <div className="modal-liner">
          <div className="modal modal-vocation-pathways" onClick={(e) => stopClickBubble(e)}>
            <h2 className="modal-title">{props.vocationalPathwaysModal.Title}</h2>
            <div dangerouslySetInnerHTML={{__html: props.vocationalPathwaysModal.Content}} />
            <ul className="sector-simple-list">
              { _.map(props.vocationalPathways, renderPathways) }
            </ul>
            <a className="action-close icon-cross" href="javascript: void 0" onClick={() => closeModal(props)}>&nbsp;</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const stopClickBubble = (event) => {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
};

const renderPathways = (colour, title) => {
  return (<li key={colour} className={`sector-${colour}`}>{title}</li>);
};

const closeModal = (props) => {
  props.closeVocationalPathwaysModal();
};

export default VocationalPathwaysModal;
