var oblString = 'path#zakarpattia_obl, path#zakarpattia_obl, path#kirovohrad_obl, path#kharkiv_obl, path#luhansk_obl, path#donetsk_obl, path#dnipropetrovsk_obl, path#zaporizha_obl, path#kherson_obl, path#crimea, path#odesa_obl, path#vinnytsya_obl, path#khmelnytsk_obl, path#chernivtsi_obl, path#ivano-frankivsk, path#ternopil_obl, path#lviv_obl, path#volynska_obl, path#rivne_obl, path#zhytomyr_obl, path#kyiv_obl, path#cherkasy_obl, path#poltava_obl, path#sumy_obl, path#chernihov_obl, path#path58643, path#kyiv, path#sevastopil, path#mykolaiv_obl';
jQuery(oblString).mouseenter(function () {
  jQuery('path#zakarpattia_obl, path#zakarpattia_obl, path#kirovohrad_obl, path#kharkiv_obl, path#luhansk_obl, path#donetsk_obl, path#dnipropetrovsk_obl, path#zaporizha_obl, path#kherson_obl, path#crimea, path#odesa_obl, path#vinnytsya_obl, path#khmelnytsk_obl, path#chernivtsi_obl, path#ivano-frankivsk, path#ternopil_obl, path#lviv_obl, path#volynska_obl, path#rivne_obl, path#zhytomyr_obl, path#kyiv_obl, path#cherkasy_obl, path#poltava_obl, path#sumy_obl, path#chernihov_obl, path#path58643, path#kyiv, path#sevastopil, path#mykolaiv_obl').css('fill', 'yellow');
  jQuery(this).css('fill', 'blue')
});
jQuery(oblString).mouseleave(function () {
  jQuery(this).css('fill', 'yellow')
});
jQuery(oblString).click(function () {
  jQuery(oblString).css('fill', 'yellow').removeClass('impored');
  jQuery(this).addClass('impored');
  jQuery('.buttonback').detach();
  var idshka = jQuery(this).attr('id');
  var renderer = jQuery('h2');
  renderer.text(idshka);

  function dataPick(datalocation, datalocation1, datalocation2) {
    function ssilCaller(ssil) {
      jQuery.ajax({
        async: false,
        url: ssil,
        success: function (data) {
          data = jQuery(data).find('div.org');
          jQuery('.renderer').empty().append(data);
          setTimeout(function () {
            jQuery('div.org').on('click', function () {
              if (jQuery(this).find('iframe') == 1) {} else {
                var badLink = jQuery(this).find('a').attr('href');
                var frame = document.createElement('iframe');
                var rightLink = 'http://kolosok.info' + badLink;
                frame.setAttribute('src', rightLink);
                jQuery(this).append(frame);
                jQuery('div.org').css('display', 'none');
                jQuery(this).css('display', 'block');
                jQuery(this).css('width', '100%');
                setTimeout(function () {
                  jQuery('.renderer iframe').css('height', '600px')
                  jQuery('.renderer iframe').css('width', '100%')
                }, 500);
              }
            })
          }, 1200);
        }
      })
    }
    jQuery.ajax({
        async: false,
        url: datalocation,
        success: function (data) {
          data = jQuery(data).find('.posts_grid ul li');
          jQuery('.renderer').empty().append(data);
          jQuery('a.button').each(function () {
            var buton = jQuery(this);
            buton.text('смотреть');
            buton.href = buton.attr('href');
            buton.removeAttr('href');
            buton.attr('ssil', buton.href);
            buton.css('cursor', 'pointer');
          });
        }
      }),
      jQuery.ajax({
        async: false,
        url: datalocation1,
        success: function (data) {
          data = jQuery(data).find('.posts_grid ul li');
          jQuery('.renderer').append(data);
          jQuery('a.button').each(function () {
            var buton = jQuery(this);
            buton.text('смотреть');
            buton.href = buton.attr('href');
            buton.removeAttr('href');
            buton.attr('ssil', buton.href);
            buton.css('cursor', 'pointer');
          });
        }
      }),
      jQuery.ajax({
        async: false,
        url: datalocation2,
        success: function (data) {
          data = jQuery(data).find('.posts_grid ul li');
          jQuery('.renderer').append(data);
          jQuery('a.button').each(function () {
            var buton = jQuery(this);
            buton.text('смотреть');
            buton.href = buton.attr('href');
            buton.removeAttr('href');
            buton.attr('ssil', buton.href);
            buton.css('cursor', 'pointer');
          });
        }
      })

      .done(function () {
        setTimeout(function () {
          jQuery('a.button').on('click', (function () { //Кнопка назад
            var rendererinfo = jQuery('h2');
            butonback = document.createElement('button');
            butonback.classList.add('buttonback');
            rendererinfo.after(butonback);
            setTimeout(function () {
              jQuery('.buttonback').text('Назад к области');
              jQuery('.buttonback').addClass('btn');
              jQuery('.buttonback').on('click', (function () {
                jQuery('#' + idshka).click();
                jQuery(this).detach();
              }));
            }, 500)
          }));
        }, 200);
        setTimeout(function () {
          jQuery('a.button').on('click', (function () { //Кнопка района
            var buton = jQuery(this);
            buton.onclick = ssilCaller(buton.attr('ssil'));
          }));
        }, 200)
      });

  }

  function clickRazbor() {

    if (idshka == 'zakarpattia_obl') {
      var datalocation = 'http://akyurek.ua/category/zakarpatskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'kirovohrad_obl') {
      var datalocation = 'http://akyurek.ua/category/kirovogradskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'kharkiv_obl') {
      var datalocation = 'http://akyurek.ua/category/harkovskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'luhansk_obl') {
      var datalocation = 'http://akyurek.ua/category/luganskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'donetsk_obl') {
      var datalocation = 'http://akyurek.ua/category/donetskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'dnipropetrovsk_obl') {
      var datalocation = 'http://akyurek.ua/category/dnepropetrovskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'zaporizha_obl') {
      var datalocation = 'http://akyurek.ua/category/zaporozhskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'kherson_obl') {
      var datalocation = 'http://akyurek.ua/category/hersonskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'crimea') {
      var datalocation = 'http://akyurek.ua/category/ar-krym/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'odesa_obl') {
      var datalocation = 'http://akyurek.ua/category/odesskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'vinnytsya_obl') {
      var datalocation = 'http://akyurek.ua/category/vinnitskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'khmelnytsk_obl') {
      var datalocation = 'http://akyurek.ua/category/hmelnitskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'chernivtsi_obl') {
      var datalocation = 'http://akyurek.ua/category/chernovitskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'ivano-frankivsk') {
      var datalocation = 'http://akyurek.ua/category/ivano-frankovskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'ternopil_obl') {
      var datalocation = 'http://akyurek.ua/category/ternopolskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'lviv_obl') {
      var datalocation = 'http://akyurek.ua/category/lvovskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'volynska_obl') {
      var datalocation = 'http://akyurek.ua/category/volynskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'rivne_obl') {
      var datalocation = 'http://akyurek.ua/category/rovnenskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'zhytomyr_obl') {
      var datalocation = 'http://akyurek.ua/category/zhitomirskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'kyiv_obl') {
      var datalocation = 'http://akyurek.ua/category/kievskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'cherkasy_obl') {
      var datalocation = 'http://akyurek.ua/category/cherkasskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'poltava_obl') {
      var datalocation = 'http://akyurek.ua/category/poltavskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'sumy_obl') {
      var datalocation = 'http://akyurek.ua/category/sumskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'chernihov_obl') {
      var datalocation = 'http://akyurek.ua/category/chernigovskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'kyiv') {
      var datalocation = 'http://akyurek.ua/category/kievskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
    if (idshka == 'mykolaiv_obl') {
      var datalocation = 'http://akyurek.ua/category/nikolaevskaya/';
      var datalocation1 = datalocation + 'page/2/';
      var datalocation2 = datalocation + 'page/3/';
      dataPick(datalocation, datalocation1, datalocation2);
    }
  }
  clickRazbor()
})