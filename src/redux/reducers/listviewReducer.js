/**
 * Created by jr1500 on 7/11/15.
 */
import uuid from 'node-uuid';
import store from '../create-store';
import _ from 'lodash';
import logLite from '../../libs/logLite';
import * as paginationConstants from '../../constants/pagination-constants'

let logger = logLite.getLogger('list view reducer');

const listViewInitialState = {
  loaded: false,
  ShowMatchSkillsModal: false,
  CheckSkillsID: 0,
  ShowRemoveJobCardModal: false,
  JobCardSelectedID: -1,
  ShowRemoveQualificationCardModal: false,
  RemoveQualificationCardModalID: -1,
  ShowRemoveInstitutionCardModal: false,
  RemoveInstitutionCardModalID: -1,
  ShowQualificationsPanel: false,
  ShowInstitutionsPanel: false,
  PaginationLimit: paginationConstants.paginationInitialLimit,
  data: {
    'refresh': false,
    'UndoPanel': {},
    'HelpPanels': [],
    'Filters': {
      'JobCards': [],
      'JobCardsFiltered': 0,
      'QualificationCards': [],
      'QualificationCardsFiltered': 0,
      'ShowAddPreferenceModal': false,
      'Region': 'All'
    },
    'JobsCards': [],
    'QualificationsPanel': {},
    'InstitutionsPanel': {}
  }
}

// LIST VIEW REDUCER
export function _listViewData(state = listViewInitialState, action = {}) {
  let newState = {...state };
  switch (action.type) {
    case 'GET_JOBS_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_JOBS_SUCCESS':
      action.result.data.QualificationsPanel.Courses = action.result.data.QualificationCards;
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

    case 'FILTER_JOB_CARDS_BY_CONDITION': {
      let count = 0;
      newState.data.JobsCards.map((card, idx) => {
        if (!card.Closed) {
          if(_.findIndex(newState.data.Filters.JobCards, (filter) => {
              return (_.findIndex(card.Interests, (condition) => condition === filter) !== -1 ||
                      _.findIndex(card.WorkConditions, (condition) => condition === filter) !== -1 ||
                      _.findIndex(card.VocationalPathways, (condition) => condition === filter) !== -1
              );
            }) !== -1) {
            card.Filtered = true;
            count += 1;
          } else {
              card.Filtered = false;
            }
        }
      });
      newState.data.Filters.JobCardsFiltered = count;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'REMOVE_JOB_CARD_FILTER_CONDITION': {
      let index = newState.data.Filters.JobCards.indexOf(action.condition);
      if (index > -1) {
        newState.data.Filters.JobCards.splice(index, 1);
      }
      return newState;
    }
    case 'ADD_JOB_CARD_FILTER_CONDITION':
      newState.data.Filters.JobCards.push(action.condition);
      newState.PaginationLimit = paginationConstants.paginationInitialLimit;
      return newState;

    case 'FILTER_QUALIFICATION_CARDS_BY_CONDITION': {
      let count = 0;
      newState.data.QualificationCards.map((card, idx) => {
        if (!card.Closed) {
          if(_.findIndex(newState.data.Filters.QualificationCards, (filter) => {
              return (_.findIndex(card.VocationalPathways, (condition) => condition === filter) !== -1);
            }) !== -1) {
            card.Filtered = true;
            count += 1;
          } else { // If card is not affected by any filter check if the current region must be applied
            if( newState.data.Filters.Region !== 'All' &&
                _.findIndex(card.Regions, (region) => region === newState.data.Filters.Region) === -1
            ) {
              card.Filtered = true;
            } else {
                card.Filtered = false;
              }
            }
        }
      });
      newState.data.Filters.QualificationCardsFiltered = count;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'REMOVE_QUALIFICATION_CARD_FILTER_CONDITION':{
      let index = newState.data.Filters.QualificationCards.indexOf(action.condition);
      if (index > -1) {
        newState.data.Filters.QualificationCards.splice(index, 1);
      }
      return newState;
    }

    case 'ADD_QUALIFICATION_CARD_FILTER_CONDITION':
      newState.data.Filters.QualificationCards.push(action.condition);
      return newState;

    case 'SET_REGION_FILTER':
      newState.data.Filters.Region = action.region;
      return newState;

    case 'RESET_LIST_VIEW_LOADER':
      newState.loaded = false;
      return newState;

    case 'SHOW_ADD_PREFERENCE_MODAL':
      newState.data.Filters.ShowAddPreferenceModal = true;
      return newState;
    case 'CLOSE_ADD_PREFERENCE_MODAL':
      newState.data.Filters.ShowAddPreferenceModal = false;
      return newState;
    case 'CLOSE_JOB_CARD':
      newState.data.JobsCards[action.jobID].Closed = true;
      newState.data.JobsCards[action.jobID].Flipped = false;
      newState.PaginationLimit = paginationConstants.paginationInitialLimit;
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
    case 'SET_CURRENT_QUALIFICATION_CARD_ID':
      newState.QualificationCardSelectedID = action.qualificationCardID;
      return newState;
    case 'GET_QUALIFICATIONS_BY_JOB_REQUEST':
      newState.loaded = false;
      return newState;
    case 'GET_QUALIFICATIONS_BY_JOB_SUCCESS':
      newState.loaded = true;
      newState.data.QualificationsPanel.Courses = action.result.data;
      return newState;
    case 'GET_QUALIFICATIONS_BY_JOB_FAILURE':
      newState.data.QualificationsPanel.Courses = [];
      newState.loaded = true;
      return newState;

    case 'GET_INSTITUTIONS_BY_QUALIFICATION_REQUEST':
      newState.loaded = false;
      return newState;
    case 'GET_INSTITUTIONS_BY_QUALIFICATION_SUCCESS':
      newState.loaded = true;
      newState.data.InstitutionsPanel.Institutions = action.result.data;
      return newState;
    case 'GET_INSTITUTIONS_BY_QUALIFICATION_FAILURE':
      newState.data.InstitutionsPanel.Institutions = [];
      newState.loaded = true;
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
    case 'INCREASE_PAGINATION_LIMIT': {
      let increment = action.increment || paginationConstants.paginationIncrement;
      newState.PaginationLimit = newState.PaginationLimit + increment;
      return newState;
    }
    case 'RESET_LIST_VIEW_STATE': {
      newState.ShowMatchSkillsModal = false; 
      newState.CheckSkillsID = 0;
      newState.ShowRemoveJobCardModal = false;
      newState.JobCardSelectedID = -1;
      newState.ShowRemoveQualificationCardModal = false;
      newState.RemoveQualificationCardModalID = -1;
      newState.ShowRemoveInstitutionCardModal = false;
      newState.RemoveInstitutionCardModalID = -1;
      newState.ShowQualificationsPanel = false;
      newState.ShowInstitutionsPanel = false;
      newState.PaginationLimit = paginationConstants.paginationInitialLimit;
      return newState;
    }
      
    default:
      return state;
  }
}