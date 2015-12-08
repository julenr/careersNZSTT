/**
 * Created by jr1500 on 30/09/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import classNames from 'classnames';
import scrollTo from '../../../libs/scrollTo/scrollTo.js';
import uuid from 'node-uuid';

import Typeahead from '../../subcomponents/Autocomplete/Autocomplete';
import Avatar from '../../subcomponents/Avatar';

class InputTypeAhead extends React.Component {
  render() {
    const question = this.props.questionnaire[this.props.id];
    const typeAheadItemsContainer = this.props.typeAheadItemsContainer;
    const firstQuestion = (this.props.id === 0);
    const firstQuestionClass = (firstQuestion) ? 'fieldset first-question active' : 'fieldset active';
    const firstQuestionNoAvatar = (firstQuestion) ? 'field text' : 'field text with-avatar';
    let classes = classNames( this.props.className, {
      'submit': true,
      'submit active': question.Text
    } );

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
        position: 'static',
        zIndex: '1',
        WebkitBorderRadius: '1.3125em 1.3125em 0 0',
        borderRadius: '1.3125em 1.3125em 0 0',
        padding: '0.75em 0 0.5EM',
      }
    }

    this.scrollElementID = `Typeahead${this.props.id}`;
    return (
      <div className={firstQuestionClass}>
        {(firstQuestion) ? <p>To get started answer the question below…</p>: ''}
        <div className={firstQuestionNoAvatar}>
          {(!firstQuestion) ? <Avatar /> : ''}
          <label htmlFor="q2-sample">{question.Description}</label>
          <div className="text">
            {
              (question.HintPosition === 'Top' && question.HintText) ?
              <p className="help">{question.HintText}</p> : ''
            }
            <Typeahead
              inputProps={ {'className':'text', placeholder: question.PlaceHolder }  }
              ref="Typeahead"
              initialValue={question.Text}
              items={typeAheadItemsContainer}
              getItemValue={(item) => item.Title}
              onChange={ (event, value) => this.valueChanged(event, value, question.Endpoint) }
              onSelect={ (value) => this.itemSelected(value) }
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
              callback={(a) => this.callback(a, question.Endpoint)}
              />
              <br/>
            {
              (question.HintPosition === 'Bottom' && question.HintText && !question.Text) ?
              <p className="help">{question.HintText}</p> : ''
              }
            {
              (question.HasAlternative) ?
                <a className="option-basic" href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                  {question.AlternativeText}
                  <span className="icon-arrow-right"></span>
                </a>
                :
                ''
            }
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

  callback = (value) => {
    this.props.setTypeAheadText(this.props.id, value);
  }

  valueChanged = (event, value, endPoint) => {
    if (value && value.length > 2) { //must enter at least 3 characters before doing typeahead lookup
      this.callLoadTypeAhead(value, endPoint);
    }
    this.props.setTypeAheadText(this.props.id, ''); //Set value to false to hide next button
  }

  callLoadTypeAhead = _.debounce((value, endPoint) => {
    this.props.loadTypeAhead(value, endPoint);
  }, 500)

  itemSelected = (value) => {
    this.props.setTypeAheadText(this.props.id, value);
  }

  alternativeClicked = (alternativeQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.setNextQuestionId(alternativeQuestionID);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  nextClicked = (nextQuestionID) => {
    this.props.setFinalTypeAheadText(this.props.id, this.refs.Typeahead.state.value);
    scrollTo(this.scrollElementID, -110);
    this.props.setNextQuestionId(nextQuestionID);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

}


export default InputTypeAhead;