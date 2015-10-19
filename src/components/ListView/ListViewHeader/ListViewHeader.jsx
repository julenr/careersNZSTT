/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/listview-actions';

import UndoPanel from './UndoPanel';
import HelpPanel from './HelpPanel';

@connect((state) => {
  return {
    helpPanels: state._listViewData.data.HelpPanels
  }
})
class ListViewHeader extends React.Component {

  render() {
    let { helpPanels } = this.props;

    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <h1 className="results-title"> <span className="select-menu"> <a href="#" className="select-menu-trigger">Job<span className="icon-arrow-down"></span></a>
            <ul data-type="select" className="ui-menu">
              <li tabIndex="0" value="1">Job</li>
              <li tabIndex="0" value="2">Course</li>
            </ul>
            </span> suggestions based on <a href="#">your skills</a>
          </h1>
          <p className="results-subtitle">
            <strong>23 courses</strong> are hidden, <a href="#">edit your preferences</a>
          </p>
          <UndoPanel />
          {helpPanels.map(this.renderHelpPanels)}
        </div>
      </div>
    );
  }

  renderHelpPanels = (helpPanel, idx) => {
    if(!helpPanel.Closed) {
      return (
        <HelpPanel key={idx} id={idx}/>
      );
    }
  }
}

export default ListViewHeader;