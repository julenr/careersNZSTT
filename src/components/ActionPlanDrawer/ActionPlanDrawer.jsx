/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { connect } from '../../libs/react-redux';
import * as actionPlanActions from '../../redux/actionplan-actions';
import ActionPlanList from './ActionPlanList'
import RemoveActionModal from '../Modals/RemoveActionModal'
import Tooltip from 'rc-tooltip';
import Sticky from '../subcomponents/Sticky/Sticky.jsx';

function mapStateToProps(state) {
  return {
    actionPlanOpen: state._actionPlanData.ActionPlanOpen,
    suggestedActions: state._actionPlanData.data.SuggestedActions,
    userAddedActions: state._actionPlanData.data.UserAddedActions,
    completionInProgress: state._actionPlanData.data.DrawerActionCompletionInProgress,
    isRemoveActionModalShown: state._actionPlanData.data.IsRemoveActionModalShown,
    suggestedActionForRemovalIndex: state._actionPlanData.data.SuggestedActionForRemovalIndex,
    actionForRemovalActionId: state._actionPlanData.data.ActionForRemovalActionId,
    actionForRemovalCourseId: state._actionPlanData.data.ActionForRemovalCourseId,
    actionForRemovalBarrierId: state._actionPlanData.data.ActionForRemovalBarrierId,
    isUserAddedActionsEmpty: isUserAddedActionsEmpty(state._actionPlanData.data.UserAddedActions),
    firstTimeHelpPopupVisible: state._actionPlanData.FirstTimeHelpPopupVisible,
    noResultsTitle: state._actionPlanData.data.NoResultsTitle,
    noResultsText: state._actionPlanData.data.NoResultsText,
    helpPopup: state._footerData.data.HelpPopup,
    survey: state._footerData.data.Survey
  }
}

function isUserAddedActionsEmpty(userAddedActions) {
  if(!userAddedActions || !userAddedActions.length) {
    return true;
  }
}

class ActionPlanDrawer extends React.Component {

  componentDidMount() {
    if (window.addEventListener) {
      window.addEventListener('resize', this.closeActionPlan, false);
    }
    else {
      window.attachEvent('resize', this.closeActionPlan);
    }
  }

  render () {
    const { actionPlanOpen, suggestedActions, userAddedActions,
            isUserAddedActionsEmpty, noResultsTitle,
            noResultsText
          } = this.props;
    const suggestedActionsTitle = 'Suggested Actions';
    let actionPlanClass = actionPlanOpen ? 'action-plan open' : 'action-plan closed';
    let actionsCount = this.countActionsInActionPlan(suggestedActions, userAddedActions);
    let linerStyle;
    if(actionPlanOpen) {
      linerStyle = this.calculateActionPlanLinerHeightStyles();
    } else {
      linerStyle = {height: '0'};
    }

    const customStyleObject = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0
    }

