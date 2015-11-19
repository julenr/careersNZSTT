/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';

class RemoveQualificationCardModal extends React.Component {

  render() {
    let qualificationCard = this.props.qualificationsPanel.Courses[this.props.removeQualificationCardModalID];
    if(this.props.removeQualificationCardModalID >= 0) {
      return (
        <Modal isOpen={this.props.showRemoveQualificationCardModal}>
            <div className="modal modal-remove">
              <h2 className="modal-title">{`Remove ${qualificationCard.Title}`}</h2>
              <div className="form">
                <p>You are removing the course <strong>{qualificationCard.Title}</strong> from your list</p>
                <a href="javascript:void 0" className="button-solid" onClick={this.closeModalAndRemoveQualificationCard} >Remove <span
                  className="tablet desktop">{qualificationCard.Title} only</span></a>
              </div>
              {this.renderRemoveQualificationsGroupedByConditions()}
              <div className="submit">
                <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal}>Cancel</a>
              </div>
              <a className="action-close icon-cross" href="javascript:void 0"
                 onClick={this.cancelModal}>&nbsp;</a>
            </div>
        </Modal>
      );
    }
    else {
      return <span />
    }
  }

  renderRemoveQualificationsGroupedByConditions = () => {
    let joinedConditions = _(this.props.qualificationsPanel.Courses)
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
                {`Remove all ${condition} courses `}
                <span className="amount">
                  <span>{`(${groupedConditions[condition]} courses)`}</span>
                </span>
              </a>
            </p>
          </span>
        )
      } else {
        return '';
      }
    });

    return removeButtons;
  }

  closeModalAndFilterGroupByCondition = (condition) => {
    this.props.closeRemoveQualificationCardModal();
    this.props.addQualificationCardCondition(condition);
    this.props.filterQualificationCardsByCondition();
  }

  closeModalAndRemoveQualificationCard = () => {
    this.props.closeRemoveQualificationCardModal();
    this.props.closeQualificationCard(this.props.removeQualificationCardModalID);
  }

  cancelModal = () => {
    this.props.closeRemoveQualificationCardModal();
  }

}

export default RemoveQualificationCardModal;
