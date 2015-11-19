//ACTION PLAN
export function openActionPlan() {
  return {
    type: 'OPEN_ACTION_PLAN'
  }
}
export function closeActionPlan() {
  return {
    type: 'CLOSE_ACTION_PLAN'
  }
}

export function markSuggestedActionAsCompleted(index) {
  return {
    type: 'MARK_SUGGESTED_ACTION_COMPLETED',
    cardIndex: index
  };
}

export function markSuggestedActionAsMinimised(index) {
  return {
    type: 'MARK_SUGGESTED_ACTION_MINIMISED',
    cardIndex: index
  }
}

export function moveSuggestedActionToEnd(index) {
  return {
    type: 'MOVE_SUGGESTED_ACTION_LAST',
    cardIndex: index
  }
}

export function showRemoveActionModal(index) {
  return {
    type: 'SHOW_REMOVE_ACTION_MODAL',
    cardIndex: index
  }
}


export function closeRemoveActionModal() {
  return {
    type: 'CLOSE_REMOVE_ACTION_MODAL'
  }
}

export function removeSuggestedAction(index) {
  return {
    type: 'REMOVE_SUGGESTED_ACTION',
    cardIndex: index
  };
}