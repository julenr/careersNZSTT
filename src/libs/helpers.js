/**
 * Created by jr1500 on 21/10/15.
 */



function textFitToContainer(stringText) {
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

export default textFitToContainer;