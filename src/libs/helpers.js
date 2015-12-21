/**
 * Created by jr1500 on 21/10/15.
 */

import store from '../redux/create-store';

// This function was originally written by Alan from ChromeToaster
export function textFitToContainer(stringText = '', min_font_size = 23, max_font_size = 39, adjustment_factor = 32) {
  if(stringText === null) {
    return 23;
  }
  var font_size;
  var elementText = stringText.trim();
  var word_array;
  var word_count;
  var longest_char;
  var longest_char_count;

  word_array = elementText.split(' ');
  word_count = word_array.length;
  longest_char = word_array.sort(function (a, b) { 
    return b.length - a.length;
  })[0];
  longest_char_count = longest_char.length;
              

  font_size = (max_font_size - (max_font_size*((word_count/adjustment_factor))));

  
  if ((longest_char_count > 17) && (longest_char_count < 30)) {
    font_size = (font_size - (longest_char_count/2.4));
  }
  if(font_size < min_font_size) {
    font_size = min_font_size;
  }
  else if(font_size > max_font_size) {
    font_size = max_font_size;
  }
  
  return (font_size/16)+'em';

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