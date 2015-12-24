/**
 * Created by jr1500 on 9/09/15.
 */

if (__DEV__) {
  console.log('DEVELOPMENT ENVIRONMENT ACTIVATED');
}

// SASS Stylesheets
import './styles/custom-normalize.scss';
import './styles/fonts.scss';
import './styles/screen.scss';
import './styles/animate.css';
import './styles/tooltip.scss';

// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import es6Promise from 'es6-promise';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { Provider } from './libs/react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// REDUX STORE
import store from './redux/create-store';
import * as actionCreators from './redux/general-actions';

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Questionnaire from './components/Questionnaire/Questionnaire.jsx';
import ListView from './components/ListView/ListView.jsx';
import CourseDetail from './components/CourseDetail/CourseDetail.jsx';

//Polifill ES6 Promise for axios and any other modules
//TODO: Polyfill with Babel-core and get rid of ES5 shims and shams from HTML template
es6Promise.polyfill();

// Element to attach React-DOM
const app = document.createElement('div');
const userID = document.getElementsByTagName('body')[0].getAttribute('data-member-id');

document.body.appendChild(app);

// Retrieve initial Data from the server
if(!sessionStorage.getItem('careers')) {
  if(userID) {
    store.dispatch(actionCreators.loadSavedState());
  } else {
    store.dispatch(actionCreators.getFooterData());
    store.dispatch(actionCreators.getQuestionnaire());
  }
}

// Render the DOM when the data is allready stored
let spinnerRendered = false;
const interval = setInterval(() => {
    const state = store.getState();
    if(state._footerData.loaded) { //Check if everything is loaded before render App
      ReactDOM.render((
        <Provider store={ store }>
          <Router>
            <Route path="/" component={App}>
              <IndexRoute component={Questionnaire} />
              <Route path="questionnaire" component={Questionnaire} />
              <Route path="list-view" component={ListView} />
              <Route path="course-detail" component={CourseDetail} />
              {state._footerData.data.Footer.Menu.map(renderFooter)}
            </Route>
          </Router>
        </Provider>
      ), app);
      clearInterval(interval);
    } else {
        if(!spinnerRendered) {
          spinnerRendered = true;
          ReactDOM.render((
            <div className="spinner"></div>
          ), app);
        }
    }
  }, 10);

// Render links dinamicaly from the server
function renderFooter(route, idx) {
  return (
    <Route key={idx} path={route.URLSegment} component={MainPage}/>
  );
}


