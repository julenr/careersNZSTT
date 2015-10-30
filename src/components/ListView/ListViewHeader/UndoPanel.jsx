/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

class UndoPanel extends React.Component {

  render() {
    let { undoPanel } = this.props;

    if(undoPanel.Closed) {
      return <span />;
    }
    else {
      return (
        <div className="panel-help" id="undo-panel">
          <p className="title">
            You have removed preference <strong>{undoPanel.Text}</strong>.
            <a href="javascript: void 0">Undo</a>.
          </p>
          <a href="javascript: void 0" className="action-close icon-cross" onClick={this.closePanel}>&nbsp;</a>
        </div>
      );
    }
  }

  closePanel = () => {
    this.props.closeUndoPanel();
  }
}

export default UndoPanel;