/**
 * Created by jr1500 on 30/09/15.
 */

import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router'

import Header from '../Header/Header.jsx';

class App extends React.Component {
  render() {
    return (
      <div id="shell">
        <Header />
        {this.props.children || 'Welcome to Careers NZ'}
      </div>
    );
  }
}

export default App;
