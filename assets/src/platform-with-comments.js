function plata(i){
  jQuery(i).click(function () {
  z = jQuery(this).attr('id');
  if (jQuery('#box').hasClass('default') == 1) {  //Если еще не трогался
//    jQuery('#box').addClass(+z+);
jQuery('.shadowboard').animate({"opacity": "0.3" }, 200);
jQuery('#box .c1').addClass(''+z+'-clip1'); 
jQuery('#box .c2').addClass(''+z+'-clip2'); 
jQuery('#box .c3').addClass(''+z+'-clip3'); 
jQuery('#box .c4').addClass(''+z+'-clip4'); 
jQuery('#box .c5').addClass(''+z+'-clip5'); 
    setTimeout(function(){ jQuery('#box .c1').animate({"opacity": "1" }, 200); }, 200)
    setTimeout(function(){jQuery('#box .c2').animate({"opacity": "1" }, 200);}, 400)
    setTimeout(function(){jQuery('#box .c3').animate({"opacity": "1" }, 200);}, 600)
    setTimeout(function(){jQuery('#box .c4').animate({"opacity": "1" }, 200);}, 800)
    setTimeout(function(){jQuery('#box .c5').animate({"opacity": "1" }, 200); }, 1000)
    jQuery('#box').removeClass('default');
    }
  else
    {//Трогался
      //Выясняем кем именно трогался
if (jQuery('#box').hasClass(z) == 1) {  // Если трогалась эта же кнопка, там должен оставаться ее класс с айди
      jQuery('#box').addClass('default');
    setTimeout(function(){jQuery('#box .c1').animate({"opacity": "0" }, 200);}, 200)
    setTimeout(function(){jQuery('#box .c2').animate({"opacity": "0" }, 200);}, 400)
    setTimeout(function(){jQuery('#box .c3').animate({"opacity": "0" }, 200);}, 600)
    setTimeout(function(){jQuery('#box .c4').animate({"opacity": "0" }, 200);}, 800)
    setTimeout(function(){jQuery('#box .c5').animate({"opacity": "0" }, 200);}, 1000)
    setTimeout(function(){jQuery('.shadowboard').animate({"opacity": "1" }, 200);}, 1200)
setTimeout(function(){
jQuery('#box .c1').removeClass(''+z+'-clip1'); 
jQuery('#box .c2').removeClass(''+z+'-clip2'); 
jQuery('#box .c3').removeClass(''+z+'-clip3'); 
jQuery('#box .c4').removeClass(''+z+'-clip4'); 
jQuery('#box .c5').removeClass(''+z+'-clip5'); }, 1400)
      }
    else // Если трогалась, но не эта, там левый айдишник, удаляем возможные классы, метим этим классом
    {
      jQuery('#box').removeClass('yachmen-separ').removeClass('yachmen-polir').removeClass('yachmen-trans').removeClass('yachmen-defence').removeClass('yachmen-hranenie').addClass(z)
    // Разбираем любой чужой
          setTimeout(function(){jQuery('#box .c1').animate({"opacity": "0" }, 200);}, 200)
    setTimeout(function(){jQuery('#box .c2').animate({"opacity": "0" }, 200);}, 400)
    setTimeout(function(){jQuery('#box .c3').animate({"opacity": "0" }, 200);}, 600)
    setTimeout(function(){jQuery('#box .c4').animate({"opacity": "0" }, 200);}, 800)
    setTimeout(function(){jQuery('#box .c5').animate({"opacity": "0" }, 200);}, 1000)
    setTimeout(function(){jQuery('.shadowboard').animate({"opacity": "1" }, 200);}, 1200)
setTimeout(function(){
jQuery('#box .c1').removeClass(''+z+'-clip1'); 
jQuery('#box .c2').removeClass(''+z+'-clip2'); 
jQuery('#box .c3').removeClass(''+z+'-clip3'); 
jQuery('#box .c4').removeClass(''+z+'-clip4'); 
jQuery('#box .c5').removeClass(''+z+'-clip5');
}, 1400)
    // Разобрали любой чужой
    }     //Выяснили кем именно трогался
//      метим, как нетронутый
    jQuery('#box').addClass('default');
//    метим, как нетронутый
    }  
    //else end
}); //click end
}  //func end
       plata('#yachmen-separ');
       plata('#yachmen-polir');
       plata('#yachmen-trans');
       plata('#yachmen-defence');
       plata('#yachmen-hranenie');      //func calls
         