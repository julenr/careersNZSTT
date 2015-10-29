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
        <div className="ReactModal__Overlay ReactModal__Overlay--after-open">
          <div className="ReactModal__Content ReactModal__Content--after-open modal modal-skills-match">
            <h2 className="modal-title">{`Skills match for ${this.props.popularJobs.JobSelected}`}</h2>
            <div className="layout-row">
              <div className="layout-col layout-col-4">
                <p className="modal-intro">A few of your skills match those needed for this job. To gain the rest check out your course and training options.</p>
              </div>
              <div className="layout-col layout-col-8">
                <div className="tags" data-type="tag">
                  {this.props.popularSkillsSelected.map(this.renderSkills)}
                </div>
              </div>
            </div>
            <div className="submit">
              <a href="#" className="button-solid">Add or edit your skills</a>
            </div>
            <a className="action-close icon-cross" href="javascript:void 0" onClick={this.closeModal}>&nbsp;</a>
          </div>
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

  closeModal = () => {
    this.props.closeCheckSkillsModal();
    this.props.openSkillsModal();
  }

}

export default CheckSkillsModal;