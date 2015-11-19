
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from './promise-middleware';

import * as actionCreators from './general-actions';
import reducer from './reducers/index'


var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
var store = finalCreateStore(reducer);


function selectJob(state) {
  return state._questionnaire.data.Jobs.Current;
}

let currentJob = null;
function handleJobChange() {
  let previousJob = currentJob;
  currentJob = selectJob(store.getState());

  if (previousJob !== currentJob) {
    store.dispatch(actionCreators.currentJobChanged(currentJob));
  }
}

store.subscribe(handleJobChange);

export default store;
