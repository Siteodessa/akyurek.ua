function iVVi(x, t, a, r, g, e, d) {  // Р°РЅРёРјРёСЂРѕРІР°С‚СЊ РѕР±СЉРµРєС‚С‹ РїРѕ СЃРєСЂРѕР»Р»Сѓ - СЃРЅР°С‡Р°Р»Р° РїРѕСЃС‚Р°РІРёС‚СЊ РёРј opacity
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
    }
    jQuery.fn.isInViewport = function () {
      var elementTop = jQuery(this).offset().top;
      var elementBottom = elementTop + jQuery(this).outerHeight();
      var viewportTop = jQuery(window).scrollTop();
      var viewportBottom = viewportTop + jQuery(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
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

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
  var objmass = ['.project_info.style_2, .ri .icon_button.pres a, .ri .icon_button.quos a, .integra aside ul li, .ri aside ul li'];
  var objmass1 = ['.integra ul.type_2 li'];
  if (isMobile.any()) {
jQuery(objmass).addClass('visible') ;jQuery(objmass1).addClass('visible') ;
jQuery('.wpb_column.vc_column_container.col-sm-6.rltd').appendTo('.ri') }
  else {
iVVi(jQuery(objmass), 100, 200, " visible", ".ri .wpb_wrapper", '1s', '20px');
iVVi(jQuery(objmass1), 300, 2000, " visible", ".integra ul.type_2", '1s', '20px');
iVVi(jQuery('.project_description'), 300, 2000, " visible", ".project_description", '1s', '20px');
iVVi(jQuery('.lama.slide'), 300, 2000, " visible", ".lama-container", '1s', '20px');
  }



jQuery('.ligal p a').each(function(){
  jQuery(this).addClass('item').appendTo('.swp .lama-wrapper').wrap('<div class="lama-slide"></div>')


}),
 jQuery('.swp #coga').detach();



setTimeout(function(){

jQuery('.rltd div').each(function(){
var imageHeight = jQuery(this).find('img').height();
var spn = jQuery(this).find('.spn');
var ovr = jQuery(this).find('.over');
spn.height(imageHeight);ovr.height(imageHeight);
jQuery(this).height(imageHeight);
});


jQuery('span.over').mouseover(function(){

   jQuery(this).addClass('hvr');
});

jQuery('span.over').mouseleave(function(){

   jQuery(this).removeClass('hvr');
})




jQuery('button.liveedit').click();jQuery('.live-editor.one4').toggle();
},1200);



var lama1 = new lama('.projectile', {
  nextButton: '.lama-button-next',
  prevButton: '.lama-button-prev',
  paginationClickable: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplayDisableOnInteraction: false,
  lazy: true,
  loop: true,
  height: 1550
});



var lama1 = new lama('.gallery-thumbs', {
  nextButton: '.lama-button-next',
  prevButton: '.lama-button-prev',
  paginationClickable: true,
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides: true,
  autoplayDisableOnInteraction: false,
  breakpoints: {
  // when window width is <= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  // when window width is <= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is <= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 30
  }
},
  lazy: true,
  loop: true,
  height: 1550
});
