jQuery('span.over').mouseover(function(){

   jQuery(this).addClass('hvr');
});

jQuery('span.over').mouseleave(function(){

   jQuery(this).removeClass('hvr');
})


jQuery(document).ready(function($) {
  var counter_7554 = new countUp("counter_7554", 0, 5677, 0, 2.5, {
    useEasing: true,
    useGrouping: false,
    prefix: '',
    suffix: ''
  });
  var counter_1248 = new countUp("counter_1248", 0, 1485, 0, 2.5, {
    useEasing: true,
    useGrouping: false,
    prefix: '',
    suffix: ''
  });
  var counter_6210 = new countUp("counter_6210", 0, 114, 0, 2.5, {
    useEasing: true,
    useGrouping: false,
    prefix: '',
    suffix: ''
  });
  $(window).scroll(function() {
    if ($("#counter_6210").is_on_screen()) {
      counter_6210.start();
    }
    if ($("#counter_7554").is_on_screen()) {
      counter_7554.start();
    }
    if ($("#counter_1248").is_on_screen()) {
      counter_1248.start();
    }
  });
});
jQuery('.rubrika-proj').on('mouseover', function () {

jQuery(this).addClass('hvrd');
}).on('mouseleave', function () {

jQuery(this).removeClass('hvrd');
})




function lazyImage(){
setTimeout(function(){

  jQuery('.lama-lazy').each(function(){
    var attra = jQuery(this).attr('data-src');
     jQuery(this).attr('src', attra);     jQuery(this).removeAttr('data-src');
  });
  console.log('lazyloaded');
}, 10)
}


document.addEventListener("DOMContentLoaded", lazyImage);








jQuery('ul#menu-tempo-menu').ready(function(){
  jQuery('li#menu-item-6266, li#menu-item-8491, li#menu-item-8559, li#menu-item-8715, li#menu-item-6268, li#menu-item-6269, li#menu-item-6271').addClass('iv');
  setTimeout(function(){
   // new Watcher('ul#menu-tempo-menu', 'iv', 'vi');
  },8)
});

new Watcher('.grid', 'effect-ming', 'vi');
new Watcher('.header_top.clearfix', 'iv', 'vi');
new Watcher('div#main .wpb_wrapper .sl-top', 'iv', 'vi');
new Watcher('.a1', 'iv', 'vi');
new Watcher('header', 'iv', 'vi');
new Watcher('.darky', 'ivl', 'vi');
new Watcher('.valueable.frst.vc_row.wpb_row.vc_inner.vc_row-fluid', 'ivl', 'vi');
new Watcher('.valueable.vc_row.wpb_row.vc_inner.vc_row-fluid.scond', 'ivl', 'vi');
new Watcher('.col-md-12.w3agile_blog_left.parnt', 'ivl', 'vi');


setTimeout(function(){
// new Watcher('.footer_widgets_wrapper', 'menu-item', 'vi');
new Watcher('.prefoo', 'menu-item', 'vi');
new Watcher('.okom', 'iv', 'vi');
},1000)



// ПРОБЛЕМА тут - ul.products не существует на главной

// Вторая проблема - какая то хрень считает в футере делай от 8 секунд
// new Watcher('ul.products', 'iv', 'vi');
