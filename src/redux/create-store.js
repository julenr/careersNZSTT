import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from './promise-middleware';
import * as reducers from './reducers';


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
      Member: '',
      Questionnaire: [],
      Questions: [],
      refresh: false,
    }
  },
  _listViewData: {
    loaded: false
  }
};

var reducer = combineReducers(reducers);
var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
var store = finalCreateStore(reducer, data);

export default store;
