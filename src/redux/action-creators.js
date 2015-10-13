import Promise from 'bluebird';
import axios from 'axios';

import * as fakeData from './fakeData';

export function getTime(delay = 100) {
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
      return axios.get('/tools/skills-transition-tool/form')
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          return {data: fakeData.questionnaire};
          console.error('error ', response);
        });
    }
  }
}

export function getContentPage() {
  return {
    types: ['GET_MAIN_PAGE_REQUEST', 'GET_MAIN_PAGE_SUCCESS', 'GET_MAIN_PAGE_FAILURE'],
    promise: () => {
      return axios.get('/tools/skills-transition-tool/content?page=demo-general-content-page-with-video')
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          return {data: fakeData.mainData};
          console.error('error ', response);
        });
    }
  }
}

export function getFooterData() {
  return {
    types: ['GET_FOOTER_DATA_REQUEST', 'GET_FOOTER_DATA_SUCCESS', 'GET_FOOTER_DATA_FAILURE'],
    promise: () => {
      return axios.get('/tools/skills-transition-tool/container')
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          return {data: fakeData.footerData};
          console.error('error ', response);
        });
    }
  }
}


