import React from 'react';
import { connect } from 'react-redux';

class ActionPlanCard extends React.Component {

  render() {
    const {action, index, completionInProgress} = this.props;
    const title = action.Title;
    const completed = action.completed;
    const minimised = action.minimised;

    let classes = 'action-card plan';
    if(completed) {
      classes += ' completed';
    }
    if(minimised) {
      classes += ' minimised';
    }

    return (
      <div className={classes}>
        <a href="javascript: void 0" className="action-card-status" onClick={() => this.completeAction(completionInProgress, completed, index)}><span className="icon-tick">&nbsp;</span></a>
        <div className="title" dangerouslySetInnerHTML={{__html: title}}></div>
        <a href="javascript: void 0" className="action-card-remove" onClick={() => this.showRemoveActionModal(completionInProgress, index)}><span className="icon-cross">&nbsp;</span></a>
      </div>

    )
  }

  completeAction = (completionInProgress, completed, index) => {

    if(completionInProgress || completed) {
      return;
    }

    this.props.markSuggestedActionAsCompleted(index);

    setTimeout(() => {
      this.props.markSuggestedActionAsMinimised(index);
      this.props.moveSuggestedActionToEnd(index);
    }, 1000);

  }

  showRemoveActionModal = (completionInProgress, index) => {
    if(!completionInProgress) {
      this.props.showRemoveActionModal(index);
    }
  }
}

export default ActionPlanCard;

