/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';

import RemoveInstitutionCardModal from './RemoveInstitutionCardModal';

class InstitutionCard extends React.Component {

  render() {
    let institutionCard = this.props.institutionsPanel.Institutions[this.props.id];

    return (
      <article className="careers-card course">
        <div className="card front">
          <div className="liner">
            <header>
              <h3 className="title">{institutionCard.Title}</h3>
              <a href="javascript: void 0" className="action-remove" onClick={this.closeCard}>
                <span className="icon-cross"></span>
              </a>
              <a href="javascript: void 0" className="action-reinstate" onClick={this.openCard} title="Show this course above">
                <span className="icon-plus-circle"></span>
              </a>
            </header>
            <dl className="divider">
              <dt>Location:</dt>
              <dd>{institutionCard.Location}</dd>
            </dl>
            <a className="button" href="javascript: void 0">
              View this course <span className="icon-arrow-right"></span>
            </a>
            <a className="button reinstate-card" href="javascript: void 0" onClick={this.openCard}>
              Show this course above
            </a>
          </div>
        </div>
        <RemoveInstitutionCardModal {...this.props}/>
      </article>
    );
  }

  closeCard = () => {
    this.props.openRemoveInstitutionCardModal(this.props.id);
  }

  openCard = () => {
    this.props.openInstitutionCard(this.props.id);
  }
}

export default InstitutionCard;