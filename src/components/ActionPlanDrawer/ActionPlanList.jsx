import React from 'react';
import { connect } from '../../libs/react-redux';
import ActionPlanCard from './ActionPlanCard'

class ActionPlanList extends React.Component {

    render() {

        const {title, actions} = this.props;

        return (
            <section className="layout-col-4 layout-col plan-suggestion-actions">
                <h3>{title}</h3>
                {actions.map(this.renderAction)}
            </section>
        )
    }

    renderAction = (action, idx) => {
        return (
            (action.IsInActionPlan) ?
            <ActionPlanCard {...this.props} key={idx} index={idx} action={action}/> : ''
        )
    }
}

export default ActionPlanList;

