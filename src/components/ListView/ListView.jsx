/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import { bindActionCreators } from 'redux'
import { connect } from '../../libs/react-redux';
import * as actionCreators from '../../redux/listview-actions';
import { setCurrentRoute } from '../../redux/general-actions';
import { getCourseDetails } from '../../redux/coursedetail-actions';
import { getListViewData, setListViewType } from '../../redux/questionnaire-actions';

import Footer from '../Footer/Footer';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer';
import JobCard from './JobCard/JobCard';
import QualificationCard from './QualificationCard/QualificationCard';
import RemoveJobCardModal from './JobCard/RemoveJobCardModal';
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
    mainPanelSplitIndexPoint: state._listViewData.MainPanelSplitIndexCard,
    qualificationsPanelSplitIndexCard: state._listViewData.QualificationsPanelSplitIndexCard,
    qualificationsPanelLoaded: state._listViewData.QualificationsPanelLoaded,
    institutionsPanelLoaded: state._listViewData.InstitutionsPanelLoaded,
    showMatchSkillsModal: state._listViewData.ShowMatchSkillsModal,
    selectedSkills: state._questionnaire.data.Skills.Selected,
    jobsCards: state._listViewData.data.JobsCards,
    helpPanels: state._listViewData.data.HelpPanels,
    undoPanel: state._listViewData.data.UndoPanel,
    qualificationsPanel: state._listViewData.data.QualificationsPanel,
    qualificationsCardsShown: state._listViewData.QualificationsCardsShown,
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
    intro: state._questionnaire.data.Intro,
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
        paginationLimit, mainPanelSplitIndexPoint, qualificationsPanelSplitIndexCard, qualificationsCardsShown
      } = this.props;
    const cards = (ListType === 'Job') ? jobsCards : qualificationsPanel.Courses;
    const areVisibleCards = this.checkAreVisibleCards(cards);
    const areHiddenCards = this.areHiddenCards();
    const visibleCardsCount = this.getVisibleCardsCount(cards);
    const lastShownCardIndex = this.getLastPaginationIndex(cards, paginationLimit);
    const countCardsShown = (lastShownCardIndex === -1) ? cards.length : lastShownCardIndex + 1;

    /*
    //Compute the split point for Job/Course Cards when Qualification/Institution Panel is shown in the middle
    const nColumns = this.numberOfColums();
    let splitPointMainCards = (mainPanelSplitIndexPoint !== -1) ? mainPanelSplitIndexPoint + 1: countCardsShown;
    let modulus = this.getVisibleCardsCount(_.take(cards, splitPointMainCards)) % nColumns;
    const firstPanelArrowPosition = (modulus === 0) ? nColumns - 1 : (modulus) - 1;
    const visibleCardsToCompleteRow = (modulus === 0) ? 0 : this.countCardsToCompleteRow(_.slice(cards, splitPointMainCards, countCardsShown), nColumns - modulus);
    splitPointMainCards += visibleCardsToCompleteRow;

    //Calculate arrow position for Institutions panel
    let splitPointCards = (qualificationsPanelSplitIndexCard !== -1) ? qualificationsPanelSplitIndexCard + 1: qualificationsCardsShown;
    modulus = splitPointCards % nColumns;
    const secondPanelArrowPosition = (modulus === 0) ? nColumns - 1 : (modulus) - 1;
*/
    const firstPanelArrowPosition = 0;
    const secondPanelArrowPosition = 0;

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
                  //_.map(_.take(cards, splitPointMainCards), this.renderCards) //Uncomment for split behaviour
                  _.map(cards, this.renderCards)
                }
              </ReactCSSTransitionGroup >
            </div>
          </div>
        </div>

        {(areVisibleCards) ? '' : <NoResultsPanel /> }
        <div id="first-panel-scroll-point" />
        {(showQualificationsPanel) ?
          <QualificationsPanel {...this.props} arrowPositionClass={firstPanelArrowPosition} split="main"/>
          :
          ''
        }
        <div id="second-panel-scroll-point" />
        {(showInstitutionsPanel) ?
          <InstitutionsPanel {...this.props} arrowPositionClass={secondPanelArrowPosition} />
          :
          ''
        }
        {
          /* (showQualificationsPanel && (qualificationsPanelSplitIndexCard !== -1)) ?
          <QualificationsPanel {...this.props} arrowPositionClass="4" split="second"/>
          :
          ''
          */
        }
        {/*
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
                  _.map(_.slice(cards, splitPointMainCards, countCardsShown),
                    (card, idx) => this.renderCards(card, idx + splitPointMainCards))
                  }
              </ReactCSSTransitionGroup >
            </div>
          </div>
        </div>
        */}

        {(areVisibleCards) ? <Pagination {...this.props} visibleCardsCount={visibleCardsCount} /> : '' }
        <Preferences {...this.props} />
        {(areHiddenCards) ? <HiddenCards {...this.props} /> : '' }
        <ActionPlanDrawer/>
        <Footer />
        {(showQualificationsPanel) ? <EntryRequirementsModal {...this.props} /> : '' }
        {(areVisibleCards && (ListType === 'Job')) ? <MatchSkillsModal {...this.props}/> : '' }
        {(areVisibleCards && (ListType === 'Job')) ? <RemoveJobCardModal {...this.props}/> : '' }
        {(areVisibleCards) ? <RemoveQualificationCardModal {...this.props}/> : '' }
        {(areVisibleCards) ? <FullQualificationCardDescriptionModal {...this.props}/> : '' }
      </div>
    )
  }

  renderCards = (card, idx) => {
    if(this.isVisibleCard(card)) {
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

  countCardsToCompleteRow = (cards = [], howMany = 1) => {
    const visibleCards = _.reduce(cards, (result, card, idx) => {
      if(this.isVisibleCard(card)) {
        result.push(idx+1);
      }
      return result;
    }, []);
    return (visibleCards.length) ? visibleCards[howMany-1] : 0;
  }

  numberOfColums = () => {
    const hWidth  = window.innerWidth || document.documentElement.clientWidth;
    return (hWidth > 1200) ? 3 : (hWidth < 804) ? 1 : 2;
  }
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
