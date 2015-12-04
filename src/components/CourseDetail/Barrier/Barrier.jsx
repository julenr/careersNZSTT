/**
 * Created by jr1500.
 */

import React from 'react';

import ActionCard from '../ActionCard/ActionCard.jsx'

const Barrier = (props) => {
  const { Title, Summary, Actions } = props;

  return (
    <div className="layout-col-4 layout-col">
      <h3>{ Title }</h3>
      <div dangerouslySetInnerHTML={{__html: Summary}} />
      {Actions.map((action, idx) => renderActions(action, idx, props))}
    </div>
  );
}

const renderActions = (action, idx, props) => {
  return (
    <ActionCard isBarrier key={idx } id={props.ActionId} {...action} idBarrier={props.idBarrier}
                addBarrierActionToPlan={props.addBarrierActionToPlan}
                removeBarrierActionFromPlan={props.removeBarrierActionFromPlan}
                course={props.course}/>
  );
}

export default Barrier;
