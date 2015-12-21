/**
 * Created by jr1500 on 7/12/15.
 */

import Tween from 'component-tween';
import raf from './raf.js';

export default function scrollToElemente(element, offset = 0) {
  const DOMElement = document.getElementById(element);
  if(DOMElement === null){return;}

  const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const elementY = DOMElement.getBoundingClientRect().top;
  scrollTo(0, bodyScrollTop + elementY + offset);
}


/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

function scrollTo(x, y, options) {
  options = options || {};

  // start position
  var start = scroll();

  // setup tween
  var tween = Tween(start)
    .ease(options.ease || 'out-circ')
    .to({ top: y, left: x })
    .duration(options.duration || 1000);

  // scroll
  tween.update(function(o){
    window.scrollTo(o.left | 0, o.top | 0);
  });

  // handle end
  tween.on('end', function(){
    animate = function(){};
  });

  // animate
  function animate() {
    raf(animate);
    tween.update();
  }

  animate();

  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

function scroll() {
  var y = window.pageYOffset || document.documentElement.scrollTop;
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  return { top: y, left: x };
}