import store from '../create-store';

const actionPlanInitialState = {
  ActionPlanOpen: false,
  data: {
    SuggestedActions: []
  }
};


// ACTION PLAN REDUCER
export function _actionPlanData(state = actionPlanInitialState, action = {}) {
  let newState = {...state};
  switch (action.type) {
    case 'GET_JOBS_SUCCESS':
      newState.data.SuggestedActions = action.result.data.ActionPlanDrawer.SuggestedActions;
      return newState;
    case 'OPEN_ACTION_PLAN':
      newState.ActionPlanOpen = true;
      return newState;
    case 'CLOSE_ACTION_PLAN':
      newState.ActionPlanOpen = false;
      return newState;
    case 'MARK_SUGGESTED_ACTION_COMPLETED':
      if(Number.isInteger(action.cardIndex)) {
        newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
        newState.data.SuggestedActions[action.cardIndex].completed = true;
        newState.data.SuggestedActionsCompletionInProgress = true;
      }
      return newState;
    case 'MARK_SUGGESTED_ACTION_MINIMISED':
      if(Number.isInteger(action.cardIndex)) {
        newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
        newState.data.SuggestedActions[action.cardIndex].minimised = true;
      }
      return newState;
    case 'MOVE_SUGGESTED_ACTION_LAST':
      if(Number.isInteger(action.cardIndex)) {
        newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
        let actionCard = newState.data.SuggestedActions.splice(action.cardIndex, 1)[0];
        newState.data.SuggestedActions.push(actionCard);
        newState.data.SuggestedActionsCompletionInProgress = false;
      }
      return newState;
    case 'REMOVE_SUGGESTED_ACTION':
      if(Number.isInteger(action.cardIndex)) {
        newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
        newState.data.SuggestedActions.splice(action.cardIndex, 1);
      }
      return newState;
    case 'SHOW_REMOVE_ACTION_MODAL':
      newState.data.IsRemoveActionModalShown = true;
      newState.data.ActionForRemovalIndex = action.cardIndex;
      return newState;
    case 'CLOSE_REMOVE_ACTION_MODAL':
      newState.data.IsRemoveActionModalShown = false;
      newState.data.ActionForRemovalIndex = null;
      return newState;
    default:
      return state;
  }

}