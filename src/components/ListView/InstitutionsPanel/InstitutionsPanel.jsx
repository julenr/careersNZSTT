/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import InstitutionCard from '../InstitutionCard';
import TextSelect from '../../subcomponents/TextSelect';

class InstitutionsPanel extends React.Component {
  render() {
    let { institutionsPanel, regions, institutionsPanelLoaded, regionFilter } = this.props;

    if(institutionsPanelLoaded) {
      return (
        <div className="page-maincontent course-options-panel courses">
          <div className="page-wrapper">
            <header className="panel-header">
              <h2 className="panel-title">Where would you like to study?</h2>
              <div className="panel-filter">Showing courses in&nbsp;
                <div className="select-menu">
                  <TextSelect options={regions} active={regionFilter}
                              onChange={this.props.setRegionFilter}/>
                </div>
                {
                  (this.areVisibleInstitutionsCards()) ?
                    ''
                    :
                  <div>Sorry, there are no courses to show in the region you have set. Please choose
                    a different one.</div>
                  }
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
          <div className="page-maincontent course-options-panel jobs">
            <div className="page-wrapper">
              <div className="spinner"></div>
            </div>
          </div>
        )
    }
  }

  renderInstitutionsCards = (institutionCard, idx) => {
    if(!institutionCard.Closed &&
      (this.props.regionFilter === 'All'  || institutionCard.Location === this.props.regionFilter)
    ) {
      return (
        <InstitutionCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  areVisibleInstitutionsCards = () => {
    if(_.findIndex(this.props.institutionsPanel.CourseCards, (institution) => {
          if(!institution.Closed &&
            (this.props.regionFilter === 'All'  || institution.Location === this.props.regionFilter)
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
  }
}

export default InstitutionsPanel;