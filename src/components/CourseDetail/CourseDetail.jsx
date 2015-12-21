/**
 * Created by jr1500.
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/coursedetail-actions';
import { setCurrentRoute } from '../../redux/general-actions';
import { openMatchSkillsModal } from '../../redux/listview-actions';

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
    tooltips: state._footerData.data.Tooltips,
    vocationalPathways: state._footerData.data.VocationalPathways,
    showMatchSkillsModalCourseDetail: state._courseDetail.ShowMatchSkillsModalCourseDetail,
    checkSkillsIDCourseDetail: state._courseDetail.CheckSkillsIDCourseDetail,
    selectedSkills: state._questionnaire.data.Skills.Selected
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
}

class Content extends React.Component {

  componentDidMount() {
    this.props.setCurrentRoute('CourseDetail');
  }

  render() {
    return (
      <div className="page-maincontent" id="content">
        <div className="page-wrapper">
          <div className="nav-link-back">
            <Link to="list-view">Back to job/course suggestions</Link>
          </div>
          <MainPanel {...this.props} />
          <div id="panel-next-steps" />
          <NextStepsPanel {...this.props} />
          <div id="panel-worried-about" />
          <BarriersPanel {...this.props} />
          <div id="panel-jobs" />
          {(this.props.course.Jobs.JobsCards.length) ? <JobsPanel {...this.props} /> : ''}
          {(this.props.course.Courses.Institutions.length) ? <CoursePanel {...this.props} /> : ''}
        </div>
        <ActionPlanDrawer />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    setCurrentRoute,
    openMatchSkillsModal
  }
)(CourseDetail);


