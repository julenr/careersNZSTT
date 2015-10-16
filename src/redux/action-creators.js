import Promise from 'bluebird';
import axios from 'axios';

import * as fakeData from './fakeData';

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

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
      return axios.get(`/api/skills-transition-tool/form/${appID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.error('error ', response);
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
          console.error('error ', response);
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
          console.error('error ', response);
          return {data: fakeData.footerData};
        });
    }
  }
}

export function questionClicked(questionID, responseID) {
  return {
      type: 'CLICK',
      questionID,
      responseID
    }
}

export function getListViewData() {
  return {
    types: ['GET_JOBS_REQUEST', 'GET_JOBS_SUCCESS', 'GET_JOBS_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/jobs/${appID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.error('error ', response);
          return {data: fakeData.listViewData};
        });
    }
  }
}

export function jobClosed(jobID) {
  return {
    type: 'CLOSE_JOB_CARD',
    jobID
  }
}

export function jobCardFlip(jobID) {
  console.log('fliped');
  return {
    type: 'FLIP_JOB_CARD',
    jobID
  }
}

export function helpPanelClosed(panelID) {
  return {
    type: 'CLOSE_HELP_PANEL',
    panelID
  }
}

export function undoPanelClosed() {
  return {
    type: 'CLOSE_UNDO_PANEL'
  }
}





