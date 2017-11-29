  var wilo = String(window.location);
 if (wilo.indexOf('http://akyurek.ua/wp-admin/admin.php?page=save_contact_form_7') != -1) {
            jQuery('.update-nag').detach();
            jQuery('input#copier').css('opacity', '0');
            jQuery('.main_heading h3').text('Заполненные контактные формы');
            jQuery('div#nimble_table_wrapper h4').text('нажмите выше и выберите раздел');
//            jQuery('select#nimble_cf7_names optgroup').attr('label', 'Доступные анкеты');
//            jQuery('select#nimble_cf7_names option').text('Выберите анкету');
//            jQuery('optgroup option').text('Заявки');
            jQuery('optgroup option:nth-child(2)').text('Посетители Akyurek');
            jQuery('a.dt-button.buttons-csv.buttons-html5 span').text('Excell');
   setTimeout(function(){
            jQuery('a.dt-button.buttons-csv.buttons-html5 span').text('Скачать таблицей');
            jQuery('a.dt-button.buttons-pdf.buttons-html5 span').text('Скачать как PDF');
            jQuery('a.dt-button.buttons-print span').text('На печать');
        setTimeout(function(){
                 jQuery('.dataTables_wrapper').css('display', 'flex');
   },120);
        setTimeout(function(){
                 jQuery('.dataTables_wrapper').css('flex-wrap', 'wrap');
   },140);
        setTimeout(function(){
                 jQuery('.dataTables_wrapper').css('align-items', 'center');
   },160);
        setTimeout(function(){
                 jQuery('.dataTables_wrapper').css('justify-content', 'center');
                 jQuery('input[type="search"]').css('border', '1px solid #999');
                 jQuery('input[type="search"]').css('border-radius', '2px');
                 jQuery('input[type="search"]').css('margin-top', '12px');
                 jQuery('input[type="search"]').css('padding', '6px');
   },180);
   },1200);
 }  
   if (wilo.indexOf('page=flamingo_inbound&') != -1) {
jQuery('h1').text('Входящие сообщения');
jQuery('h1').after('<br><a class="btn red shda">Показать дату записи</a>');
     
     
     jQuery('.shda').click(function(){
jQuery('abbr').toggle();
     
     })
jQuery('.update-nag').detach();
jQuery('input#copier').css('opacity', '0');
jQuery('th#subject a').text('На что потрачено');
jQuery('th#from a').text('Сколько');
     
     
  

jQuery('abbr').css('display', 'none')
jQuery('tbody#the-list tr').each(function () {
  var editorbutton = jQuery(this).find('span.edit a');
  var zis = jQuery(this)
  var editLink = editorbutton.attr('href');

    jQuery.ajax({
      url: editLink,
      async: true,
      success: function (data) {
        datapokupki = jQuery(data).find('div#normal-sortables');
        datapokupki = datapokupki.find('div#inboundmetadiv tr:nth-child(4) td.field-value')
zis.find('td').last().prepend(datapokupki);
zis.find('td').last().prepend('куплено');

        
      }
    })
  

//  jQuery(this).find('td').first().prepend(shopdate)
//  jQuery('div#wpbody-content').after(shopdate)

  
})
     
     
     
     
     
     
     
     
     
     
 }  
 if (wilo.indexOf('/wp-admin/admin.php?page=flamingo_inbound&post') != -1) {
 var halflink = jQuery(' tbody tr:nth-child(5) td.field-value p').first().text();
  var fulllink = ('http://akyurek.ua/wp-content/uploads/wpcf7_uploads/'+halflink);
 jQuery(' tbody tr:nth-child(5) td.field-value p').empty().append('<img src="'+fulllink+'" />');
 }  
 if (wilo.indexOf('admin.php?page=gwolle-gb') != -1) {
jQuery('h1').after('<div id="ipcheck"><div><a class="btn redd" target="_blank" href="http://xseo.in/ipinfo">Проверка страны и города по IP</a> </div> </div>');
   jQuery('td.entry-author-name').each(function(){
if (jQuery(this).text().indexOf('66.249.64.1') != -1){
jQuery(this).append('Это GOOGLE BOT');
jQuery(this).css('border', '1px solid #444');
jQuery(this).css('opacity', '.5');
}
if (jQuery(this).text().indexOf('66.249.') != -1){
jQuery(this).append('Это GOOGLE BOT');
jQuery(this).css('border', '1px solid #444');
jQuery(this).css('opacity', '.5');
jQuery(this).parent('tr').detach();
}
if (jQuery(this).text().indexOf('87.117.37.1') != -1){
jQuery(this).append('Это Ростов-на-Дону(Родион)');
jQuery(this).css('border', '5px double #3036cb');
  jQuery(this).parent('tr').detach();
}     
if (jQuery(this).text().indexOf('87.117.38.2') != -1){
jQuery(this).append('Это Ростов-на-Дону(Родион)');
jQuery(this).css('border', '5px double #3036cb');
    jQuery(this).parent('tr').detach();
}    
if (jQuery(this).text().indexOf('5.167.52.36') != -1){
jQuery(this).append('Это Ростов-на-Дону DOM.RU (возможно Родион)');
jQuery(this).css('border', '5px double #3036cb');
    jQuery(this).parent('tr').detach();
}
if (jQuery(this).text().indexOf('213.180.203.62') != -1){
jQuery(this).append('Это Москва, Регион 66');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('109.173.25.162') != -1){
jQuery(this).append('Это Москва, Регион 48');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('178.70.244.') != -1){
jQuery(this).append('Это Россия, Санкт-Петербург');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('62.209.152.51') != -1){
jQuery(this).append('Это Узбеки');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('79.112.207.178') != -1){
jQuery(this).append('Это Romania, Barlad');
jQuery(this).css('border', '5px double #30cb48');
}    
if (jQuery(this).text().indexOf('81.25.229.176') != -1){
jQuery(this).append('Это Одесса, провайдер Skyline ');
jQuery(this).css('border', '5px double #30cb48');
}
    if (jQuery(this).text().indexOf('5.56.125.167') != -1){
jQuery(this).append('Это Молдова, город Чисинау Chisinau ');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('85.238.') != -1 ||  jQuery(this).text().indexOf('188.115.154.') != -1 || jQuery(this).text().indexOf('212.178.5.') != -1 || jQuery(this).text().indexOf('31.31.117.') != -1 || jQuery(this).text().indexOf('195.138.68.') != -1 || jQuery(this).text().indexOf('62.16.18.') != -1){
jQuery(this).append('Это Одесса, провайдер Tenet ');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('217.147.161.146') != -1){
jQuery(this).append('Это Украина, Киев');
jQuery(this).css('border', '5px double #30cb48');
}        
if (jQuery(this).text().indexOf('91.208.20.154') != -1){
jQuery(this).append('Это Россия Курск');
jQuery(this).css('border', '5px double #30cb48');
}        
if (jQuery(this).text().indexOf('46.101.82.181') != -1){
jQuery(this).append('Это Лондон');
jQuery(this).css('border', '5px double #30cb48');
}        
if (jQuery(this).text().indexOf('194.44.173.150') != -1){
jQuery(this).append('Это Украина, Тернополь');
jQuery(this).css('border', '5px double #30cb48');
}          
if (jQuery(this).text().indexOf('78.27.133.196') != -1){
jQuery(this).append('Это Украина, Киев');
jQuery(this).css('border', '5px double #30cb48');
}          
if (jQuery(this).text().indexOf('37.73.245') != -1){
jQuery(this).append('Это Украина, Lifecell');
jQuery(this).css('border', '5px double #30cb48');
}                
if (jQuery(this).text().indexOf('46.133.2') != -1){
jQuery(this).append('Это Украина, MTS-Vodafone');
jQuery(this).css('border', '5px double #30cb48');
}          
if (jQuery(this).text().indexOf('37.73.2') != -1){
jQuery(this).append('Это Украина, Lifecell');
jQuery(this).css('border', '5px double #30cb48');
}          
     if (jQuery(this).text().indexOf('178.136.5') != -1){
jQuery(this).append('Это Украина, Odessa, Vega');
jQuery(this).css('border', '5px double #30cb48');
}            
     if (jQuery(this).text().indexOf('46.63.52.1') != -1){
jQuery(this).append('Это Украина, Хмельницкий');
jQuery(this).css('border', '5px double #30cb48');
}      
     if (jQuery(this).text().indexOf('87.250.224.') != -1 || jQuery(this).text().indexOf('85.140.5.') != -1){
jQuery(this).append('Это Москва');
jQuery(this).css('border', '5px double #30cb48');
}   
     if (jQuery(this).text().indexOf('93.170.108.') != -1){
jQuery(this).append('Это Россия, Белгород');
jQuery(this).css('border', '5px double #30cb48');
}      
     if (jQuery(this).text().indexOf('62.183.124.34') != -1){
jQuery(this).append('Это Россия, Краснодар');
jQuery(this).css('border', '5px double #30cb48');
}   
     if (jQuery(this).text().indexOf('188.163.80.') != -1){
jQuery(this).append('Это Украина, Харьков');
jQuery(this).css('border', '5px double #30cb48');
}                 
     if (jQuery(this).text().indexOf('31.43.79.117') != -1){
jQuery(this).append('Это Украина, Львов');
jQuery(this).css('border', '5px double #30cb48');
}          
if (jQuery(this).text().indexOf('92.60.179.218') != -1){
jQuery(this).append('Это Украина, Киев Wnet Domonet');
jQuery(this).css('border', '5px double #30cb48');
}         
if (jQuery(this).text().indexOf('134.249.183') != -1){
jQuery(this).append('Это Украина, Киевстар');
jQuery(this).css('border', '5px double #30cb48');
}         
if (jQuery(this).text().indexOf('46.211.1') != -1){
jQuery(this).append('Это Украина, Киевстар');
jQuery(this).css('border', '5px double #30cb48');
}          
if (jQuery(this).text().indexOf('194.54.162.22') != -1){
jQuery(this).append('Это Украина, ip офиса Akyurek, компьютер Амаля, больше не фиксируется');
jQuery(this).css('border', '5px double #30cb48');
}     
     if (jQuery(this).text().indexOf('94.27.58.190') != -1){
jQuery(this).append('Это Украина, Запорожье');
jQuery(this).css('border', '5px double #30cb48');
}     
if (jQuery(this).text().indexOf('37.73.228.52') != -1){
jQuery(this).append('Это Украина, Мобильный телефон');
jQuery(this).css('border', '5px double #30cb48');
}
     if (jQuery(this).text().indexOf('37.25.123.5') != -1){
jQuery(this).append('Это Украина, Николаев');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('31.128.110.147') != -1){
jQuery(this).append('Это Украина, Мобильный телефон СевероДонецк');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('185.137.18.166') != -1){
jQuery(this).append('Это Нидерланды, Амстердам');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('185.76.') != -1){
jQuery(this).append('Это Нидерланды, Амстердам');
jQuery(this).css('border', '5px double #30cb48');
}
     if (jQuery(this).text().indexOf('188.166.81.') != -1){
jQuery(this).append('Это Нидерланды, Амстердам');
jQuery(this).css('border', '5px double #30cb48');
}  
     if (jQuery(this).text().indexOf('185.137.17.') != -1){
jQuery(this).append('Это Нидерланды, Амстердам');
jQuery(this).css('border', '5px double #30cb48');
}
if (jQuery(this).text().indexOf('78.182.83.144') != -1){
jQuery(this).append('Это Турция, Стамбул');
jQuery(this).css('border', '5px double #30cb48');
}
     else{
     }
   })
 }