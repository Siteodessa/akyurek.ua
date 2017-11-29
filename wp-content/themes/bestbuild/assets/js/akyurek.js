  jQuery(document).ready(function(){
     jQuery("aside#text-4").height(jQuery('div#toggleArea').height()+100);
  jQuery('#melnica').addClass('zaaddal');   
  jQuery('#coga').addClass('rotating');

  jQuery('.term-100 div.row  :first').before('') //внешняя обработка

  });





  jQuery('a.accordion-toggle').click(function(){
    $inoc = jQuery(this).find('i');
      $inoc.toggleClass('ratata');
      }); 
//  jQuery('.accordion-toggle').click(function(){
//setTimeout(function() {  
//    jQuery("aside#text-4").height(jQuery('.tbsticky.filters-sidebar').height()+100); 
//}, 100);
//    
//   });
jQuery('.nester.zapasa li').click(function(){ 
  var nom = jQuery(this).attr('nom') ;
  jQuery('.kover.activko').removeClass('activko'); 
  jQuery('.kover.ko'+nom).addClass('activko'); 
  if (nom == 1){
    var urlik = 'http://akyurek.ua/product-category/vneshnyaya-obrabotka-semyan/';
  };
  jQuery('#suda').empty();
  jQuery.ajax({
    url: urlik,
    success: function(data) {
      data=jQuery(data).find('ul.products');
      jQuery('#suda').html(data);
    }
  });  
});
    jQuery('.zones').mouseenter(function(){
      var ent = jQuery(this).attr('ent') ;
      jQuery('.kover.ko'+ent).addClass('activko').css('cursor', 'pointer');

      jQuery('ul.nester.zapasa li:nth-child('+ent+')').addClass('hovered');
      
        });
    jQuery('.sides').mouseenter(function(){
      
         jQuery('ul.nester.zapasa li').removeClass('hovered');
    jQuery('.kover.activko').removeClass('activko');
        });
    jQuery('li.obect').click(function(){
     jQuery('.zones').toggle();
     jQuery('.kover').toggle();
  }); 
  jQuery('.inax').click(function(){ 
  jQuery(this).addClass('loaddin').prepend('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
    var urlik = jQuery(this).attr('href');
    jQuery.ajax({
      url: urlik,
      success: function(data) {
        data=jQuery(data).find('ul.products');
        jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12 .col_in').html(data);
      }
    });
    jQuery.ajax({
      url: urlik,
      success: function(data) {
        data=jQuery(data).find('#woocommerce_layered_nav-3');
        jQuery('div#datazeren').html(data);
          jQuery('#datazeren ul li a').each(function(){ 
            var urlZamena = jQuery(this).attr('href');
            jQuery(this).removeAttr("href");
            jQuery(this).attr('ssil', urlZamena);
          });
          jQuery('#loadd').detach();
         jQuery('.inax.loaddin').removeClass('loaddin');
      }
    });    
    });
    jQuery('#datazeren').on('click', 'a', function (){
    jQuery(this).prepend('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
      var urlikZerna = jQuery(this).attr('ssil');
      jQuery.ajax({
        url: urlikZerna,
        success: function(data) {
          data=jQuery(data).find('ul.products');
          jQuery('.row .col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12 .col_in').html(data);
        }
      });
      jQuery.ajax({
        url: urlikZerna,
        success: function(data) {
          data=jQuery(data).find('#woocommerce_layered_nav-3');
          jQuery('div#datazeren').html(data);
            jQuery('#datazeren ul li a').each(function(){ 
              var urlZamena = jQuery(this).attr('href');
              jQuery(this).removeAttr("href");
              jQuery(this).attr('ssil', urlZamena);
            });
            jQuery('#loadd').detach();
        }
      });
    });






  jQuery('aside td a').click(function(){ 
alert('2');


    });