    return (
      <Sticky stickyStyle={customStyleObject}>
        <section className={actionPlanClass}>
          <header className="plan-header" onClick={() => this.toggleActionPlan(actionPlanOpen)}>
            <div id="help-popup-container" className="page-wrapper" onClick={(e)=>{e.stopPropagation()/*stop from the popup*/}}>
              <div onClick={() => this.toggleActionPlan(actionPlanOpen)}>
                <h2 className="plan-title">Your action plan <span className="plan-count"><span className="item-count">{actionsCount}</span> items <span className="icon-chevron-up">&nbsp;</span> <span className="text-open">Show</span><span className="text-close">Hide</span></span></h2>
              </div>
              <Tooltip
                  trigger="click"
                  placement="top"
                  overlayClassName="no-arrow help-tooltip"
                  getTooltipContainer={() => document.getElementById('help-popup-container')}
                  overlay={
                  <div className="plan-help-popup" onClick={(e)=>{e.stopPropagation()}}>
                    <div className="help-popup">
                      <div className="second-view">
                        <div className="help-title">We can give you a hand. <strong>Get in touch now...</strong></div>
                        <ul>
                          <li><a href={this.props.helpPopup.Link1Link} target={this.props.helpPopup.Link1OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link1Text}</a></li>
                          <li><a href={this.props.helpPopup.Link2Link} target={this.props.helpPopup.Link2OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link2Text}</a></li>
                          <li><a href={this.props.helpPopup.Link3Link} target={this.props.helpPopup.Link3OpenInNewTab ? '_blank':'_self'} className="help-panel-button">{this.props.helpPopup.Link3Text}</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  }
                >
                <div className="plan-help-popup" onClick={this.dismissFirstTimeHelpPopup}>
                  <a href="javascript: void 0;" className="help-trigger">
                    <img className="avatar" src={require('../../assets/images/placeholders/action-plan-help-avatar-2.jpg')} alt="Help assistant. " width="54" height="54" />
                    <span className="text">Need help?</span>
                  </a>
                </div>
              </Tooltip>
              <Tooltip
                  trigger="click"
                  placement="top"
                  overlayClassName="no-arrow help-tooltip"
                  getTooltipContainer={() => document.getElementById('help-popup-container')}
                  visible={this.props.firstTimeHelpPopupVisible}
                  overlay= {
                  <div className="plan-help-popup" onClick={this.dismissFirstTimeHelpPopup}>
                    <div className="help-popup">
                      <div className="first-view">
                        <div className="help-title" dangerouslySetInnerHTML={{__html:this.props.helpPopup.HelpText}}>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                >
                <div className="plan-help-popup"></div>
              </Tooltip>
              {
                this.props.survey ?
                  <a href={this.props.survey.Link} className="feedback-button" target={this.props.survey.Target}>{this.props.survey.Text}</a>
                  :
                  ''
              }
            </div>
          </header>
          <div className="plan-liner" style={linerStyle}>
            <section className="plan-content">
              <div className="page-wrapper" style={{'maxHeight': '625px'}}>
                <h2 className="access">Action plans</h2>
                  <ActionPlanList isSuggestedActions {...this.props} title={suggestedActionsTitle}
                                actions={suggestedActions}/>
                {
                  (isUserAddedActionsEmpty) ?
                    <section className="layout-col-4 layout-col plan-suggestion-actions"><h3>{noResultsTitle}</h3>
                    <div dangerouslySetInnerHTML={{__html:noResultsText}}/></section>
                    : userAddedActions.map(this.renderUserAddedAction)
                }
              </div>
            </section>
            <footer className="plan-footer" style={{display: 'none'}}>
              <div className="page-wrapper">

                <ul className="plan-tools">
                  <li><a href="#" className="plan-button email-plan">Email <span className="desktop">plan</span></a></li>
                  <li><a href="#" className="plan-button download-plan">Download <span className="desktop">plan</span></a></li>
                  <li className="desktop"><a href="#" className="plan-button print-plan">Print plan</a></li>
                </ul>

              </div>
            </footer>
          </div>
          <RemoveActionModal {...this.props}/>
        </section>
      </Sticky>

    );
  }

  renderUserAddedAction = (course, idx) => {
    return (
      <ActionPlanList {...this.props} title={course.courseTitle} key={idx} actions={course.actions}/>
    )
  }

  countActionsInActionPlan = (suggestedActions, userAddedActions) => {
    return this.countSelectedActionsInActionPlan(suggestedActions) + this.countUserAddedActions(userAddedActions);
  }

  countUserAddedActions = (userAddedActions) => {
    return _.sum(_.map(userAddedActions, (courseActions) => courseActions.actions.length));
  }

  countSelectedActionsInActionPlan = (suggestedActions) => {
    if(!suggestedActions) {
      return 0;
    }
    return suggestedActions.filter((action) => action.IsInActionPlan).length;
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

  dismissFirstTimeHelpPopup = (e) => {
    e.stopPropagation();
    this.props.dismissFirstTimeHelpPopup();
  }

  //nb. this function is translated from jQuery code provided by Chrometoaster
  calculateActionPlanLinerHeightStyles = () => {
    let actionplanContent = document.querySelector('.action-plan .plan-content .page-wrapper'),
      actionplanFooter = document.querySelector('.action-plan .plan-footer'),
      actionplanHeader = document.querySelector('.action-plan .plan-header'),
      contentHeight = actionplanContent ? actionplanContent.offsetHeight : 0,
      footerHeight = actionplanFooter ? actionplanFooter.offsetHeight : 0,
      headerHeight = actionplanHeader ? actionplanHeader.offsetHeight : 0,
      totalHeight = contentHeight + footerHeight,
      maxHeight;


    headerHeight = headerHeight * 2;
    maxHeight = (window.innerHeight - (headerHeight + footerHeight));

    return {
      height: totalHeight,
      maxHeight: maxHeight
    };
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionPlanActions
  }
)(ActionPlanDrawer);

