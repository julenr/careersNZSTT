import uuid from 'node-uuid';

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

// QUESTIONNAIRE REDUCER
export function _questionnaire(state = initialState, action = {}) {
  let newState = {...state };
  switch (action.type) {
    case 'GET_QUESTIONNAIRE_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_QUESTIONNAIRE_SUCCESS':
      action.result.data.Questionnaire = []; // Initialize the questionnaire array
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

    case 'GET_JOB_SKILLS_REQUEST':
      newState.data.Skills.Loading = true;
      return newState;
    case 'GET_JOB_SKILLS_SUCCESS':
      newState.data.Skills.skillsTags = action.result.data;
      newState.data.Skills.Loading = false;
      return newState;
    case 'GET_JOB_SKILLS_FAILURE':
      newState.data.Skills.Loading = false;
      return newState;

    case 'RESPONSE_CLICKED_MULTIPLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if (entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }
      question.QuestionResponses[action.responseID].Selected = !question.QuestionResponses[action.responseID].Selected;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    // TAG CLOUD ACTIONS
    case 'RESPONSE_CLICKED_TAG_CLOUD': {
      let question = newState.data.Questionnaire[action.questionID];
      let skillTitle = question.QuestionResponses[action.responseID].Title;
      newState.data.Skills.Selected.push(skillTitle);
      newState.data.Skills.Current = skillTitle;
      question.QuestionResponses[action.responseID].Selected = !question.QuestionResponses[action.responseID].Selected;
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'SELECT_ALL_TAG_CLOUD': {
      const allSelected = state.data.Questionnaire[action.questionID].QuestionResponses.map((tag) => {
        tag.Selected = true;
        return tag;
      });
      newState.data.Questionnaire[action.questionID].QuestionResponses = allSelected;
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'REMOVE_TAG':
      newState.data.Questionnaire[action.questionID].QuestionResponses[action.tagID].Removed = true;
      return newState;
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_REQUEST':
      return newState;
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_SUCCESS': {
      let questionID = newState.data.Questionnaire.length-1;
      Object.assign(newState.data.Questionnaire[questionID].QuestionResponses, newState.data.Skills.skillsTags);
      newState.data.Questionnaire[questionID].Loaded = true;
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_FAILURE': {
      let questionID = newState.data.Questionnaire.length-1;
      newState.data.Questionnaire[questionID].Loaded = true;
      return newState;
    }

    case 'RESPONSE_CLICKED_SINGLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if(entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }

      question.Selected = action.responseID;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'CLICKED_YES_NO': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if(entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }

      question.Selected = action.responseID;
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'SET_INPUT_TEXT':
      newState.data.Questionnaire[action.questionID].Text = action.text;
      newState.data.refresh = uuid.v1();
      return newState;

    case 'SET_INPUT_TYPE_AHEAD':
      newState.data.Questionnaire[action.questionID].Text = action.text;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'SET_FINAL_INPUT_TYPE_AHEAD':
      let endPoint = newState.data.Questionnaire[action.questionID].Endpoint;
      newState.data[endPoint].Current = action.text;
      newState.data[endPoint].Selected.push(action.text);
      newState.data.refresh = uuid.v1();
      return newState;

    case 'SET_MEMBER_NAME':
      newState.data.Member.Name = action.name;
      return newState;

    case 'FIRST_QUESTION':
      if(newState.data.Questionnaire.length) {
        console.log('the 1st question is already rendered ');
      }
      else {
        newState.data.Questionnaire.push( Object.assign({}, newState.data.Questions[0] ));
        newState.data.refresh = uuid.v1();
      }
      return newState;
    case 'NEXT_QUESTION':
      if(action.questionID < newState.data.Questionnaire.length-1) {
        console.log('the question is already rendered ', action.questionID, newState.data.Questionnaire.length);
      }
      else {
        let nextQuestionIndex = newState.data.Questions.findIndex((q) => (q.ID === action.nextQuestionID));
        let question = Object.assign({}, newState.data.Questions[nextQuestionIndex]);
        question.Loaded = false; // Force to load skills in tag cloud each time a Tag Cloud is created
        newState.data.Questionnaire.push( question );
        newState.data.refresh = uuid.v1();
      }
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
      newState.data.JobsCards[action.jobID].Flipped = !newState.data.JobsCards[action.jobID].Flipped;
      return newState;
    case 'CLOSE_HELP_PANEL':
      newState.data.HelpPanels[action.panelID].Closed = true;
      return newState;
    case 'CLOSE_UNDO_PANEL':
      newState.data.UndoPanel.Closed = true;
      return newState;
    case 'CLOSE_QUALIFICATIONS_PANEL':
      newState.data.QualificationsPanel.Closed = true;
      return newState;
    case 'CLOSE_QUALIFICATION_CARD':
      newState.data.QualificationsPanel.Courses[action.qualificationID].Closed = true;
      return newState;
    case 'OPEN_QUALIFICATION_CARD':
      newState.data.QualificationsPanel.Courses[action.qualificationID].Closed = false;
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

