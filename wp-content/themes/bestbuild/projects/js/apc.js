jQuery.fn.isInViewport = function () {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();
  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};


function iVVi(x, t, a, r, g, e, d) {
  function cascade() {
    var index;
    if (jQuery(document).find(x).first().hasClass(r) != 1) {
      for (index = 0; index < x.length; ++index) ! function (index) {
        setTimeout(function () {
          jQuery(x[index]).addClass(r);
        }, t + a * index)
      }(index);
    } else {
      x.removeClass(r);
    }
  };
  x.css('transition', '0');
  x.css({
    opacity: "0",
    top: d,
    position: "relative"
  });
  x.css('transition', e);
  jQuery(window).on('resize scroll', function () {
    if (jQuery(document).find(g).isInViewport() && jQuery(document).find(x).first().hasClass(r) != 1) {
      cascade();
    } else {
      x.removeClass(r);
    };
  });
};







var animobject = {};

animobject.cascade = function(x, t, a, r) {
  var index;
  if (jQuery(document).find(x).first().hasClass(r) != 1) {
    for (index = 0; index < x.length; ++index) ! function (index) {
      setTimeout(function () {
        jQuery(x[index]).addClass(r);
      }, t + a * index)
    }(index);
  }
};

animobject.isInViewport = function (n) {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();
  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};



jQuery(window).on('resize scroll', function () {

if (jQuery("#main").isInViewport()){
  animobject.cascade(jQuery(".rubrika-proj"), 100, 150, "visible");
};
});

jQuery('.rubrika-proj').on('mouseover', function () {

jQuery(this).addClass('hvrd');
}).on('mouseleave', function () {

jQuery(this).removeClass('hvrd');
})
