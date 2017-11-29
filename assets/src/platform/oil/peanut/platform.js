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
  jQuery('#box .c1').removeClass('peanut-separ-clip1 peanut-polir-clip1 peanut-trans-clip1 peanut-defence-clip1 peanut-hranenie-clip1'); 
jQuery('#box .c2').removeClass('peanut-separ-clip2 peanut-polir-clip2 peanut-trans-clip2 peanut-defence-clip2 peanut-hranenie-clip2'); 
jQuery('#box .c3').removeClass('peanut-separ-clip3 peanut-polir-clip3 peanut-trans-clip3 peanut-defence-clip3 peanut-hranenie-clip3'); 
jQuery('#box .c4').removeClass('peanut-separ-clip4 peanut-polir-clip4 peanut-trans-clip4 peanut-defence-clip4 peanut-hranenie-clip4'); 
jQuery('#box .c5').removeClass('peanut-separ-clip5 peanut-polir-clip5 peanut-trans-clip5 peanut-defence-clip5 peanut-hranenie-clip5');
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
jQuery('#box').removeClass('peanut-separ').removeClass('peanut-polir').removeClass('peanut-trans').removeClass('peanut-defence').removeClass('peanut-hranenie').addClass(z);
animOut();
    setTimeout(function(){ killShapes(); }, 1400)
    setTimeout(function(){ shapeStart(); }, 1500)
    jQuery('#box').removeClass('default');
    }     
    }  
}); 
}  
plata('#peanut-separ');
plata('#peanut-polir');
plata('#peanut-trans');
plata('#peanut-defence');
plata('#peanut-hranenie');      
         