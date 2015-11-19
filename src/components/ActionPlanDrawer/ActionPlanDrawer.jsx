/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from 'react-redux';
import * as actionPlanActions from '../../redux/actionplan-actions';
import ActionPlanList from './ActionPlanList'
import RemoveActionModal from '../Modals/RemoveActionModal'

function mapStateToProps(state) {
  return {
    actionPlanOpen: state._actionPlanData.ActionPlanOpen,
    suggestedActions: state._actionPlanData.data.SuggestedActions,
    completionInProgress: state._actionPlanData.data.SuggestedActionsCompletionInProgress,
    isRemoveActionModalShown: state._actionPlanData.data.IsRemoveActionModalShown,
    actionForRemovalIndex: state._actionPlanData.data.ActionForRemovalIndex
  }//TODO move props off .data
}

class ActionPlanDrawer extends React.Component {

  render () {

    const {actionPlanOpen, suggestedActions, completionInProgress} = this.props;
    const suggestedActionsTitle = 'Suggested Actions';
    let actionPlanClass = actionPlanOpen ? 'action-plan pinned open' : 'action-plan pinned closed';
    let suggestedActionsCount = this.selectedActionsInActionPlan(suggestedActions).length;

    return (
      <section className={actionPlanClass}>
        <header className="plan-header" onClick={() => this.toggleActionPlan(actionPlanOpen)}>
          <div className="page-wrapper">
            <h2 className="plan-title">Your action plan <span className="plan-count"><span className="item-count">{suggestedActionsCount}</span> items <span className="icon-chevron-up">&nbsp;</span> <span className="text-open">Show</span><span className="text-close">Hide</span></span></h2>
            <div className="plan-help-popup">
              <a href="link_to_help_page_for_non_js_users" className="help-trigger">
                <img className="avatar" src={require('../../assets/images/placeholders/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="54" height="54" />
                <span className="text">Need help?</span>
              </a>
            </div>
            <a href="https://www.surveymonkey.com/r/ZD2VTVG" className="feedback-button" target="_blank">Feedback</a>
          </div>
        </header>
        {
            (actionPlanOpen)
            ?
        <div className="plan-liner">
          <section className="plan-content">
            <div className="page-wrapper" style={{'maxHeight': '625px'}}>

              <h2 className="access">Action plans</h2>

              <ActionPlanList {...this.props} title={suggestedActionsTitle} actions={suggestedActions}/>

            </div>
          </section>

          <footer className="plan-footer">
            <div className="page-wrapper">

              <ul className="plan-tools">
                <li><a href="#" className="plan-button email-plan">Email <span className="desktop">plan</span></a></li>
                <li><a href="#" className="plan-button download-plan">Download <span className="desktop">plan</span></a></li>
                <li className="desktop"><a href="#" className="plan-button print-plan">Print plan</a></li>
              </ul>

            </div>
          </footer>

        </div>
            :
                ''
          }
        <RemoveActionModal {...this.props}/>
      </section>

    );
  }

  selectedActionsInActionPlan = (suggestedActions) => {
    if(!suggestedActions) {
      return [];
    }
    return suggestedActions.filter((action) => {
      return action.IsInActionPlan;
    });
  }

  toggleActionPlan = (isOpen) => {
    if(isOpen) {
      this.closeActionPlan();
    } else {
      this.openActionPlan();
    }
  }

  openActionPlan = () => {
    this.props.openActionPlan();
  }

  closeActionPlan = () => {
    this.props.closeActionPlan();
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionPlanActions
  }
)(ActionPlanDrawer);

