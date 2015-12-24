import React from 'react';
import { connect } from '../../libs/react-redux';

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
        <a href="javascript: void 0" className="action-card-status" onClick={() => this.actionClicked(completionInProgress, completed, index)}><span className="icon-tick">&nbsp;</span></a>
        <div className="title" dangerouslySetInnerHTML={{__html: title}}></div>
        <a href="javascript: void 0" className="action-card-remove" onClick={() => this.showRemoveActionModal(completionInProgress, index)}><span className="icon-cross">&nbsp;</span></a>
      </div>

    )
  }

  actionClicked = (completionInProgress, completed, index) => {
    if (completed) {
        this.recoverAction(completionInProgress, completed, index);
    } else {
        this.completeAction(completionInProgress, completed, index);
    }
  }

  completeAction = (completionInProgress, completed, index) => {

    if(completionInProgress || completed) {
      return;
    }
    if(this.props.isSuggestedActions) {
      this.props.markSuggestedActionAsCompleted(index);

      setTimeout(() => {
        this.props.markSuggestedActionAsMinimised(index);
        this.props.moveSuggestedActionToEnd(index);
      }, 1000);
    } else {
      this.props.completeUserAddedAction(this.props.action.actionId, this.props.action.courseId);

      setTimeout(() => {
        this.props.markUserAddedActionAsMinimised(this.props.action.actionId, this.props.action.courseId);
        this.props.moveUserAddedActionToEnd(this.props.action.actionId, this.props.action.courseId);
      }, 1000);
    }

  }

  recoverAction = (completionInProgress, completed, index) => {
    if(completionInProgress) {
      return;
    }
    if(this.props.isSuggestedActions) {
      this.props.unmarkSuggestedActionAsCompleted(index);

      setTimeout(() => {
        this.props.unmarkSuggestedActionAsMinimised(index);
        this.props.moveSuggestedActionToBeginning(index);
      }, 1000);
    } else {
      this.props.uncompleteUserAddedAction(this.props.action.actionId, this.props.action.courseId);

      setTimeout(() => {
        this.props.unmarkUserAddedActionAsMinimised(this.props.action.actionId, this.props.action.courseId);
        this.props.moveUserAddedActionToBeginning(this.props.action.actionId, this.props.action.courseId);
      }, 1000);
    }

  }

  showRemoveActionModal = (completionInProgress, index) => {
    if(!completionInProgress) {

      if(this.props.isSuggestedActions) {
        this.props.showSuggestedActionRemoveActionModal(index);
      } else {
        this.props.showUserAddedActionRemoveActionModal(this.props.action.actionId, this.props.action.courseId,
          this.props.action.barrierId);
      }
    }
  }
}

export default ActionPlanCard;

