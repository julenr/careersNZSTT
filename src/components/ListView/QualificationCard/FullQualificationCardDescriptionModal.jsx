/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Modal from 'react-modal';

const FullQualificationCardDescriptionModal = (props) => {
  const { qualificationCardSelectedID } = props;
  const qualificationCard = props.qualificationsPanel.Courses[qualificationCardSelectedID];
  return (
    <Modal isOpen={props.showFullQualificationCardDescriptionModal} onRequestClose={() => closeModal(props)}>
      <div className="modal-table">
        <div className="modal-liner">
          <div className="modal modal-vocation-pathways">
            {
              (qualificationCard) ?
                [
                  <h2 key="0" className="modal-title">{qualificationCard.Title}</h2>,
                  <div key="1" dangerouslySetInnerHTML={{__html: qualificationCard.Description}} />
                  ]
                :
                <span/>
              }
            <a className="action-close icon-cross" href="javascript: void 0" onClick={() => closeModal(props)}>&nbsp;</a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const closeModal = (props) => {
  props.closeQualificationFullDescriptionModal();
}

export default FullQualificationCardDescriptionModal;
