/**
 * Created by jr1500 on 19/10/15.
 */

import axios from 'axios';
import store from './create-store';
import _ from 'lodash';
import { scrollTo } from '../libs/helpers';
import * as fakeData from './fake-data';
import logLite from '../libs/logLite';

let logger = logLite.getLogger('listview actions');

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

/* List View Actions */
export function closeJobCard(jobID) {
  return {
    type: 'CLOSE_JOB_CARD',
    jobID
  }
}

export function filterJobCardsByCondition() {
  return {
    type: 'FILTER_JOB_CARDS_BY_CONDITION'
  }
}

export function removeJobCardCondition(condition) {
  return {
    type: 'REMOVE_JOB_CARD_FILTER_CONDITION',
    condition
  }
}

export function addJobCardCondition(condition) {
  return {
    type: 'ADD_JOB_CARD_FILTER_CONDITION',
    condition
  }
}

export function filterQualificationCardsByCondition() {
  return {
    type: 'FILTER_QUALIFICATION_CARDS_BY_CONDITION'
  }
}

export function removeQualificationCardCondition(condition) {
  return {
    type: 'REMOVE_QUALIFICATION_CARD_FILTER_CONDITION',
    condition
  }
}

export function addQualificationCardCondition(condition) {
  return {
    type: 'ADD_QUALIFICATION_CARD_FILTER_CONDITION',
    condition
  }
}

export function setRegionFilter(region) {
  return {
    type: 'SET_REGION_FILTER',
    region
  }
}

export function applyRegionFilter() {
  return {
    type: 'APPLY_REGION_FILTER'
  }
}

export function openAddPreferenceModal() {
  return {
    type: 'SHOW_ADD_PREFERENCE_MODAL'
  }
}

export function closeAddPreferenceModal() {
  return {
    type: 'CLOSE_ADD_PREFERENCE_MODAL'
  }
}

export function openJobCard(jobID) {
  return {
    type: 'OPEN_JOB_CARD',
    jobID
  }
}

export function flipJobCard(jobID) {
  return {
    type: 'FLIP_JOB_CARD',
    jobID
  }
}
export function setCurrentJobID(jobCardID) {
  return {
    type: 'SET_CURRENT_JOB_CARD_ID',
    jobCardID
  }
}

export function setCurrentQualificationID(qualificationID) {
  return {
    type: 'SET_CURRENT_QUALIFICATION_ID',
    qualificationID
  }
}

export function openMatchSkillsModal(idJobCard) {
  return {
    type: 'SHOW_MATCH_SKILLS_MODAL',
    idJobCard
  }
}
export function closeMatchSkillsModal() {
  return {
    type: 'CLOSE_MATCH_SKILLS_MODAL'
  }
}

export function showAddSkillsModal() {
  return {
    type: 'SHOW_ADD_SKILLS_MODAL'
  }
}

export function closeUndoPanel() {
  return {
    type: 'CLOSE_UNDO_PANEL'
  }
}

export function closeHelpPanel(panelID) {
  return {
    type: 'CLOSE_HELP_PANEL',
    panelID
  }
}

export function getQualificationsByJob(jobID) {
  return {
    types: ['GET_QUALIFICATIONS_BY_JOB_REQUEST', 'GET_QUALIFICATIONS_BY_JOB_SUCCESS', 'GET_QUALIFICATIONS_BY_JOB_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-qualifications/${appID}/${jobID}`)
          .then(function (response) {
            return {data: response.data.QualificationCards};
          })
          .catch(function (response) {
            logger.log(response);
            if (__DEV__) {
              logger.log('Using fake data');
              return {data: _.clone(fakeData.listViewData.QualificationsPanel.Courses, true)};
            }
          });
    }
  }
}

export function getInstitutionByID(qualificationID) {
  return {
    types: ['GET_INSTITUTIONS_BY_QUALIFICATION_REQUEST', 'GET_INSTITUTIONS_BY_QUALIFICATION_SUCCESS', 'GET_INSTITUTIONS_BY_QUALIFICATION_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/qualification-courses/${appID}/${qualificationID}`)
          .then(function (response) {
            return {data: response.data.CourseCards};
          })
          .catch(function (response) {
            logger.log(response);
            if (__DEV__) {
              logger.log('Using fake data');
              return {data: _.clone(fakeData.listViewData.InstitutionsPanel.Institutions, true)};
            }
          });
    }
  }
}

export function closeQualificationsPanel() {
  return {
    type: 'CLOSE_QUALIFICATIONS_PANEL'
  }
}

export function openQualificationsPanel() {
  return {
    type: 'OPEN_QUALIFICATIONS_PANEL'
  }
}

export function closeQualificationCard(qualificationID) {
  return {
    type: 'CLOSE_QUALIFICATION_CARD',
    qualificationID
  }
}

export function openQualificationCard(qualificationID) {
  return {
    type: 'OPEN_QUALIFICATION_CARD',
    qualificationID
  }
}

export function closeInstitutionsPanel() {
  return {
    type: 'CLOSE_INSTITUTION_PANEL'
  }
}

export function openInstitutionsPanel() {
  return {
    type: 'OPEN_INSTITUTION_PANEL'
  }
}

export function closeInstitutionCard(institutionID) {
  return {
    type: 'CLOSE_INSTITUTION_CARD',
    institutionID
  }
}

export function openInstitutionCard(institutionID) {
  return {
    type: 'OPEN_INSTITUTION_CARD',
    institutionID
  }
}

//This function forces to reload the list view data when a question has changed in the questionnaire
export function resetListViewLoaderFlag() {
  return {
    type: 'RESET_LIST_VIEW_LOADER'
  }
}


// JOB CARD MODAL
export function closeRemoveJobCardModal() {
  return {
    type: 'CLOSE_REMOVE_JOB_CARD_MODAL'
  }
}
export function openRemoveJobCardModal() {
  return {
    type: 'OPEN_REMOVE_JOB_CARD_MODAL'
  }
}

// INSTITUTION CARD MODAL
export function closeRemoveInstitutionCardModal() {
  return {
    type: 'CLOSE_REMOVE_INSTITUTION_CARD_MODAL'
  }
}
export function openRemoveInstitutionCardModal(institutionCardID) {
  return {
    type: 'OPEN_REMOVE_INSTITUTION_CARD_MODAL',
    institutionCardID
  }
}

// QUALIFICATION CARD MODAL
export function closeRemoveQualificationCardModal() {
  return {
    type: 'CLOSE_REMOVE_QUALIFICATION_CARD_MODAL'
  }
}
export function openRemoveQualificationCardModal(qualificationCardID) {
  return {
    type: 'OPEN_REMOVE_QUALIFICATION_CARD_MODAL',
    qualificationCardID
  }
}

export function openSkillsModalFromListView() {
  return {
    type: 'SHOW_SKILLS_MODAL'
  }
}

export function resetListViewState() {
  return {
    type: 'RESET_LIST_VIEW_STATE'
  }
}

//PAGINATION
export function increasePaginationLimit(paginationIncrement) {
  return {
    type: 'INCREASE_PAGINATION_LIMIT',
    increment: paginationIncrement
  }
}