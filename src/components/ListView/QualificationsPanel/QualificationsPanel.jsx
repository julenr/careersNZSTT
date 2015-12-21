/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';
import Select from 'react-select';

import QualificationCard from '../QualificationCard';

class QualificationsPanel extends React.Component {

  render() {
    let { qualificationsPanel, qualificationsPanelLoaded,regions, regionFilter,
      qualificationsCardsShown, arrowPositionClass, qualificationsPanelSplitIndexCard,
      split
      } = this.props;

    //Compute the split point when Institution Panel is shown in the middle
    const hWidth  = window.innerWidth || document.documentElement.clientWidth;
    const nColumns = (hWidth > 1200) ? 3 : (hWidth < 804) ? 1 : 2;
    let splitPointCards = (qualificationsPanelSplitIndexCard !== -1) ? qualificationsPanelSplitIndexCard + 1: qualificationsCardsShown;
    const modulus = splitPointCards % nColumns;
    splitPointCards += (modulus === 0) ? 0 : nColumns - modulus;

    if (qualificationsPanelLoaded) {
      return (
        <div className={`page-maincontent course-options-panel jobs position-${arrowPositionClass}`}>
          <div className="page-wrapper">
            {
              (split === 'main') ? this.showHeader() : ''
            }
            <div className="careers-card-wrapper">
              {
                (split === 'main') ?
                  _.map(_.take(qualificationsPanel.Courses, splitPointCards), this.renderQualificationsCards)
                  :
                  _.map(_.slice(qualificationsPanel.Courses, splitPointCards, qualificationsCardsShown),
                    (card, idx) => this.renderQualificationsCards(card, idx + splitPointCards))
              }
            </div>
            <div className="panel-options">
              {
                (qualificationsPanel.Courses.length > qualificationsCardsShown) ?
                  <a href="javascript:void 0" className="button show-more" onClick={this.props.increaseQualificationsCardsShown}>Show more courses</a>
                  :
                  ''
              }
            </div>
          </div>
        </div>
      );
    } else {
        if(split === 'main') scrollTo('first-panel-scroll-point', -220);
        return (
          <div className={`page-maincontent course-options-panel jobs position-${arrowPositionClass}`}>
            <div className="page-wrapper">
              <header className="panel-header">
                <div className="spinner inline"></div>
              </header>
            </div>
          </div>
        )
    }
  }

  showEntryRequirementsModal = () => {
    this.props.openEntryRequirementsModal();
  }

  selectOptions(regions) {
    let result = _.map(regions, (region, idx) => { return({'value': `${region}`, 'label': `${region}`}) })
    return result;
  }

  applyRegionChange = (region) => {
    const value = (region) ? region : ''; //It seems a bug from react Select that returns null instead ''
    this.props.closeInstitutionsPanel();
    this.props.setRegionFilter(value);
  }

  renderQualificationsCards = (qualification, idx) => {
    if(!qualification.Closed
        &&
      (this.props.regionFilter.search('Anywhere') !== -1
        ||
      (_.findIndex(qualification.Regions, region => this.props.regionFilter.search(region) !== -1) !== -1))
    ) {
      return (
        <QualificationCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  areVisibleQualificationsCards = () => {
    if(_.findIndex(this.props.qualificationsPanel.Courses, (qualification) => {
        if(!qualification.Closed
            &&
          (this.props.regionFilter.search('Anywhere') !== -1
            ||
            (_.findIndex(qualification.Regions, region => this.props.regionFilter.search(region) !== -1) !== -1))
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

  showHeader = () => {
    return (
      <header className="panel-header">
        <h2 className="panel-title">{this.props.qualificationsPanel.Title}</h2>
        <div className="panel-filter">
          {
            (this.areVisibleQualificationsCards()) ?
              ''
              :
              <div dangerouslySetInnerHTML={{__html: this.props.qualificationsPanel.FilteredResultsMessage}}></div>
          }
          <div className="panel-filter-label">Showing courses in</div>
          <div className="select-menu">
            <Select
              multi
              simpleValue
              value={this.props.regionFilter}
              delimiter=", "
              searchable={false}
              placeholder="Select region(s)"
              options={this.selectOptions(this.props.regions)}
              onChange={(value) => {this.applyRegionChange(value)} }
            />
          </div>
        </div>
        <div className="panel-intro">
          <strong>What to consider in choosing your course:</strong>
          <span dangerouslySetInnerHTML={{__html: this.props.qualificationsPanel.EntryRequirementsSummary}} />
          <a href="javascript: void 0" onClick={this.showEntryRequirementsModal}>
            More details <span className="icon-plus"></span>
          </a>
        </div>
        <a href="javascript: void 0" className="icon-cross panel-close"
           onClick={this.closePanel}>&nbsp;</a>
      </header>
    );
  }
}

export default QualificationsPanel;