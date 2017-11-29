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
  jQuery('#box .c1').removeClass('saflor-separ-clip1 saflor-polir-clip1 saflor-trans-clip1 saflor-defence-clip1 saflor-hranenie-clip1'); 
jQuery('#box .c2').removeClass('saflor-separ-clip2 saflor-polir-clip2 saflor-trans-clip2 saflor-defence-clip2 saflor-hranenie-clip2'); 
jQuery('#box .c3').removeClass('saflor-separ-clip3 saflor-polir-clip3 saflor-trans-clip3 saflor-defence-clip3 saflor-hranenie-clip3'); 
jQuery('#box .c4').removeClass('saflor-separ-clip4 saflor-polir-clip4 saflor-trans-clip4 saflor-defence-clip4 saflor-hranenie-clip4'); 
jQuery('#box .c5').removeClass('saflor-separ-clip5 saflor-polir-clip5 saflor-trans-clip5 saflor-defence-clip5 saflor-hranenie-clip5');
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
jQuery('#box').removeClass('saflor-separ').removeClass('saflor-polir').removeClass('saflor-trans').removeClass('saflor-defence').removeClass('saflor-hranenie').addClass(z);
animOut();
    setTimeout(function(){ killShapes(); }, 1400)
    setTimeout(function(){ shapeStart(); }, 1500)
    jQuery('#box').removeClass('default');
    }     
    }  
}); 
}  
plata('#saflor-separ');
plata('#saflor-polir');
plata('#saflor-trans');
plata('#saflor-defence');
plata('#saflor-hranenie');      
         