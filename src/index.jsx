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
import initialData from './redux/initialData';

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import QuestionsPage from './components/QuestionsPage/QuestionsPage.jsx';
import ProviderConnect from './components/ProviderConnect/ProviderConnect.jsx';

// Initialize Redux store

const store = createStore(
    {
      _time: {testHash: 'anyValue'},
      _main: initialData
    }
);

console.log('Initial state ', initialData);

var app = document.createElement('div');
document.body.appendChild(app);


//React.render(<App />, app);

React.render((
  <Provider store={ store }>
    { () => (
      /*{<Router history={createBrowserHistory()}>}*/
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

