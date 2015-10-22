/**
 * Created by jr1500 on 21/10/15.
 */

import scrollToElement from 'scroll-to';

export function scrollTo(element, offset = 0) {
  let yPos = document.getElementById(element).getBoundingClientRect().top + document.body.scrollTop;
  console.log(document.body.scrollTop);
  scrollToElement(0, yPos + offset);
}

export function textFitToContainer(stringText) {
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