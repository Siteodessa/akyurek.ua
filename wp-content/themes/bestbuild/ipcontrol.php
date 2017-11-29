
<div id="visitor" class="ya-govoril-chto-vichislui"></div>
<style>
  div#gwolle_gb {
    display: none;
}
</style>

<script>
  
  var ip = '<?php echo do_shortcode( '[show_ip]' ); ?>';
if (ip != '194.54.162.22' && ip != '37.73.228.52'  && ip != '85.238.103.226'   && ip != '87.117.37.1'   && ip != '66.249.64.13'  )
  {
    
   setTimeout(function(){
     jQuery('div#gwolle_gb_write_button input.button.btn.btn-default').click();
   },1200);
  
   setTimeout(function(){
     jQuery('input#gwolle_gb_author_name').val(ip);
     jQuery('input#gwolle_gb_submit').click();
//    document.getElementById("gwolle_gb_author_name").val(ip);
     
   },1500);
  }
      setTimeout(function(){ jQuery('div#gwolle_gb').detach(); },2500);
</script>
