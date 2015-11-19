import axios from 'axios';
import _ from 'lodash';
import * as fakeData from './fake-data';
import logLite from '../libs/logLite';

let logger = logLite.getLogger('general actions');

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

export function getCourseDetails(courseID) {
  return {
    types: ['GET_COURSE_DETAIL_REQUEST', 'GET_COURSE_DETAIL_SUCCESS', 'GET_COURSE_DETAIL_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/coursedetails/${appID}/${courseID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          logger.log(response);
          if (__DEV__) {
            logger.log('Using fake data');
            return {data: _.cloneDeep(fakeData.courseDetail)};
          }
        });
    },
    courseID
  }
}

export function flipJobCard(jobID) {
  return {
    type: 'FLIP_COURSE_DETAIL_JOB_CARD',
    jobID
  }
}

export function addActionToPlan(actionID) {
  return {
    type: 'ADD_ACTION_TO_PLAN',
    actionID
  }
}

export function addBarrierActionToPlan(actionID, barrierID) {
  return {
    type: 'ADD_BARRIER_ACTION_TO_PLAN',
    actionID,
    barrierID
  }
}