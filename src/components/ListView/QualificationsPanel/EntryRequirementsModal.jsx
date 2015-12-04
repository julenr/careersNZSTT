
import React from 'react';
import Modal from 'react-modal';

const EntryRequirementsModal = (props) => {
  let jobTitle = props.jobsCards[props.jobCardSelectedID].Title;

  return (
    <Modal isOpen={props.showEntryRequirementsModal} onRequestClose={() => cancelModal(props)}>
      <div className="modal-table">
        <div className="modal-liner">
          <div className="modal modal-job-entry-requirements">
            <h2 className="modal-title">Entry requirements for {jobTitle}</h2>
            <p>There are no specific requirements to become a hunter and trapper, as most skills are learned on the job. However depending on what sort of hunting or trapping you are doing, you may need training in an aspect of the work.</p>

            <div className="panel-intro" dangerouslySetInnerHTML={{__html: props.qualificationsPanel.EntryRequirements}} />


            <a className="action-close icon-cross" href="javascript:void 0" onClick={() => cancelModal(props)}>&nbsp;</a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const cancelModal = (props) => {
  props.closeEntryRequirementsModal();
}

export default EntryRequirementsModal;