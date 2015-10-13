/**
 * Created by jr1500 on 9/09/15.
 */

// SASS Stylesheets
import './normalize.scss';
import './fonts.scss';
import './main.scss';

// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import uuid from 'node-uuid';

// REDUX STORE
import createStore from './redux/create-store';
import * as actionCreators from './redux/action-creators';

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Questionnaire from './components/Questionnaire/Questionnaire.jsx';
import ProviderConnect from './components/ProviderConnect/ProviderConnect.jsx';

// Initialize Redux store
const store = createStore();

// Element to attach React-DOM
var app = document.createElement('div');
document.body.appendChild(app);

// Retrieve initial Data from the server
store.dispatch(actionCreators.getFooterData());
store.dispatch(actionCreators.getQuestionnaire());
store.dispatch(actionCreators.getContentPage());

// Render the DOM when the data is allready stored
let unsubscribe = store.subscribe(() => {
    const state = store.getState();
    console.log('Creating router from backend data ', state);
    ReactDOM.render((
      <Provider store={ store }>
        {/*<Router history={createBrowserHistory()}> TODO: Problems rendering in Vagrant environment*/}
          <Router>
          <Route path="/" component={App}>
            <IndexRoute component={ProviderConnect} />
            <Route path="questionnaire" component={Questionnaire} />
            <Route path="providerconnect" component={ProviderConnect} />
            {state._footerData.data.Footer.Menu.map(renderFooter)}
          </Route>
        </Router>
      </Provider>
    ), app);
    unsubscribe();
  }
);

function renderFooter(route) {
  console.log(route.url);
  return (
    <Route key={uuid.v4()} path={route.urlTitle} component={ProviderConnect} url={route.Link}/>
  );
}


