/**
 * Created by jr1500 on 30/09/15.
 */

import './Questionnaire.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import uuid from 'node-uuid';
import Loader from 'react-loader';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';

import Footer from '../Footer/Footer.jsx';
import Avatar from '../subcomponents/Avatar';
import ProgressBar from '../ProgressBar';
import MultipleChoice from './MultipleChoice/MultipleChoice';
import TextInput from './TextInput/TextInput';
import SingleChoice from './SingleChoice/SingleChoice';
import IntroForm from './IntroForm/IntroForm';
import EndForm from './EndForm/EndForm';

@connect((state) => {
  return {
    loaded: state._questionnaire.loaded
  }
})
class Questionnaire extends React.Component {
  render () {
    var { loaded } = this.props;

    if(loaded)
      return <Content />;
    else
      return (
        <div>
          <Loader loaded={loaded} />
        </div>
      );
  }
}

@connect((state, props) => {
  return {
    member: state._questionnaire.data.Member,
    questions: state._questionnaire.data.Questions
  }
})
class Content extends React.Component {
  render() {
    var { member, questions } = this.props;
    return (
      <div>
        <div className="questions-intro">
          <div className="page-wrapper">
            <h1 className="access">Questions</h1>
            <div className="title">
              <img src={require('../../assets/images/avatars/intro-avatar-1.png')} width="153" height="199" alt="John" />
              <p><strong>Hi there, I'm John.</strong> Welcome to Change up!</p>
              <div className="clear"></div>
            </div>
            <p className="blurb">This website will help you find a course and a better job based on the skills you have and the things you want from work and study.</p>
            <div className="clear"></div>
          </div>
        </div>
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="questions">

              <IntroForm />
              {questions.map(this.renderQuestions)}
              <EndForm />

            </div>
          </div>
        </div>
        <ProgressBar />
        <Footer />
      </div>
    );
  }
  renderQuestions(question) {
    switch ( question.QuestionType ) {
      case 'SingleChoice':
        return (
          <SingleChoice key={question.ID} options={question.QuestionResponses} value={question.Description}/>
        );
      case 'TextInput' :
        return (
          <TextInput key={question.ID} id={question.ID}/>
        );
      case 'MultipleChoice' :
        return (
          <MultipleChoice key={question.ID} id={question.ID}/>
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

export default Questionnaire;