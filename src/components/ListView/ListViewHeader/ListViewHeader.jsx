/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { scrollTo } from '../../../libs/helpers';
import UndoPanel from './UndoPanel';
import HelpPanel from './HelpPanel';
import TextSelect from '../../subcomponents/TextSelect';

const ListViewHeader = (props) => {
  const { helpPanels } = props;

  return (
    <div className="page-maincontent" id="content">
      <div className="page-wrapper">
        <h1 className="access">Job suggestions based on skills</h1>
        <div className="results-title">
          <span className="select-menu">
            <TextSelect options={['Job', 'Course']} active={props.ListType} onChange={(e) => changeListType(e, props)}/>
          </span>
          &nbsp;suggestions based on <a href="javascript: void 0" onClick={props.openSkillsModalFromListView}>your skills</a>
        </div>
        <p className="results-subtitle">
          {
            (props.filters.JobCardsFiltered) ?
              <span><strong>{props.filters.JobCardsFiltered} courses</strong> are hidden, </span>
            :
             ''
          }
          <a href="javascript: void 0" onClick={() => scrollTo('preferences-panel', -70)}>edit your preferences</a>
        </p>
        <UndoPanel {...props}/>
        {helpPanels.map((helpPanel, idx) => renderHelpPanels(helpPanel, idx, props))}
      </div>
    </div>
  );
}

const renderHelpPanels = (helpPanel, idx, props) => {
  if(!helpPanel.Closed) {
    return (
      <HelpPanel key={idx} id={idx} {...props} />
    );
  }
}

const changeListType = (e, props) => {
  props.setListViewType(e);
  props.resetListViewState();
  props.getListViewData();
}

export default ListViewHeader;