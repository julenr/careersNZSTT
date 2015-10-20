/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/listview-actions';

class Pagination extends React.Component {

  render() {
    return (
      <div className="page-maincontent course-options-panel filters">
        <div className="page-wrapper">
          <header className="panel-header">
            <h2 className="panel-title">Your preferences <span className="icon-help tooltip" title="This is a tooltip">&nbsp;</span></h2>
          </header>

          <div className="layout-row search-filter form">
            <div className="layout-col layout-col-4">
              <p className="title">You have <strong>hidden</strong> 30 jobs/courses that are:</p>
              <div className="tags" data-type="tag">
                <span className="tag">No shift work<span className="icon-cancel-circle"></span></span>
                <span className="tag">Night shift<span className="icon-cancel-circle"></span></span>
                <span className="tag">A thing I hate that may run to two lines<span className="icon-cancel-circle"></span></span>
                <span className="button add-more"><span className="icon-plus-circle"></span> Add preference</span>
              </div>
              <p className="help">Use the <span className="icon-cancel-circle"></span> to remove skills you don't have or don't want to use in the future.</p>
            </div>
            <div className="layout-col layout-col-4">
              <p className="title">You have asked to <strong>prioritise</strong> jobs/courses that are:</p>
              <div className="tags" data-type="tag">
                <span className="tag">No shift work<span className="icon-cancel-circle"></span></span>
                <span className="tag">Night shift<span className="icon-cancel-circle"></span></span>
                <span className="tag">A thing I hate that may run to two lines<span className="icon-cancel-circle"></span></span>
                <span className="button add-more"><span className="icon-plus-circle"></span> Add interest</span>
              </div>
              <p className="help">Use the <span className="icon-cancel-circle"></span> to remove skills you don't have or don't want to use in the future.</p>
            </div>
            <div className="layout-col layout-col-4">
              <p className="title">You are interested in jobs/courses this <strong>region</strong>:</p>
              <div className="select-menu">
                <a href="javascript: void 0" className="select-menu-trigger">Region <span className="icon-arrow-down"></span></a>
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
              <p className="help">Distance and online courses will also be shown.</p>
            </div>
          </div>
          <div className="results-hidden-link">
            <a href="javascript: void 0">Hidden jobs/courses <span className="icon-arrow-down-long"></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;