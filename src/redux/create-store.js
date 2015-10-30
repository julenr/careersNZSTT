import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from './promise-middleware';
import * as reducers from './reducers';
import * as actionCreators from './general-actions';

const data =
{
  _mainPage: {
    loaded: false
  },
  _footerData: {
    loaded: false
  },
  _questionnaire: {
    loaded: false,
    data: {
      Jobs: {Current: null},
      Member: '',
      Questionnaire: [],
      Questions: [],
      refresh: false,
      Skills: {
        Selected: [],
        Current: []
      }
    }
  },
  _listViewData: {
    loaded: false,
    data: {
      refresh: false,
      'UndoPanel': {},
      'HelpPanels': [],
      'JobsCards': [],
      'QualificationsPanel': {},
      'InstitutionsPanel': {}
    }
  }
};

var reducer = combineReducers(reducers);
var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
var store = finalCreateStore(reducer, data);


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
