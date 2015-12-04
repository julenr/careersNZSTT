/**
 * Created by jr1500.
 */

import React from 'react';

import Barrier from '../Barrier/Barrier.jsx'

const BarriersPanel = (props) => {
  const { Title, Barriers } = props.course.BarriersPanel;

  return (
    <div className="course-panel worried-about" id="panel-worried-about">
      <h2>{ Title }</h2>
      <div className="layout-row">
        {Barriers.map((barrier, idx) => renderBarriers(barrier, idx, props))}
      </div>
    </div>
  );
}

const renderBarriers = (barrier, idx, props) => {
  return (
    <Barrier key={idx} {...barrier} idBarrier={idx} addBarrierActionToPlan={props.addBarrierActionToPlan}
             course={props.course} removeBarrierActionFromPlan={props.removeBarrierActionFromPlan}/>
  );
}

export default BarriersPanel;
