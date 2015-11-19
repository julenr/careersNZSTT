/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';

import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/questionnaire-actions';
import store from '../../../redux/create-store';

import Avatar from '../../subcomponents/Avatar';

function mapStateToProps(state, ownProps) {
  return {
    skillsLoaded: state._questionnaire.data.Questionnaire[ownProps.id].Loaded,
  };
}

class TagCloud extends React.Component {

  componentWillMount() {
    store.dispatch(actionCreators.dumpSkillsIntoTagCloud());
  }

  render() {
    var { skillsLoaded } = this.props;

    var question = this.props.questionnaire[this.props.id];
    this.nextButtonActive = false;
    this.scrollElementID = `TagCloud${this.props.id}`;

    return (
      <div className="fieldset active">
        <div className="field radio with-avatar">
          <Avatar />
          <label>{question.Description}</label>
          {
            (question.HintPosition === 'Top' && question.HintText) ?
            <p className="help">{question.HintText}</p> : ''
          }
          <div className="question-tags" data-type="tag">


            {
              (skillsLoaded) ?
                question.QuestionResponses.map(this.renderTags)
                :
                <div className="spinner inline"></div>

            }
            {
              (skillsLoaded) ?
                this.renderButtons()
                :
                ''
            }
          </div>
        </div>
        <div className={ classNames({'submit': true, 'submit active': this.nextButtonActive}) }>
          <a className="button next"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >That looks about right<span className="icon-arrow-down"></span>
          </a>
        </div>
        {
          (question.HintPosition === 'Bottom' && question.HintText) ?
          <p className="help">{question.HintText}</p> : ''
        }
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  renderButtons = () =>  {
    return (
      <span>
        <div tabIndex="0"
             className="tag add-more"
             onClick={ () => this.props.openAddSkillsModal(this.props.questionnaire[this.props.id].ID)}
          >
          <span className="icon-plus-circle"></span>
          Add more
        </div>
        <span tabIndex="0"
          className="tag select-all"
          onClick={ () => this.props.selectAllTagCloud(this.props.id)}
          >
          Select all
        </span>
      </span>
    );
  }

  renderTags = (response, idx) => {
    let classes = classNames( this.props.className, {
      'tag': true,
      'tag selected': response.Selected
    } );
    if(response.Selected) this.nextButtonActive = true;
    return (
    <span key={idx} onClick={ () => this.props.responseClickedTagCloud(this.props.id, idx)} >
      <span className={ classes } key={idx} tabIndex="0" >
        <span className="icon-tick">
        </span>
        {response.Title}
      </span>
    </span>
    );
  }

  nextClicked = (nextID) => {
    scrollTo(this.scrollElementID, -120);
    this.props.nextQuestion(this.props.id, nextID);
  }

}


export default connect(
  mapStateToProps
)(TagCloud);
