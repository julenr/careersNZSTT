/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/action-creators';

@connect((state, props) => {
  return {
    institutionCard: state._listViewData.data.InstitutionsPanel.Institutions[props.id],
    closed: state._listViewData.data.InstitutionsPanel.Institutions[props.id].Closed
  }
})
class InstitutionCard extends React.Component {

  clickClose = () => {
    console.log('closed');
    this.props.dispatch(actionCreators.institutionCardClose(this.props.id));
  }

  render() {
    let { institutionCard, closed } = this.props;

    if(closed) return <span />;
    else
      return (
        <article className="careers-card course">
          <div className="card front">
            <div className="liner">
              <header>
                <h3 className="title">Southern Institue of Technology</h3>
                <a href="#" className="action-remove" onClick={this.clickClose}><span className="icon-cross"></span></a>
                <a href="#" className="action-reinstate" title="Show this course above"><span className="icon-plus-circle"></span></a>
              </header>
              <dl className="divider">
                <dt>Location:</dt>
                <dd>Houghton Bay</dd>
              </dl>
              <a className="button" href="#">View this course <span className="icon-arrow-right"></span></a>
              <a className="button reinstate-card" href="#">Show this course above</a>
            </div>
          </div>
        </article>
      );
  }
}

export default InstitutionCard;