/**
 * Created by jr1500.
 */

import React from 'react';
import classNames from 'classnames';

const ActionCard = (props) => {
  const { Title, IsInActionPlan, id } = props;
  let classes = classNames(
    {
      'action-card-button': true,
      'action-card-button added': IsInActionPlan
    }
  );

  return (
    <div className="action-card">
      <div dangerouslySetInnerHTML={{__html: Title}} />
      <p className="title">
        <a href="javascript: void 0"> get started</a>
        <a className="print" href="javascript: void 0">http://shorturl/xyz</a>
      </p>
      <a href="javascript: void 0" className={ classes } onClick={() => addToPlan(id, props)}>
        <span className="text-1">Add to plan</span>
        <span className="text-2">Added</span>
      </a>
    </div>
  );
}

const addToPlan = (id, props) => {
  props.addActionToPlan(id, props.idBarrier);

}

export default ActionCard;
