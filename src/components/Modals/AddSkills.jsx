/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

class AddSkillsModal extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.showAddSkillsModal} >
        <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
          <div className="ReactModal__Content ReactModal__Content--after-open modal modal-add-skills">
            <h2 className="modal-title">Edit your skills</h2>
            <div className="form">
              <h3>Add skills to your list.</h3>
              <p>Start typing the name of a job or skill:</p>
              <div className="fieldset">
                <div className="field text">
                  <div className="text">
                    <input className="text autocomplete" name="q4-sample" id="q4-sample" type="text" data-type="input" placeholder="eg. IT skills" />
                    </div>
                  </div>
                </div>
              </div>
              <p>Or choose from the list of popular jobs:</p>
              <div className="layout-col">
                <div className="tags" data-type="tag">
                  {this.props.popularJobs.Jobs.map(this.renderPopularJobs)}
                </div>
              </div>
              { this.renderShowMoreButton() }
              <div className="submit">
                <a className="button-solid" onClick={this.showCheckSkillsModal} >Done</a><br/>
                <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal} >Cancel</a>
              </div>
                <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelModal}>&nbsp;</a>
              </div>
            </div>
      </Modal>
    );
  }

  showCheckSkillsModal = (popularJobSelected) => {
    this.props.getJobSkills(popularJobSelected);
    this.props.closeAddSkillsModal();
    this.props.openCheckSkillsModal();
  }

  renderShowMoreButton = () => {
    if(this.props.popularJobsVisible !== 1000) {
      return (
        <span className="button add-more" href="javascript:void 0"
          onClick={this.showMore}>
          <span className="icon-plus-circle"></span>
          Show me more options
        </span>
      );
    }
  }

  renderPopularJobs = (popularJob, idx) => {
    if (idx > this.props.popularJobsVisible) {
      return <span key={idx} />
    }
    else {
     return (
        <span className="tag" key={idx} onClick={ () => this.showCheckSkillsModal(popularJob)} >
            {popularJob}
        </span>
      );
    }
  }

  closeModal = () => {
    this.props.closeAddSkillsModal();
  }

  cancelModal = () => {
    this.props.closeAddSkillsModal();
    this.props.openSkillsModal();
  }

  showMore = () => {
    this.props.showMoreAddSkillsModal();
  }

}

export default AddSkillsModal;
