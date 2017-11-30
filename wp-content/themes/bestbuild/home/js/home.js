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

  jQuery('.lama-lazy').each(function(){
    var attra = jQuery(this).attr('data-src');
     jQuery(this).attr('src', attra);
  });
  console.log('lazyloaded');
}


document.addEventListener("DOMContentLoaded", lazyImage);
