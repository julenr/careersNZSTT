/**
 * Created by jr1500.
 */

import React from 'react';
import classNames from 'classnames';

const ActionCard = (props) => {
  const { Title, IsInActionPlan, ActionID } = props;
  let classes = classNames(
    {
      'action-card-button': true,
      'action-card-button added': IsInActionPlan
    }
  );

  return (
    <div className="action-card">
      <div dangerouslySetInnerHTML={{__html: Title}} />
      <a href="javascript: void 0" className={ classes } onClick={() => toggleCardInActionPlan(ActionID, props)}>
        <span className="text-1">Add to plan</span>
        <span className="text-2">Added</span>
      </a>
    </div>
  );
}

const toggleCardInActionPlan = (id, props) => {
  if(props.isBarrier) {
    if(props.IsInActionPlan) {
      props.removeBarrierActionFromPlan(id, props.idBarrier, props.course, props.Title);
    } else {
      props.addBarrierActionToPlan(id, props.idBarrier, props.course, props.Title);
    }
  } else if(props.IsInActionPlan) {
    props.removeActionFromPlan(id, props.course);
  } else {
    props.addActionToPlan(id, props.course, props.Title);
  }

}

export default ActionCard;
