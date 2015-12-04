/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import _ from 'lodash';

class AddPreferenceModal extends React.Component {

  render() {
    return (
      <Modal isOpen={this.props.filters.ShowAddPreferenceModal} onRequestClose={this.cancelModal}>
        <div className="modal-table"><div className="modal-liner"><div className="modal modal-add-preference">
          <h2 className="modal-title">Add a preference</h2>
          {this.renderRemoveJobsCoursesGroupedByConditions()}
          <div className="submit">
            <a href="javascript: void 0" className="button-simple" onClick={this.cancelModal}>Cancel</a>
          </div>
          <a className="action-close icon-cross" href="javascript: void 0" onClick={this.cancelModal}>&nbsp;</a>
        </div></div></div>
      </Modal>
    )
  }

  renders = () => {

    this.props.jobsCards;
  }

  renderRemoveJobsCoursesGroupedByConditions = () => {
    const listType = this.props.ListType;
    let joinedConditions = _((listType === 'Job' ? this.props.jobsCards : this.props.qualificationsPanel.Courses))
      .map((card) =>{
        return (!card.Closed && !card.Filtered) ?
          card.VocationalPathways
          :
          [];
      })
      .flatten()
      .value();

    let groupedConditions = _.countBy(joinedConditions);
    let uniqueConditions = _(joinedConditions)
      .uniq()
      .remove((Condition) => (groupedConditions[Condition] > 1))
      .value();

    const removeButtons = uniqueConditions.map((condition, idx) => {
      if(groupedConditions[condition]) {
        return (
          <span key={idx}>
            {(idx === 0) ? <p>If you'd prefer you can remove all courses from your list with similar conditions:</p> : ''}
            <p>
              <a href="javascript:void 0" className="button" onClick={() => this.closeModalAndFilterGroupByCondition(condition)}>
                {`Remove all ${condition} ${listType}s `}
                <span className="amount">
                  <span>{`(${groupedConditions[condition]} ${listType}s)`}</span>
                </span>
              </a>
            </p>
          </span>
        )
      } else {
        return '';
      }
    });

    return (removeButtons.length) ?
      removeButtons
      :
      <p>There are no conditions to apply</p>
      ;
  }


  closeModalAndFilterGroupByCondition = (condition) => {
    if(this.props.ListType === 'Job') {
      this.props.addJobCardCondition(condition);
      this.props.filterJobCardsByCondition(condition);
    }
    else {
      this.props.addQualificationCardCondition(condition);
      this.props.filterQualificationCardsByCondition();
    }

    this.props.closeAddPreferenceModal();
  }

  cancelModal = () => {
    this.props.closeAddPreferenceModal();
  }

}

export default AddPreferenceModal;
