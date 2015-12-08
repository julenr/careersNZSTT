/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import scrollTo from '../../../libs/scrollTo/scrollTo.js';
import UndoPanel from './UndoPanel';
import HelpPanel from './HelpPanel';
import Tooltip from 'rc-tooltip';
import {toggleListTypeOptions} from '../../../redux/listview-actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    showListTypeOptions: state._listViewData.ShowListTypeOptions
  }
}

class ListViewHeader extends React.Component {
  render () {
    let { helpPanels } = this.props;

    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <h1 className="access">Job suggestions based on skills</h1>

          <div className="results-title">
          <span id="list-type-options-container" className="select-menu">
            <Tooltip
                trigger="click"
                overlayClassName="no-arrow list-type-options"
                overlay={
                  <div className="results-title">
                    <span className="select-menu active">
                    <ul data-type="select" className="ui-menu">
                      <li onClick={() => {this.changeListType('Job')}} tabIndex="0" data-value="1">Job</li>
                      <li onClick={() => {this.changeListType('Course')}} tabIndex="0" data-value="2">Course</li>
                    </ul>
                    </span>
                  </div>
                }
                >
              <span className="text-select" onClick={this.props.toggleListTypeOptions}>
                <a href="javascript:void 0">
                  {this.props.ListType}
                  <span className="icon-arrow-down"></span>
                </a>
              </span>
            </Tooltip>
          </span>
            &nbsp;suggestions based on <a href="javascript: void 0" onClick={this.props.openSkillsModalFromListView}>your
            skills</a>
          </div>
          <p className="results-subtitle">
            {
              (this.props.filters.JobCardsFiltered) ?
                  <span><strong>{this.props.filters.JobCardsFiltered} courses</strong> are hidden, </span>
                  :
                  ''
            }
            <a href="javascript: void 0" onClick={() => scrollTo('preferences-panel', -70)}>edit your preferences</a>
          </p>
          <UndoPanel {...this.props}/>
          {helpPanels.map((helpPanel, idx) => renderHelpPanels(helpPanel, idx, this.props))}
        </div>
      </div>
    );
  }

  changeListType = (type) => {
    this.props.toggleListTypeOptions();
    this.props.setListViewType(type);
    this.props.resetListViewState();
    this.props.getListViewData();
  }
}

const renderHelpPanels = (helpPanel, idx, props) => {
  if(!helpPanel.Closed) {
    return (
      <HelpPanel key={idx} id={idx} {...props} />
    );
  }
}

export default connect(
  mapStateToProps,
  {toggleListTypeOptions}
)(ListViewHeader);