import uuid from 'node-uuid';
import store from './create-store';
import _ from 'lodash';

import { replaceStrValues } from '../libs/helpers';

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
      action.result.data.Questionnaire.push( Object.assign({}, action.result.data.Questions[0] ));
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
      newState.data.Skills.SkillsTags = action.result.data;
      newState.data.Skills.Loading = false;
      return newState;
    case 'GET_JOB_SKILLS_FAILURE':
      newState.data.Skills.SkillsTags = action.result.data;
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
    case 'REMOVE_SKILL_FROM_SELECTED': {
      let idxSelectedSkill = newState.data.Skills.Selected.findIndex((skill) => (action.skill === skill));
      newState.data.Skills.Selected.splice(idxSelectedSkill, 1);
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_REQUEST':
      return newState;
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_SUCCESS': {
      let questionID = newState.data.Questionnaire.length-1;
      newState.data.Questionnaire[questionID].QuestionResponses = newState.data.Skills.SkillsTags.slice();
      newState.data.Questionnaire[questionID].Loaded = true;
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_FAILURE': {
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
    case 'SET_INPUT_TEXT': {
      const question = newState.data.Questionnaire[action.questionID]
      question.Text = action.text;
      if(question.Endpoint) { //Endpoint tell us if another part of the state needs to be updated with the same value
        let splits = question.Endpoint.split('.', 2);
        newState.data[splits[0]][splits[1]] = action.text;
      }
      newState.data.refresh = uuid.v1();
      return newState;
    }
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

    case 'DUMP_DATA_INTO_TYPE_AHEAD_REQUEST':
      return newState;
    case 'DUMP_DATA_INTO_TYPE_AHEAD_SUCCESS': {
      newState.TypeAheadItemsContainer = action.result.data;
      return newState;
    }
    case 'DUMP_DATA_INTO_TYPE_AHEAD_FAILURE': {
      return newState;
    }


    case 'SET_MEMBER_NAME':
      newState.data.Member.Name = action.name;
      return newState;

    case 'NEXT_QUESTION':
      if(action.questionID < newState.data.Questionnaire.length-1) {
        console.log('the question is already rendered. Take some action here ', action.questionID, newState.data.Questionnaire.length);
      }
      else {
        let nextQuestionIndex = newState.data.Questions.findIndex((q) => (q.ID === action.nextQuestionID));
        let question = Object.assign({}, newState.data.Questions[nextQuestionIndex]);
        question.Loaded = false; // Force to load skills in tag cloud each time a Tag Cloud is created

        if(question.QuestionType !== 'EndForm'){ //Replace tokens
          question.Description = replaceStrValues(question.Description);
          question.QuestionResponses.forEach((response) => { response.ResponseText = replaceStrValues(response.ResponseText )});
        }

        newState.data.Questionnaire.push( question );
        // This check is if in the case that the next question is a repeated question and does not have to refresh the progress bar
        if(newState.data.ProgressBar.Percentage < newState.data.Questions[nextQuestionIndex].MilestonePercentage) {
          newState.data.ProgressBar.Percentage = newState.data.Questions[nextQuestionIndex].MilestonePercentage;
        }
        newState.data.refresh = uuid.v1();
      }
      return newState;
    case 'JOBS_COUNT_SUCCESS':
      console.log(action);
      let nextQuestionIndex = newState.data.Questions.findIndex((q) => (q.ID === action.nextQuestionID));
      newState.data.ProgressBar.Results = action.result.count;
      if(newState.data.Questions[nextQuestionIndex].MilestoneText) {}
        newState.data.ProgressBar.Text = replaceStrValues(newState.data.Questions[nextQuestionIndex].MilestoneText);
      return newState;
    case 'JOBS_COUNT_FAILURE':
      console.log(action);
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
      newState.data.refresh = uuid.v1();
      return newState;
    case 'OPEN_JOB_CARD':
      newState.data.JobsCards[action.jobID].Closed = false;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'FLIP_JOB_CARD':
      newState.data.JobsCards[action.jobID].Flipped = !newState.data.JobsCards[action.jobID].Flipped;
      return newState;
    case 'SET_CURRENT_JOB_CARD_ID':
      newState.JobCardSelectedID = action.jobCardID;
      return newState;


    case 'CLOSE_REMOVE_JOB_CARD_MODAL':
      newState.ShowRemoveJobCardModal = false;
      return newState;
    case 'OPEN_REMOVE_JOB_CARD_MODAL':
      newState.ShowRemoveJobCardModal = true;
      return newState;

    case 'SHOW_MATCH_SKILLS_MODAL':
      newState.CheckSkillsID = action.idJobCard;
      newState.ShowMatchSkillsModal = true;
      return newState;
    case 'CLOSE_MATCH_SKILLS_MODAL':
      newState.ShowMatchSkillsModal = false;
      return newState;

    case 'CLOSE_HELP_PANEL':
      newState.data.HelpPanels[action.panelID].Closed = true;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'CLOSE_UNDO_PANEL':
      newState.data.UndoPanel.Closed = true;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'CLOSE_QUALIFICATIONS_PANEL':
      newState.ShowQualificationsPanel = false;
      return newState;
    case 'OPEN_QUALIFICATIONS_PANEL':
      newState.ShowQualificationsPanel = true;
      return newState;
    case 'CLOSE_QUALIFICATION_CARD':
      newState.data.QualificationsPanel.Courses[action.qualificationID].Closed = true;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'OPEN_QUALIFICATION_CARD':
      newState.data.QualificationsPanel.Courses[action.qualificationID].Closed = false;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'CLOSE_REMOVE_QUALIFICATION_CARD_MODAL':
      newState.ShowRemoveQualificationCardModal = false;
      return newState;
    case 'OPEN_REMOVE_QUALIFICATION_CARD_MODAL':
      newState.RemoveQualificationCardModalID = action.qualificationCardID;
      newState.ShowRemoveQualificationCardModal = true;
      return newState;

    case 'CLOSE_INSTITUTION_CARD':
      newState.data.InstitutionsPanel.Institutions[action.institutionID].Closed = true;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'OPEN_INSTITUTION_CARD':
      newState.data.InstitutionsPanel.Institutions[action.institutionID].Closed = false;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'CLOSE_REMOVE_INSTITUTION_CARD_MODAL':
      newState.ShowRemoveInstitutionCardModal = false;
      return newState;
    case 'OPEN_REMOVE_INSTITUTION_CARD_MODAL':
      newState.RemoveInstitutionCardModalID = action.institutionCardID;
      newState.ShowRemoveInstitutionCardModal = true;
      return newState;
    case 'CLOSE_INSTITUTION_PANEL':
      newState.ShowInstitutionsPanel = false;
      return newState;
    case 'OPEN_INSTITUTION_PANEL':
      newState.ShowInstitutionsPanel = true;
      return newState;
    default:
      return state;
  }
}

