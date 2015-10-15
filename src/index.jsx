/**
 * Created by jr1500 on 9/09/15.
 */

// SASS Stylesheets
import './styles/normalize.scss';
import './styles/fonts.scss';
import './styles/screen.scss';

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
import ListView from './components/ListView/ListView.jsx';
import ProviderConnect from './components/ProviderConnect/ProviderConnect.jsx';

// Initialize Redux store
const store = createStore(
  {
    _mainPage: {
      loaded: false
    },
    _footerData: {
      loaded: false
    },
    _questionnaire: {
      loaded: false
    },
    _getJobs: {
      loaded: false
    }
  }
);

// Element to attach React-DOM
const app = document.createElement('div');
document.body.appendChild(app);

// Retrieve initial Data from the server
store.dispatch(actionCreators.getFooterData());
store.dispatch(actionCreators.getQuestionnaire());

// Render the DOM when the data is allready stored
let unsubscribe = store.subscribe(() => {
    const state = store.getState();
    ReactDOM.render((
      <Provider store={ store }>
        <Router history={createBrowserHistory()}>
          { /*<Router>  TODO: Problems rendering in Vagrant-Nginx environment */}
          <Route path="/" component={App}>
            <IndexRoute component={Questionnaire} />
            <Route path="questionnaire" component={Questionnaire} />
            <Route path="providerconnect" component={ProviderConnect} />
            <Route path="list-view" component={ListView} />
            {state._footerData.data.Footer.Menu.map(renderFooter)}
          </Route>
        </Router>
      </Provider>
    ), app);
    unsubscribe();
  }
);

// Render links dinamicaly from the server
function renderFooter(route) {
  return (
    <Route key={uuid.v4()} path={route.URLSegment} component={MainPage}/>
  );
}


