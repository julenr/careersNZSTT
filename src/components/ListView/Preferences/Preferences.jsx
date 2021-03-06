/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import Select from 'react-select';

import AddPreferenceModal from './AddPreferenceModal';

class Pagination extends React.Component {
  render() {
    const { ListType, regions, filters, regionFilter, tooltips } = this.props;
    const cards = (ListType === 'Job') ? this.props.filters.JobCards : this.props.filters.QualificationCards;
    const cardsFiltered = (ListType === 'Job') ? this.props.filters.JobCardsFiltered : this.props.filters.QualificationCardsFiltered;

    return (
      <div className="page-maincontent course-options-panel filters" id="preferences-panel">
        <div className="page-wrapper">
          <header className="panel-header">
            <h2 className="panel-title">
              Your preferences
              <Tooltip
                animation="zoom"
                trigger="click"
                overlayStyle={{zIndex:1000}}
                overlayClassName="job-card-tooltip"
                overlay={
                      <div className="field radio with-avatar">
                        {tooltips.ListViewPreferences}
                      </div>
                      }
                >
                <span className="icon-help tooltip" title="This is a tooltip" />
              </Tooltip>
            </h2>
          </header>
          <div className="layout-row search-filter form">
            <div className="layout-col layout-col-4">
              {
                (cardsFiltered) ?
                  <p className="title">You have <strong>hidden </strong>{`${cardsFiltered} ${ListType}s that are:`}</p>
                  :
                  <p className="title">{`You don't have any hidden ${ListType}s`}</p>
              }
              <div className="tags" data-type="tag">
                {cards.map(this.renderCards)}
                <span className="button add-more" onClick={this.showAddPreferenceModal}><span className="icon-plus-circle" ></span> Add preference</span>
              </div>
              <p className="help">Use the <span className="icon-cancel-circle"></span> to hide job/courses you don't want to use in the future.</p>
            </div>
            <div className="layout-col layout-col-4">
              <p className="title">You are interested in Courses in this <strong>region</strong>:</p>

              <Select
                multi
                simpleValue
                value={regionFilter}
                delimiter=", "
                searchable={false}
                placeholder="Select region(s)"
                options={this.selectOptions(regions)}
                onChange={(value) => {this.setAndApplyRegionFilter(value)} }
              />

              <p className="help">Distance and online courses will also be shown.</p>
              <div style={ {height: '150px'} }></div>
            </div>
          </div>
        </div>
        <AddPreferenceModal {...this.props} />
      </div>
    );
  }

  selectOptions(regions) {
    let result = _.map(regions, (region, idx) => { return({'value': `${region}`, 'label': `${region}`}) })
    return result;
  }

  renderCards = (condition, idx) => {
    return (
      <span key={idx} className="tag">{condition}<span className="icon-cancel-circle" onClick={() => this.removeCardCondition(condition)}></span></span>
    )
  }

  renderQualificationCardsFiltersConditions = (condition, idx) => {
    return (
      <span key={idx} className="tag">{condition}<span className="icon-cancel-circle" onClick={() => this.removeQualificationCardCondition(condition)}></span></span>
    )
  }

  showAddPreferenceModal = () => {
    this.props.openAddPreferenceModal();
  }

  removeCardCondition = (condition) => {
    if(this.props.ListType === 'Job') {
      this.props.removeJobCardCondition(condition);
      this.props.filterJobCardsByCondition();
    } else {
        this.props.removeQualificationCardCondition(condition);
        this.props.filterQualificationCardsByCondition();
    }
  }

  setAndApplyRegionFilter = (region) => {
    const value = (region) ? region : ''; //It seems a bug from react Select that returns null instead ''
    this.props.setRegionFilter(value);
    this.props.filterQualificationCardsByCondition();
  }

}

export default Pagination;