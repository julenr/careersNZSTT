/**
 * Created by jr1500 on 19/10/15.
 */
import axios from 'axios';
import store from './create-store';

import * as fakeData from './fake-data';

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

export function responseClickedMultipleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_MULTIPLE_CHOICE',
    questionID,
    responseID
  }
}

export function responseClickedTagCloud(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_TAG_CLOUD',
    questionID,
    responseID
  }
}

export function responseClickedSingleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_SINGLE_CHOICE',
    questionID,
    responseID
  }
}

export function clickedYesNo(questionID, responseID) {
  return {
    type: 'CLICKED_YES_NO',
    questionID,
    responseID
  }
}

export function setInputText(questionID, text) {
  return {
    type: 'SET_INPUT_TEXT',
    questionID,
    text
  }
}

export function setTypeAheadText(questionID, typeAhead) {
  return {
    type: 'SET_INPUT_TYPE_AHEAD',
    questionID,
    text: typeAhead.state.entryValue
  }
}

export function setFinalTypeAheadText(questionID, typeAhead) {
  return {
    type: 'SET_FINAL_INPUT_TYPE_AHEAD',
    questionID,
    text: typeAhead.state.entryValue
  }
}

export function setMemberName(name) {
  return {
    type: 'SET_MEMBER_NAME',
    name
  }
}

export function sellectAllTagCloud(questionID) {
  return {
    type: 'SELECT_ALL_TAG_CLOUD',
    questionID
  }
}

export function removeTag(questionID, tagID) {
  return {
    type: 'REMOVE_TAG',
    questionID,
    tagID
  }
}

export function dumpSkillsIntoTagCloud() {
  return {
    types: ['DUMP_SKILLS_INTO_TAG_CLOUD_REQUEST', 'DUMP_SKILLS_INTO_TAG_CLOUD_SUCCESS', 'DUMP_SKILLS_INTO_TAG_CLOUD_FAILURE'],
    promise: () => {
      let state = store.getState();
      return new Promise((resolve, reject) => {
        // Just check where the skills are loaded and then copy them into tag cloud
        const interval = setInterval(() => {
          if(!state._questionnaire.data.Skills.Loading) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
    }
  }
}

export function firstQuestion() {
  return {
    type: 'FIRST_QUESTION',
  }
}

export function nextQuestion(questionID, nextQuestionID) {
  return {
    type: 'NEXT_QUESTION',
    questionID,
    nextQuestionID
  }
}

export function getListViewData() {
  return {
    types: ['GET_JOBS_REQUEST', 'GET_JOBS_SUCCESS', 'GET_JOBS_FAILURE'],
    promise: () => {
      let state = store.getState();
      let listType = state._questionnaire.data.ListTypes.Current;
      //let Data = JSON.stringify(state._questionnaire.data);
      //console.log({Data});
      return axios.post(`/api/skills-transition-tool/listview/${appID}/${listType}`, state._questionnaire.data)
        .then(function (response) {
          console.log(response.data);
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response.data);
          return {data: fakeData.listViewData};
        });
    }
  }
}

