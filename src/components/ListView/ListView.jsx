/**
 * Created by jr1500 on 30/09/15.
 */

import './ListView.scss';

import React from 'react';
import Loader from 'react-loader';
import uuid from 'node-uuid';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';

import Footer from '../Footer/Footer.jsx';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer.jsx';
import JobCard from './JobCard/JobCard';

@connect((state) => {
  return {
    loaded: state._getJobs.loaded
  }
})
class ListView extends React.Component {
  render () {
    var { loaded } = this.props;

    if (loaded)
      return <Content />;
    else
      return (
        <div>
          <Loader loaded={loaded} />
        </div>
      );
  }
}


@connect((state) => {
  return {
    jobsCards: state._getJobs.data.JobsCards
  }
})
class Content extends React.Component {
  render () {
    var { jobsCards } = this.props;
    return (
      <div>
        <div className="page-maincontent">
          <div className="page-wrapper">
            <div className="careers-card-wrapper">
              {jobsCards.map(this.renderJobsCards)}
            </div>
          </div>
        </div>
        <Footer />
        <ActionPlanDrawer />
      </div>
    )
  }
  renderJobsCards(jobCard, idx) {
    if(jobCard.Closed)
      return;
    else
      return (
          <JobCard key={uuid.v4()}  id={idx} />
      );
  }
}

export default ListView;