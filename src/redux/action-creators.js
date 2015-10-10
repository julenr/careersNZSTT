import Promise from 'bluebird';
import axios from 'axios';

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


export function getInitialState() {
  return {
    types: ['GET_STATE_REQUEST', 'GET_STATE_SUCCESS', 'GET_STATE_FAILURE'],
    promise: () => {
      return axios.get('/tools/skills-transition-tool/form')
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
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
          console.error('error ', response);
        });
    }
  }
}