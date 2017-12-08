
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

if(isMobile.any()){
//действие, которое нужно сделать, если браузер мобильный

}
if(isMobile.iOS()){
//действие, которое нужно сделать, если браузер iOS
}

function fastAxe(url, find, before) {
  jQuery.ajax({
    url: url,
    success: function (data) {
      data = jQuery(data).find(find);
      jQuery(before).html(data);
    }
  });
}

function imageOverlay() {
jQuery(this).find('img').before('<div class="overlay"></div>');
}
function cardstossil()
{
   jQuery('.product_thumbnail a').each(function () {
    var prodlink = jQuery(this).attr('href');
    jQuery(this).removeAttr("href");
    jQuery(this).attr('ssil', prodlink);
});

}


var loading = { 
    show: function() {
        jQuery('.midok').css('z-index', '10');
},  
    hide: function() {
        jQuery('.midok').css('z-index', '-1');
} 
}

function LiveFrame(){
        var liveEditorLink = jQuery('a.post-edit-link').attr('href');
    jQuery('iframe#liveredactor').attr('src', liveEditorLink);
}
function catax(sprodurl)
{
    jQuery('.multiview').css('display', 'none');
  loading.show();
  ( function(){
    window.location.hash = jQuery(this).attr('gid');
  })
         if(isMobile.any()){
        var scrollTop = jQuery('.col-sm-12').offset().top;
          if (scrollTop != 'undefined'){
            
        jQuery('html,body').animate({
          scrollTop: scrollTop - 20
        }, 380);
          } else{ 
            
          }
}
  else
    {
             var scrollTop = jQuery('li#menu-item-6271').offset().top;
          if (scrollTop != 'undefined'){
            
        jQuery('html,body').animate({
          scrollTop: scrollTop + 20
        }, 380);
          } else{
              jQuery('.entry-header.clearfix').after('<div id="scrolltome"></div>');
                         var scrollTop = jQuery('#scrolltome').offset().top;
                    jQuery('html,body').animate({
          scrollTop: scrollTop + 20
        }, 380);
          } 
    }


 setTimeout(function () {
  jQuery('ul.products').first().addClass('loaddin').before('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
  jQuery.ajax({
    url: sprodurl,
    success: function (data) {
              window.location.hash = sprodurl.substring(30);
      data = jQuery(data).find('.col_in.__padd-left.__three-cols');
      jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').html(data).animate({
        opacity: 1,
      }, 500);
      aniPro();
        setTimeout(function () {
          cardstossil()
      }, 400)
    }
  }).done(function () {
    aniPro();  
  jQuery('.product_thumbnail a img').unwrap();    
  });
        jQuery.ajax({
        url: sprodurl,
        success: function (data) {
            data = jQuery(data).find('.entry-header.clearfix');
            jQuery('.entry-header.clearfix').detach();
            jQuery('#platform').before(data);
            setTimeout(function () {
                jQuery('div.breadcrumbs a').each(function () {
                    var prodlink = jQuery(this).attr('href');
                    jQuery(this).removeAttr("href");
                    jQuery(this).attr('ssil', prodlink);
                });
                spinner();aniPro()
            }, 400);
        }
    }).done(function(){
            goSwap();  
          iteRation(jQuery('ul.products li'), 1000, 100, ' visible');
        });
  setTimeout(function(){
   jQuery('.product_images img').addClass('unfixed')  ;    
    goSwap();
    loading.hide();
    LiveFrame();
    iteRation(jQuery('ul.products li'), 1000, 100, ' visible');
   jQuery('.pdf-holder').wrap('<div class="pdf-wrapper"></div>')  ;    
   jQuery('.pdf-wrapper').prepend('<p class="doc-n">Документация</p>')  ;    
    
}, 1200) 
         }, 400);
}

//--------------------
jQuery('aside td a').click(function () {
loading.show();
    var sprodurl = jQuery(this).attr('ssil');
    jQuery.ajax({
        url: sprodurl,
        success: function (data) {
            data = jQuery(data).find('.col_in.__padd-left.__three-cols');
            jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').animate({
                opacity: 0,
            }, 0);
            jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').html(data).animate({
                opacity: 1,
            }, 500)
        }
    });
    jQuery.ajax({
        url: sprodurl,
        success: function (data) {
            data = jQuery(data).find('.entry-header.clearfix.small');
            jQuery('.entry-header.clearfix.small').detach();
            jQuery('#platform').before(data);
            setTimeout(function () {
                jQuery('div.breadcrumbs a').each(function () {
                    var prodlink = jQuery(this).attr('href');
                    jQuery(this).removeAttr("href");
                    jQuery(this).attr('ssil', prodlink);
                });
                spinner();
            }, 400);
        }
    });
    jQuery(this).removeClass('loaddin');
    jQuery('#loadd').detach();
loading.hide();

});
  jQuery(document).ready(function () { 
  
    if (jQuery(document).find('.pdf')){
    jQuery('.pdf').append('<i class="fa document fa-file-text"></i>');
    }
    
    
    
    jQuery('.newlang').on('click', '.select2-results ul li', (function(){
      alert('text')
    }))

     // jQuery('.other.stylerr3').replaceWith(menuzer);
    jQuery('ul.products li').each(function(){
      var cataxVal = jQuery(this).attr('onclick');
//       heroVal = cataxVal.slice(37, -3); 
//      jQuery(this).attr('gid', heroVal);
    });
      loading.hide();
    msieversion();
      jQuery('div#vn .fullscreen-bg video source').attr('src', '');
//      jQuery('div#vn .fullscreen-bg video').detach();
      
      setTimeout(function(){
          
      jQuery('div#vn .fullscreen-bg video source').attr('src', '');
      },1200);
    
  });