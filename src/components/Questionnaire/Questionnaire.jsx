/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router'
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
import TagCloud from './TagCloud/TagCloud';
import InputTypeAhead from './InputTypeAhead/InputTypeAhead';
import YesNo from './YesNo/YesNo';
import EndForm from './EndForm/EndForm';


function mapStateToProps(state) {
  return {
    loaded: state._questionnaire.loaded,
    listViewLoaded: state._listViewData.loaded,
    memberName: state._questionnaire.data.Member.Name,
    progressBar: state._questionnaire.data.ProgressBar,
    questionnaire: state._questionnaire.data.Questionnaire,
    typeAheadItemsContainer: state._questionnaire.TypeAheadItemsContainer,
    refresh: state._questionnaire.data.refresh // This value if changed somewhere triggers the component render method
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
          <Loader />
        </div>
      );
    }
  }
}

class Content extends React.Component {

  render() {
    var { questionnaire, memberName } = this.props;

    return (
      <div>
        <QuestionnaireHeader />
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="questions">
              {questionnaire.map(this.renderQuestions)}
            </div>
          </div>
        </div>
        <Footer />
        <ProgressBar {...this.props.progressBar} onClickViewList={this.props.getListViewData}/>
      </div>
    );
  }

  renderQuestions = (question, idx) => {
    switch ( question.QuestionType ) {
      case 'TextInput' :
        return (
          <TextInput key={idx} id={idx} {...this.props} />
        );
      case 'SingleChoice':
        return (
          <SingleChoice key={idx} id={idx} {...this.props} />
        );
      case 'MultipleChoice' :
        return (
          <MultipleChoice key={idx} id={idx} {...this.props} />
        );
      case 'TagCloud' :
        return (
          <TagCloud key={idx} id={idx} {...this.props} />
        );
      case 'Typeahead' :
        return (
          <InputTypeAhead key={idx} id={idx} {...this.props} />
        );
      case 'YesNo':
        return (
          <YesNo key={idx} id={idx} {...this.props} />
        );
      default :
        return (
          <EndForm key={idx} {...this.props}/>
        );
    }
  }

}

export default connect(
  mapStateToProps,
  actionCreators
)(Questionnaire);

