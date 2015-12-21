/**
 * Created by jr1500.
 */

import React from 'react';
import ActionCard from '../ActionCard/ActionCard.jsx'


const NextStepsPanel = (props) => {
  const { Title, Actions } = props.course.NextSteps;

  return (
    <div className="course-panel next-steps">
      <h2>{Title}</h2>
      <div className="layout-row">
        {Actions.map((action, idx) => renderActions(action, idx, props))}
      </div>
    </div>
  );
}

const renderActions = (action, idx, props) => {
  return (
    <div key={idx} className="layout-col-4 layout-col">
      <ActionCard key={props.ActionId} id={props.ActionId} {...action} course={props.course} addActionToPlan={props.addActionToPlan}
                  removeActionFromPlan={props.removeActionFromPlan}/>
    </div>
  );
}

export default NextStepsPanel;
