/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import _ from 'lodash';

class MatchSkillsModal extends React.Component {

  render() {
    const { JobsCards } = this.props.course.Jobs;

    if(JobsCards.length) {
      let jobCard = JobsCards[this.props.checkSkillsIDCourseDetail];
      return (
        <Modal isOpen={this.props.showMatchSkillsModalCourseDetail} onRequestClose={this.closeModal}>
            <div className="modal-table"><div className="modal-liner"><div className="modal modal-skills-match">
              <h2 className="modal-title">{`Skills match for ${jobCard.Title}`}</h2>
              <div className="layout-row">
                <div className="layout-col layout-col-4">
                  <p className="modal-intro">A few of your skills match those needed for this job. To gain the rest check out your course and training options.</p>
                </div>
                <div className="layout-col layout-col-8">
                  <div className="tags" data-type="tag">
                    {
                      (jobCard.Skills.length) ?
                        jobCard.Skills.map(this.renderSkills)
                        :
                        <span>Sorry but No skills founded for this Job</span>
                    }
                  </div>
                </div>
              </div>
              <div className="submit">
                <a className="button-solid" href="javascript:void 0" onClick={this.closeModal}>Done</a>
              </div>
              <a className="action-close icon-cross" href="javascript:void 0" onClick={this.closeModal}>&nbsp;</a>
            </div></div></div>
        </Modal>
      );
    } else {
        return '';
    }
  }

  renderSkills = (skill, idx) => {
    let skillChecked = (_.findIndex(this.props.selectedSkills, (e) => (e === skill)) !== -1);
    let classes = classNames(
      {
        'tag': true,
        'tag complete': skillChecked
      }
    );

    return (
      <span className={ classes } key={idx} >
        {skill}
      </span>
    );
  }

  closeModal = () => {
    this.props.closeMatchSkillsModal();
  }


}

export default MatchSkillsModal;
