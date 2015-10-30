/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import QualificationCard from '../QualificationCard';
import RemoveQualificationCardModal from './RemoveQualificationCardModal';

class QualificationsPanel extends React.Component {

  render() {
    let { qualificationsPanel } = this.props;
    if(qualificationsPanel.Closed) {
      return <span />;
    }
    else {
      return (
        <div className="page-maincontent course-options-panel jobs">
          <div className="page-wrapper">
            <header className="panel-header">
              <h2 className="panel-title">Which course suits you best?</h2>
              <div className="panel-filter">Showing courses in
                <div className="select-menu">
                  <a href="javascript: void 0" className="select-menu-trigger">Region <span
                    className="icon-arrow-down"></span></a>
                  <ul data-type="select" className="ui-menu">
                    <li tabIndex="0" value="1">Northland</li>
                    <li tabIndex="0" value="2">Auckland (North Shore)</li>
                    <li tabIndex="0" value="3">Auckland (Central)</li>
                    <li tabIndex="0" value="4">Auckland (East)</li>
                    <li tabIndex="0" value="5">Auckland (West)</li>
                    <li tabIndex="0" value="6">Auckland (South)</li>
                    <li tabIndex="0" value="7">Waikato</li>
                    <li tabIndex="0" value="8">Rotorua</li>
                    <li tabIndex="0" value="9">Taupo</li>
                    <li tabIndex="0" value="10">Bay of Plenty</li>
                    <li tabIndex="0" value="11">Gisborne</li>
                    <li tabIndex="0" value="12">Hawke's Bay</li>
                    <li tabIndex="0" value="13">Taranaki</li>
                    <li tabIndex="0" value="14">Manawatu</li>
                    <li tabIndex="0" value="15">Whanganui</li>
                    <li tabIndex="0" value="16">Wairarapa</li>
                    <li tabIndex="0" value="17">Wellington</li>
                    <li tabIndex="0" value="18">Nelson-Tasman</li>
                    <li tabIndex="0" value="19">Marlborough</li>
                    <li tabIndex="0" value="20">West Coast</li>
                    <li tabIndex="0" value="21">Oamaru</li>
                    <li tabIndex="0" value="22">Canterbury</li>
                    <li tabIndex="0" value="23">Timaru</li>
                    <li tabIndex="0" value="24">Queenstown</li>
                    <li tabIndex="0" value="25">Otago</li>
                    <li tabIndex="0" value="26">Southland</li>
                  </ul>
                </div>
              </div>
              <a href="javascript: void 0" className="icon-cross panel-close" onClick={this.closePanel}>&nbsp;</a>
            </header>
            <div className="careers-card-wrapper">
              {qualificationsPanel.Courses.map(this.renderQualificationsCards)}
            </div>
          </div>
          <RemoveQualificationCardModal {...this.props}/>
        </div>
      );
    }
  }

  renderQualificationsCards = (qualification, idx) => {
    if(!qualification.Closed) {
      return (
        <QualificationCard key={idx} id={idx} {...this.props} />
      );
    }
  }

  closePanel = () => {
    this.props.closeQualificationsPanel();
  }
}

export default QualificationsPanel;