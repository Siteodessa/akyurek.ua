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
  jQuery('#box .c1').removeClass('repa-separ-clip1 repa-polir-clip1 repa-trans-clip1 repa-defence-clip1 repa-hranenie-clip1'); 
jQuery('#box .c2').removeClass('repa-separ-clip2 repa-polir-clip2 repa-trans-clip2 repa-defence-clip2 repa-hranenie-clip2'); 
jQuery('#box .c3').removeClass('repa-separ-clip3 repa-polir-clip3 repa-trans-clip3 repa-defence-clip3 repa-hranenie-clip3'); 
jQuery('#box .c4').removeClass('repa-separ-clip4 repa-polir-clip4 repa-trans-clip4 repa-defence-clip4 repa-hranenie-clip4'); 
jQuery('#box .c5').removeClass('repa-separ-clip5 repa-polir-clip5 repa-trans-clip5 repa-defence-clip5 repa-hranenie-clip5');
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
jQuery('#box').removeClass('repa-separ').removeClass('repa-polir').removeClass('repa-trans').removeClass('repa-defence').removeClass('repa-hranenie').addClass(z);
animOut();
    setTimeout(function(){ killShapes(); }, 1400)
    setTimeout(function(){ shapeStart(); }, 1500)
    jQuery('#box').removeClass('default');
    }     
    }  
}); 
}  
plata('#repa-separ');
plata('#repa-polir');
plata('#repa-trans');
plata('#repa-defence');
plata('#repa-hranenie');      
         