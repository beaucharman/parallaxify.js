/**
 * Parallaxify
 * ------------------------------------------------------------------------
 * parallaxify()
 * @version 1.0 | May 8th 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 * @param {integer} defaultSpeed | any number from 1 (hare) to 50 (turtle)
 * ------------------------------------------------------------------------ */
$.fn.extend({
  parallaxify : function(defaultSpeed){

    /* Setup */
    var yPos;
    var coords;
    var $window   = $(window);
    var speedAttr = 'speed';
    defaultSpeed  = defaultSpeed || 20;

    return this.each(function(){
      /* assign the object as a new instance */
      var $bg = $(this);
      var speed = $bg.data(speedAttr) || defaultSpeed;
      $window.scroll(function() {
        yPos = -(($window.scrollTop() - $bg.offset().top) / speed);
        coords = '0 ' + yPos + 'px';
        $bg.css({
          backgroundPosition: coords
        });
      });
    });
  }
});

/**
 * Fit Vertically
 * ------------------------------------------------------------------------
 * fitVertically()
 * @version 1.0 | May 8th 2013
 * @author  Beau Charman | @beaucharman | http://beaucharman.me
 *
 * Change the target elements height to be that of the window's
 * ------------------------------------------------------------------------ */
$.fn.extend({
  fitVertically : function(){
    return this.each(function(){
      $(this).height($(window).height());
    });
  }
});
