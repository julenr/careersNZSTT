import uuid from 'node-uuid';


const initialState = {
  loaded: false,
  refresh: 0,
  data: {
    'CourseDetails': {
      'CourseTitle': '',
      'ProviderName': ''
    }
  }
};


// COURSE DETAILS REDUCER
export function _courseDetail(state = initialState, action = {}) {
  let newState = {...state };
  switch (action.type) {
    case 'GET_COURSE_DETAIL_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_COURSE_DETAIL_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_COURSE_DETAIL_FAILURE':
      return {
        ...state,
        loaded: true
      };
    case 'FLIP_COURSE_DETAIL_JOB_CARD':
      newState.data.Jobs.JobsCards[action.jobID].Flipped = !newState.data.Jobs.JobsCards[action.jobID].Flipped;
      return newState;
    case 'ADD_ACTION_TO_PLAN':
      newState.data.NextSteps.Actions[action.actionID].IsInActionPlan = !newState.data.NextSteps.Actions[action.actionID].IsInActionPlan;
      newState.refresh = uuid.v1();
      return newState;

    case 'ADD_BARRIER_ACTION_TO_PLAN': {
      let actionID = newState.data.BarriersPanel.Barriers[action.barrierID].Actions[action.actionID];
      actionID.IsInActionPlan = !actionID.IsInActionPlan;
      newState.refresh = uuid.v1();
      return newState;
    }
    default:
      return state;
  }
}


