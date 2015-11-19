/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

class EditSkillsModal extends React.Component {

  render() {
    const { skillsSelected } = this.props;

    const customStyles = {
      content: {
        top: '30px',
      }
    }

    return (
      <Modal isOpen={this.props.showSkillsModal} style={customStyles}>
          <div className="modal modal-edit-skills">
            <h2 className="modal-title">Edit your skills</h2>
            <div className="layout-row">
              <div className="layout-col layout-col-4">
                <p className="modal-intro">Most skills you have a transferable and we'll use them to recommend jobs and courses that suit you. Use the to remove skills you don't have or don’t want to use in the future.</p>
              </div>
              <div className="layout-col layout-col-8">
                <div className="tags" data-type="tag">
                  {
                    (skillsSelected.length) ?
                      skillsSelected.map(this.renderSkillsTags)
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
              <a href="javascript:void 0" className="button-solid" onClick={this.applyAndCloseSkillsModal}>Done</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelSkillsModal}>&nbsp;</a>
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

  applyAndCloseSkillsModal = () => {
    this.props.closeSkillsModal();
    this.props.resetListViewState();
    this.props.getListViewData();
  }

  cancelSkillsModal = () => {
    this.props.restoreSkills();
    this.props.closeSkillsModal();
  }

  addSkillsModal = () => {
    this.props.openAddSkillsModal();
  }

}

export default EditSkillsModal;
