function shapeStart() {
    setTimeout(function(){ jQuery('#box .c1').animate({"opacity": "1" }, 200) }, 200);
    setTimeout(function(){jQuery('#box .c2').animate({"opacity": "1" }, 200)}, 400);
    setTimeout(function(){jQuery('#box .c3').animate({"opacity": "1" }, 200)}, 600);
    setTimeout(function(){jQuery('#box .c4').animate({"opacity": "1" }, 200)}, 800);
    setTimeout(function(){jQuery('#box .c5').animate({"opacity": "1" }, 200)}, 1000);
  jQuery('.shadowboard').animate({"opacity": "0.3" }, 200);
jQuery('#box .c1').addClass('' + z + '-clip1'); 
jQuery('#box .c2').addClass('' + z + '-clip2'); 
jQuery('#box .c3').addClass('' + z + '-clip3'); 
jQuery('#box .c4').addClass('' + z + '-clip4'); 
jQuery('#box .c5').addClass('' + z + '-clip5'); 
}
function killShapes() {
  jQuery('#box .c1').removeClass('petrush-separ-clip1 petrush-polir-clip1 petrush-trans-clip1 petrush-defence-clip1 petrush-hranenie-clip1'); 
jQuery('#box .c2').removeClass('petrush-separ-clip2 petrush-polir-clip2 petrush-trans-clip2 petrush-defence-clip2 petrush-hranenie-clip2'); 
jQuery('#box .c3').removeClass('petrush-separ-clip3 petrush-polir-clip3 petrush-trans-clip3 petrush-defence-clip3 petrush-hranenie-clip3'); 
jQuery('#box .c4').removeClass('petrush-separ-clip4 petrush-polir-clip4 petrush-trans-clip4 petrush-defence-clip4 petrush-hranenie-clip4'); 
jQuery('#box .c5').removeClass('petrush-separ-clip5 petrush-polir-clip5 petrush-trans-clip5 petrush-defence-clip5 petrush-hranenie-clip5');
}
function animOut() {    
    setTimeout(function(){jQuery('#box .c1').animate({"opacity": "0" }, 200);}, 100)
    setTimeout(function(){jQuery('#box .c2').animate({"opacity": "0" }, 200);}, 200)
    setTimeout(function(){jQuery('#box .c3').animate({"opacity": "0" }, 200);}, 300)
    setTimeout(function(){jQuery('#box .c4').animate({"opacity": "0" }, 200);}, 400)
    setTimeout(function(){jQuery('#box .c5').animate({"opacity": "0" }, 200);}, 500)
    setTimeout(function(){jQuery('.shadowboard').animate({"opacity": "1" }, 200);}, 700)
}
function plata(i){
  jQuery(i).click(function () {
    if (jQuery(this).hasClass('act') != 1){
    jQuery('.prazdnik button').removeClass('act');
    jQuery(this).toggleClass('act');
    } else{
       jQuery('.prazdnik button').removeClass('act');
    }
    
  z = jQuery(this).attr('id');
  if (jQuery('#box').hasClass('default') == 1) {  
shapeStart();
    jQuery('#box').removeClass('default');
    jQuery('#box').addClass(z);
    }
  else
    {
if (jQuery('#box').hasClass(z) == 1) {  
      jQuery('#box').addClass('default').removeClass(z);
      animOut();
setTimeout(function(){
jQuery('#box .c1').removeClass(''+z+'-clip1'); 
jQuery('#box .c2').removeClass(''+z+'-clip2'); 
jQuery('#box .c3').removeClass(''+z+'-clip3'); 
jQuery('#box .c4').removeClass(''+z+'-clip4'); 
jQuery('#box .c5').removeClass(''+z+'-clip5'); }, 1400)
      }
    else 
    {
jQuery('#box').removeClass('petrush-separ').removeClass('petrush-polir').removeClass('petrush-trans').removeClass('petrush-defence').removeClass('petrush-hranenie').addClass(z);
animOut();
    setTimeout(function(){ killShapes(); }, 1400)
    setTimeout(function(){ shapeStart(); }, 1500)
    jQuery('#box').removeClass('default');
    }     
    }  
}); 
}  
plata('#petrush-separ');
plata('#petrush-polir');
plata('#petrush-trans');
plata('#petrush-defence');
plata('#petrush-hranenie');      
         