/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import UndoPanel from './UndoPanel';
import HelpPanel from './HelpPanel';

class ListViewHeader extends React.Component {

  render() {
    let { helpPanels } = this.props;

    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <h1 className="results-title"> <span className="select-menu"> <a href="javascript: void 0" className="select-menu-trigger">Job<span className="icon-arrow-down"></span></a>
            <ul data-type="select" className="ui-menu">
              <li tabIndex="0" value="1">Job</li>
              <li tabIndex="0" value="2">Course</li>
            </ul>
            </span> suggestions based on <a href="javascript: void 0" onClick={this.props.openSkillsModalFromListView}>your skills</a>
          </h1>
          <p className="results-subtitle">
            <strong>23 courses</strong> are hidden, <a href="javascript: void 0">edit your preferences</a>
          </p>
          <UndoPanel {...this.props}/>
          {helpPanels.map(this.renderHelpPanels)}
        </div>
      </div>
    );
  }

  renderHelpPanels = (helpPanel, idx) => {
    if(!helpPanel.Closed) {
      return (
        <HelpPanel key={idx} id={idx} {...this.props} />
      );
    }
  }
}

export default ListViewHeader;