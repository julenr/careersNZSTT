/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router'
import uuid from 'node-uuid';
import Loader from 'react-loader';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/questionnaire-actions';

import Footer from '../Footer/Footer';
import Avatar from '../subcomponents/Avatar';
import ProgressBar from '../ProgressBar';
import QuestionnaireHeader from './QuestionnaireHeader/QuestionnaireHeader';
import MultipleChoice from './MultipleChoice/MultipleChoice';
import TextInput from './TextInput/TextInput';
import SingleChoice from './SingleChoice/SingleChoice';
import IntroForm from './IntroForm/IntroForm';
import EndForm from './EndForm/EndForm';


function mapStateToProps(state) {
  return {
    loaded: state._questionnaire.loaded,
    memberName: state._questionnaire.data.Member.Name,
    questions: state._questionnaire.data.Questions,
    refresh: state._questionnaire.refresh
  };
}

class Questionnaire extends React.Component {
  render () {
    var { loaded } = this.props;

    if(loaded) {
      return <Content {...this.props} />;
    }
    else {
      return (
        <div>
          <Loader loaded={loaded}/>
        </div>
      );
    }
  }
}

class Content extends React.Component {
  render() {
    var { questions, memberName } = this.props;
    return (
      <div>

        <QuestionnaireHeader />

        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="questions">

              <IntroForm {...this.props}/>
              {questions.map(this.renderQuestions)}
              <EndForm name={memberName}/>

            </div>
          </div>
        </div>
        <ProgressBar />
        <Footer />
      </div>
    );
  }
  renderQuestions = (question, idx) => {
    switch ( question.QuestionType ) {
      case 'SingleChoice':
        return (
          <SingleChoice key={question.ID} options={question.QuestionResponses} value={question.Description}/>
        );
      case 'TextInput' :
        return (
          <TextInput key={question.ID} id={idx} {...this.props}/>
        );
      case 'MultipleChoice' :
        return (
          <MultipleChoice key={question.ID} id={idx} {...this.props}/>
        );
      case 'TagCloud' :
        return (
          <SingleChoice key={question.ID} options={question.QuestionResponses} value={question.Description}/>
        );
      case 'Typeahead' :
        return (
          <SingleChoice key={question.ID} options={question.QuestionResponses} value={question.Description}/>
        );
      default :
        return (
          <SingleChoice key={question.ID} options={question.QuestionResponses} value={question.Description}/>
        );
    }
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(Questionnaire);

