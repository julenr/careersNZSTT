/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

class EditSkillsModal extends React.Component {

  render() {
    var selectedSkills = this.props.skillsSelected;
    return (
      <Modal isOpen={this.props.showSkillsModal} >
        <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
          <div className="ReactModal__Content ReactModal__Content--after-open modal modal-edit-skills">
            <h2 className="modal-title">Edit your skills</h2>
            <div className="layout-row">
              <div className="layout-col layout-col-4">
                <p className="modal-intro">Most skills you have a transferable and we'll use them to recommend jobs and courses that suit you. Use the to remove skills you don't have or don’t want to use in the future.</p>
              </div>
              <div className="layout-col layout-col-8">
                <div className="tags" data-type="tag">
                  {
                    (selectedSkills.length) ?
                      selectedSkills.map(this.renderSkillsTags)
                      :
                      <span>You still have no added skills</span>
                  }
                  <span className="button add-more" onClick={this.addSkillsModal}>
                    <span className="icon-plus-circle"></span>
                    Add more skills
                  </span>
                </div>
              </div>
            </div>
            <div className="submit">
              <a href="javascript:void 0" className="button-solid" onClick={this.closeSkillsModal}>Done</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.closeSkillsModal}>&nbsp;</a>
          </div>
        </div>
      </Modal>
    );
  }

  renderSkillsTags = (skill, idx) => {
    return (
      <span className="tag" key={idx}>
        {skill}
        <span key={idx} className="icon-cancel-circle" onClick={ () => this.props.removeSelectedSkill(skill) }></span>
      </span>
    );
  }

  closeSkillsModal = () => {
    this.props.closeSkillsModal();
  }

  addSkillsModal = () => {
    this.props.closeSkillsModal();
    this.props.openAddSkillsModal();
  }

}

export default EditSkillsModal;
