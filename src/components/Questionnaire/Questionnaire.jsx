/**
 * Created by jr1500 on 30/09/15.
 */

import './Questionnaire.scss';

import React from 'react';
import { Router, Route, Link } from 'react-router'
import uuid from 'node-uuid';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';

import Avatar from '../subcomponents/Avatar';
import ProgressBar from '../ProgressBar';
import MultipleChoice from './MultipleChoice/MultipleChoice';
import TextInput from './TextInput/TextInput';
import SingleChoice from './SingleChoice/SingleChoice';
import IntroForm from './IntroForm/IntroForm';


@connect((state /*, props*/) => {
  return {
    member: state._questionnaire.data.Member,
    questions: state._questionnaire.data.Questions
  }
})
class Questionnaire extends React.Component {
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

            </div>
          </div>
        </div>
        <ProgressBar />
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

  render2() {
    return (
      <div>
      <div className="questions-intro">
        <div className="page-wrapper">
          <h1 className="access">Questions</h1>
          <div className="title">
            <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
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

            <div className="fieldset first-question active">
              <p>To get started answer the question below…</p>
              <div className="field text">
                <label for="q1-name">First up, what is your name?</label>
                <div className="text">
                  <input className="text" name="q1-name" id="q1-name" type="text" data-type="input" />
                  </div>
                </div>
                <div className="submit">
                  <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                </div>
              </div>


              <div className="fieldset active">
                <div className="field text with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label for="q2-sample">Basic text input — some text entered, with placeholder and hint/help</label>
                  <p className="help">An example of help text</p>
                  <div className="text">
                    <input className="text" name="q2-sample" id="q2-sample" type="text" data-type="input" placeholder="Optional placeholder" />
                    <p className="help">An example of hint text in an alternate location</p>
                  </div>
                </div>
                  <div className="submit">
                    <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                  </div>
              </div>
              <div className="fieldset active">
                <div className="field text with-avatar with-error">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label for="q3-sample">Basic text input — with validation message</label>
                  <div className="text">
                    <input className="text" name="q3-sample" id="q3-sample" type="text" data-type="input" />
                    <span className="error">Sorry, this is not what we want because reasons</span>
                   </div>
                </div>
                <div className="submit">
                  <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset active">
                <div className="field text with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label for="q4-sample">Text input with type-ahead.</label>
                  <div className="text">
                    <input className="text autocomplete" name="q4-sample" id="q4-sample" type="text" data-type="input" placeholder="eg. IT skills" />
                    <p className="help">Start typing the name of the [whatever]</p>
                  </div>
                </div>
                <div className="submit">
                  <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset active">
                <div className="field radio with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Hi Marama. Basic single choice from list of options — with none apply choice.</label>
                  <ul data-type="radio" className="radio">
                    <li tabindex="0"><span className="icon-tick"></span>I want to turn my passion into a job</li>
                    <li tabindex="0"><span className="icon-tick"></span>I'd like to get a better job</li>
                    <li tabindex="0" className="selected"><span className="icon-tick"></span>I want to do a course</li>
                    <li tabindex="0"><span className="icon-tick"></span>It's time for a change, but I'm not sure what to do next.</li>
                    <li tabindex="0" className="basic"><span className="icon-tick"></span>None of these apply to me <span className="icon-arrow-right"></span></li>
                  </ul>
                </div>
                <div className="submit">
                  <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset active">
                <div className="field radio with-avatar inline">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Yes/no choice — with I don't mind.</label>
                  <ul data-type="radio" className="radio">
                    <li tabindex="0"><span className="icon-tick"></span>Yes</li>
                    <li tabindex="0"><span className="icon-tick"></span>No</li>
                    <li tabindex="0" className="basic"><span className="icon-tick"></span>I don't mind</li>
                  </ul>
                </div>
                <div className="submit">
                  <a className="button next" href="#">Next<span className="icon-arrow-down"></span></a>
                </div>
              </div>
                <div className="fieldset active">
                <div className="field radio with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Multiple choice — finite list.</label>
                  <ul data-type="checkbox" className="checkbox">
                    <li tabindex="0"><span className="icon-tick"></span>Woman</li>
                    <li tabindex="0" className="selected"><span className="icon-tick"></span>Māori</li>
                    <li tabindex="0"><span className="icon-tick"></span>Pacific Islander</li>
                    <li tabindex="0"><span className="icon-tick"></span>Over 24 years old</li>
                    <li tabindex="0" className="selected"><span className="icon-tick"></span>Over 34 years old</li>
                    <li tabindex="0"><span className="icon-tick"></span>Have disability</li>
                  </ul>
                </div>
                <div className="submit">
                  <a className="button next" href="#">That looks right<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset active">
                <div className="field radio with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Multiple choice — with hidden additional options.</label>
                  <p className="help">Choose as many as you like</p>
                  <ul data-type="checkbox" className="checkbox">
                    <li tabindex="0"><span className="icon-tick"></span>Woman</li>
                    <li tabindex="0" className="selected"><span className="icon-tick"></span>Māori</li>
                    <li tabindex="0"><span className="icon-tick"></span>Pacific Islander</li>
                    <li tabindex="0"><span className="icon-tick"></span>Over 24 years old</li>
                    <li tabindex="0" className="selected"><span className="icon-tick"></span>Over 34 years old</li>
                    <li tabindex="0"><span className="icon-tick"></span>Have disability</li>
                    <li tabindex="0" className="basic trigger-reveal-additional-options">Show me some more options</li>
                    <li tabindex="0" className="hide"><span className="icon-tick"></span>Another option</li>
                    <li tabindex="0" className="hide"><span className="icon-tick"></span>Another option</li>
                    <li tabindex="0" className="hide"><span className="icon-tick"></span>Another option</li>
                    <li tabindex="0" className="hide"><span className="icon-tick"></span>Another option</li>
                    <li tabindex="0" className="hide"><span className="icon-tick"></span>Another option</li>
                  </ul>
                </div>
                <div className="submit">
                  <a className="button next" href="#">That looks right<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset active">
                <div className="field radio with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Special questions - tag style - Job skills confirmation/edit question.</label>
                  <p className="help">Use the <span className="icon-cancel-circle"></span> to <strong>remove</strong> a skill you don't have or don't want to have.</p>
                  <div className="question-tags" data-type="tag">
                    <span className="tag">Coffee making<span className="icon-cancel-circle"></span></span>
                    <span className="tag">Food safety<span className="icon-cancel-circle"></span></span>
                    <span className="tag">Skill three<span className="icon-cancel-circle"></span></span>
                    <span className="tag">Skill four<span className="icon-cancel-circle"></span></span>
                    <span className="tag">etc<span className="icon-cancel-circle"></span></span>
                    <span className="tag add-more"><span className="icon-plus-circle"></span>Add more</span>
                    <span className="tag select-all">Select all</span>
                  </div>
                </div>
                <div className="submit">
                  <a className="button next" href="#">That looks about right<span className="icon-arrow-down"></span></a>
                </div>
              </div>
              <div className="fieldset last active">
                <div className="field radio with-avatar">
                  <img className="avatar" src={require('../../assets/images/avatars/action-plan-help-avatar-1.jpg')} alt="Help assistant. " width="86" height="86" />
                  <label>Thanks user-name, we have everything we need and have made a list of jobs/courses just for you.</label>
                </div>
                <div className="submit active">
                  <a className="button next" href="#">Great, show me! <span className="icon-arrow-right"></span></a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <ProgressBar />
      </div>
    );
  }
}

export default Questionnaire;