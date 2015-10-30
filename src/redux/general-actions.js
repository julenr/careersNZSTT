import axios from 'axios';
import _ from 'lodash';

import * as fakeData from './fake-data';

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

export function getStateButton(delay = 100) {
  return {
    types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        // Just simulating an async request to a server via a setTimeout
        setTimeout(() => {
          const d = new Date();
          const ms = ('000' + d.getMilliseconds()).slice(-3);
          resolve({
            time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
          });
        }, delay);
      });
    }
  }
}

export function getQuestionnaire() {
  return {
    types: ['GET_QUESTIONNAIRE_REQUEST', 'GET_QUESTIONNAIRE_SUCCESS', 'GET_QUESTIONNAIRE_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/form/${appID}`)
        .then(function (response) {
          response.data.Skills.Loading = false;
          response.data.Skills.SkillsTags = [];
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            let data = _.clone(fakeData.questionnaire, true);
            data.Skills.Loading = false;
            data.Skills.SkillsTags = [];
            return {data: data};
          }
        });
    }
  }
}

export function getLinkedPagesHTML(URLSegment) {
  return {
    types: ['GET_MAIN_PAGE_REQUEST', 'GET_MAIN_PAGE_SUCCESS', 'GET_MAIN_PAGE_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/content/${appID}/${URLSegment}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.mainContentHTML, true)};
          }
        });
    }
  }
}

export function getFooterData() {
  return {
    types: ['GET_FOOTER_DATA_REQUEST', 'GET_FOOTER_DATA_SUCCESS', 'GET_FOOTER_DATA_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/container/${appID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.footerData, true)};
          }
        });
    }
  }
}

export function currentJobChanged(newJob) {
  return {
    types: ['GET_JOB_SKILLS_REQUEST', 'GET_JOB_SKILLS_SUCCESS', 'GET_JOB_SKILLS_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-skills/${newJob}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.jobSkills.Results, true)};
          }
        });
    }
  }
}

export function openSkillsModal() {
  return {
    type: 'SHOW_SKILLS_MODAL'
  }
}

export function closeSkillsModal() {
  return {
    type: 'CLOSE_SKILLS_MODAL'
  }
}

export function openAddSkillsModal() {
  return {
    type: 'SHOW_ADD_SKILLS_MODAL'
  }
}

export function closeAddSkillsModal() {
  return {
    type: 'CLOSE_ADD_SKILLS_MODAL'
  }
}

export function showMoreAddSkillsModal() {
  return {
    type: 'SHOW_MORE_OPTIONS_ADD_SKILLS_MODAL'
  }
}

export function getJobSkills(jobSelected) {
  return {
    types: ['GET_JOB_SKILLS_CHECK_MODAL_REQUEST', 'GET_JOB_SKILLS_CHECK_MODAL_SUCCESS', 'GET_JOB_SKILLS_CHECK_MODAL_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-skills/${jobSelected}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          return {data: response.data.Results};
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.jobSkills.Results.slice(), true)};
          }
        });
    },
    jobSelected
  }
}

export function openCheckSkillsModal() {
  return {
    type: 'SHOW_CHECK_SKILLS_MODAL'
  }
}

export function closeCheckSkillsModal() {
  return {
    type: 'CLOSE_CHECK_SKILLS_MODAL'
  }
}

export function CheckJobPopularSkill(idxSkill) {
  return {
    type: 'CHECK_JOB_POPULAR_SKILL',
    idxSkill
  }
}

export function addCheckedSkills() {
  return {
    type: 'ADD_CHECKED_SKILLS'
  }
}

export function removeSelectedSkill(skill) {
  return {
    type: 'REMOVE_SKILL_FROM_SELECTED',
    skill
  }
}
