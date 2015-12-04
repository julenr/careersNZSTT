/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import { Router, Route, Link } from 'react-router'

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/questionnaire-actions';
import { openAddSkillsModal } from '../../redux/general-actions';
import { resetListViewLoaderFlag } from '../../redux/listview-actions';
import { setCurrentRoute } from '../../redux/general-actions';

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
import ChangeQuestionnaireModal from './ChangeQuestionnaireModal';

function mapStateToProps(state) {
  return {
    loaded: state._questionnaire.loaded,
    changeQuestionnaireModal: state._questionnaire.ChangeQuestionnaireModal,
    changeToResponse: state._questionnaire.ToChangeResponse,
    changeToQuestionId: state._questionnaire.ToChangeQuestionID,
    changeNextQuestionId: state._questionnaire.ToChangeNextQuestionID,
    toShowVideo: state._questionnaire.data.toShowVideo,
    intro: state._questionnaire.data.Intro,
    listViewLoaded: state._listViewData.loaded,
    memberName: state._questionnaire.data.Member.Name,
    progressBar: state._questionnaire.data.ProgressBar,
    questionnaire: state._questionnaire.data.Questionnaire,
    typeAheadItemsContainer: state._questionnaire.TypeAheadItemsContainer,
    userID: state._questionnaire.data.Member.UserID,
    refresh: state._questionnaire.data.refresh // This value if changed somewhere triggers the component render method
  };
}

class Questionnaire extends React.Component {
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
    this.props.setCurrentRoute('Questionnaire');
  }
}

class Content extends React.Component {

  render() {
    var { questionnaire, memberName } = this.props;

    return (
      <div>
        <QuestionnaireHeader {...this.props}/>
        <div className="page-maincontent" id="content">
          <div className="page-wrapper">
            <div className="questions">
              {questionnaire.map(this.renderQuestions)}
            </div>
          </div>
        </div>
        <ChangeQuestionnaireModal {...this.props} changeQuestionnaireModal={this.props.changeQuestionnaireModal}/>
        <ProgressBar {...this.props.progressBar} onClickViewList={this.props.getListViewData}/>
        <Footer />
      </div>
    );
  }

  renderQuestions = (question, idx) => {
    switch ( question.QuestionType ) {
      case 'TextInput' :
        return (
          <TextInput key={`TextInput${idx}`} id={idx} {...this.props} />
        );
      case 'SingleChoice':
        return (
          <SingleChoice key={`SingleChoice${idx}`} id={idx} {...this.props} />
        );
      case 'MultipleChoice' :
        return (
          <MultipleChoice key={`MultipleChoice${idx}`} id={idx} {...this.props} />
        );
      case 'TagCloud' :
        return (
          <TagCloud key={`TagCloud${idx}`} id={idx} {...this.props} />
        );
        case 'Typeahead' :
        return (
          <InputTypeAhead key={`InputTypeAhead${idx}`} id={idx} {...this.props} />
        );
      case 'YesNo':
        return (
          <YesNo key={`YesNo${idx}`} id={idx} {...this.props} />
        );
      default :
        return (
          <EndForm key={`EndForm${idx}`} {...this.props}/>
        );
    }
  }

}

export default connect(
  mapStateToProps,
  {
    ...actionCreators,
    openAddSkillsModal,
    resetListViewLoaderFlag,
    setCurrentRoute
  }
)(Questionnaire);

