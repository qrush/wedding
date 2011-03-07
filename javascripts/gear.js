$(window).load(function() {
  /*
  var R = Raphael("header", 900, 300);

  var drawGear = function(x, y, size, opacity) {
    var gear = R.image("images/gear.png", x, y, size, size);
    gear.attr({opacity: opacity});
    return gear;
  }

  var rotateGear = function(gear, deg) {
    gear.animate({rotation: deg * 1000}, 20000 * 1000);
  }

  var gear1 = drawGear(10, 10, 250, 0.1);
  var gear2 = drawGear(228, 200, 75, 0.2);
  var gear3 = drawGear(210, -450, 700, 0.25);

  rotateGear(gear1, 360);
  rotateGear(gear2, -360);
  rotateGear(gear3, 360);
  */

  //alert("haters..")
  $('#slider').nivoSlider({
    //effect: 'sliceDown',
  //  directionNav: false,
  });

  //$('#slider').nivoSlider()
  //  effect: 'fade',
  //  directionNav: false,
  //});
});
