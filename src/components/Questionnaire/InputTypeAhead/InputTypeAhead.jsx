/**
 * Created by jr1500 on 30/09/15.
 */
import './TypeAhead.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { scrollTo } from '../../../libs/helpers';
import uuid from 'node-uuid';

import Typeahead from '../../subcomponents/Autocomplete/Autocomplete';
import Avatar from '../../subcomponents/Avatar';

class InputTypeAhead extends React.Component {
  render() {
    let question = this.props.questionnaire[this.props.id];
    let typeAheadItemsContainer = this.props.typeAheadItemsContainer;
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': question.Text
    } );
    this.scrollElementID = this.scrollElementID = `Typeahead${this.props.id}`;

    const styles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: 'hsl(200, 50%, 50%)',
        padding: '2px 6px',
        cursor: 'default'
      },

      menu: {
        border: 'solid 1px #ccc',
        background: 'rgba(255, 255, 255, 0.9)',
        zIndex: 2,
        position: 'static',
        font: 'inherit'
      },

      typeAhead: {
        border: 'solid 1px #ccc',
        background: 'hsl(200, 50%, 50%)',
      }
    }

    return (
      <div className="fieldset active">
        <div className="field text with-avatar">
          <Avatar />
          <label htmlFor="q2-sample">{question.Description}</label>
          <div className="text">
            <Typeahead
              inputProps={ {'className':'text' }  }
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
              />
              <br/>
              <a className="action-flip" href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                {question.AlternativeText}
              </a>
          </div>
        </div>
        <div className={ classes }>
          <a className="button next"
             href="javascript:void 0"
             onClick={ () => this.nextClicked(question.NextQuestionID)}
            >Next<span className="icon-arrow-down"></span>
          </a>
        </div>
        <span id={this.scrollElementID}></span>
      </div>
    );
  }

  valueChanged = (event, value) => {
    this.props.loadTypeAhead(value);
    this.props.setTypeAheadText(this.props.id, value);
  }

  alternativeClicked = (alternativeQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  nextClicked = (nextQuestionID) => {
    console.log(this.refs.Typeahead.state.value);
    this.props.setFinalTypeAheadText(this.props.id, this.refs.Typeahead.state.value);
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

}

export default InputTypeAhead;