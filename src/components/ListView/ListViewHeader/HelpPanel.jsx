/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

class HelpPanel extends React.Component {

  render() {
    let helpPanel = this.props.helpPanels[this.props.id];
    return (
      <div className="panel-help" id="help-panel">
        <div className="layout-row">
          <div className="layout-col layout-col-2">
            <img src={this.props.intro.Image.Small.Src} width="153" height="199" alt="Skills Builder Avatar Image" title="Help panel" />
          </div>
          <div className="layout-col layout-col-2">
            <p className="title">{helpPanel.Text}</p>
          </div>
          <div className="layout-col layout-col-4">
            <img src={helpPanel.Image} width="316" height="215" alt="" />
          </div>
          <div className="layout-col layout-col-3">
            <div dangerouslySetInnerHTML={{__html: helpPanel.Tips}} />
          </div>
        </div>
        <a href="javascript: void 0" className="action-close icon-cross" onClick={this.closePanel}>&nbsp;</a>
      </div>
    );
  }

  closePanel = () => {
    this.props.closeHelpPanel(this.props.id);
  }
}

export default HelpPanel;