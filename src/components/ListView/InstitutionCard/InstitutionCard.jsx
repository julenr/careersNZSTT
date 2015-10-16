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

  render() {
    let { institutionCard, closed } = this.props;

    if(closed && !this.props.hidden) {
      return <span />;
    }
    else {
      return (
        <article className="careers-card course">
          <div className="card front">
            <div className="liner">
              <header>
                <h3 className="title">{institutionCard.Title}</h3>
                <a href="#" className="action-remove" onClick={this.closeCard}>
                  <span className="icon-cross"></span>
                </a>
                <a href="#" className="action-reinstate" onClick={this.openCard} title="Show this course above">
                  <span className="icon-plus-circle"></span>
                </a>
              </header>
              <dl className="divider">
                <dt>Location:</dt>
                <dd>{institutionCard.Location}</dd>
              </dl>
              <a className="button" href="#">
                View this course <span className="icon-arrow-right"></span>
              </a>
              <a className="button reinstate-card" href="#" onClick={this.openCard}>
                Show this course above
              </a>
            </div>
          </div>
        </article>
      );
    }
  }

  closeCard = () => {
    this.props.dispatch(actionCreators.institutionCardClose(this.props.id));
  }

  openCard = () => {
    this.props.dispatch(actionCreators.institutionCardOpen(this.props.id));
  }
}

export default InstitutionCard;