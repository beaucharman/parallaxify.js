/**
 * Parallaxify
 * ------------------------------------------------------------------------
 * parallaxify()
 * @version 1.0 | May 8th 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 * @param   {integer} defaultSpeed | any number from 1 (hare) to 50 (turtle)
 * @link    https://github.com/beaucharman/parallaxify
 * ------------------------------------------------------------------------ */
;(function ($) {
  'use strict';
  $.fn.parallaxify = function (options) {
    var settings = $.extend({
      'defaultSpeed': 20,
      'speedAttr': '[data-speed]'
    }, options);
    var yPos, coords;
    var $window = $(window);

    return this.each(function () {
      var $bg = $(this);
      var speed = $bg.attr(settings.speedAttr) || settings.defaultSpeed;

      $window.scroll(function () {
        yPos = -(($window.scrollTop() - $bg.offset().top) / speed);
        coords = '0 ' + yPos + 'px';
        $bg.css({
          backgroundPosition: coords
        });
      });
    });
  };
})(jQuery);

/**
 * Fit Vertically
 * ------------------------------------------------------------------------
 * fitVertically()
 * @version 1.0 | May 8th 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 *
 * Change the target elements height to be that of the window's
 * ------------------------------------------------------------------------ */
;(function ($) {
  'use strict';
  $.fn.fitVertically = function () {
    return this.each(function () {
      $(this).height($(window).height());
    });
  };
})(jQuery);