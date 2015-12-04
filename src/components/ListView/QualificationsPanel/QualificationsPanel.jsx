/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import QualificationCard from '../QualificationCard';
import TextSelect from '../../subcomponents/TextSelect';

class QualificationsPanel extends React.Component {

  render() {
    let { qualificationsPanel, qualificationsPanelLoaded, regions, regionFilter } = this.props;
    if (qualificationsPanelLoaded) {
      return (
        <div className="page-maincontent course-options-panel jobs">
          <div className="page-wrapper">
            <header className="panel-header">
              <h2 className="panel-title">{qualificationsPanel.Title}</h2>
              <div className="panel-filter">Showing courses in&nbsp;
                <div className="select-menu">
                  <TextSelect options={regions} active={regionFilter}
                              onChange={(region) => this.applyRegionChange(region)}/>
                </div>
                  {
                    (this.areVisibleQualificationsCards()) ?
                      ''
                      :
                      <div>{qualificationsPanel.FilteredResultsMessage}</div>
                  }
              </div>
              <div className="panel-intro" dangerouslySetInnerHTML={{__html: qualificationsPanel.EntryRequirementsSummary}} />
              <a href="javascript: void 0" onClick={this.showEntryRequirementsModal}> More details <span className="icon-plus"></span></a>
              <a href="javascript: void 0" className="icon-cross panel-close"
                 onClick={this.closePanel}>&nbsp;</a>
            </header>
            <div className="careers-card-wrapper">
              {qualificationsPanel.Courses.map(this.renderQualificationsCards)}
            </div>
          </div>
        </div>
      );
    } else {
        return (
          <div className="page-maincontent course-options-panel jobs">
            <div className="page-wrapper">
              <div className="spinner"></div>
            </div>
          </div>
        )
    }
  }

  showEntryRequirementsModal = () => {
    this.props.openEntryRequirementsModal();
  }

  applyRegionChange = (region) => {
    this.props.closeInstitutionsPanel();
    this.props.setRegionFilter(region);
  }

  renderQualificationsCards = (qualification, idx) => {
    if(!qualification.Closed &&
      ( this.props.regionFilter === 'All'  ||
      _.indexOf(qualification.Regions, this.props.regionFilter) !== -1)
    ) {
      return (
        <QualificationCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  areVisibleQualificationsCards = () => {
    if(_.findIndex(this.props.qualificationsPanel.Courses, (qualification) => {
        if(!qualification.Closed &&
          ( this.props.regionFilter === 'All'  ||
          _.indexOf(qualification.Regions, this.props.regionFilter) !== -1)
        ) {
          return true;
        } else {
          return false;
        }
      }
    ) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  closePanel = () => {
    this.props.closeInstitutionsPanel();
    this.props.closeQualificationsPanel();
  }
}

export default QualificationsPanel;