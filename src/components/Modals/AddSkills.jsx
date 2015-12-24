/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import classNames from 'classnames';
import uuid from 'node-uuid';
import Modal from 'react-modal';

import { connect } from '../../libs/react-redux';
import { addSkillToQuestion } from '../../redux/questionnaire-actions.js';

import Typeahead from '../subcomponents/Autocomplete/Autocomplete';

class AddSkillsModal extends React.Component {

  render() {
    let typeAheadItemsContainer = this.props.typeAheadItemsContainer;
    const styles = {
      item: {
        fontSize: '1.3125em',
        lineHeight: '1.28571',
        padding: '0.35714em 1.42857em',
        cursor: 'pointer',
        fontFamily: 'MullerLight, Arial, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'normal',
        WebkitFontSmoothing: 'antialiased'
      },

      highlightedItem: {
        fontSize: '1.3125em',
        lineHeight: '1.28571',
        padding: '0.35714em 1.42857em',
        cursor: 'pointer',
        color: '#01b9ee',
        fontWeight: 'bold',
        fontStyle: 'normal',
        WebkitFontSmoothing: 'antialiased'
      },

      menu: {
        background: '#fff',
        border: '1px solid #a3a3a3',
        position: 'fixed',
        zIndex: '2',
        WebkitBorderRadius: '1.3125em 1.3125em 0 0',
        borderRadius: '1.3125em 1.3125em 0 0',
        padding: '0.75em 0 0.5EM',
        textAlign: 'left'
      }

    }



    return (
      <Modal isOpen={this.props.showAddSkillsModal} onRequestClose={this.cancelModal}>
          <div className="modal-table"><div className="modal-liner"><div className="modal modal-add-skills" >
            <h2 className="modal-title">Edit your skills</h2>
            <div className="form">
              <h3>Add skills to your list.</h3>
              <p>Start typing the name of a job or skill:</p>
              <div className="fieldset">
                <div className="field text">
                  <div className="text">
                    <Typeahead
                      inputProps={ {'className':'text'}  }
                      ref="Typeahead"
                      items={typeAheadItemsContainer}
                      getItemValue={(item) => item.Title}
                      onChange={ (event, value) => this.valueChanged(event, value) }
                      renderItem={(item, isHighlighted) => (
                        <div
                          style={isHighlighted ? styles.highlightedItem : styles.item}
                          key={uuid.v1()}
                          id={uuid.v1()}
                          >
                          {item.Title}
                        </div>
                        )}
                      menuStyle={styles.menu}
                      callback={(a) => this.addSkill(a)}
                      />

                  </div>
                </div>
              </div>
              <p>Or choose from the list of popular jobs:</p>
              <div className="layout-col">
                <div className="tags" data-type="tag">
                  {this.props.popularJobs.Jobs.map(this.renderPopularJobs)}
                </div>
              </div>
              { this.renderShowMoreButton() }
              <div className="submit">
                <a className="button-solid" onClick={this.cancelModal} >Done</a><br/>
                <a className="button-simple" href="javascript:void 0" onClick={this.cancelModal} >Cancel</a>
              </div>
                <a className="action-close icon-cross" href="javascript:void 0" onClick={this.cancelModal}>&nbsp;</a>
              </div>
            </div></div></div>
      </Modal>
    );
  }

  addSkill = (value) => {
    const questionID = this.props.addSkillsToQuestionID;
    console.log(questionID);
    this.props.addSkillToQuestion(questionID, value);
    this.cancelModal();
  }

  callLoadTypeAhead = _.debounce((value) => {
    this.props.loadTypeAheadModal(value);
  }, 500)

  valueChanged = (event, value) => {
    if(value && value.length > 2) { //no typeahead till 3 or more characters entered.
      this.callLoadTypeAhead(value);
    }
  }

  showCheckSkillsModal = (popularJobSelected) => {
    this.props.getJobSkills(popularJobSelected);
    this.props.openCheckSkillsModal();
    this.props.closeAddSkillsModal();
  }

  renderShowMoreButton = () => {
    if(this.props.popularJobsVisible !== 1000) {
      return (
        <span className="button add-more" href="javascript:void 0"
          onClick={this.showMore}>
          <span className="icon-plus-circle"></span>
          Show me more options
        </span>
      );
    }
  }

  renderPopularJobs = (popularJob, idx) => {
    if (idx > this.props.popularJobsVisible) {
      return <span key={idx} />
    }
    else {
     return (
        <span className="tag" key={idx} onClick={ () => this.showCheckSkillsModal(popularJob)} >
            {popularJob}
        </span>
      );
    }
  }

  cancelModal = () => {
    this.props.closeAddSkillsModal();
  }

  showMore = () => {
    this.props.showMoreAddSkillsModal();
  }

}

export default AddSkillsModal;
