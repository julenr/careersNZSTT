/**
 * Created by jr1500 on 9/09/15.
 */

// SASS Stylesheets
import './normalize.scss';
import './fonts.scss';
import './main.scss';

// REACT Dependencies
import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// REDUX STORE
import createStore from './redux/create-store';
import * as actionCreators from './redux/action-creators';
//import initialData from './redux/initialData';


//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import QuestionsPage from './components/QuestionsPage/QuestionsPage.jsx';
import ProviderConnect from './components/ProviderConnect/ProviderConnect.jsx';

// Initialize Redux store

const store = createStore(
    {
      _time: {testHash: 'anyValue'},
      _mainPage: {
        loading: false,
        data: {
          Title: 'title',
          Content: 'content',
          Intro: 'intro',
          Video: {
            EmbedHTML: 'embedHTML'
          }
        }
      }
    }
);

store.dispatch(actionCreators.getInitialState());
store.dispatch(actionCreators.getContentPage());

console.log('Initial state ', store.getState());

var app = document.createElement('div');
document.body.appendChild(app);


React.render((
  <Provider store={ store }>
    { () => (
      /*{<Router history={createBrowserHistory()}>} TODO: Problems rendering in Vagrant environment*/
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={MainPage} />
          <Route path="questions" component={QuestionsPage} />
          <Route path="ProviderConnect" component={ProviderConnect} />
        </Route>
      </Router>
    )
    }
  </Provider>
), app);

