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
import createStore from './redux/create-store'

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import QuestionsPage from './components/QuestionsPage/QuestionsPage.jsx';

// Initialize Redux store
const store = createStore({_time: {testHash: 'anyValue'}});

if(process.env.NODE_ENV === 'production') {
  var app = document.getElementById('app');
}
else {
  var app = document.createElement('div');
  document.body.appendChild(app);
}

React.render((
  <Provider store={ store }>
    { () => (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
          <IndexRoute component={MainPage} />
          <Route path="questions" component={QuestionsPage} />
        </Route>
      </Router>
      )
    }
  </Provider>
), app);
