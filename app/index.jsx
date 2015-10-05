/**
 * Created by jr1500 on 9/09/15.
 */

import './normalize.scss';
import './fonts.scss';
import './main.scss';

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router'

import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import QuestionsPage from './components/QuestionsPage/QuestionsPage.jsx';


if(process.env.NODE_ENV === 'production') {
  var app = document.getElementById('app');
}
else {
  var app = document.createElement('div');
  document.body.appendChild(app);
}

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="questions" component={QuestionsPage} />
    </Route>
  </Router>
), app);
