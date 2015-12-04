/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/listview-actions';
import { setCurrentRoute } from '../../redux/general-actions';
import { getCourseDetails } from '../../redux/coursedetail-actions';
import { getListViewData, setListViewType } from '../../redux/questionnaire-actions';

import Footer from '../Footer/Footer';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer';
import JobCard from './JobCard/JobCard';
import QualificationCard from './QualificationCard/QualificationCard';
import RemoveJobCardModal from './JobCard/RemoveJobCardModal';
import VocationalPathwaysModal from './JobCard/VocationalPathwaysModal';
import ListViewHeader from './ListViewHeader/ListViewHeader';
import QualificationsPanel from './QualificationsPanel/QualificationsPanel';
import EntryRequirementsModal from './QualificationsPanel/EntryRequirementsModal';
import RemoveQualificationCardModal from './QualificationCard/RemoveQualificationCardModal';
import FullQualificationCardDescriptionModal from './QualificationCard/FullQualificationCardDescriptionModal';
import NoResultsPanel from './NoResultsPanel/NoResultsPanel';
import InstitutionsPanel from './InstitutionsPanel/InstitutionsPanel';
import Pagination from './Pagination/Pagination';
import Preferences from './Preferences/Preferences';
import HiddenCards from './HiddenCards/HiddenCards';
import MatchSkillsModal from '../Modals/MatchSkills';

function mapStateToProps(state) {

  return {
    ListType: state._listViewData.data.ListType,
    loaded: state._listViewData.loaded,
    qualificationsPanelLoaded: state._listViewData.QualificationsPanelLoaded,
    institutionsPanelLoaded: state._listViewData.InstitutionsPanelLoaded,
    showMatchSkillsModal: state._listViewData.ShowMatchSkillsModal,
    selectedSkills: state._questionnaire.data.Skills.Selected,
    jobsCards: state._listViewData.data.JobsCards,
    helpPanels: state._listViewData.data.HelpPanels,
    undoPanel: state._listViewData.data.UndoPanel,
    qualificationsPanel: state._listViewData.data.QualificationsPanel,
    showQualificationsPanel: state._listViewData.ShowQualificationsPanel,
    showEntryRequirementsModal: state._listViewData.ShowEntryRequirementsModal,
    institutionsPanel: state._listViewData.data.InstitutionsPanel,
    showInstitutionsPanel: state._listViewData.ShowInstitutionsPanel,
    checkSkillsID: state._listViewData.CheckSkillsID,
    showRemoveJobCardModal: state._listViewData.ShowRemoveJobCardModal,
    filters: state._listViewData.data.Filters,
    regionFilter: state._listViewData.data.Filters.Region,
    regions: state._footerData.data.Regions,
    tooltips: state._footerData.data.Tooltips,
    showAddPreferenceModal: state._listViewData.data.Filters.ShowAddPreferenceModal,
    jobCardSelectedID: state._listViewData.JobCardSelectedID,
    qualificationCardSelectedID: state._listViewData.QualificationCardSelectedID,
    showRemoveQualificationCardModal: state._listViewData.ShowRemoveQualificationCardModal,
    showFullQualificationCardDescriptionModal: state._listViewData.ShowFullQualificationCardDescriptionModal,
    removeQualificationCardModalID: state._listViewData.RemoveQualificationCardModalID,
    showRemoveInstitutionCardModal: state._listViewData.ShowRemoveInstitutionCardModal,
    removeInstitutionCardModalID: state._listViewData.RemoveInstitutionCardModalID,
    paginationLimit: state._listViewData.PaginationLimit,
    hiddenPanel: state._listViewData.data.HiddenPanel,
    showVocationalPathwaysModal: state._listViewData.ShowVocationalPathwaysModal,
    vocationalPathwaysModal: state._footerData.data.VocationalPathwaysModal,
    vocationalPathways: state._footerData.data.VocationalPathways,
    refresh: state._listViewData.data.refresh // This value if changed somewhere triggers the component render method
  };
}

