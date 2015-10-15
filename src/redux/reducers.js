

var initialState = {};

export function _time(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      };
    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        time: action.result.time,
        frozen: false
      };
    case 'GET_TIME_FAILURE':
      // we could add an error message here, to be printed somewhere in our application
      return {
        ...state,
        frozen: false
      };
    default:
      return state;
  }
}

// MAIN DATA AND QUESTIONNAIRE REDUCER
export function _questionnaire(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_QUESTIONNAIRE_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_QUESTIONNAIRE_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_QUESTIONNAIRE_FAILURE':
      return {
        ...state,
        loaded: true
      };
    case 'CLICK':
      const newState = {...state };
      newState.data.Questions[action.questionID].QuestionResponses[action.responseID].selected = !newState.data.Questions[action.questionID].QuestionResponses[action.responseID].selected;
      return newState;
    default:
      return state;
  }
}

// MAIN PAGE CONTENT REDUCER
export function _mainPage(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_MAIN_PAGE_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_MAIN_PAGE_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_MAIN_PAGE_FAILURE':
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}

// GET JOBS REDUCER
export function _getJobs(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_JOBS_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_JOBS_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_JOBS_FAILURE':
      return {
        ...state,
        loaded: true
      };
    case 'CLOSE_JOB_CARD':
      const newState = {...state };
      newState.data.JobsCards[action.jobID].Closed = true;
      return newState;
    default:
      return state;
  }
}

// FOOTER DATA REDUCER
export function _footerData(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_FOOTER_DATA_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'GET_FOOTER_DATA_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loading: false
      };
    case 'GET_FOOTER_DATA_FAILURE':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}