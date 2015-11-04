/**
 * Created by jr1500 on 21/10/15.
 */

import scrollToElement from 'scroll-to';
import store from '../redux/create-store';

export function scrollTo(element, offset = 0) {
  const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const elementY = document.getElementById(element).getBoundingClientRect().top;

  scrollToElement(0, bodyScrollTop + elementY + offset);
}


// This function was originally written by Alan from ChromeToaster
export function textFitToContainer(stringText = '') {
  if(stringText === null) {
    return 23;
  }
  var font_size;
  var max_font_size = 39;
  var min_font_size = 23;
  var elementText = stringText.trim();
  var word_array;
  var word_count;
  var adjustment_factor = 32;

  word_array = elementText.split(' ');
  word_count = word_array.length;

  font_size = (max_font_size - (max_font_size*((word_count/adjustment_factor))));

  if(font_size < min_font_size) {
    font_size = min_font_size;
  }
  else if(font_size > max_font_size) {
    font_size = max_font_size;
  }

  return font_size;

}

export function replaceStrValues(string = '') {
  if(!string) return '';

  const state = store.getState();

  const results = state._questionnaire.data.ProgressBar.Results || '';

  string = string.replace('[name]', state._questionnaire.data.Member.Name);
  string = string.replace('[region]', state._questionnaire.data.Member.Region);
  string = string.replace('[job]', state._questionnaire.data.Jobs.Current);
  string = string.replace('[results-count]', results.toString());
  return string.replace('[list-type]', state._questionnaire.data.ListTypes.Current);

}