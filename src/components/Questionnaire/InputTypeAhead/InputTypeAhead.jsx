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
    const question = this.props.questionnaire[this.props.id];
    const typeAheadItemsContainer = this.props.typeAheadItemsContainer;
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
              callback={this.callback}
              />
              <br/>
            {
              (question.HasAlternative) ?
                <a className="action-flip" href="javascript: void 0" onClick={ () => this.alternativeClicked(question.AlternativeNextQuestionID) } >
                  {question.AlternativeText}
                </a>
                :
                ''
            }
            {
              (question.HintPosition === 'Bottom' && question.HintText) ?
              <p className="help">{question.HintText}</p> : ''
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

  callback = () => {
    console.log('select');
  }

  valueChanged = (event, value, endPoint) => {
    if (value && value.length > 2) { //must enter at least 3 characters before doing typeahead lookup
      this.callLoadTypeAhead(value, endPoint);
    }
    this.props.setTypeAheadText(this.props.id, value);
  }

  callLoadTypeAhead = _.debounce((value, endPoint) => {
    this.props.loadTypeAhead(value, endPoint);
  }, 500)

  itemSelected = (value) => {
    this.props.setTypeAheadText(this.props.id, value);
  }

  alternativeClicked = (alternativeQuestionID) => {
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, alternativeQuestionID);
  }

  nextClicked = (nextQuestionID) => {
    this.props.setFinalTypeAheadText(this.props.id, this.refs.Typeahead.state.value);
    scrollTo(this.scrollElementID, -110);
    this.props.nextQuestion(this.props.id, nextQuestionID);
  }

}


export default InputTypeAhead;