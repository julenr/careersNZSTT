/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import Loader from 'react-loader';
import uuid from 'node-uuid';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/listview-actions';

import Footer from '../Footer/Footer';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer';
import JobCard from './JobCard/JobCard';
import RemoveJobCardModal from './JobCard/RemoveJobCardModal';
import ListViewHeader from './ListViewHeader/ListViewHeader';
import QualificationsPanel from './QualificationsPanel/QualificationsPanel';

import InstitutionsPanel from './InstitutionsPanel/InstitutionsPanel';
import Pagination from './Pagination/Pagination';
import Preferences from './Preferences/Preferences';
import HiddenCards from './HiddenCards/HiddenCards';
import MatchSkillsModal from '../Modals/MatchSkills';

function mapStateToProps(state) {
  return {
    loaded: state._listViewData.loaded,
    showMatchSkillsModal: state._listViewData.ShowMatchSkillsModal,
    selectedSkills: state._questionnaire.data.Skills.Selected,
    jobsCards: state._listViewData.data.JobsCards,
    helpPanels: state._listViewData.data.HelpPanels,
    undoPanel: state._listViewData.data.UndoPanel,
    qualificationsPanel: state._listViewData.data.QualificationsPanel,
    showQualificationsPanel: state._listViewData.ShowQualificationsPanel,
    institutionsPanel: state._listViewData.data.InstitutionsPanel,
    showInstitutionsPanel: state._listViewData.ShowInstitutionsPanel,
    showMatchSkillsModal: state._listViewData.ShowMatchSkillsModal,
    checkSkillsID: state._listViewData.CheckSkillsID,
    showRemoveJobCardModal: state._listViewData.ShowRemoveJobCardModal,
    jobCardSelectedID: state._listViewData.JobCardSelectedID,
    showRemoveQualificationCardModal: state._listViewData.ShowRemoveQualificationCardModal,
    removeQualificationCardModalID: state._listViewData.RemoveQualificationCardModalID,
    showRemoveInstitutionCardModal: state._listViewData.ShowRemoveInstitutionCardModal,
    removeInstitutionCardModalID: state._listViewData.RemoveInstitutionCardModalID,
    refresh: state._listViewData.data.refresh // This value if changed somewhere triggers the component render method
  };
}

class ListView extends React.Component {

  render () {
    var { loaded } = this.props;

    if (loaded) {
      return <Content {...this.props} />;
    }
    else {
      return (
        <div>
          <Loader loaded={loaded}/>
        </div>
      );
    }
  }

}

class Content extends React.Component {

  render () {
    var { jobsCards } = this.props;

    return (
      <div>
        <ListViewHeader {...this.props}/>
        <div className="page-maincontent">
          <div className="page-wrapper">
            <div className="careers-card-wrapper">
              {jobsCards.map(this.renderJobsCards)}
            </div>
          </div>
        </div>
        <div id="qualifications-panel-scroll-point" />
        <QualificationsPanel {...this.props} />
        <div id="institutions-panel-scroll-point" />
        <InstitutionsPanel {...this.props} />
        <Pagination {...this.props} />
        <Preferences {...this.props} />
        <HiddenCards {...this.props} />
        <Footer />
        <ActionPlanDrawer />
        <MatchSkillsModal {...this.props}/>
        <RemoveJobCardModal {...this.props}/>
      </div>
    )
  }

  renderJobsCards = (jobCard, idx) => {
    if(!jobCard.Closed) {
      return (
        <JobCard key={uuid.v4()} id={idx} {...this.props}/>
      );
    }
  }

}

export default connect(
  mapStateToProps,
  actionCreators
)(ListView);
