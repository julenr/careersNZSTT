/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class CheckSkillsModal extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.showCheckSkillsModal} >
          <div className="modal modal-skills-match">
            <h2 className="modal-title">{`Skills match for ${this.props.popularJobs.JobSelected}`}</h2>
            <div className="layout-row">
              <div className="layout-col layout-col-4">
                <p className="modal-intro">A few of your skills match those needed for this job. To gain the rest check out your course and training options.</p>
              </div>
              <div className="layout-col layout-col-8">
                <div className="tags" data-type="tag">
                  {
                    (this.props.popularSkillsSelected.length) ?
                      this.props.popularSkillsSelected.map(this.renderSkills)
                      :
                      <span>Sorry but No skills founded for this Job</span>
                  }
                </div>
              </div>
            </div>
            <div className="submit">
              <a href="javascript:void 0" onClick={this.addSkillsAndCloseModal} className="button-solid">Add or edit your skills</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelModal}>&nbsp;</a>
          </div>
      </Modal>
    );
  }

  renderSkills = (skill, idx) => {
    let classes = classNames(
      {
        'tag': true,
        'tag complete': skill.Selected
      }
    );

    return (
      <span className={ classes } key={idx} onClick={ () => this.props.CheckJobPopularSkill(idx)}>
        {skill.Title}
        <span key={idx} className="icon-cancel-circle" ></span>
      </span>
    );
  }

  addSkillsAndCloseModal = () => {
    this.props.addCheckedSkills();
    this.props.closeCheckSkillsModal();
  }

  cancelModal = () => {
    this.props.closeCheckSkillsModal();
    this.props.openAddSkillsModal();
  }

}

export default CheckSkillsModal;