// FOOTER DATA REDUCER
export function _footerData(state = initialState, action = {}) {
  let newState = {...state };
  switch (action.type) {
    case 'GET_FOOTER_DATA_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_FOOTER_DATA_SUCCESS':
      newState.data = action.result.data;
      newState.data.PopularJobs.Skills = [];
      newState.loaded =  true;
      newState.showSkillsModal = false;
      newState.showAddSkillsModal = false;
      newState.showCheckSkillsModal = false;
      return newState;
    case 'GET_FOOTER_DATA_FAILURE':
      newState.data = action.result.data;
      newState.data.PopularJobs.Skills = [];
      newState.loaded =  true;
      newState.showSkillsModal = false;
      newState.showAddSkillsModal = false;
      newState.showCheckSkillsModal = false;
      return newState;

    case 'SHOW_SKILLS_MODAL':
      return {
        ...state,
        showSkillsModal: true
      };
    case 'CLOSE_SKILLS_MODAL':
      return {
        ...state,
        showSkillsModal: false
      };

    case 'SHOW_ADD_SKILLS_MODAL':
      return {
        ...state,
        showAddSkillsModal: true
      };
    case 'CLOSE_ADD_SKILLS_MODAL':
      return {
        ...state,
        showAddSkillsModal: false
      };
    case 'SHOW_MORE_OPTIONS_ADD_SKILLS_MODAL':
      newState.data.PopularJobs.Visible = 1000;
      return newState;
    case 'SHOW_CHECK_SKILLS_MODAL':
      return {
        ...state,
        showCheckSkillsModal: true
      };
    case 'CLOSE_CHECK_SKILLS_MODAL':
      return {
        ...state,
        showCheckSkillsModal: false
      };
    case 'CHECK_JOB_POPULAR_SKILL':
      newState.data.PopularJobs.Skills[action.idxSkill].Selected = !newState.data.PopularJobs.Skills[action.idxSkill].Selected;
      newState.data.PopularJobs.Loading = uuid.v1();
      return newState;
    case 'ADD_CHECKED_SKILLS':
      let selectedSkills = store.getState()._questionnaire.data.Skills.Selected;
      newState.data.PopularJobs.Skills.map((skill) => {
        if(skill.Selected && (_.findIndex(selectedSkills, (e) => (e === skill.Title)) === -1) ) {
          selectedSkills.push(skill.Title);
        }
      });
      newState.data.PopularJobs.Skills = [];
      return newState;

    case 'GET_JOB_SKILLS_CHECK_MODAL_REQUEST':
      newState.data.PopularJobs.Loading = true;
      newState.data.PopularJobs.JobSelected = action.jobSelected;
      return newState;
    case 'GET_JOB_SKILLS_CHECK_MODAL_SUCCESS':
      newState.data.PopularJobs.Skills = action.result.data;
      newState.data.PopularJobs.Loading = false;
      return newState;
    case 'GET_JOB_SKILLS_CHECK_MODAL_FAILURE':
      newState.data.PopularJobs.Skills = action.result.data;
      newState.data.PopularJobs.Loading = false;
      return newState;
    default:
      return state;
  }
}

