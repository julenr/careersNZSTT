/**
 * Created by jr1500.
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/coursedetail-actions';
import { setCurrentRoute } from '../../redux/general-actions';

import Footer from '../Footer/Footer';
import ActionPlanDrawer from '../ActionPlanDrawer/ActionPlanDrawer';
import MainPanel from './MainPanel/MainPanel';
import NextStepsPanel from './NextStepsPanel/NextStepsPanel';
import BarriersPanel from './BarriersPanel/BarriersPanel';
import JobsPanel from './JobsPanel/JobsPanel';
import CoursePanel from './CoursePanel/CoursePanel';

function mapStateToProps(state) {
  return {
    loaded: state._courseDetail.loaded,
    refresh: state._courseDetail.refresh,
    course: state._courseDetail.data,
    tooltips: state._footerData.data.Tooltips
  };
}

class CourseDetail extends React.Component {
  render () {
    if (this.props.loaded) {
      return <Content {...this.props} />;
    }
    else {
      return (
        <div>
          <div className="spinner"></div>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.setCurrentRoute('CourseDetail');
  }

}


class Content extends React.Component {

  render() {
    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <div className="nav-link-back">
            <Link to="list-view">Back to job/course suggestions</Link>
          </div>
          <MainPanel {...this.props} />
          <NextStepsPanel {...this.props} />
          <BarriersPanel {...this.props} />
          <JobsPanel {...this.props} />
          <CoursePanel />
        </div>
        <Footer />
        <ActionPlanDrawer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    setCurrentRoute
  }
)(CourseDetail);


