/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state, props) => {
  return {
    helpPanel: state._listViewData.data.HelpPanels[props.id],
    closed: state._listViewData.data.HelpPanels[props.id].Closed
  }
})
class HelpPanel extends React.Component {
  clickClose = () => {
    this.props.dispatch(actionCreators.helpPanelClosed(this.props.id));
  }

  render() {
    let { helpPanel, closed } = this.props;
    if(closed)
      return <span />;
    else
      return (
        <div className="panel-help" id="help-panel">
          <div className="layout-row">
            <div className="layout-col layout-col-2">
              <img className="avatar" src={require('../../../assets/images/placeholders/intro-avatar-1.png')} width="153" height="199" alt="John" />
            </div>
            <div className="layout-col layout-col-2">
              <p className="title">{helpPanel.Text}</p>
            </div>
            <div className="layout-col layout-col-4">
              <img src={require('../../../assets/images/placeholders/placeholder-632x430.gif')} width="316" height="215" alt="" />
            </div>
            <div className="layout-col layout-col-3">
              {helpPanel.Tips.map(this.renderTips)}
            </div>
          </div>
          <a href="#" className="action-close icon-cross" onClick={this.clickClose}>&nbsp;</a>
        </div>
      );
  }

  renderTips(tip, idx) {
    return (
      <p key={idx}><strong>{tip.Title} </strong>{tip.Text}</p>
    );
  }
}

export default HelpPanel;