/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state) => {
  return {
    undoPanel: state._listViewData.data.UndoPanel,
    closed: state._listViewData.data.UndoPanel.Closed
  }
})
class UndoPanel extends React.Component {

  render() {
    let { undoPanel, closed } = this.props;

    if(closed) {
      return <span />;
    }
    else {
      return (
        <div className="panel-help" id="undo-panel">
          <p className="title">
            You have removed preference <strong>{undoPanel.Text}</strong>.
            <a href="#">Undo</a>.
          </p>
          <a href="#" className="action-close icon-cross" onClick={this.closePanel}>&nbsp;</a>
        </div>
      );
    }
  }

  closePanel = () => {
    this.props.dispatch(actionCreators.undoPanelClosed());
  }
}

export default UndoPanel;