/**
 * Created by jr1500 on 9/09/15.
 */

// SASS Stylesheets
import './styles/custom-normalize.scss';
import './styles/fonts.scss';
import './styles/screen.scss';

// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Loader from 'react-loader';

// REDUX STORE
import store from './redux/create-store';
import * as actionCreators from './redux/general-actions';

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Questionnaire from './components/Questionnaire/Questionnaire.jsx';
import ListView from './components/ListView/ListView.jsx';
import ProviderConnect from './components/ProviderConnect/ProviderConnect.jsx';

console.clear();

// Element to attach React-DOM
const app = document.createElement('div');
document.body.appendChild(app);

// Retrieve initial Data from the server
store.dispatch(actionCreators.getFooterData());
store.dispatch(actionCreators.getQuestionnaire());
store.dispatch({type: 'FIRST_QUESTION'});

// Render the DOM when the data is allready stored
let unsubscribe = store.subscribe(() => {
    const state = store.getState();
    if(state._footerData.loaded) { //Check if everything is loaded before render App
      ReactDOM.render((
        <Provider store={ store }>
          <Router>
            { /*<Router history={callCreateBrowserHistory()}>  TODO: Problems rendering in Vagrant-Nginx environment */}
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
    else {
      ReactDOM.render((
        <Loader />
      ), app);
    }
  }
);

function callCreateBrowserHistory() {
  return createBrowserHistory();
}

// Render links dinamicaly from the server
function renderFooter(route, idx) {
  return (
    <Route key={idx} path={route.URLSegment} component={MainPage}/>
  );
}


