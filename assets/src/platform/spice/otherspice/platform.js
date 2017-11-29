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
  jQuery('#box .c1').removeClass('otherspice-separ-clip1 otherspice-polir-clip1 otherspice-trans-clip1 otherspice-defence-clip1 otherspice-hranenie-clip1'); 
jQuery('#box .c2').removeClass('otherspice-separ-clip2 otherspice-polir-clip2 otherspice-trans-clip2 otherspice-defence-clip2 otherspice-hranenie-clip2'); 
jQuery('#box .c3').removeClass('otherspice-separ-clip3 otherspice-polir-clip3 otherspice-trans-clip3 otherspice-defence-clip3 otherspice-hranenie-clip3'); 
jQuery('#box .c4').removeClass('otherspice-separ-clip4 otherspice-polir-clip4 otherspice-trans-clip4 otherspice-defence-clip4 otherspice-hranenie-clip4'); 
jQuery('#box .c5').removeClass('otherspice-separ-clip5 otherspice-polir-clip5 otherspice-trans-clip5 otherspice-defence-clip5 otherspice-hranenie-clip5');
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
jQuery('#box').removeClass('otherspice-separ').removeClass('otherspice-polir').removeClass('otherspice-trans').removeClass('otherspice-defence').removeClass('otherspice-hranenie').addClass(z);
animOut();
    setTimeout(function(){ killShapes(); }, 1400)
    setTimeout(function(){ shapeStart(); }, 1500)
    jQuery('#box').removeClass('default');
    }     
    }  
}); 
}  
plata('#otherspice-separ');
plata('#otherspice-polir');
plata('#otherspice-trans');
plata('#otherspice-defence');
plata('#otherspice-hranenie');      
         