class ListView extends React.Component {
  render () {
    if (this.props.loaded) {
      return <Content {...this.props} />;
    }
    else {
      return (
        <div className="active" id="list-changing-overlay">
          <div className="overlay-liner">
            <div className="message">
              <span className="icon-refresh"></span>
              Updating your <br/><strong>course/job</strong> <br/>suggestions
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.setCurrentRoute('ListView');
  }
}

class Content extends React.Component {

  componentWillMount() {
    this.props.filterJobCardsByCondition();
    this.props.filterQualificationCardsByCondition();
  }

  render() {
    const { jobsCards, showQualificationsPanel, showInstitutionsPanel, qualificationsPanel, ListType,
        paginationLimit} = this.props;
    const cards = (ListType === 'Job') ? jobsCards : qualificationsPanel.Courses;
    const areVisibleCards = this.checkAreVisibleCards(cards);
    const areHiddenCards = this.areHiddenCards();
    const visibleCardsCount = this.getVisibleCardsCount(cards);
    cards.lastShownCardIndex = this.getLastPaginationIndex(cards, paginationLimit);

    return (
      <div>
        <ListViewHeader {...this.props}/>
        <div className="page-maincontent">
          <div className="page-wrapper">
            <div className="careers-card-wrapper">
              <ReactCSSTransitionGroup
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionName={{
                enter: 'animated',
                enterActive: 'fadeIn',
                leave: 'animated',
                leaveActive: 'fadeOut'
                }}
                >
                {
                  cards.map(this.renderCards)
                }
              </ReactCSSTransitionGroup >
            </div>
          </div>
        </div>
        {(areVisibleCards) ? '' : <NoResultsPanel /> }
        <div id="qualifications-panel-scroll-point" />
        {(showQualificationsPanel) ? <QualificationsPanel {...this.props} /> : '' }
        {(showQualificationsPanel) ? <EntryRequirementsModal {...this.props} /> : '' }
        <div id="institutions-panel-scroll-point" />
        {(showInstitutionsPanel) ? <InstitutionsPanel {...this.props} /> : '' }
        {(areVisibleCards) ? <Pagination {...this.props} visibleCardsCount={visibleCardsCount} /> : '' }
        <Preferences {...this.props} />
        {(areHiddenCards) ? <HiddenCards {...this.props} /> : '' }
        <ActionPlanDrawer/>
        <Footer />
        {(areVisibleCards && (ListType === 'Job')) ? <MatchSkillsModal {...this.props}/> : '' }
        {(areVisibleCards && (ListType === 'Job')) ? <RemoveJobCardModal {...this.props}/> : '' }
        {(areVisibleCards) ? <RemoveQualificationCardModal {...this.props}/> : '' }
        {(areVisibleCards) ? <FullQualificationCardDescriptionModal {...this.props}/> : '' }
        <VocationalPathwaysModal {...this.props} />
      </div>
    )
  }

  renderCards = (card, idx, arr) => {
    if(this.isVisibleCard(card) && (idx <= arr.lastShownCardIndex || arr.lastShownCardIndex === -1)) {
      return (
        (this.props.ListType === 'Job') ?
          <JobCard key={idx} id={idx} {...this.props} />
          :
          <QualificationCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  getLastPaginationIndex = (cards, paginationLimit) => {
    const lastPaginatedCard = _.last(this.getPaginatedCards(cards, paginationLimit));
    const idProperty = this.props.ListType === 'Job' ? 'SubJobID' : 'CourseID';
    if(!lastPaginatedCard || !lastPaginatedCard[idProperty]) {
      return -1;
    }

    return _.findIndex(cards, (card) => {
      return card[idProperty] === lastPaginatedCard[idProperty];
    });
  }

  //return collection of cards which should be shown. max collection size will be the current pagination limit.
  getPaginatedCards = (cards, paginationLimit) => {
    return _(cards)
            .filter(this.isVisibleCard)
            .take(paginationLimit)
            .value();
  }

  checkAreVisibleCards = (cards) => {
    if(!cards.length) {
      return false;
    }
    return (_.findIndex(cards, (card) => {
      return this.isVisibleCard(card);
    }) !== -1)

  }

  areHiddenCards = () => {
    const jobCards = (_.findIndex(this.props.jobsCards, (card) => {
      return card.Closed;
    }) !== -1);

    const qualificationCards = (_.findIndex(this.props.qualificationsPanel.Courses, (card) => {
      return card.Closed;
    }) !== -1);

    const institutionsCards = (_.findIndex(this.props.institutionsPanel.CourseCards, (card) => {
      return card.Closed;
    }) !== -1);

    return jobCards || qualificationCards || institutionsCards;
  }

  //returns all cards which are not hidden and not filtered. Does not account for pagination ie. card may be 'visible'
  //but not shown because we are only showing X results.
  getVisibleCardsCount = (cards) => {
    return _.filter(cards, (card) => {
      return !card.Closed && !card.Filtered;
    }).length;
  }

  isVisibleCard = function(card) {
    return !card.Closed && !card.Filtered;
  };

}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    setCurrentRoute,
    getCourseDetails,
    getListViewData, setListViewType
  }
)(ListView);
