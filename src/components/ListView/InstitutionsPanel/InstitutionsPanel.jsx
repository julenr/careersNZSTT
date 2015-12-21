/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';

import InstitutionCard from '../InstitutionCard';
import Select from 'react-select';

class InstitutionsPanel extends React.Component {
  render() {
    let { institutionsPanel, regions, institutionsPanelLoaded, regionFilter, arrowPositionClass } = this.props;

    if(institutionsPanelLoaded) {
      scrollTo('second-panel-scroll-point', -220);
      return (
        <div className={`page-maincontent course-options-panel courses position-${arrowPositionClass}`}>
          <div className="page-wrapper">
            <header className="panel-header">
              <h2 className="panel-title">Where would you like to study?</h2>
              <div className="panel-filter">
                {
                  (this.areVisibleInstitutionsCards()) ?
                    ''
                    :
                  <div>Sorry, there are no courses to show in the region you have set. Please choose
                    a different one.</div>
                  }
                Showing courses in&nbsp;
                <div className="select-menu">
                  <Select
                    multi
                    simpleValue
                    value={regionFilter}
                    delimiter=", "
                    searchable={false}
                    placeholder="Select region(s)"
                    options={this.selectOptions(regions)}
                    onChange={(value) => {this.applyRegionChange(value)} }
                  />
                </div>
              </div>
              <a href="javascript: void 0" className="icon-cross panel-close"
                 onClick={this.closePanel}>&nbsp;</a>
            </header>
            <div className="careers-card-wrapper">
              {institutionsPanel.CourseCards.map(this.renderInstitutionsCards)}
            </div>
          </div>
        </div>
      );
    } else {
        return (
          <div className={`page-maincontent course-options-panel courses position-${arrowPositionClass}`}>
            <div className="page-wrapper">
              <div className="spinner"></div>
            </div>
          </div>
        )
    }
  }

  selectOptions(regions) {
    let result = _.map(regions, (region, idx) => { return({'value': `${region}`, 'label': `${region}`}) })
    return result;
  }

  applyRegionChange = (region) => {
    const value = (region) ? region : ''; //It seems a bug from react Select that returns null instead ''
    this.props.setRegionFilter(value);
  }

  renderInstitutionsCards = (institutionCard, idx) => {
    if(!institutionCard.Closed &&
      (this.props.regionFilter.search('Anywhere') !== -1
        ||
      this.props.regionFilter.search(institutionCard.Location) !== -1))
      {
      return (
        <InstitutionCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  areVisibleInstitutionsCards = () => {
    if(_.findIndex(this.props.institutionsPanel.CourseCards, (institution) => {
        if(!institution.Closed &&
          (this.props.regionFilter.search('Anywhere') !== -1
            ||
            this.props.regionFilter.search(institution.Location) !== -1))
          {
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
  }
}

export default InstitutionsPanel;