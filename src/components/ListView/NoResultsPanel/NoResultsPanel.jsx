/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';

class NoResultsPanel extends React.Component {

  render() {
    return (
      <div className="page-maincontent">
        <div className="page-wrapper">
          <div className="no-results">
            <p>Sorry, there are no suggestions to show with the preferences you have set. Please remove one or more preferences below or remove all preferences.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoResultsPanel;