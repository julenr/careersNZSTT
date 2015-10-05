/**
 * Created by jr1500 on 30/09/15.
 */

import './MainPage.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router'

class MainPage extends React.Component {
  render() {
    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <div className="layout-row">
            <div className="layout-col-8 layout-col main">
              <h1>Statics</h1>
              <div className="content-wrapper">
                <h2>Templates</h2>
                <ul>
                  <li><Link to="questionsPage">Questions</Link></li>
                  <li><a href="jobs.php">Jobs</a></li>
                  <li><a href="course-detail.php">Course detail</a></li>
                  <li><a href="general.php">General content page</a></li>
                </ul>
                <h2>Styleguide</h2>
                <ul>
                  <li><a href="blocks.php">Blocks</a></li>
                  <li><a href="colours.php">Colours</a></li>
                  <li><a href="icons.php">Icons</a></li>
                  <li><a href="columns.php">Columns</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;