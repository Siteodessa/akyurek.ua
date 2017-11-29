var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
function custom() {
  var headerSocials = jQuery('.header_socials a');
  var headerIcons = ['i.fa.fa-clock-o', ' i.fa.fa-map-marker', 'i.fa.fa-phone'];
  jQuery('footer ul#menu-tovary li').addClass('iv');
  jQuery('footer ul#menu-stranitsy li').addClass('iv');
  jQuery('footer aside#contacts-4 ul li').addClass('iv');
  jQuery('footer .widget_title h4').addClass('iv');
  jQuery('footer aside#text-2 .textwidget').addClass('iv');
  function iteRation(e, t, a, r) {
    for (var i = 0; i < e.length; i++) ! function (i) {
      setTimeout(function () {
        e[i].className += r
      }, t + a * i)
    }(i)
  }
  jQuery('.s_m ul li ul li').click(function () {
    jQuery(this).css('background', 'red')
  })
  if (jQuery('body').hasClass('single') == 1) {
    jQuery(document).ready(function () {
      iteRation(jQuery("ul#lightgallery li a"), 13, 100, " visible");
    })
  }
  function iteRationArr(e, t, a, r) {
    var index;
    for (index = 0; index < e.length; ++index) ! function (index) {
      setTimeout(function () {
        e[index].className += r;
        jQuery(e[index]).addClass('visible')
      }, t + a * index)
    }(index)
  }
  function teration() {
    var menumass = ['.top_nav_wrapper', 'li#menu-item-6266', 'li#menu-item-8345', 'li#menu-item-8559', 'li#menu-item-8491', 'li#menu-item-8715', 'li#menu-item-6270', 'li#menu-item-6268', 'li#menu-item-6269', 'li#menu-item-6271', '.text strong.iv:nth-child(1), .text span strong.iv'];
    var secondaryMenu = ['li#menu-item-6272', 'li#menu-item-6273', 'li#menu-item-6274', 'li#menu-item-6275', 'li#menu-item-6276', 'li#menu-item-6277', 'li#menu-item-6278', 'li#menu-item-6279', 'li#menu-item-8224'];
    jQuery('li#menu-item-8491, li#menu-item-6268').mouseover(function () {
      setTimeout(function () {
        iteRationArr(secondaryMenu, 10, 20, " visible")
      }, 100);
    });
    setTimeout(function () {
      iteRationArr(menumass, 400, 40, " visible"), iteRation(jQuery(".accordion-toggle"), 400, 40, " visible")
    }, 600);
    iteRation(jQuery("ul.products li"), 13, 100, " visible"),
      iteRation(jQuery(".company_history > ul p"), 100, 50, " visible"), iteRation(jQuery(".wpb_text_column.wpb_content_element p"), 1e3, 100, " visible")
  }
  jQuery.fn.isInViewport = function () {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();
    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  function footerAnim() {
    if (isMobile.any()) {
      if (jQuery(document).find('.footer_widgets_wrapper').isInViewport()) {
        if (jQuery(document).find('footer#footer .iv').hasClass('visible') != true) {
          iteRationArr(jQuery("footer#footer .iv"), 13, 60, " visible");
        }
      } else {
        jQuery(document).find('footer#footer .iv').removeClass('visible');
      };
    } else {
      if (jQuery(document).find('.prefoo').isInViewport()) {
        if (jQuery(document).find('footer#footer .iv').hasClass('visible') != true) {
          iteRationArr(jQuery("footer#footer .iv"), 13, 60, " visible");
        }
      } else {
        jQuery(document).find('footer#footer .iv').removeClass('visible');
      };
    }
  };
  var wilo = window.location.href;
  if (wilo == window.location.href) {
    jQuery(window).on('resize scroll', function () {
      footerAnim();
    });
  }
  if (window.location.href == 'http://akyurek.ua/') {
    jQuery(window).on('resize scroll', function () {
       twoWay(jQuery('.s2'), jQuery('.s2.ivl'));
       twoWay(jQuery('.a5'), jQuery('.a5 .ivr'));
       twoWay(jQuery('.a1'), jQuery('.a1 .iv'));
       twoWay(jQuery('.okom'), jQuery('.okom .iv'));
        twoWay(jQuery('.valueable.frst'), jQuery('.valueable.frst .iv'));
         twoWay(jQuery('.valueable.scond'), jQuery('.valueable.scond .iv'));
          twoWay(jQuery('.container.categorias .wpb_wrapper .grid'), jQuery('figure.effect-ming'));
            twoWay(jQuery('.parnt'), jQuery('.parnt .iv'));
    twoWay(jQuery('.pin'), jQuery('.pin .iv'));
    if (jQuery(document).find('ul#menu-tempo-menu').isInViewport()) {
      var menumass = ['.top_nav_wrapper', 'li#menu-item-6266', 'li#menu-item-8345',  'li#menu-item-8491', 'li#menu-item-8559', 'li#menu-item-8715', 'li#menu-item-6270', 'li#menu-item-6268', 'li#menu-item-6269', 'li#menu-item-6271', '.text strong.iv:nth-child(1), .text span strong.iv'];
      iteRationArr(menumass, 400, 40, " visible");
    } else {
      jQuery(document).find('ul#menu-tempo-menu li').removeClass('visible');
    }
    if (jQuery(document).find('.logo').isInViewport()) {
      iteRation(jQuery('.header_top .iv'), 400, 100, " visible");
      iteRationArr(headerSocials, 400, 40, " visible");
    } else {
      jQuery(document).find('.header_top .iv').removeClass('visible');
      jQuery('.header_socials a').removeClass('visible');
    }
      footerAnim();
      if (jQuery(document).find('.container.categorias .wpb_wrapper .grid').isInViewport()) {
        if (jQuery("figure.effect-ming").hasClass('visible')) {} else {
          iteRation(jQuery("figure.effect-ming"), 13, 100, " visible");
        }
      } else {
        jQuery(document).find('figure.effect-ming').removeClass('visible');
      };
      if (jQuery(document).find('.logo').isInViewport()) {
        iteRation(jQuery('.header_top .iv'), 400, 100, " visible");
        iteRationArr(headerSocials, 400, 40, " visible");
      } else {
        jQuery(document).find('.header_top .iv').removeClass('visible');
        jQuery('.header_socials a').removeClass('visible');
      }
      if (jQuery(document).find('ul#menu-tempo-menu').isInViewport()) {
        var menumass = ['.top_nav_wrapper', 'li#menu-item-6266', 'li#menu-item-8345', 'li#menu-item-8559', 'li#menu-item-8491', 'li#menu-item-8491', 'li#menu-item-8715', 'li#menu-item-6270', 'li#menu-item-6268', 'li#menu-item-6269', 'li#menu-item-6271', '.text strong.iv:nth-child(1), .text span strong.iv'];
        iteRationArr(menumass, 400, 40, " visible");
      } else {
        jQuery(document).find('ul#menu-tempo-menu li').removeClass('visible');
      }
    })
  } else {
    if (window.location.href == 'http://akyurek.ua/tovary/') {
      jQuery('.catcard').ready(function () {
        iteRation(jQuery('.catcard'), 1000, 100, ' visible');
      })
    } else {}
  }
  function twoWay(a, b){
          if (jQuery(document).find(a).isInViewport()) {
            if (jQuery(document).find(b).hasClass('visible') != true) {
              iteRationArr(jQuery(b), 13, 100, " visible");
            }
          } else {
            jQuery(document).find(b).removeClass('visible');
          };
  }
  setTimeout(function () {
    iteRation(jQuery('.header_top .iv'), 400, 200, " visible");
    iteRationArr(headerSocials, 400, 40, " visible");
    iteRationArr(headerIcons, 400, 40, " visible");
    setTimeout(function () {
      jQuery('.lama-container').addClass('visible');
    }, 1500);
  }, 500);
  function getWorks(e, t, a) {
    jQuery("blockquote h2").after('<img id="loadd" src="/wp-content/uploads/2017/04/preloader_10.gif">'), idea = jQuery(this).find("button").attr("id"), menu = jQuery(".projects_tabs_header").html(), jQuery.ajax({
      url: e,
      success: function (e) {
        (e = jQuery(e).find(t)).find("div.overlay").wrapInner("<a href='http://akyurek.ua/projects/'></a>"), jQuery(a).replaceWith(function (e) {
          return e.find("div.overlay").wrapInner("<a href='http://akyurek.ua/projects/'></a>"), e
        }), jQuery(".tabs a").removeAttr("href"), jQuery("#" + idea).addClass("active")
      }
    })
  }
  function TitlePender(e) {
    titlo = e.find("h1").text(), jQuery("title").text(titlo)
  }
  function fastMax(e) {
    jQuery.ajax({
      async: !0,
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products li"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12 ul.products").append(e)
      }
    })
  }
  function fastMaxEnd() {
    setTimeout(function () {
      jQuery("ul.products").animate({
        left: 0,
        opacity: "1",
        top: 0
      }, 1500)
    }, 2200)
  }
  function spinner() {
    jQuery("#melnica").addClass("zaaddal"), jQuery("#coga").addClass("rotating")
  }
  function aniPro() {
    jQuery("ul.products").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500)
  }
  function gather() {
    1 == jQuery("#box").hasClass("gathering") || (jQuery("#box").addClass("gathering"), 1 == jQuery("#box").hasClass("carn") || (jQuery("#box").addClass("carn"), setTimeout(function () {
      jQuery("#box").removeClass("carn"), jQuery("#box").removeClass("gathering"), jQuery(".giwrap").detach(), jQuery("#loadd").detach()
    }, 8700)))
  }
  function happyImages() {
    jQuery(".product_images").on("click", ".unfixed", function () {
      var e = jQuery(this);
      e.wrap('<div class="capsule"></div>');
      var t = jQuery(this).height();
      e.parent().height(t), e.removeClass("unfixed").addClass("inprocess"), e.animate({
        width: "0",
        opacity: "0.02",
        left: "50%"
      }, 400);
      jQuery("html").append('<div class="sli-contain"><div class="sli-inner"><div class="sli-body"></div><div class="l-closer closers"></div><div class="r-closer closers"><div class="close c-button"><i class="fa fa-close"></i></div></div></div></div>'), jQuery(".sli-contain").animate({
        opacity: "1"
      }, 600), setTimeout(function () {
        jQuery(".sli-body").append(e), e.animate({
          width: "80vmin",
          opacity: "1",
          top: "10vmin"
        }, 400), e.addClass("centrizer")
      }, 600), jQuery(".close.c-button").animate({
        right: "50"
      }, 600), jQuery(".sli-contain").on("click", ".closers", function () {
        jQuery(".close.c-button").animate({
          right: "-50"
        }, 100), jQuery(".inprocess").animate({
          opacity: "0",
          left: "-3000"
        }, 200), setTimeout(function () {
          jQuery(".sli-contain").css("display", "none").detach()
        }, 1300), setTimeout(function () {
          jQuery(".sli-contain").animate({
            opacity: "0"
          }, 400)
        }, 400), jQuery(".capsule").append(e), jQuery(".inprocess").animate({
          width: "100%"
        }, 200), jQuery(".inprocess").animate({
          opacity: "1"
        }, 200), jQuery(".inprocess").animate({
          top: "0",
          left: "0"
        }, 100), jQuery(".inprocess").removeClass("centrizer"), jQuery(".inprocess").addClass("unfixed").unwrap().removeClass("inprocess")
      })
    })
  }
  function msieversion() {
    return (window.navigator.userAgent.indexOf("Edge") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && jQuery("html").addClass("badbrowser"), !0
  }
  function prepareYourLinks() {
    jQuery(".product_thumbnail a").each(function () {
      var e = jQuery(this).attr("href");
      jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
    }), setTimeout(function () {
      jQuery(".product_thumbnail a").removeAttr("href"), jQuery("a.woocommerce-LoopProduct-link").detach()
    }, 300)
  }
  function scrolltome() {
    if (1 == jQuery("body").hasClass("fastshop"))
      if (isMobile.any()) {
        alert("workinONE");
        e = jQuery(".golo0").offset().top;
        setTimeout(function () {
          var t = e;
          jQuery("html,body").animate({
            scrollTop: t + 1
          }, 400)
        }, 20)
      } else {
        e = jQuery("div#scrolltome").offset().top;
        setTimeout(function () {
          var t = e;
          jQuery("html,body").animate({
            scrollTop: t + 1
          }, 400)
        }, 20)
      }
    else if (isMobile.any()) {
      e = jQuery(".col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").offset().top;
      setTimeout(function () {
        var t = e;
        jQuery("html,body").animate({
          scrollTop: t
        }, 400)
      }, 20)
    } else {
      var e = jQuery("div#main").offset().top;
      setTimeout(function () {
        var t = e;
        jQuery("html,body").animate({
          scrollTop: t + 1
        }, 400)
      }, 20)
    }
  }
  function anidada() {
    jQuery(".dada").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500)
  }
  function dataload() {
    jQuery("#dataload").css("opacity", "1")
  }
  function dataloadend() {
    jQuery("#dataload").animate({
      opacity: 0
    }, 100)
  }
  function ulProdGo() {
    jQuery("ul.products").addClass("go")
  }
  function allAx(e, t, a, r) {
    jQuery.ajax({
      async: r,
      url: e,
      success: function (e) {
        e = jQuery(e).find(t), jQuery(a).html(e)
      }
    })
  }
  function fastSingCont(e, t) {
    jQuery.ajax({
      async: !0,
      url: e,
      success: function (e) {
        e = jQuery(e).find(".summary.entry-summary"), t.prepend(e)
      }
    })
  }
  function loadProducts(e) {
    1 == e && jQuery(".col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").empty(), fastMax("http://akyurek.ua/shop/"), fastMax("http://akyurek.ua/shop/page/2/"), fastMax("http://akyurek.ua/shop/page/3/"), fastMax("http://akyurek.ua/shop/page/4/"), fastMax("http://akyurek.ua/shop/page/5/"), fastMax("http://akyurek.ua/shop/page/6/"), fastMax("http://akyurek.ua/shop/page/7/"), fastMax("http://akyurek.ua/shop/page/8/"), fastMax("http://akyurek.ua/shop/page/9/"), fastMax("http://akyurek.ua/shop/page/10/"), fastMax("http://akyurek.ua/shop/page/11/"), fastMax("http://akyurek.ua/shop/page/12/"), fastMax("http://akyurek.ua/shop/page/13/")
  }
  function menuJax() {
    jQuery(".imax-ochist, .imax-ves, .imax-sep, .inax").click(function () {
      var e = String(window.location),
        t = jQuery(this).attr("gid");
      if (-1 != e.indexOf("%D1%82%D0%BE%D0%B2%D0%B0%D1%80")) window.location.href = "http://akyurek.ua/fastshop/#" + t + "/", console.log("UZHE BI");
      else {
        var a = jQuery(this);
        jQuery(".multiview").css("display", ""), jQuery(".midok").css("z-index", "10"), dataload(), scrolltome(), jQuery(".accordion-toggle").removeClass("aktiv"), jQuery(this).parent().addClass("aktiv");
        var r = jQuery(this).attr("href");
        window.location.hash = t + "/", allAx(r, "div#wtfff", ".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12", !1), jQuery.ajax({
          async: !1,
          url: r,
          success: function (e) {
            data2 = jQuery(e).find(".entry-header"), e = jQuery(e).find("ul.products li"), data1 = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").append('<ul class="products"></ul>'), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12 ul.products").append(e), jQuery("div#datazeren").html(data1), jQuery(".entry-header").replaceWith(data2), TitlePender(data2), jQuery("#datazeren ul li a").each(function () {
              var e = jQuery(this).attr("href");
              jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
            }), setTimeout(function () {
              jQuery(".product_thumbnail a").each(function () {
                var e = jQuery(this).attr("href");
                jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
              }), dataloadend(), jQuery("div.breadcrumbs a").each(function () {
                var e = jQuery(this).attr("href");
                jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
              })
            }, 500), setTimeout(function () {
              jQuery(".inax_group").addClass("go"), jQuery(".circul").addClass("go")
            }, 200)
          }
        }).done(function () {
          1 == a.hasClass("imax-ves") && fastMax(r + "page/2"), 1 == a.hasClass("imax-ochist") && (fastMax(r + "page/2"), fastMax(r + "page/3"), fastMax(r + "page/4"), setTimeout(function () {
            iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
          }, 1500)), 1 == a.hasClass("imax-sep") && (fastMax(r + "page/2"), fastMax(r + "page/3"), fastMax(r + "page/4"), fastMax(r + "page/5"), fastMax(r + "page/6"), fastMax(r + "page/7"), setTimeout(function () {
            iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
          }, 1500), setTimeout(function () {
            iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
          }, 3e3)), "transportnaya-sistema" == t && fastMax(r + "page/2"), fastMaxEnd(), prepareYourLinks(), spinner(), ulProdGo(), setTimeout(function () {
            iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
          }, 500), setTimeout(function () {
            iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
          }, 3500), jQuery(".midok").css("z-index", "-1")
        })
      }
    })
  }
  function prodJax() {
    jQuery("aside td a").each(function () {
      var e = jQuery(this).attr("href");
      jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e), jQuery(this).click(function () {
        jQuery("td").removeClass("aktiv"), jQuery(this).parent().addClass("aktiv");
        var e = jQuery(this).attr("ssil"),
          t = jQuery(this).attr("gid");
        window.location.hash = t + "/", scrolltome(), jQuery.ajax({
          async: !1,
          url: e,
          success: function (e) {
            e = jQuery(e).find(".col_in.__padd-left.__three-cols"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e).animate({
              opacity: 1
            }, 500), hdata = jQuery(e).find(".entry-header"), jQuery(".entry-header").detach(), jQuery("#platform").before(hdata), setTimeout(function () {
              jQuery("div.breadcrumbs a").each(function () {
                var e = jQuery(this).attr("href");
                jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
              }), spinner(), aniPro()
            }, 400), aniPro()
          }
        }), setTimeout(function () {
          jQuery(".product_images img").addClass("unfixed"), goSwap(), iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
        }, 1200), setTimeout(function () {
          iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
        }, 3200)
      })
    })
  }
  function zernJax() {
    jQuery("#datazeren").on("click", "a", function () {
      jQuery(this).prepend('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
      var e = jQuery(this).attr("ssil");
      jQuery.ajax({
        async: !1,
        url: e,
        success: function (e) {
          e = jQuery(e).find("ul.products"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e)
        }
      }).done(function () {
        prepareYourLinks()
      }), jQuery.ajax({
        async: !1,
        url: e,
        success: function (e) {
          e = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery("div#datazeren").html(e), jQuery("#datazeren ul li a").each(function () {
            var e = jQuery(this).attr("href");
            jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
          }), jQuery("#loadd").detach(), aniPro()
        }
      })
    })
  }
  function goSwap() {
    a = jQuery("div.images img").first().attr("src"), jQuery("#lightgallery li a").first().attr("href", a).find("img").attr("src", a), jQuery(".thumbnails.columns-3 img").each(function () {
      c = jQuery(this).attr("src").replace(new RegExp("-180x180", "g"), ""), jQuery("#lightgallery").append('<li> <a class="item iv small-uncle" href="' + c + '"><img class="smallbros" src="' + c + '"></a></li>')
    }), jQuery(".product_images div.images").empty(), jQuery("#lightgallery").lightGallery({
      selector: ".item"
    })
  }
  var loading = {
    show: function () {
      jQuery(".midok").css("z-index", "10")
    },
    hide: function () {
      jQuery(".midok").css("z-index", "-1")
    }
  };
  jQuery(".scaleme").click(function () {
    jQuery(this).hide(), jQuery(".overlay-pepper").show(), jQuery(".overlay-pepper img").fadeIn(), jQuery(".overlay-pepper").click(function () {
      jQuery(".overlay-pepper img").fadeOut(), jQuery(".overlay-pepper").hide(), jQuery(".scaleme").show()
    })
  }), jQuery("#card-view").click(function () {
    jQuery("body").removeClass("bigcards-view"), jQuery("body").removeClass("list-view"), jQuery("body").addClass("card-view")
  }), jQuery("#bigcards-view").click(function () {
    jQuery("body").removeClass("card-view"), jQuery("body").removeClass("list-view"), jQuery("body").addClass("bigcards-view")
  }), jQuery("#list-view").click(function () {
    jQuery("body").removeClass("bigcards-view"), jQuery("body").removeClass("card-view"), jQuery("body").addClass("list-view"), jQuery("ul.products li").each(function () {
      var e = jQuery(this).attr("onclick").slice(7, -3),
        t = jQuery(this).find(".product_info");
      t.append('<img class="rotating loder" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png">');
      fastSingCont(e, t)
    }), setTimeout(function () {
      jQuery(".loder").detach()
    }, 4e3)
  }), jQuery("#datazeren").on("click", ".widget_layered_nav .widget_title", function () {
    rodak = jQuery(this).parent(), rodak.find(".sortero").toggle()
  }), jQuery(".widget_layered_nav").on("click", ".widget_title", function () {
    rodak = jQuery(this).parent(), rodak.find(".sortero").toggle()
  }), jQuery(".modax").each(function () {
    var e = jQuery(this).attr("href");
    jQuery(this).removeAttr("href"), jQuery(this).parent("li").attr("ssil", e)
  }), jQuery(".zon").click(function () {
    var e = jQuery(this).attr("zod");
    jQuery('li[zod^="' + e + '"]').click()
  }), jQuery(".modax").click(function () {
    jQuery(".modax").removeClass("activated");
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e), jQuery("ul.products").animate({
          left: 0,
          opacity: "1",
          top: 0
        }, 1500), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }).done(function () {
      prepareYourLinks()
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("div#wtfff"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").prepend(e).animate({
          opacity: 1
        }, 500), jQuery("div#wtfff").animate({
          opacity: 1
        }, 500), setTimeout(function () {
          jQuery(".inax_group").addClass("go")
        }, 200), jQuery(".circul").addClass("go"), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery("div#datazeren").html(e), jQuery("#datazeren ul li a").each(function () {
          var e = jQuery(this).attr("href");
          jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
        }), jQuery("#loadd").detach(), jQuery(".loaddin").removeClass("loaddin")
      }
    }), jQuery(this).addClass("activated")
  }), jQuery("#platform").mouseleave(function () {
    jQuery(".zon").css("opacity", "0"), jQuery(".text-inf").hide(), jQuery("p.catitle").removeClass("houver")
  }), jQuery(".textain2").ready(function () {
    jQuery(".htour").animate({
      opacity: 1,
      top: 0
    }, 500), setTimeout(function () {
      anidada()
    }, 400)
  }), jQuery(".sort-choose-cont").on("click", ".shopper button", function () {
    jQuery(".htour").css("height", "0").css("display", "none").animate({
      left: 0,
      opacity: "0",
      top: 50
    }, 1500), jQuery(".project_grid_wrapper.container.col_3").css("height", "auto").css("display", "block").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500)
  }), jQuery(".sort-choose-cont").on("click", ".county button", function () {
    jQuery(".project_grid_wrapper.container.col_3").animate({
      left: 0,
      opacity: "0",
      top: 50
    }, 1500), jQuery(".project_grid_wrapper.container.col_3").css("height", "0").css("display", "none"), jQuery(".htour").animate({
      left: 0,
      opacity: "1",
      top: 0
    }, 1500).css("height", "auto").css("display", "block")
  }), jQuery("#state").ready(function () {
    iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
  }), jQuery(".company_history_header .year").wrap('<div class="yearz"></div>'), jQuery("#ihelp").click(function () {
    jQuery(".lama-container.lama-container-android.lama-container-horizontal").toggleClass("round2")
  }), jQuery(document).on("click", ".entry-title div.breadcrumbs a", function () {
    jQuery(this).addClass("loaddin").prepend('<img id="loadd" src="/wp-content/uploads/2017/04/preloader_10.gif">');
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").html(e), jQuery(".inax.loaddin").removeClass("loaddin"), iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
      }
    }).done(function () {
      prepareYourLinks()
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("div#wtfff"), jQuery(".row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12").prepend(e).animate({
          opacity: 1
        }, 500), jQuery("div#wtfff").animate({
          opacity: 1
        }, 500), scrolltome(), setTimeout(function () {
          jQuery(".inax_group").addClass("go")
        }, 200), jQuery(".circul").addClass("go"), jQuery(".inax.loaddin").removeClass("loaddin")
      }
    }), jQuery.ajax({
      url: e,
      success: function (e) {
        e = jQuery(e).find("aside.widget.woocommerce.widget_layered_nav.shop_widgets"), jQuery("div#datazeren").html(e), jQuery("#datazeren ul li a").each(function () {
          var e = jQuery(this).attr("href");
          jQuery(this).removeAttr("href"), jQuery(this).attr("ssil", e)
        }), jQuery("#loadd").detach(), jQuery(".loaddin").removeClass("loaddin")
      }
    })
  }), jQuery("#yachmen-separ, #yachmen-polir, #yachmen-trans, #yachmen-defence, #yachmen-hranenie").click(function () {
    jQuery(this).addClass("loaddin").prepend('<div class="giwrap"><img id="loadd" border="0" src="/wp-content/uploads/2017/04/preloader_10.gif"></div>'), jQuery(".entry-header").prepend('<div class="seed-fall locker"></div>'), gather();
    var e = jQuery(this).attr("ssil");
    jQuery.ajax({
      async: !1,
      url: e,
      success: function (e) {
        e = jQuery(e).find("ul.products"), jQuery(".prod-catch").html(e), setTimeout(function () {
          iteRation(jQuery("ul.products li"), 1e3, 100, " visible")
        }, 100), setTimeout(function () {
          jQuery(".inax.loaddin").removeClass("loaddin"), jQuery(".giwrap").detach(), jQuery("#loadd").detach()
        }, 2e3)
      }
    })
  }), jQuery("#vsekat").click(function () {
    loadProducts(!0)
  }), setTimeout(function () {
    jQuery("ul#menu-tempo-menu li.visible").removeClass("current-menu-item")
  }, 2200), prodJax(), menuJax(), zernJax(), goSwap(), teration();
}
custom();
