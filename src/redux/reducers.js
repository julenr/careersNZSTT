

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
  let newState = {...state };
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
    case 'RESPONSE_CLICKED_MULTIPLE_CHOICE':
      console.log('clicked m');
      newState.data.Questions[action.questionID].QuestionResponses[action.responseID].Selected = !newState.data.Questions[action.questionID].QuestionResponses[action.responseID].Selected;
      newState.refresh = !newState.refresh;
      return newState;
    case 'RESPONSE_CLICKED_SINGLE_CHOICE':
      newState.data.Questions[action.questionID].Selected = action.responseID;
      newState.refresh = !newState.refresh;
      return newState;
    case 'SET_INPUT_TEXT':
      newState.data.Questions[action.questionID].Text = action.text;
      newState.refresh = !newState.refresh;
      return newState;
    case 'SET_MEMBER_NAME':
      newState.data.Member.Name = action.name;
      return newState;
    case 'SELECT_ALL_TAG_CLOUD':
      const allSelected = state.data.Questions[action.questionID].QuestionResponses.map((tag) => {
        tag.Selected = true;
        return tag;
      });
      newState.data.Questions[action.questionID].QuestionResponses = allSelected;
      newState.refresh = !newState.refresh;
      return newState;
    case 'REMOVE_TAG':
      console.log('clicked r');
      newState.data.Questions[action.questionID].QuestionResponses[action.tagID].Removed = true;
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

// LIST VIEW REDUCER
export function _listViewData(state = initialState, action = {}) {
    let newState = {...state };
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
      newState.data.JobsCards[action.jobID].Closed = true;
      return newState;
    case 'OPEN_JOB_CARD':
      newState.data.JobsCards[action.jobID].Closed = false;
      return newState;
    case 'FLIP_JOB_CARD':
      newState.data.JobsCards[action.jobID].Fliped = !newState.data.JobsCards[action.jobID].Fliped;
      return newState;
    case 'CLOSE_HELP_PANEL':
      newState.data.HelpPanels[action.panelID].Closed = true;
      return newState;
    case 'CLOSE_UNDO_PANEL':
      newState.data.UndoPanel.Closed = true;
      return newState;
    case 'CLOSE_COURSE_OPTION_PANEL':
      newState.data.CourseOptionPanel.Closed = true;
      return newState;
    case 'CLOSE_COURSE_CARD':
      newState.data.CourseOptionPanel.Courses[action.courseID].Closed = true;
      return newState;
    case 'OPEN_COURSE_CARD':
      newState.data.CourseOptionPanel.Courses[action.courseID].Closed = false;
      return newState;
    case 'CLOSE_INSTITUTION_CARD':
      newState.data.InstitutionsPanel.Institutions[action.institutionID].Closed = true;
      return newState;
    case 'OPEN_INSTITUTION_CARD':
      newState.data.InstitutionsPanel.Institutions[action.institutionID].Closed = false;
      return newState;
    case 'CLOSE_INSTITUTION_PANEL':
      newState.data.InstitutionsPanel.Closed = true;
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
        loaded: false
      };
    case 'GET_FOOTER_DATA_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_FOOTER_DATA_FAILURE':
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}