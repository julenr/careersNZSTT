import axios from 'axios';
import store from './create-store';

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
          fakeData.questionnaire.Skills.Loading = false;
          fakeData.questionnaire.Skills.SkillsTags = [];
          return {data: fakeData.questionnaire};
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
          return {data: fakeData.mainContentHTML};
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
          return {data: fakeData.footerData};
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
          return {data: fakeData.jobSkills.Results};
        });
    }
  }
}
