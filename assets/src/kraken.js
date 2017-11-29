function kraken(url, find, dest, sync ) {
    jQuery.ajax({
            async: sync,
            url: url,
            success: function (data) {
                data = jQuery(data).find(find);
                jQuery(dest).append(data);
            }
        });
}
function krakeno(url, find, dest ) {
    jQuery.ajax({
            url: url,
            success: function (data) {
                data = jQuery(data).find(find);
               return data;
            }
        });
}
jQuery(document).ready(function () {
  function apk(){
    
    jQuery('.destroyer').click(function(){
jQuery(this).parent().parent().fadeOut();
  })
      jQuery('.returner').click(function(){
 jQuery('.regi').fadeIn();
  })
       jQuery('.leaver').click(function(){
 jQuery('.regi').fadeOut();
         jQuery(this).parent().parent().fadeIn();
  }) 
  }
   apk();
  jQuery('.swcon').click(function(){

    key = jQuery(this).attr('key');
      jQuery('.agents').hide();
    jQuery('#infogr').find('#kontragenty'+key+'').show();
  })
  kraken('http://akyurek.ua/2017/07/04/kontragenty/', '.orgs', '#kontragenty0', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty1/', '.orgs', '#kontragenty1', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty2/', '.orgs', '#kontragenty2', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty3/', '.orgs', '#kontragenty3', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty4/', '.orgs', '#kontragenty4', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty5/', '.orgs', '#kontragenty5', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty6/', '.orgs', '#kontragenty6', 'false' );
  kraken('http://akyurek.ua/2017/06/29/kontragenty7/', '.orgs', '#kontragenty7', 'false' );
  kraken('http://akyurek.ua/2017/07/03/kontragenty-8/', '.orgs', '#kontragenty8', 'false' );
  kraken('http://akyurek.ua/2017/07/04/novye-kontragenty/', '.orgs', '#kontragenty9', 'false' );
  
setTimeout(function(){
    jQuery('.haribda .org').each(function(){
      card = jQuery(this);
      aorg = jQuery(this).find('a');
      href = aorg.attr('href');
      aorg.attr('href', '');
     card.append('<button class="guider"><a href="'+href+'" target="_blank">Информация о компании</a></button>');
  })
}, 2000)

  setTimeout(function(){
l = jQuery('.org').length
jQuery('#buttongr').before('<div class="baseinfo">На данный момент в базе содержится '+l+' записей</div>')
  }, 6000)
 });