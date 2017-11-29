
//SRC копия

function iteRnumber(obj, iterclass) {
  for (var i = 0; i < obj.length; i++) {    
   (function(i) {
         obj[i].className += iterclass;
         obj[i].className += i;
   })
   (i);
}
}
function cHanger(position, slova){
  jQuery(position).first().text(slova);
}
function fixIfLanguageChanged(){
var language = { 
    langcheck: function() {
      var contacts = jQuery('li#menu-item-6271 a').text();
 if (contacts == 'Contacts'){
englishHeadFootFix();
    if (window.location == 'http://akyurek.ua/'){
   englishHomeFix();
    }
   var wilo = String(window.location);
      if (wilo.indexOf('fastshop') != -1){
englishShopFix();
    }
   if (wilo.indexOf('our-team-transparent') != -1){
englishTeamFix();
    }
   if (wilo.indexOf('1932-2') != -1){
englishVideoFix();
    }
   if (wilo.indexOf('projects') != -1){
englishProjectsFix();
    }
   if (wilo.indexOf('contact-us') != -1){
englishContactsFix();
    }
 }
//    if (contacts == 'kontaklar'){                        // Проверка на турецкий и запуск соответствующих столов-функций
//turkHeadFootFix();
//    if (window.location == 'http://akyurek.ua/'){
//   turkHomeFix();
//    }
//   var wilo = String(window.location);
//      if (wilo.indexOf('fastshop') != -1){
//turkShopFix();
//    }
//   if (wilo.indexOf('our-team-transparent') != -1){
//turkTeamFix();
//    }
//   if (wilo.indexOf('1932-2') != -1){
//turkVideoFix();
//    }
//   if (wilo.indexOf('projects') != -1){
//turkProjectsFix();
//    }
//   if (wilo.indexOf('contact-us') != -1){
//turkContactsFix();
//    }
// } 
      if (contacts == 'Контакти'){                        // Проверка на украинский
ukrHeadFootFix();
    if (window.location == 'http://akyurek.ua/'){
   ukrHomeFix();
    }
   var wilo = String(window.location);
      if (wilo.indexOf('fastshop') != -1){
ukrShopFix();
    }
   if (wilo.indexOf('our-team-transparent') != -1){
ukrTeamFix();
    }
   if (wilo.indexOf('1932-2') != -1){
ukrVideoFix();
    }
   if (wilo.indexOf('projects') != -1){
ukrProjectsFix();
    }
   if (wilo.indexOf('contact-us') != -1){
ukrContactsFix();
    }
 }  
 } 
}

  jQuery(document).ready(function(){
    setInterval(function(){
  language.langcheck();  
}, 4000);
  });
}
//--------------English phrase tables
function englishHeadFootFix(){  
  //HEADER
  cHanger('li#menu-item-6266 a font font', 'Home');   //header меню     Магазин
  cHanger('li#menu-item-6267 a font font', 'Shop');   //header меню     Магазин
cHanger('li#menu-item-6272 a font font', 'Seed separators');   //header меню     Сепараторы семян
cHanger('li#menu-item-6273 a font font', 'Seed treaters');   //header меню   	Протравливатели семян
cHanger('li#menu-item-6274 a font font', 'Seed hullers');   //header меню   	Шелушители семян
cHanger('li#menu-item-6275 a font font', 'Seed polishers');   //header меню   	Полировальные машины
cHanger('li#menu-item-6276 a font font', 'Transport system');   //header меню   	Транспортная система
cHanger('li#menu-item-6277 a font font', 'Scales and Packaging');   //header меню   	Весы и упаковка
cHanger('li#menu-item-6278 a font font', 'Dust control');   //header меню   	Защита от пыли
cHanger('li#menu-item-6279 a font font', 'Storage');   //header меню   	Бункеры для хранения
cHanger('.header_top.clear.container .icon_text.clearfix+.icon_text.clear.text strong font', 'Mon - Fri 9.00 - 18.00');   //header working hours
cHanger('.header_top.clear.container .icon_text.clearfix+.icon_text.clear.text span font', 'Sat - closed, call us');   //header working hours
  cHanger('.header_top.clear.container .icon_text.clear.text font', '161 Chernomorskogo Kazachestva '); // header adress
  jQuery('select.goog-te-combo option:nth-child(1)').text('Русский')
  jQuery('select.goog-te-combo option:nth-child(2)').text('English')
  jQuery('select.goog-te-combo option:nth-child(3)').text('Українська')
  
  // HEADER
//  footer
  cHanger('#menu-item-1718 font font', 'Seed separators');          //footer menu    
  cHanger('#menu-item-1717 font font', 'Seed treaters');            //footer menu
  cHanger('#menu-item-1716 font font', 'Seed hullers');        //footer menu
  cHanger('#menu-item-1719 font font', 'Seed polishers');   //footer menu     
  cHanger('#menu-item-1720 font font', 'Transport system');        //footer menu
  cHanger('#menu-item-1721 font font', 'Scales and Packaging');//footer menu      
  cHanger('#menu-item-1722 font font', 'Dust control and Aspirators');   //footer menu   
  cHanger('#menu-item-1723 font font', 'Storage and silos');   //footer menu   
  cHanger('aside#contacts-4 li font font', '161 Chernomorskogo Kazachestva ukraine, odessa');   //footer adress
    cHanger('aside#contacts-4 li.phonos font', '+38066 500 22 12');  //footer numbers
  cHanger('aside#contacts-4 li.phonos+li.phonos font', ' ');
  cHanger('aside#contacts-4 li.phonos+li.phonos+li.phonos font', '');
//  footer
}
function englishHomeFix(){
 //home 
  cHanger('.lama-slide.sway1 .ls-lineone font font', 'We produce solutions for');
  cHanger('.lama-slide.sway1 .ls-linetwo font font', 'seed cleaning, processing and storage');
  cHanger('.vc_call_to_action h4 font', 'Looking for grain Equipment for your business?');
  //dexter
  cHanger('figure.effect-dexter h2 font font', 'Seed ');
  cHanger('figure.effect-dexter span font font', 'Separators');
  cHanger('.dx3 span font font', 'Cleaning');
  cHanger('.dx4 h2 font font', 'Super Fine ');
  cHanger('.dx5 h2 font font', 'Fine ');
  cHanger('.dx5 span font font', 'Cleaners');
  cHanger('.dx6 h2 font font', 'Screen  ');
  cHanger('.dx6 span font font', 'graders');
  cHanger('.dx7 h2 font font', '"All in one"  ');
  cHanger('.dx7 span font font', 'cleaners');  
  cHanger('.dx10 h2 font font', 'Length  ');
  cHanger('.dx10 span font font', 'Separators');
  cHanger('.dx12 h2 font font', 'Color  ');
  cHanger('.dx12 span font font', 'Sorters');
  cHanger('.dx13 span font font', 'conveyor belts');
  cHanger('.dx15 h2 font font', 'De');
  cHanger('.dx15 span font font', 'Awners & Brush Machines');
  cHanger('.dx16 span font font', 'Roller');
  cHanger('.dx21 h2 font font', 'Seed ');
  cHanger('.dx21 span font font', 'Treaters');
  cHanger('.dx22 h2 font font', 'Seed ');
  cHanger('.dx22 span font font', 'Hullers');
  cHanger('.dx23 h2 font font', 'Seed ');
  cHanger('.dx23 span font font', 'polishers');
  cHanger('.dx26 h2 font font', 'Dust ');
  cHanger('.dx26 span font font', 'control');
  cHanger('.dx28 h2 font font', 'View ');
  cHanger('.dx28 span font font', 'all');
  //dexter
//  Completed projects
  cHanger('.bexer .clearfix h2 font', 'Completed projects');
  cHanger('button#injax-sep', 'Seed separators');
  cHanger('button#injax-pro', 'Treaters');
  cHanger('button#injax-shell', 'Hullers');
  cHanger('button#injax-poli', 'Polishers');
  cHanger('button#injax-trans', 'Transport system');
  cHanger('button#injax-aspi', 'Aspiration');
//  Completed projects
  //WHY CUSTOMERS APPRECIATE
  cHanger('.vc_custom_1434360560849 h2', 'Why customers appreciate us?');
cHanger('.vc_custom_1430984621402 p font font', 'Akyurek TM equipment is designed for high-grade industrial process, without purchasing additional equipment.');
cHanger('.vc_custom_1430984633960 p font font', 'We care about the long-term reputation of our company. We strictly adhere to all the conditions of the client, especially concerning  delivery conditions  or technical characteristics of the equipment');
  jQuery('.vc_custom_1430984646736 p font').first().empty().text('The transition from the old to the new equipment is always mentionable. But the transition to Akyurek grain processing machines is mentionable even after the modern equipment. This indisputable fact is confirmed by the popularity of our products in all continents.');
  cHanger('.vc_custom_1430984652744 p font font', 'Full range of high-performance equipment for grain pre-cleaning, refined grains filtering, sorting by size and packaging, will allows to supply whole regional centers of your country. ');
  cHanger('.whyr21 p font', 'All equipment provided on the site, is available for inspection by Skype or live at 161 Chernomorskogo kazachestva st.  in Odessa, Ukraine ');
  cHanger('.whyr22 p font', 'Our consultants are always ready to help you with setup or if you forget something. We are always happy to help our customers and thanking them for abiding us. ');
  jQuery('.whyr23 p font').empty();
  jQuery('.whyr23 p font').first().text('All Akyurek equipment surpasses most common global quality standards, setting the trend in the development of seed processing area. Our products are absolutely safe for the environment and your employees');
  cHanger('.whyr24 p font', 'We - world-renowned manufacturer with more than 40-year history, our equipment participates and wins in international competitions and conferences. Follow our news section  ');
  //WHY CUSTOMERS APPRECIATE
//  VSTAV ORIG TEXTA
  //Video banner
  cHanger('div#vn h2 font font', 'Equipment for the processing of all kinds of seeds '); 
    //homepage video banner css button
  jQuery('.home-content h2 font').first().css('display', 'flex').css('flex-direction', 'column');
  jQuery('.home-content h2 small').first().css('display', 'none');
  jQuery('.home-content h2 small').text('View hardware');
  //homepage video banner css button
  //Video banner
  //Testimonial
  cHanger('.testimonials_module+.testimonials_module p font', '"We were offered to familiarize with the work of equipment, and being satisfied with the result, we remain loyal to Akyurek since it provides our company through all stages of work. Thank your team!"'); 
//    «Нам предложили лично ознакомиться с работой оборудования, результатом остались довольны , теперь «Akyurek» снабжает нашу компанию оборудованием для всех этапов работы с зерном.
  cHanger('.testimonials_module+.testimonials_module+.testimonials_module p font', '"For the competition in today\'s market, you have to pick the equipment with the high-bandwidth and stability. We decided to purchase  Akyurek Excell 200 separators, due to technical requirements and low price, and never regret it"'); 
//  «Для конкуренции на современном рынке, приходится брать машины с большой пропускной способностью и стабильностью работы. А тут бренд и по хорошей цене, мы приобрели сепараторы Akyurek Excell 200»
  //Testimonial
//  prefooter about block
  jQuery('.vc_custom_1430826296347 p font').empty();
  jQuery('.vc_custom_1430826296347 p font').first().text('"Life begins from seeds" The unique nature of the grain was always appreciated by Akyurek. Nature itself has inspired to value its secrets and taught us to pay attention on details. These secrets allow us to produce the highest quality seed cleaning processing for our valued customers ..');
  
  jQuery('.vc_custom_1430826301380 div font').empty();
    jQuery('.vc_custom_1430826301380 div div div div font').first().text('Akyurek produces turnkey solutions for various production capacities relying on customer\'s requests. We provide a wide range for all stages of work with the grain. ');
  cHanger('.vc_custom_1430826301380 div+div button font', 'CHOICE OF SOLUTIONS FOR PROCESSING STAGES');
  jQuery('.vc_custom_1430826301380 div+div button').detach();
  jQuery('.vc_custom_1430826306257 div font').empty();
    jQuery('.vc_custom_1430826306257 div div div div font').first().text('Akyurek TM - a manufacturer of equipment Combine cereal, oil and any other seeds in the food industry. A complete list of supported cultures, you can find by clicking on the link. ');
  cHanger('.vc_custom_1430826306257 div+div button font', 'SELECTION BY TYPE OF GRAIN');
    jQuery('.vc_custom_1430826306257 div+div button').detach();
  
//  prefooter about block
   //home 
}
function englishShopFix(){
  // FS menu
 cHanger('.accordion-sep strong', 'Seed separators');          //fastshop Зерноочистительные    
 cHanger('.ax-protr strong', 'Seed hullers');          //fastshop протравливатели    
 cHanger('.ax-shell strong', 'Seed shellers');          //fastshop шелушители    
 cHanger('.ax-polir strong', 'Polishing machines');          //fastshop полировальные 
 cHanger('.ax-trans strong', 'Transport systems');          //fastshop транспортная  
 cHanger('.ax-ves strong', 'Scales and packaging');          //fastshop весы 
 cHanger('.ax-aspir strong', 'Aspration and Dust control');          //fastshop пыль
 cHanger('.ax-storage strong', 'Storage');          //fastshop хранение    
  // FS menu
//  ul.products
cHanger('.post-6422 h5 font font', 'FX1z Electronic Scale –In-Bag- Net Weigher - 25 to 50 kg');
cHanger('.post-6421 h5 font font', 'fx2z Electronic Scale –In-Bag- Net Weigher - 5 to 50 kg');
cHanger('.post-716 h5 font font', 'Belt Conveyors');
cHanger('.post-678 h5 font font', 'Jog Conveyor');
cHanger('.post-671 h5 font font', 'Easy Dump Elevator');
cHanger('.post-718 h5 font font', 'Linear Scale - Four Multi Head Scale 500gr to 5 Kg');
cHanger('.post-679 h5 font font', 'Magnet Separators');
cHanger('.post-720 h5 font font', 'Pendulum Elevator');
cHanger('.post-690 h5 font font', 'Wire Mesh Pre Cleaner');
cHanger('.post-675 h5 font font', 'Hammer mills');
cHanger('.post-681 h5 font font', 'Modular Pipework Systems');
cHanger('.post-687 h5 font font', 'Peanut sheller');
cHanger('.post-684 h5 font font', 'Plant automation');
cHanger('.post-691 h5 font font', 'Air Recycling Aspirator');
cHanger('.post-692 h5 font font', 'Aspiration Box');
cHanger('.post-686 h5 font font', 'Rotary Drum Seed Cleaner');
cHanger('.post-689 h5 font font', 'velvet roller');
cHanger('.post-663 h5 font font', 'Big Bag Scale - Above Ground Weighing');
cHanger('.post-673 h5 font font', 'Excell 50 Series Super Fine Screen Cleaners');
cHanger('.post-707 h5 font font', 'Five Deck Seed Grader B.MAC-007-5');
cHanger('.post-709 h5 font font', 'Single Deck Seed Grader B.MAC-007-1');
cHanger('.post-708 h5 font font', 'Double Deck Seed Grader B.MAC-007-2');
cHanger('.post-710 h5 font font', 'Three Deck Seed Grader B.MAC-007-3');
cHanger('.post-706 h5 font font', 'Four Deck Seed Grader B.MAC-007-4');
cHanger('.post-711 h5 font font', 'Six Deck Seed Grader B.MAC-007-6');
cHanger('.post-743 h5 font font', 'Excell 230 Series Super Flat Screen Graders');
cHanger('.post-664 h5 font font', 'Big Bag Scale-On Ground Weighing');
cHanger('.post-693 h5 font font', 'Indoor Storage Silos');
cHanger('.post-694 h5 font font', 'Vertical Huller');
cHanger('.post-685 h5 font font', 'Puls Hull & Split');
cHanger('.post-672 h5 font font', 'Mechanic Scale In-Bag Gross Weigher-25 to 50 kg');
cHanger('.post-680 h5 font font', 'Mechanic Scale In-Bag Gross Weigher-5 to 50 kg');
cHanger('.post-695 h5 font font', 'Flow Scale');
cHanger('.post-696 h5 font font', 'Vibratory Sieve Seed Pre-Cleaner');
cHanger('.post-712 h5 font font', 'Excell 220 Series Flat Screen Graders');
cHanger('.post-661 h5 font font', 'AKYUREKEXCELL 33 Screen Cleaner & Grader');
cHanger('.post-713 h5 font font', 'Vibro Type T.MAC-009');
cHanger('.post-668 h5 font font', 'Continuous Cup Z Elevators');
cHanger('.post-665 h5 font font', 'Bucket Elevators');
cHanger('.post-714 h5 font font', 'Combo Screen Cleaner & Grader O.MAC-001');
cHanger('.post-3586 font font'  , 'Optimum Combo Screen Cleaner & Grader C.O.MAC-003'); 
cHanger('.post-715 h5 font font', 'Inclined Conveyor Belt');
cHanger('.post-738 h5 font font', 'Peanut density separator');
cHanger('.post-682 h5 font font', 'Outdoor storage silos');
cHanger('.post-739 h5 font font', 'Vibratory Sieve Seed Pre-Cleaner');
cHanger('.post-736 h5 font font', 'Jog Screen Cleaner 380 ');
cHanger('.post-734 h5 font font', 'Drum sieve seed pre-cleaner');
jQuery('.post-740 h5 font font').empty();
jQuery('.post-740 h5 font font').first().text('Tea Sorter Machine');  
cHanger('.post-688 h5 font font', 'Spiral Separator');
jQuery('.post-747 h5 font font').empty();
jQuery('.post-747 h5 font font').first().text('Telescopic Belt Conveyors');  
cHanger('.post-728 h5 font font', 'Brush De-awner Machine');
cHanger('.post-729 h5 font font', 'De-Awner Machine');
cHanger('.post-730 h5 font font', 'Batch Friction Polisher');
cHanger('.post-731 h5 font font', 'Double Scale Net Weigher & Bagger-5 to 50 kg');
cHanger('.post-732 h5 font font', 'Open-Mouth Bag Feeding Robot');
cHanger('.post-5458 font font', 'Excell 100 Series Fine Screen Cleaners'); 
cHanger('.post-733 h5 font font', 'Double Pre & Fine Screen Cleaner C.O.TEM-004');
cHanger('.post-3581 font font', 'Pre-Cleaner + De-Stoner'); 
cHanger('.post-3587 font font', 'Pre & Fine Screen Cleaner O.TEM-006'); 
cHanger('.post-662 h5 font font', 'Batch Type Seed Coating Machine');
cHanger('.post-735 h5 font font', 'Seed separators');
cHanger('.post-669 h5 font font', 'Continuous Seed Treating Machine');
cHanger('.post-676 h5 font font', 'Hand Screen Set');
cHanger('.post-737 h5 font font', 'Impact De-huller - 4 Mill with Shell Separator');
cHanger('.post-742 h5 font font', 'Excell 210 Series Fine Screen Cleaners');
cHanger('.post-674 h5 font font', 'Excell 60 Series Fine Screen Cleaners');
cHanger('.post-702 h5 font font', 'Single Deck Fine Screen Cleaner O.TEM-005-1');
cHanger('.post-701 h5 font font', 'Two Deck Fine Screen Cleaner O.TEM-005-2');
cHanger('.post-704 h5 font font', 'Three Deck Fine Screen Cleaner O.TEM-005-3');
cHanger('.post-3588 font font', 'Mega Trieur'); 
cHanger('.post-677 h5 font font', 'Indent Cylinder Separator');
cHanger('.post-748 h5 font font', 'Excell 240 Series Flat Screen Graders');
cHanger('.post-697 h5 font font', 'Zig Zag Air Separators');
cHanger('.post-3630 font font', 'Shell Removal Blower'); 
cHanger('.post-698 h5 font font', 'Horizontal Huller');
cHanger('.post-699 h5 font font', 'Seed Gravity Separator Machine');
cHanger('.post-670 h5 font font', 'Cylindrical Needle Sorter CNS 100');
cHanger('.post-700 h5 font font', 'Inspection Conveyor Belt');
cHanger('.post-744 h5 font font', 'Excell 240 Series Flat Screen Graders');
cHanger('.post-745 h5 font font', 'Excell 200 Series Super Fine Screen Cleaners');
cHanger('.post-755 h5 font font', 'Cylindrical Screening Machines');
cHanger('.post-3609 font font', 'Indent Cylinder Separator'); 
cHanger('.post-756 h5 font font', 'Peanut Blancher');
cHanger('.post-683 h5 font font', 'Peanut sheller');
cHanger('.post-757 h5 font font', 'Airlockvalve');
cHanger('.post-758 h5 font font', 'Screw Elevators');
cHanger('.post-3634 font font', 'Brush De-awner Machines'); 
cHanger('.post-749 h5 font font', 'Weighing, Proportioning & Mixing');
cHanger('.post-750 h5 font font', 'Single Scale Net Weigher & Bagger - 5 to 50 kg');
cHanger('.post-751 h5 font font', 'Quadruple Scale Net Weigher & Bagger - 5 to 50 kg');
cHanger('.post-752 h5 font font', 'Jet Filters AKJF');
cHanger('.post-741 h5 font font', 'Tea Sorter Machine');
cHanger('.post-753 h5 font font', ' Centrifugal Fans');
//cHanger('.post-666 h5 font font', 'Chain conveyor'); 
cHanger('.post-754 h5 font font', 'Cyclones');
cHanger('.post-3660 font font', 'Modular pipework systems'); 
cHanger('.post-721 h5 font font', 'Blower Group');
cHanger('.post-723 h5 font font', 'SORTURK C-1 Color Sorter');
cHanger('.post-722 h5 font font', 'SORTURK C-2 Color Sorter');
cHanger('.post-724 h5 font font', 'SORTURK C-3 Color Sorter');
cHanger('.post-5435 font font', 'SORTURK C-4 Color Sorter'); 
cHanger('.post-726 h5 font font', 'SORTURK C-5 Color Sorter');
cHanger('.post-3629 font font', 'SORTURK C-6 Color Sorter'); 
cHanger('.post-727 h5 font font', 'SORTURK C-7 Color Sorter'); 
//  ul.products
cHanger('.sepintrotext .zagolovok0 font font', 'Grain-cleaning machines from Akyurek'); 
jQuery('.sepintroparagraph').first().html(' considered to be one of the most popular and recognizable grain cleaners not only in Ukraine but also in neighboring countries. Our grain processing machines can perform functions such as skalperators (pre-treatment) and the separator (primary and secondary treatment). Separators operated in silos mills and grain cleaning plants. Due infinitely adjustable speed and reduced vibration sieves housing provides easier separation of grain and oilseeds through the sieve in the cleaning process. This allows our separators operate even with very heavy in the purification of cultures. Extensive experience in engineering and in-depth knowledge of the products can deliver a solution for cleaning, sorting and processing various types of grain and seeds. We are developing plants for all kinds of Cleansing products based on scientific achievements and many years of practical experience. In the world seed industry is moving in the direction of increasing the quality of industrial production and improve plant performance by cleaning and sorting seeds. This development increases the demand for high-performance, high-quality and cost-seed plants. We have a fully equipped test center with the production of machines and modern laboratory. This ensures the highest quality of technical performance studies and continuous improvement of processing technology. Our Test Center offers tailored solutions for each request, develops and manufactures a wide range of machines for processing of seeds and equipment, as well as solutions for all types of cleaning and sorting. We are building the seed plants for different types of grains, cereals, oilseeds, grass seeds, rice, legumes, seeds, herbs and other commercial types of seeds, with capacity up to 25 tons per hour per line. Our systems can operate in any weather conditions, anywhere in the world. Careful handling and sorting accuracy without risk of mixing varieties - our daily bread, and the basic principle of our work.');  
cHanger('.calibrintrotext .zagolovok0 font font', 'Akyurek calibrating machines'); 
  jQuery('.calibrparagraph').empty().first().html(' considered to be one of the most popular and recognizable grain cleaners not only in Ukraine but also in neighboring countries. Our grain processing machines can perform functions such as skalperators (pre-treatment) and the separator (primary and secondary treatment). Separators operated in silos mills and grain cleaning plants. Due infinitely adjustable speed and reduced vibration sieves housing provides easier separation of grain and oilseeds through the sieve in the cleaning process. This allows our separators operate even with very heavy in the purification of cultures. Extensive experience in engineering and in-depth knowledge of the products can deliver a solution for cleaning, sorting and processing various types of grain and seeds. We are developing plants for all kinds of Cleansing products based on scientific achievements and many years of practical experience. In the world seed industry is moving in the direction of increasing the quality of industrial production and improve plant performance by cleaning and sorting seeds. This development increases the demand for high-performance, high-quality and cost-seed plants. We have a fully equipped test center with the production of machines and modern laboratory. This ensures the highest quality of technical performance studies and continuous improvement of processing technology. Our Test Center offers tailored solutions for each request, develops and manufactures a wide range of machines for processing of seeds and equipment, as well as solutions for all types of cleaning and sorting. We are building the seed plants for different types of grains, cereals, oilseeds, grass seeds, rice, legumes, seeds, herbs and other commercial types of seeds, with capacity up to 25 tons per hour per line. Our systems can operate in any weather conditions, anywhere in the world. Careful handling and sorting accuracy without risk of mixing varieties - our daily bread, and the basic principle of our work.'); 
cHanger('.travintrotext .zagolovok0 font font', 'Dressers'); 
  jQuery('.travparagraph').replaceWith('<font><font>Designed for wet seed dressing or oiling, to the highest standards. </font><font>Complex modern control systems provide high flexibility and process safety. </font><font>Treaters or disinfectants (if you like), from Akyurek - high-performance machines that provide solutions to improve the quality of genetic material selhoz.produktsii</font></font><font><font>As well as real-time protection from diseases and pests. </font><font>Presowing treatment of the seeds, seedlings or seedlings to reduce potential crop losses more than doubled.</font></font><h5><font><font>List of Cultures, for which etching is the highest priority</font></font></h5><div id="seed-recommend"><ul><li><font><font>Spring barley, winter</font></font></li><li><font><font>winter rye</font></font></li><li><font><font>oats</font></font></li><li><font><font>Millet</font></font></li><li><font><font>Spring wheat, winter</font></font></li><li><font><font>Rape</font></font></li><li><font><font>winter triticale</font></font></li><li><font><font>Peas</font></font></li></ul><ul><li><font><font>Potatoes</font></font></li><li><font><font>beet sugar</font></font></li><li><font><font>Sunflower</font></font></li><li><font><font>Corn</font></font></li><li><font><font>Linen oilseed, fiber flax</font></font></li></ul></div>'); 
  cHanger('.shellintrotext .zagolovok0 font font', 'Dressers'); 
  jQuery('.shellparagraph').replaceWith('Or scarifiers from Akyurek - devices for removing hard shell seed plant, for increasing its germination capacity, or seeds for further use as raw materials or finished products. The equipment is made with high levels of automation, management and maintenance. Recommended solid plant seeds, the seeds of which have a short rest period and at the same time protected hard shell, causing possess low hygroscope (the ability to absorb moisture). Most often used for purification of rapeseed, peanut and sunflower, for example, for oil extraction. There is also a hard seeds are seeds of plants such as clover, lupine, alfalfa, clover, Kobe, Morning Glory, pelargonium, sweet peas, rosehips, and other'); 
  cHanger('.polishintrotext .zagolovok0 font font', 'polishing machine'); 
  jQuery('.polishparagraph').replaceWith('Special equipment from Akyurek, designed for the treatment of seeds from dust and dirt. On an example sunflower seeds these machines work to clean the hulls of the layers of dust, because sometimes people do not eat seeds, because dirty hands after use, or to give a smooth and pleasant texture. Also our polishing machines very well with seeds, collect dirt after the rain, or the dryer. All equipment is certified and complies with the ISO and is available only to the consumer with the appropriate documentation'); 
  cHanger('.transport introtext .zagolovok0 font font', 'polishing machine'); 
  jQuery('.transport paragraph').replaceWith('As with most of the equipment for processing of grain handling equipment is divided into farming and promyshlennoe.Dlya farms, for which the current is the transport of grain, as in the elevator, and in the field, are the most suitable mobile conveyors, which allow you to load and ship the grain without installation expensive stationary transport systems (they are easy to operate and require a minimum of staff in the delivery). For large businesses we offer a chain, belt conveyors and bucket elevators large size, with more high-tech features, such as special sensors, or the ability to self-cleaning, reboot the spilled material, sparing operation. Such equipment is used in the elevator complex, compound feed producers and port elevators. We have developed the machine does not injure the grain, almost all the way to the interaction as a commodity grain and seeds.'); 
  cHanger('.scalesintrotext .zagolovok0 font font', 'Scales and packaging'); 
  jQuery('.scalesparagraph').replaceWith('Packing Equipment by Akyurek allows the packing of bulk agricultural products (such as buckwheat, rice, lentils, peas and so on) in packs for retail or bags to transport. Equipment sold by our company an ergonomic, easy to operate and maintain. The transport system of our production to optimize the packing process and increase productivity dispensers. Scales, produced by us, been supporting automatic and manual loading and control. For its clients, our company provides the following services: supply of equipment, installation, connection, commissioning, training, warranty and post-warranty service.'); 
  cHanger('.dustintrotext .zagolovok0 font font', 'aspiration and dust control'); 
  jQuery('.dustparagraph').replaceWith('Packing Equipment by Akyurek allows the packing of bulk agricultural products (such as buckwheat, rice, lentils, peas and so on) in packs for retail or bags to transport. Equipment sold by our company an ergonomic, easy to operate and maintain. The transport system of our production to optimize the packing process and increase productivity dispensers. Scales, produced by us, been supporting automatic and manual loading and control. For its clients, our company provides the following services: supply of equipment, installation, connection, commissioning, training, warranty and post-warranty service.'); 
  cHanger('.storageintrotext .zagolovok0 font font', 'Storage of grain'); 
  jQuery('.storageparagraph').replaceWith('by Akyurek involves professional warehouses open and closed. Due to the vertical arrangement of the silo is achieved considerable space saving, despite impressive volumes saves raw material. No less significant advantage over conventional silage warehouses is to provide a high level of protection of the stored materials against external environmental factors moisture, rain, snow, dust, etc. In the grain storage. Akyurek offers complete equipment and "turnkey" projects for different types of grain elevators with a range of storage capacities from farm silos to large port elevators. Through the use of advanced technologies in production and experience of leading specialists of our technical department we have been able to develop comprehensive solutions for the storage of grain, taking into account all the clients wishes, and implement these projects as soon as possible..'); 
//  
}
function englishTeamFix(){
  cHanger('.company_history h4 font', 'START');
  cHanger('.company_history p font', 'Akyurek\'s success history began in 1972. The company\'s first plant was set up in a fishing village Karaduvar, and the first name of the company was Akyurek Kardesler. It was then that the brothers Akyurek (Sabahattin, Ahmet and Ali) were planted the seeds of success which have emerged, giving us this delightful high-tech devices. The company\'s secret of success lies in a fair and open manner of business, high-quality equipment and competent after-sales service.');
//  История успеха Акюрек началась в 1972 году. Первый завод компании был создан в рыбацком поселке Карадувар, а первым названием компании было Akyurek Kardesler. Именно тогда братьями Акюрек (Сабахаттин, Ахмет и Али) были посажены семена успеха, которые взошли, давая нам сегодня восхитительные высокотехнологичные устройства. Секрет успеха компании кроется в честной и открытой форме бизнеса, качественном оборудовании и грамотном послепродажном сервисе.

    cHanger('.company_history li:nth-child(2) h4 font', 'THE SECOND PLANT');
  cHanger('.company_history li:nth-child(2) p font', 'In the 80s it was built a new production plant on the way Atash (Turkey), which despite the crisis, allowed the young company to maintain regular partners and attract new customers. Each machine was developed, and designed primarily for Akyurek personal purposes. In the 90\' years the company continued to improve the quality and productivity of the equipment.');
//  В 80-х был возведен новый производственный завод на пути Аташ(Турция), который несмотря на кризис, позволил молодой компании сохранить постоянных партнеров и привлечь новых клиентов. Каждая машина была их собственной разработкой, и в первую очередь проектировалась для себя. В 90-е годы компания продолжила улучшать качество и производительность оборудования.
  
    cHanger('.company_history li:nth-child(3) h4 font', 'NEW EQUIPMENT');
  cHanger('.company_history li:nth-child(3) p font', 'In the 2000\'s the company has got new young staff members. They began a large-scale upgrade of all equipment lines, and soon joined the lineup. Capacities of the company grew exponentially, it has become an excellent basis for the further development of the company.');
//  В начале нулевых компания обзавелась молодыми сотруниками, которые начали масштабное обновление всех линеек оборудования, а вскоре и пополнили модельный ряд. Производственные мощности компании выросли экспоненциально, что стало прекрасным фундаментом для дальнейшего развития компании.
    cHanger('.company_history li:nth-child(4) h4 font', 'TIME FOR A CHANGE');
  cHanger('.company_history li:nth-child(4) p font', 'Modernization and expansion - the company pursued the goal when the first symbolic foundation stone of the new factory was laid. In the same year the factory have started to use ISO standards in production processes and quality control systems. Construction of the plant began in 2004. The plant start-up took place in 2005, 45 000 square meters of land with a total area of over 16,000 square meters. Special attention was paid to international co-operation. Foreign companies started to recognize Akyurek\'s technological innovations. It began exporting in more than 30 countries: Russia, Sudan, Ethiopia, Casablanca, Madagascar, Bulgaria, Ukraine, America, etc.');
//  Модернизация и расширение - эти цели компания преследовала, когда был заложен первый символический камень в фундамент нового завода. В этом же году на заводе в производственных процессах начали пользоваться стандартами ISO и системами контроля качества. Строительство завод началось в 2004 году запуск завода произошел в 2005 году на 45 000 квадратных метрах земли с общей площадью свыше 16 000 кв м. Особое внимание было уделено международному сотрудничеству. Компании зарубежных стран знакомились с технологическими инновациями компании. Начался экспорт более чем в 30 стран мира : Россия, Судан, Эфиопия, Касабланка, Мадагаскар, Болгария, Украина, Америка и др
  
    cHanger('.company_history li:nth-child(5) h4 font', 'LEADERSHIP');
  cHanger('.company_history li:nth-child(5) p font', 'The company became the sole leader in the Turkish market. increasing demand for the companys products and raising its market share to 95%, we moved on, towards Bulgaria and Ethiopia. Company akyurek kardesler with the update of corporate identity from A to Z, has decided to continue its activities under the brand akyurek technology. the company your thinking and vision of the trusts created by corporate character of sorts. in 2010 we launched a new agriculture rekolte magazine - the first and only such magazine in Turkey and also waited azhiota among readers. rekolte magazine - Special independent publication for many years to be informed about the situation in the sector of agricultural industry.');
//  Компания стала единоличным лидером на рынке турции . увеличив спрос на товары фирмы и подняв свою долю на рынке до 95%, мы двинулись дальше, в сторону болгарии и эфиопии. компания akyurek kardesler с обновлением фирменного стиля от а до я , приняла решение продолжать свою деятельность под брендом akyurek technology . компания свое мышление и видение доверяет созданному фирменному персонажу сорти. в 2010 году мы начали выпускать новый агропромышленный журнал rekolte - первый и единственный подобный журнал в турции, и его также ждал ажиота среди читателей. журнал rekolte - cпециальное независимое издание в течение многих лет будет информировать о положении в отрасли аграрной промышленности.
  
    cHanger('.company_history li:nth-child(6) h4 font', 'NEW HORIZONS');
  cHanger('.company_history li:nth-child(6) p font', 'With the onset of the 40th anniversary of the company, it was decided to withdraw packaging machinery development department into a separate company, equipped with the latest technology, under the brand Akyurek Packaging Technology');
//  С наступлением 40-летия компании было принято решение вывести департамент разработки упаковочного оборудования в отдельную компанию, оборудованном по последнему слову техники, под брендом Akyurek Packaging Technology
  
  jQuery('h3.abouts.naf+p.visible font').empty();
  jQuery('h3.abouts.naf+p.visible font').first().text('AKYUREK Kardesler Ltd was founded in 1973, and since then Akyurek successfully produces equipment for aspiration, storage and processing of seeds after harvest in MERSIN, Turkey. The companys policy has always focused on high customer satisfaction, product quality, safety and after-sales service. Thanks to modern technology under its own patents against AKYUREK Kardesler Ltd it was decided to rename Akyurek Technology. Technology from Akyurek, located on an area of over 40,000 meters, were completely rethought. Some models were combined in order to increase their value to customers and reducing the final cost and the production area. This is the result of work by more than 400 professionals. Despite the fact that AKYUREK Technology - a family business it employs professionals iskolyuchitelno their fields, to develop technological solutions and equipment for conditioning, grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners. grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners. grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners');
//  AKYUREK Kardesler Ltd была основана в 1973 году, и с тех пор AKYUREK успешно производит оборудование для аспирации, хранения и обработки семян после уборки урожая в MERSIN, Турция.
//Политика компании всегда нацелена на высокую удовлетворенность клиентов, качество продукции, безопасность и послепродажное обслуживание.
//Благодаря современным технологиям под собственными патентами от AKYUREK Kardesler Ltd было решено переименовать в Akyurek Technology.
//Технологии от AKYUREK, расположенные на площади свыше 40 000 метров, были переосмыслены полностью. Некоторые модели совмещались с целью повышения их ценности для клиентов и снижения конечной стоимости и производственной площади. Это результат труда более чем 400 специалистов.
//Несмотря на то, что AKYUREK Technology — семейное предприятие, в нем работают исколючительно профессионалы своих областей, развивающие технологические решения и оборудование для кондиционирования , измельчения, обрушивания семян для предприятий пищевой и семеноводческой целлюлозно-семеноводческой, зерновой, пульмовой, зерновой и сухой бобовых культур.
//AKYUREK Technology известна во всем мире своим качеством послепродажного обслуживания.
//Благодаря сорокалетнему опыту в области переработки продуктов питания и переработки семян, AKYUREK Technology всегда встречает своих клиентов в гостеприимной и профессиональной атмосфере и продолжает этот профессиональный подход в краткосрочной торговле или долгосрочных деловых отношениях, получая положительные отзывы от партнеров.


  cHanger('h4.inte font', 'Center for Research and Development.');
    jQuery('.design_delivery').empty();
jQuery('.design_delivery').first().text('AKYUREK delivers design, adapted to the needs of customers. All our products are designed and improved by experts in our center of research and development programs using Auto Computer Aided Design (AutoCad). All projects and products for the passage of the first quality control and verification of work principles should be tested in the relevant programs before entering the production line..');
  cHanger('h4.inte.two font', 'production.');
//  Akyurek обеспечивает дизайн, адаптированный к потребностям клиентов. Все наши продукты разработаны и улучшены экспертами в нашем центре исследований и разработок с использованием Auto Computer Aided Design (AutoCad). Все проекты и продукты для прохождения первого контроля качества и проверки принципов работы должны быть проверены в соответствующих программах перед входом в производственной линии ..

  
jQuery('p.factory-delivery font').first().empty().text(' To maximize the available capacity at the plant Akyurek and extend the life of your investment, all the equipment previously developed on computers with carrying out the corresponding calculations All parts made of carbon steel, cut by laser machines with CNC.');
//  Чтобы максимизировать имеющиеся мощности на заводе Akyurek и увеличить срок службы ваших инвестиций, все оборудование предварительно разрабатывалось на компьютерах с проведением соответствующих вычислений Все детали из углеродистой стали, разрезаются с помощью лазерной машины с ЧПУ. Все остальные детали, которые разрезаются лазером, собираются с лучшими промышленными частями наших постоянных поставщиков.

  
jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element p').first().empty().text(' All projects and products for the passage of the first quality control and verification of work principles should be tested in the relevant programs before entering the production line. A second quality check takes place in the assembly department. Details then, one by one, are transferred to the painting department, where the application of environmentally friendly automated powder coating Owen. Each steel part is then carefully cleaned and covered with paint, the appropriate food legislation in developed countries; which also increases the life of the machine, protecting it for a long period of time from corrosion, increasing the profitability of investments. In the department of electrical and electronic manufacturing and assembly, all parts used in the manufacture of machinery, certified and meet the requirements of the European Union. The last stage of the assembly is the assembly of electronic machine parts that are carefully selected according to the clients specific requirements. Control panels, motherboards, screens design, design and manufacture of electronic cards by professional engineers in AKYUREK Technology areas..');
//  Все проекты и продукты для прохождения первого контроля качества и проверки принципов работы должны быть проверены в соответствующих программах перед входом в производственной линии. Вторая проверка качества осуществляется в сборочном цехе. Подробности затем, один за другим, передаются в отдел живописи, где применение экологически чистых автоматизированных порошковых покрытий Оуэна. Каждая стальная деталь затем тщательно очищена и покрыта краской, соответствующее законодательство продуктов питания в развитых странах; что также увеличивает срок службы машины, защищая его в течение длительного периода времени от коррозии, повышения рентабельности инвестиций. В отделе электрического и электронного производства и сборки, все детали, используемые в производстве машин, сертифицированы и отвечают требованиям Европейского Союза. Последним этапом сборки является сборка электронных деталей машин, которые тщательно отобраны в соответствии с конкретными требованиями клиентов. Панели управления, материнские платы, экраны дизайн, разработка и производство электронных карт профессиональных инженеров в Akyurek технологических областях ..

  
jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4').first().empty().text(' Technical part');
jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p').first().empty().text(' Akyurek Technology offers proprietary software, as well as developing special software to individual needs. After the assembly of electrical and electronic parts, each machine goes compliance control, which is designed for specific areas of the product. After completion of all manufacturing and checks each car passes in the quality control department. To avoid minor or major defects in the later stages of the product lifecycle, engineers who are experts in their respective fields, carry out the final tests. All products that pass the necessary steps prior checks and are in line with EU health and safety standards, and then enter the shipping department.');
//  Akyurek Technology предлагает собственное программное обеспечение, а также разработки специального программного обеспечения для индивидуальных потребностей. После сборки электрических и электронных частей, каждая машина проходит контроль соответствия, который предназначен для конкретных областей продукта. После завершения всех производственных и проверяет каждый автомобиль проходит в отделе контроля качества. Чтобы избежать незначительных или серьезных дефектов на поздних стадиях жизненного цикла продукта, инженеры, которые являются экспертами в своих областях, проводят финальные тесты. Все продукты, которые проходят необходимые шаги предварительной проверки и находятся в соответствии со стандартами в области здравоохранения и безопасности ЕС, а затем войти в отдел доставки.

  
jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p + h4').first().empty().text(' Design of individual orders');
jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p + h4 + p').first().empty().text(' Akyurek Technology can design for you any equipment in this and related fields, according to your wishes and requirements. Akyurek Technology - is the only vendor that not only produces complete solutions from A to Z, but also creates equipment to meet your individual needs and goals. Our modular equipment suitable for all seeds and all conditions that they face. GLOBAL PRESENCE With its partners, Akyurek become an international supplier of zernoobrabotki and continues to lead in the global market of seed material on 5 continents. Modular Akyurek screen cleaners used on five continents, allowing you to define global standards for the treatment of legume and cereal seeds.');
//  Akyurek технология может разработать для вас любое оборудование в этой и смежных областях, в соответствии с вашими пожеланиями и требованиями. Akyurek Technology - это единственный производитель, который не только производит комплексные решения от А до Z, но и создает оборудование для удовлетворения ваших индивидуальных потребностей и целей. Наше модульное оборудование подходит для всех семян и всех условий, с которыми они сталкиваются. ГЛОБАЛЬНОЕ ПРИСУТСТВИЕ со своими партнерами, Akyurek стать международным поставщиком zernoobrabotki и продолжает лидировать на мировом рынке семенного материала на 5 континентах. Модульные Akyurek очистители экрана используется на пяти континентах, что позволяет определить глобальные стандарты для обработки бобовых и злаковых семян.

  
}
function englishVideoFix(){
 cHanger('.entry-header.clearfix .h2 font', 'Video');  
 cHanger('.entry-header.clearfix .sub_title', 'We present our demo videos of our process technology equipment');  
 cHanger('article#post-1932 .vc_custom_heading h2 font', 'Video productions');  
 cHanger('article#post-1932 .moflex .cardie .wpb_wrapper font', ' Mobile semyaobrabatyvayuschaya barley line');  
 cHanger('article#post-1932 .moflex .cardie .wpb_wrapper ul li font', ' Mobile semyaobrabatyvayuschaya Iran barley line');  
 cHanger('article#post-1932 .moflex .cardie .wpb_wrapper hr + p font', ' Mobile semyaobrabatyvayuschey barley line tests in Morocco,');  
 cHanger('article#post-1932 .moflex .cardie .wpb_wrapper hr + p br + font', ' Mobile semyaobrabatyvayuschaya barley line under the Iran-key');  
 cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper font', ' Work Fotoseparator Akyurek');  
 cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper ul li font', ' color separation grain');  
 cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Work Fotoseparator Akyurek. Possibility obrabtyvat all kinds of agricultural products: corn, wheat, barley, sunflower seeds, corn, chickpeas and so on,');  
 cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
 cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas');  
 cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
 cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
   cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
//  -----WORDS
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  peanut Kamneotdelitel');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Akyurek Technology kamneotdelitelnaya for peanut machine');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Kamneotdelitel peanut company Akyurek separates the impurities that are heavier than the peanuts: stones metallichsekie impurities, glass, dirt and other..');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'Mobile semyaobrabatyvayuschy plant green lentils');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' Mobile line for processing lentils');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Mobile semyaobrabatyvayuschy plant green lentils Morocco. ');  
   cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' It made for ICARDA in Tunisia.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Line processing of sesame seeds');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Line processing of sesame seeds');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Line processing of sesame seeds. The line includes: Pre-cleaning, kamneotdelitel, gravity table barley Semyaobrabatyvayuschaya line.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'barley Semyaobrabatyvayuschaya line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' Semyaobrabatyvayuschaya barley line turnkey Romania');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Semyaobrabatyvayuschaya barley line under the key is in Romania, but it can be delivered to any country where barley is a popular product. ');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Semyaobrabatyvayuschaya barley line can easily be delivered anywhere in the world.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', 'Line for processing legumes Morocco');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', 'Line for processing and cleaning beans in Morocco');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Complete line of processing and ochsitke legume was established in Morrocco in 2011 by Akyürek Kardeşler. ');  
   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font', 'First, the product behaved in the goaf hole whereupon a pre ochstitel. After pre-purification product fed into a storage silo. Silos in turn fueled kamneotdelitel and gravity separator. Then the product is fed to the inspection table posledeney check, and then fed to the packing equipment.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'barley Semyaobrabatyvayuschaya line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A Semyaobrabatyvayuschaya barley line turnkey Romania');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', 'Semyaobrabatyvayuschaya barley line under the key is in Romania, but it can be delivered to any country where barley is a popular product');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', 'Semyaobrabatyvayuschaya barley line can easily be delivered anywhere in the world.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Line for processing white beans in Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', 'Processing white beans in Egypt 8-10 t | h');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', 'Line for the complete processing of white beans performance 8-10 m / h .. ');  
   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font', 'Initially, the product enters into the feed silo from whence further enters the precleaner where removed many impurities and dust. After pre-purification product undergoes fine purification and cleaned of fine impurities. Then the product is calibrated sizes are ordered pokupaetl. On kamneotdelitele and gravity table is sorted by unit weight. ');  
   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font + br + font', 'The line includes the following equipment: a belt conveyor, silage, vibratory separator, air separation, Excell 206 Super Fine Screen Cleaner, Excell 226 Flat Screen Graders, kamneotdelitel, gravity separator and Fotoseparator.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'Mobile line for processing sesame');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', '99.09% purity mobile line cleaning sesame output product');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' All Turnkey and Mobil Plant Solutions');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
 cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
}
function englishProjectsFix(){
function goodsFix(){
  //    cHanger('.project_grid .project .overlay + h4 font font', 'CLEANING PLANT LEGUMES');
//    cHanger('.project_grid .project .overlay + h4 + a font font', 'CLEANING PLANT LEGUMES');  // Прицел под кнопку
//    jQuery('.project_grid .project:nth-child(2) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(3) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(4) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(5) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(6) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(7) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(8) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(9) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(10) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(11) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(12) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(13) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(14) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(15) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(16) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(17) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(18) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(19) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(20) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(21) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(22) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(23) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(24) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(25) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(26) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(27) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(28) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(29) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(30) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(31) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(32) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(33) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(34) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(35) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(36) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(37) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(38) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(39) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(40) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(41) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(42) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(43) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(44) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(45) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(46) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(47) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(48) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(49) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(50) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(51) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(52) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(53) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(54) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(55) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(56) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(57) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(58) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(59) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(60) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(61) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(62) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(63) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(64) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(65) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(66) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(67) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(68) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(69) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(70) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(71) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(72) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(73) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(74) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(75) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(76) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(77) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(78) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(79) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(80) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(81) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(82) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(83) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(84) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(85) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(86) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(87) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(88) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(89) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(90) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(91) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(92) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(93) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(94) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(95) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(96) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(97) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(98) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(99) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(100) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(101) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(102) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(103) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(104) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(105) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(106) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(107) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(108) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
} goodsFix();
function countryFix(){
     //TABLIST
//  cHanger('#tab-c2baa85f-8864-1 div h4 font', 'Flowing green peas');           //Заголовок 1
//  cHanger('#tab-c2baa85f-8864-1 div h5 font', 'Flowing green peas');              // Заголовок 2
//  jQuery('#tab-c2baa85f-8864-1 div h5 + p font').empty().first().text('FIXD');   // Параграф
//  jQuery('#tab-c2baa85f-8864-1 a.button.view_more').empty().first().text('FIXD'); // Кнопка
    // Разумно будет функционализировать весь countryдля сокращения веса файла

    
    //  cHanger('#tab-c2baa85f-8864-1 div h4 font', 'Flowing green peas');  
//  cHanger('#tab-1432271904839-2-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272205045-2-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272585677-3-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272636552-4-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309663043-5-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309712091-6-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309729020-7-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309739035-8-10 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309771259-9-8 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309787603-10-7 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309805371-11-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309832403-12-2 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309854740-13-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309889698-15-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309902387-16-1 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309924740-17-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309954852-18-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309971379-19-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309988979-20-7 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310003163-21-5 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310027729-22-6 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310044229-23-1 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310073500-25-2 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310086275-26-8 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310099138-27-6 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310113978-28-10 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310129306-29-9 div h4 font', 'Flowing green peas'); 
  }countryFix();
}
function englishContactsFix(){
 cHanger('.entry-header.clearfix .h2 font', 'FEEDBACK');  
 cHanger('.entry-header.clearfix .sub_title', 'For all issues related to our equipment, feel free to call the number +380 66 500 2212.');  
 cHanger('.entry-content h2 font', 'Representations');  
 cHanger('.wpb_tabs.wpb_content_element ul li', 'Ukraine');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(2) font').text('Italy');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(3) font').text('Russia');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(4) font').text('Spain');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(5) font').text('Bulgaria');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(6) font').text('India');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(7) font').text('Algeria');  
 jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(8) font').text('Ethiopia');  
 jQuery('.vc_custom_heading.vc_custom_1493123263435 h4 font').text('Contacts');  
 jQuery('.vc_custom_1491312664818 .stm_contact_job font').text('Head of the Ukrainian company department');  
 jQuery('aside.vc_custom_1491311861603 ul li:first-child').text('161 black sea cossacks of ukraine, odessa');  
 jQuery('aside.vc_custom_1491311861603 ul li:nth-child(2)').text('call-center +38066 500 22');  
 jQuery('aside.vc_custom_1491311861603 ul li:nth-child(3)').text('info@akyurekltd.com');  
  
  }
//--------------English phrase tables
//--------------ukr phrase tables
function ukrHeadFootFix(){  
  //HEADER
//  cHanger('li#menu-item-6266 a font font', 'Home');   //header меню     Магазин
//  cHanger('li#menu-item-6267 a font font', 'Shop');   //header меню     Магазин
//cHanger('li#menu-item-6272 a font font', 'Seed separators');   //header меню     Сепараторы семян
//cHanger('li#menu-item-6273 a font font', 'Seed treaters');   //header меню   	Протравливатели семян
//cHanger('li#menu-item-6274 a font font', 'Seed hullers');   //header меню   	Шелушители семян
//cHanger('li#menu-item-6275 a font font', 'Seed polishers');   //header меню   	Полировальные машины
//cHanger('li#menu-item-6276 a font font', 'Transport system');   //header меню   	Транспортная система
//cHanger('li#menu-item-6277 a font font', 'Scales and Packaging');   //header меню   	Весы и упаковка
//cHanger('li#menu-item-6278 a font font', 'Dust control');   //header меню   	Защита от пыли
//cHanger('li#menu-item-6279 a font font', 'Storage');   //header меню   	Бункеры для хранения
//cHanger('.header_top.clear.container .icon_text.clearfix+.icon_text.clear.text strong font', 'Mon - Fri 9.00 - 18.00');   //header working hours
//cHanger('.header_top.clear.container .icon_text.clearfix+.icon_text.clear.text span font', 'Sat - closed, call us');   //header working hours
//  cHanger('.header_top.clear.container .icon_text.clear.text font', '161 Chernomorskogo Kazachestva '); // header adress
  jQuery('select.goog-te-combo option:nth-child(1)').text('Русский')
  jQuery('select.goog-te-combo option:nth-child(2)').text('English')
  jQuery('select.goog-te-combo option:nth-child(3)').text('Українська')
//  
//  // HEADER
////  footer
//  cHanger('#menu-item-1718 font font', 'Seed separators');          //footer menu    
//  cHanger('#menu-item-1717 font font', 'Seed treaters');            //footer menu
//  cHanger('#menu-item-1716 font font', 'Seed hullers');        //footer menu
//  cHanger('#menu-item-1719 font font', 'Seed polishers');   //footer menu     
//  cHanger('#menu-item-1720 font font', 'Transport system');        //footer menu
//  cHanger('#menu-item-1721 font font', 'Scales and Packaging');//footer menu      
//  cHanger('#menu-item-1722 font font', 'Dust control and Aspirators');   //footer menu   
//  cHanger('#menu-item-1723 font font', 'Storage and silos');   //footer menu   
//  cHanger('aside#contacts-4 li font font', '161 Chernomorskogo Kazachestva ukraine, odessa');   //footer adress
//    cHanger('aside#contacts-4 li.phonos font', '+38066 500 22 12');  //footer numbers
//  cHanger('aside#contacts-4 li.phonos+li.phonos font', ' ');
//  cHanger('aside#contacts-4 li.phonos+li.phonos+li.phonos font', '');
//  footer
}
function ukrHomeFix(){
 //home 
//  cHanger('.lama-slide.sway1 .ls-lineone font font', 'We produce solutions for');
//  cHanger('.lama-slide.sway1 .ls-linetwo font font', 'seed cleaning, processing and storage');
//  cHanger('.vc_call_to_action h4 font', 'Looking for grain Equipment for your business?');
//  //dexter
//  cHanger('figure.effect-dexter h2 font font', 'Seed ');
//  cHanger('figure.effect-dexter span font font', 'Separators');
//  cHanger('.dx3 span font font', 'Cleaning');
//  cHanger('.dx4 h2 font font', 'Super Fine ');
//  cHanger('.dx5 h2 font font', 'Fine ');
//  cHanger('.dx5 span font font', 'Cleaners');
//  cHanger('.dx6 h2 font font', 'Screen  ');
//  cHanger('.dx6 span font font', 'graders');
//  cHanger('.dx7 h2 font font', '"All in one"  ');
//  cHanger('.dx7 span font font', 'cleaners');  
//  cHanger('.dx10 h2 font font', 'Length  ');
//  cHanger('.dx10 span font font', 'Separators');
//  cHanger('.dx12 h2 font font', 'Color  ');
//  cHanger('.dx12 span font font', 'Sorters');
//  cHanger('.dx13 span font font', 'conveyor belts');
//  cHanger('.dx15 h2 font font', 'De');
//  cHanger('.dx15 span font font', 'Awners & Brush Machines');
//  cHanger('.dx16 span font font', 'Roller');
//  cHanger('.dx21 h2 font font', 'Seed ');
//  cHanger('.dx21 span font font', 'Treaters');
//  cHanger('.dx22 h2 font font', 'Seed ');
//  cHanger('.dx22 span font font', 'Hullers');
//  cHanger('.dx23 h2 font font', 'Seed ');
//  cHanger('.dx23 span font font', 'polishers');
//  cHanger('.dx26 h2 font font', 'Dust ');
//  cHanger('.dx26 span font font', 'control');
//  cHanger('.dx28 h2 font font', 'View ');
//  cHanger('.dx28 span font font', 'all');
//  //dexter
////  Completed projects
//  cHanger('.bexer .clearh2 font', 'Completed projects');
//  cHanger('button#injax-sep', 'Completed projects');
//  cHanger('button#injax-pro', 'Treaters');
//  cHanger('button#injax-shell', 'Hullers');
//  cHanger('button#injax-poli', 'Polishers');
//  cHanger('button#injax-trans', 'Transport system');
//  cHanger('button#injax-aspi', 'Aspiration');
////  Completed projects
//  //WHY CUSTOMERS APPRECIATE
//  cHanger('.vc_custom_1434360560849 h2', 'Why customers appreciate us?');
//cHanger('.vc_custom_1430984621402 p font font', 'All equipment Akyurek TM is designed for high-grade industrial process, and does not involve the purchase of additional equipment.');
//cHanger('.vc_custom_1430984633960 p font font', 'Talking about the technical characteristics of the equipment or by signing an agreement on the delivery, we strictly adhere to all the conditions of the client. We care about the long-term reputation of our company.');
//  jQuery('.vc_custom_1430984646736 p font').first().empty().text('The transition from the old to the new equipment is always palpable. But the transition to the grain processing machines from Akyurek visible even after the modern equipment. This indisputable fact is confirmed by the popularity of our products in all continents.');
//  cHanger('.vc_custom_1430984652744 p font font', 'Full range of high-performance equipment for the pre-cleaning grain, refined grains filtering, sorting by size and packaging, will allow to supply the whole production of regional centers of Ukraine. ');
//  cHanger('.whyr21 p font', 'All equipment is provided on the site, is available for inspection by Skype or live at ul.Chernomorskogo 161 Cossacks in Odessa ');
//  cHanger('.whyr22 p font', 'Our consultants are always ready to help you with setup and help you if you forget something. We are always happy to help our customers and thank them for what they are with us. ');
//  jQuery('.whyr23 p font').empty();
//  jQuery('.whyr23 p font').first().text('All equipment from Akyurek surpasses most common  global  quality standards, setting the trend in the development of this area. Our products are absolutely safe for the environment and your employees');
//  cHanger('.whyr24 p font', 'We - world-renowned manufacturer with more than 40-year history, our equipment participates and wins in international competitions and conferences. Follow our news section "Company" ');
//  //WHY CUSTOMERS APPRECIATE
////  VSTAV ORIG TEXTA
//  //Video banner
//  cHanger('div#vn h2 font font', 'Equipment for the processing of all kinds of cereals '); 
//    //homepage video banner css button
//  jQuery('.home-content h2 font').first().css('display', 'flex').css('flex-direction', 'column');
//  jQuery('.home-content h2 small').first().css('display', 'none');
//  jQuery('.home-content h2 small').text('View hardware');
//  //homepage video banner css button
//  //Video banner
//  //Testimonial
//  cHanger('.testimonials_module+.testimonials_module p font', '"We have offered to familiarize himself with the operation of the equipment, were satisfied with the result, and now" Akyurek »provides our company equipment for all stages of work with the grain. Communicate politely and post-sales information on the level of support. Thank your team!"'); 
//  cHanger('.testimonials_module+.testimonials_module+.testimonials_module p font', '"For the competition in todays market, you have to take the car with the high-bandwidth and stability. And then the brand and at a good price, we have gained separators Akyurek Excell 200 "'); 
//  //Testimonial
////  prefooter about block
//  jQuery('.vc_custom_1430826296347 p font').empty();
//  jQuery('.vc_custom_1430826296347 p font').first().text('"All life begins with seeds" The unique nature of the grain is always appreciated and inspired Akyurek. Nature itself has taught us the value of their secrets and be attentive to detail. These secrets have allowed us to produce the highest quality and the best equipment for cleaning and processing of grain for our valued customers ..');
//  jQuery('.vc_custom_1430826301380 div font').empty();
//    jQuery('.vc_custom_1430826301380 div div div div font').first().text('Akyurek produces turnkey solutions for various production capacities on the basis of requests and opportunities its customers. We provide a wide range for all stages of work with the grain. ');
//  cHanger('.vc_custom_1430826301380 div+div button font', 'CHOICE OF SOLUTIONS FOR PROCESSING STAGES');
//  jQuery('.vc_custom_1430826306257 div font').empty();
//    jQuery('.vc_custom_1430826306257 div div div div font').first().text('Akyurek TM - a manufacturer of equipment Combine cereal, oil and any other seeds in the food industry. A complete list of supported cultures, you can find by clicking on the link. ');
//  cHanger('.vc_custom_1430826306257 div+div button font', 'SELECTION BY TYPE OF GRAIN');
//  prefooter about block
   //home 
}
function ukrShopFix(){
//  // FS menu
// cHanger('.accordion-sep strong', 'Seed separators');          //fastshop Зерноочистительные    
// cHanger('.ax-protr strong', 'Seed hullers');          //fastshop протравливатели    
// cHanger('.ax-shell strong', 'Seed shellers');          //fastshop шелушители    
// cHanger('.ax-polir strong', 'Polishing machines');          //fastshop полировальные 
// cHanger('.ax-trans strong', 'Transport systems');          //fastshop транспортная  
// cHanger('.ax-ves strong', 'Scales and packaging');          //fastshop весы 
// cHanger('.ax-aspir strong', 'Aspration and Dust control');          //fastshop пыль
// cHanger('.ax-storage strong', 'Storage');          //fastshop хранение    
//  // FS menu
////  ul.products
////cHanger('.post-6422 h5 font font', 'Seed separators');
////cHanger('.post-6421 h5 font font', 'Seed separators');
////cHanger('.post-716 h5 font font', 'Seed separators');
////cHanger('.post-678 h5 font font', 'Seed separators');
////cHanger('.post-671 h5 font font', 'Seed separators');
////cHanger('.post-718 h5 font font', 'Seed separators');
////cHanger('.post-679 h5 font font', 'Seed separators');
////cHanger('.post-720 h5 font font', 'Seed separators');
////cHanger('.post-690 h5 font font', 'Seed separators');
////cHanger('.post-675 h5 font font', 'Seed separators');
////cHanger('.post-681 h5 font font', 'Seed separators');
////cHanger('.post-687 h5 font font', 'Seed separators');
////cHanger('.post-684 h5 font font', 'Seed separators');
////cHanger('.post-691 h5 font font', 'Seed separators');
////cHanger('.post-692 h5 font font', 'Seed separators');
////cHanger('.post-686 h5 font font', 'Seed separators');
////cHanger('.post-689 h5 font font', 'Seed separators');
////cHanger('.post-663 h5 font font', 'Seed separators');
////cHanger('.post-673 h5 font font', 'Seed separators');
////cHanger('.post-707 h5 font font', 'Seed separators');
////cHanger('.post-709 h5 font font', 'Seed separators');
////cHanger('.post-708 h5 font font', 'Seed separators');
////cHanger('.post-710 h5 font font', 'Seed separators');
////cHanger('.post-706 h5 font font', 'Seed separators');
////cHanger('.post-711 h5 font font', 'Seed separators');
////cHanger('.post-743 h5 font font', 'Seed separators');
////cHanger('.post-664 h5 font font', 'Seed separators');
////cHanger('.post-693 h5 font font', 'Seed separators');
////cHanger('.post-694 h5 font font', 'Seed separators');
////cHanger('.post-685 h5 font font', 'Seed separators');
////cHanger('.post-672 h5 font font', 'Seed separators');
////cHanger('.post-680 h5 font font', 'Seed separators');
////cHanger('.post-695 h5 font font', 'Seed separators');
////cHanger('.post-696 h5 font font', 'Seed separators');
////cHanger('.post-712 h5 font font', 'Seed separators');
////cHanger('.post-661 h5 font font', 'Seed separators');
////cHanger('.post-713 h5 font font', 'Seed separators');
////cHanger('.post-668 h5 font font', 'Seed separators');
////cHanger('.post-665 h5 font font', 'Seed separators');
////cHanger('.post-714 h5 font font', 'Seed separators');
////cHanger('.post-3586 font font', 'Seed separators'); 
////cHanger('.post-715 h5 font font', 'Seed separators');
////cHanger('.post-738 h5 font font', 'Seed separators');
////cHanger('.post-682 h5 font font', 'Seed separators');
////cHanger('.post-739 h5 font font', 'Seed separators');
////cHanger('.post-736 h5 font font', 'Seed separators');
////cHanger('.post-734 h5 font font', 'Seed separators');
////jQuery('.post-740 h5 font font').empty();
////jQuery('.post-740 h5 font font').first().text('Seed separators');  
////cHanger('.post-688 h5 font font', 'Seed separators');
////jQuery('.post-747 h5 font font').empty();
////jQuery('.post-747 h5 font font').first().text('Seed separators');  
////cHanger('.post-728 h5 font font', 'Seed separators');
////cHanger('.post-729 h5 font font', 'Seed separators');
////cHanger('.post-730 h5 font font', 'Seed separators');
////cHanger('.post-731 h5 font font', 'Seed separators');
////cHanger('.post-732 h5 font font', 'Seed separators');
////cHanger('.post-5458 font font', 'Seed separators'); 
////cHanger('.post-733 h5 font font', 'Seed separators');
////cHanger('.post-3581 font font', 'Seed separators'); 
////cHanger('.post-3587 font font', 'Seed separators'); 
////cHanger('.post-662 h5 font font', 'Seed separators');
////cHanger('.post-735 h5 font font', 'Seed separators');
////cHanger('.post-669 h5 font font', 'Seed separators');
////cHanger('.post-676 h5 font font', 'Seed separators');
////cHanger('.post-737 h5 font font', 'Seed separators');
////cHanger('.post-742 h5 font font', 'Seed separators');
////cHanger('.post-674 h5 font font', 'Seed separators');
////cHanger('.post-702 h5 font font', 'Seed separators');
////cHanger('.post-701 h5 font font', 'Seed separators');
////cHanger('.post-704 h5 font font', 'Seed separators');
////cHanger('.post-3588 font font', 'Seed separators'); 
////cHanger('.post-677 h5 font font', 'Seed separators');
////cHanger('.post-748 h5 font font', 'Seed separators');
////cHanger('.post-697 h5 font font', 'Seed separators');
////cHanger('.post-3630 font font', 'Seed separators'); 
////cHanger('.post-698 h5 font font', 'Seed separators');
////cHanger('.post-699 h5 font font', 'Seed separators');
////cHanger('.post-670 h5 font font', 'Seed separators');
////cHanger('.post-700 h5 font font', 'Seed separators');
////cHanger('.post-744 h5 font font', 'Seed separators');
////cHanger('.post-745 h5 font font', 'Seed separators');
////cHanger('.post-755 h5 font font', 'Seed separators');
////cHanger('.post-3609 font font', 'Seed separators'); 
////cHanger('.post-756 h5 font font', 'Seed separators');
////cHanger('.post-683 h5 font font', 'Seed separators');
////cHanger('.post-757 h5 font font', 'Seed separators');
////cHanger('.post-758 h5 font font', 'Seed separators');
////cHanger('.post-3634 font font', 'Seed separators'); 
////cHanger('.post-749 h5 font font', 'Seed separators');
////cHanger('.post-750 h5 font font', 'Seed separators');
////cHanger('.post-751 h5 font font', 'Seed separators');
////cHanger('.post-752 h5 font font', 'Seed separators');
////cHanger('.post-741 h5 font font', 'Seed separators');
////cHanger('.post-753 h5 font font', 'Seed separators');
////cHanger('.post-666 h5 font font', 'Seed separators');
////cHanger('.post-754 h5 font font', 'Seed separators');
////cHanger('.post-3660 font font', 'Seed separators'); 
////cHanger('.post-721 h5 font font', 'Seed separators');
////cHanger('.post-723 h5 font font', 'Seed separators');
////cHanger('.post-722 h5 font font', 'Seed separators');
////cHanger('.post-724 h5 font font', 'Seed separators');
////cHanger('.post-5435 font font', 'Seed separators'); 
////cHanger('.post-726 h5 font font', 'Seed separators');
////cHanger('.post-3629 font font', 'Seed separators'); 
////cHanger('.post-727 h5 font font', 'Seed separators'); 
////  ul.products
//cHanger('.sepintrotext .zagolovok0 font font', 'Grain-cleaning machines from Akyurek'); 
//jQuery('.sepintroparagraph').first().html(' considered to be one of the most popular and recognizable grain cleaners not only in Ukraine but also in neighboring countries. Our grain processing machines can perform functions such as skalperators (pre-treatment) and the separator (primary and secondary treatment). Separators operated in silos mills and grain cleaning plants. Due infinitely adjustable speed and reduced vibration sieves housing provides easier separation of grain and oilseeds through the sieve in the cleaning process. This allows our separators operate even with very heavy in the purification of cultures. Extensive experience in engineering and in-depth knowledge of the products can deliver a solution for cleaning, sorting and processing various types of grain and seeds. We are developing plants for all kinds of Cleansing products based on scientific achievements and many years of practical experience. In the world seed industry is moving in the direction of increasing the quality of industrial production and improve plant performance by cleaning and sorting seeds. This development increases the demand for high-performance, high-quality and cost-seed plants. We have a fully equipped test center with the production of machines and modern laboratory. This ensures the highest quality of technical performance studies and continuous improvement of processing technology. Our Test Center offers tailored solutions for each request, develops and manufactures a wide range of machines for processing of seeds and equipment, as well as solutions for all types of cleaning and sorting. We are building the seed plants for different types of grains, cereals, oilseeds, grass seeds, rice, legumes, seeds, herbs and other commercial types of seeds, with capacity up to 25 tons per hour per line. Our systems can operate in any weather conditions, anywhere in the world. Careful handling and sorting accuracy without risk of mixing varieties - our daily bread, and the basic principle of our work.');  
//cHanger('.calibrintrotext .zagolovok0 font font', 'Akyurek calibrating machines'); 
//  jQuery('.calibrparagraph').empty().first().html(' considered to be one of the most popular and recognizable grain cleaners not only in Ukraine but also in neighboring countries. Our grain processing machines can perform functions such as skalperators (pre-treatment) and the separator (primary and secondary treatment). Separators operated in silos mills and grain cleaning plants. Due infinitely adjustable speed and reduced vibration sieves housing provides easier separation of grain and oilseeds through the sieve in the cleaning process. This allows our separators operate even with very heavy in the purification of cultures. Extensive experience in engineering and in-depth knowledge of the products can deliver a solution for cleaning, sorting and processing various types of grain and seeds. We are developing plants for all kinds of Cleansing products based on scientific achievements and many years of practical experience. In the world seed industry is moving in the direction of increasing the quality of industrial production and improve plant performance by cleaning and sorting seeds. This development increases the demand for high-performance, high-quality and cost-seed plants. We have a fully equipped test center with the production of machines and modern laboratory. This ensures the highest quality of technical performance studies and continuous improvement of processing technology. Our Test Center offers tailored solutions for each request, develops and manufactures a wide range of machines for processing of seeds and equipment, as well as solutions for all types of cleaning and sorting. We are building the seed plants for different types of grains, cereals, oilseeds, grass seeds, rice, legumes, seeds, herbs and other commercial types of seeds, with capacity up to 25 tons per hour per line. Our systems can operate in any weather conditions, anywhere in the world. Careful handling and sorting accuracy without risk of mixing varieties - our daily bread, and the basic principle of our work.'); 
//cHanger('.travintrotext .zagolovok0 font font', 'Dressers'); 
//  jQuery('.travparagraph').replaceWith('<font><font>Designed for wet seed dressing or oiling, to the highest standards. </font><font>Complex modern control systems provide high flexibility and process safety. </font><font>Treaters or disinfectants (if you like), from Akyurek - high-performance machines that provide solutions to improve the quality of genetic material selhoz.produktsii</font></font><font><font>As well as real-time protection from diseases and pests. </font><font>Presowing treatment of the seeds, seedlings or seedlings to reduce potential crop losses more than doubled.</font></font><h5><font><font>List of Cultures, for which etching is the highest priority</font></font></h5><div id="seed-recommend"><ul><li><font><font>Spring barley, winter</font></font></li><li><font><font>winter rye</font></font></li><li><font><font>oats</font></font></li><li><font><font>Millet</font></font></li><li><font><font>Spring wheat, winter</font></font></li><li><font><font>Rape</font></font></li><li><font><font>winter triticale</font></font></li><li><font><font>Peas</font></font></li></ul><ul><li><font><font>Potatoes</font></font></li><li><font><font>beet sugar</font></font></li><li><font><font>Sunflower</font></font></li><li><font><font>Corn</font></font></li><li><font><font>Linen oilseed, fiber flax</font></font></li></ul></div>'); 
//  cHanger('.shellintrotext .zagolovok0 font font', 'Dressers'); 
//  jQuery('.shellparagraph').replaceWith('Or scarifiers from Akyurek - devices for removing hard shell seed plant, for increasing its germination capacity, or seeds for further use as raw materials or finished products. The equipment is made with high levels of automation, management and maintenance. Recommended solid plant seeds, the seeds of which have a short rest period and at the same time protected hard shell, causing possess low hygroscope (the ability to absorb moisture). Most often used for purification of rapeseed, peanut and sunflower, for example, for oil extraction. There is also a hard seeds are seeds of plants such as clover, lupine, alfalfa, clover, Kobe, Morning Glory, pelargonium, sweet peas, rosehips, and other'); 
//  cHanger('.polishintrotext .zagolovok0 font font', 'polishing machine'); 
//  jQuery('.polishparagraph').replaceWith('Special equipment from Akyurek, designed for the treatment of seeds from dust and dirt. On an example sunflower seeds these machines work to clean the hulls of the layers of dust, because sometimes people do not eat seeds, because dirty hands after use, or to give a smooth and pleasant texture. Also our polishing machines very well with seeds, collect dirt after the rain, or the dryer. All equipment is certified and complies with the ISO and is available only to the consumer with the appropriate documentation'); 
//  cHanger('.transport introtext .zagolovok0 font font', 'polishing machine'); 
//  jQuery('.transport paragraph').replaceWith('As with most of the equipment for processing of grain handling equipment is divided into farming and promyshlennoe.Dlya farms, for which the current is the transport of grain, as in the elevator, and in the field, are the most suitable mobile conveyors, which allow you to load and ship the grain without installation expensive stationary transport systems (they are easy to operate and require a minimum of staff in the delivery). For large businesses we offer a chain, belt conveyors and bucket elevators large size, with more high-tech features, such as special sensors, or the ability to self-cleaning, reboot the spilled material, sparing operation. Such equipment is used in the elevator complex, compound feed producers and port elevators. We have developed the machine does not injure the grain, almost all the way to the interaction as a commodity grain and seeds.'); 
//  cHanger('.scalesintrotext .zagolovok0 font font', 'Scales and packaging'); 
//  jQuery('.scalesparagraph').replaceWith('Packing Equipment by Akyurek allows the packing of bulk agricultural products (such as buckwheat, rice, lentils, peas and so on) in packs for retail or bags to transport. Equipment sold by our company an ergonomic, easy to operate and maintain. The transport system of our production to optimize the packing process and increase productivity dispensers. Scales, produced by us, been supporting automatic and manual loading and control. For its clients, our company provides the following services: supply of equipment, installation, connection, commissioning, training, warranty and post-warranty service.'); 
//  cHanger('.dustintrotext .zagolovok0 font font', 'aspiration and dust control'); 
//  jQuery('.dustparagraph').replaceWith('Packing Equipment by Akyurek allows the packing of bulk agricultural products (such as buckwheat, rice, lentils, peas and so on) in packs for retail or bags to transport. Equipment sold by our company an ergonomic, easy to operate and maintain. The transport system of our production to optimize the packing process and increase productivity dispensers. Scales, produced by us, been supporting automatic and manual loading and control. For its clients, our company provides the following services: supply of equipment, installation, connection, commissioning, training, warranty and post-warranty service.'); 
//  cHanger('.storageintrotext .zagolovok0 font font', 'Storage of grain'); 
//  jQuery('.storageparagraph').replaceWith('by Akyurek involves professional warehouses open and closed. Due to the vertical arrangement of the silo is achieved considerable space saving, despite impressive volumes saves raw material. No less significant advantage over conventional silage warehouses is to provide a high level of protection of the stored materials against external environmental factors moisture, rain, snow, dust, etc. In the grain storage. Akyurek offers complete equipment and "turnkey" projects for different types of grain elevators with a range of storage capacities from farm silos to large port elevators. Through the use of advanced technologies in production and experience of leading specialists of our technical department we have been able to develop comprehensive solutions for the storage of grain, taking into account all the clients wishes, and implement these projects as soon as possible..'); 
//  
}
function ukrTeamFix(){
//  cHanger('.company_history h4 font', 'START');
//  cHanger('.company_history p font', 'History Akyurek success story began in 1972. the companys first plant was set up in a fishing village Karaduvar, and the first name of the company was Akyurek Kardesler. It was then that the brothers Akyurek (Sabahattin, Ahmet and Ali) were planted the seeds of success which have emerged, giving us this delightful high-tech devices. the companys secret of success lies in a fair and open manner of business, high-quality equipment and competent after-sales service.');
//    cHanger('.company_history li:nth-child(2) h4 font', 'THE SECOND PLANT');
//  cHanger('.company_history li:nth-child(2) p font', 'In the 80s it was built a new production plant on the way Atash (Turkey), which despite the crisis allowed the young company to maintain regular partners and attract new customers. Each machine has its own development, and was designed primarily for herself. In the 90 years the company continued to improve the quality and productivity of the equipment.');
//    cHanger('.company_history li:nth-child(3) h4 font', 'NEW EQUIPMENT');
//  cHanger('.company_history li:nth-child(3) p font', 'In the beginning the company has got zero sotrunikami young, which began a large-scale upgrade of all equipment lines, and soon joined the lineup. Capacities of the company grew exponentially, it has become an excellent basis for the further development of the company.');
//    cHanger('.company_history li:nth-child(4) h4 font', 'TIME FOR A CHANGE');
//  cHanger('.company_history li:nth-child(4) p font', 'Modernization and expansion - the company pursued the goal when the first symbolic foundation stone of the new factory was laid. In the same year the factory in production processes have started to use ISO standards and quality control systems. Construction of the plant began in 2004. The plant start-up took place in 2005, 45 000 square meters of land with a total area of over 16,000 square meters. Special attention was paid to international cooperation. foreign companies acquainted with the technological innovation of the company. It began exporting in more than 30 countries: Russia, Sudan, Ethiopia, Casablanca, Madagascar, Bulgaria, Ukraine, America, etc.');
//    cHanger('.company_history li:nth-child(5) h4 font', 'LEADERSHIP');
//  cHanger('.company_history li:nth-child(5) p font', 'The company became the sole leader in the Turkish market. increasing demand for the companys products and raising its market share to 95%, we moved on, towards Bulgaria and Ethiopia. Company akyurek kardesler with the update of corporate identity from A to Z, has decided to continue its activities under the brand akyurek technology. the company your thinking and vision of the trusts created by corporate character of sorts. in 2010 we launched a new agriculture rekolte magazine - the first and only such magazine in Turkey and also waited azhiota among readers. rekolte magazine - Special independent publication for many years to be informed about the situation in the sector of agricultural industry.');
//    cHanger('.company_history li:nth-child(6) h4 font', 'NEW HORIZONS');
//  cHanger('.company_history li:nth-child(6) p font', 'With the onset of the 40th anniversary of the company, it was decided to withdraw packaging machinery development department into a separate company, equipped with the latest technology, under the brand Akyurek Packaging Technology');
//  jQuery('h3.abouts.naf+p.visible font').empty();
//  jQuery('h3.abouts.naf+p.visible font').first().text('AKYUREK Kardesler Ltd was founded in 1973, and since then Akyurek successfully produces equipment for aspiration, storage and processing of seeds after harvest in MERSIN, Turkey. The companys policy has always focused on high customer satisfaction, product quality, safety and after-sales service. Thanks to modern technology under its own patents against AKYUREK Kardesler Ltd it was decided to rename Akyurek Technology. Technology from Akyurek, located on an area of over 40,000 meters, were completely rethought. Some models were combined in order to increase their value to customers and reducing the final cost and the production area. This is the result of work by more than 400 professionals. Despite the fact that AKYUREK Technology - a family business it employs professionals iskolyuchitelno their fields, to develop technological solutions and equipment for conditioning, grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners. grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners. grinding, hulling seeds for food and seed pulp and seed, grain, pulmovoy, grain and dry legumes. AKYUREK Technology is known worldwide for its quality after-sales service. Thanks to forty years of experience in the field of food processing and processing of seeds, AKYUREK Technology always welcomes its customers in a friendly and professional atmosphere and continues to this professional approach to short-term trading or long-term business relationship, receiving positive feedback from partners');
//  cHanger('h4.inte font', 'Center for Research and Development.');
//    jQuery('.design_delivery').empty();
//jQuery('.design_delivery').first().text('AKYUREK delivers design, adapted to the needs of customers. All our products are designed and improved by experts in our center of research and development programs using Auto Computer Aided Design (AutoCad). All projects and products for the passage of the first quality control and verification of work principles should be tested in the relevant programs before entering the production line..');
//  cHanger('h4.inte.two font', 'production.');
//jQuery('p.factory-delivery font').first().empty().text(' To maximize the available capacity at the plant Akyurek and extend the life of your investment, all the equipment previously developed on computers with carrying out the corresponding calculations All parts made of carbon steel, cut by laser machines with CNC.');
//jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element p').first().empty().text(' All projects and products for the passage of the first quality control and verification of work principles should be tested in the relevant programs before entering the production line. A second quality check takes place in the assembly department. Details then, one by one, are transferred to the painting department, where the application of environmentally friendly automated powder coating Owen. Each steel part is then carefully cleaned and covered with paint, the appropriate food legislation in developed countries; which also increases the life of the machine, protecting it for a long period of time from corrosion, increasing the profitability of investments. In the department of electrical and electronic manufacturing and assembly, all parts used in the manufacture of machinery, certified and meet the requirements of the European Union. The last stage of the assembly is the assembly of electronic machine parts that are carefully selected according to the clients specific requirements. Control panels, motherboards, screens design, design and manufacture of electronic cards by professional engineers in AKYUREK Technology areas..');
//jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4').first().empty().text(' Technical part');
//jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p').first().empty().text(' Akyurek Technology offers proprietary software, as well as developing special software to individual needs. After the assembly of electrical and electronic parts, each machine goes compliance control, which is designed for specific areas of the product. After completion of all manufacturing and checks each car passes in the quality control department. To avoid minor or major defects in the later stages of the product lifecycle, engineers who are experts in their respective fields, carry out the final tests. All products that pass the necessary steps prior checks and are in line with EU health and safety standards, and then enter the shipping department.');
//jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p + h4').first().empty().text(' Design of individual orders');
//jQuery('.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element+.wpb_text_column.wpb_content_element h4 + p + h4 + p').first().empty().text(' Akyurek Technology can design for you any equipment in this and related fields, according to your wishes and requirements. Akyurek Technology - is the only vendor that not only produces complete solutions from A to Z, but also creates equipment to meet your individual needs and goals. Our modular equipment suitable for all seeds and all conditions that they face. GLOBAL PRESENCE With its partners, Akyurek become an international supplier of zernoobrabotki and continues to lead in the global market of seed material on 5 continents. Modular Akyurek screen cleaners used on five continents, allowing you to define global standards for the treatment of legume and cereal seeds.');
}
function ukrVideoFix(){
// cHanger('.entry-header.clearfix .h2 font', 'Video');  
// cHanger('.entry-header.clearfix .sub_title', 'We present our demo videos of our process technology equipment');  
// cHanger('article#post-1932 .vc_custom_heading h2 font', 'Video productions');  
// cHanger('article#post-1932 .moflex .cardie .wpb_wrapper font', ' Mobile semyaobrabatyvayuschaya barley line');  
// cHanger('article#post-1932 .moflex .cardie .wpb_wrapper ul li font', ' Mobile semyaobrabatyvayuschaya Iran barley line');  
// cHanger('article#post-1932 .moflex .cardie .wpb_wrapper hr + p font', ' Mobile semyaobrabatyvayuschey barley line tests in Morocco,');  
// cHanger('article#post-1932 .moflex .cardie .wpb_wrapper hr + p br + font', ' Mobile semyaobrabatyvayuschaya barley line under the Iran-key');  
// cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper font', ' Work Fotoseparator Akyurek');  
// cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper ul li font', ' color separation grain');  
// cHanger('article#post-1932 .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Work Fotoseparator Akyurek. Possibility obrabtyvat all kinds of agricultural products: corn, wheat, barley, sunflower seeds, corn, chickpeas and so on,');  
// cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
// cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas');  
// cHanger('article#post-1932 .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
// cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
//   cHanger('article#post-1932 .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
////  -----WORDS
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  peanut Kamneotdelitel');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Akyurek Technology kamneotdelitelnaya for peanut machine');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Kamneotdelitel peanut company Akyurek separates the impurities that are heavier than the peanuts: stones metallichsekie impurities, glass, dirt and other..');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'Mobile semyaobrabatyvayuschy plant green lentils');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' Mobile line for processing lentils');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Mobile semyaobrabatyvayuschy plant green lentils Morocco. ');  
//   cHanger('article#post-1932 .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' It made for ICARDA in Tunisia.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Line processing of sesame seeds');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Line processing of sesame seeds');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Line processing of sesame seeds. The line includes: Pre-cleaning, kamneotdelitel, gravity table barley Semyaobrabatyvayuschaya line.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'barley Semyaobrabatyvayuschaya line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' Semyaobrabatyvayuschaya barley line turnkey Romania');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Semyaobrabatyvayuschaya barley line under the key is in Romania, but it can be delivered to any country where barley is a popular product. ');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Semyaobrabatyvayuschaya barley line can easily be delivered anywhere in the world.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', 'Line for processing legumes Morocco');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', 'Line for processing and cleaning beans in Morocco');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Complete line of processing and ochsitke legume was established in Morrocco in 2011 by Akyürek Kardeşler. ');  
//   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font', 'First, the product behaved in the goaf hole whereupon a pre ochstitel. After pre-purification product fed into a storage silo. Silos in turn fueled kamneotdelitel and gravity separator. Then the product is fed to the inspection table posledeney check, and then fed to the packing equipment.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'barley Semyaobrabatyvayuschaya line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A Semyaobrabatyvayuschaya barley line turnkey Romania');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', 'Semyaobrabatyvayuschaya barley line under the key is in Romania, but it can be delivered to any country where barley is a popular product');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', 'Semyaobrabatyvayuschaya barley line can easily be delivered anywhere in the world.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Line for processing white beans in Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', 'Processing white beans in Egypt 8-10 t | h');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', 'Line for the complete processing of white beans performance 8-10 m / h .. ');  
//   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font', 'Initially, the product enters into the feed silo from whence further enters the precleaner where removed many impurities and dust. After pre-purification product undergoes fine purification and cleaned of fine impurities. Then the product is calibrated sizes are ordered pokupaetl. On kamneotdelitele and gravity table is sorted by unit weight. ');  
//   cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p br + font + br + font', 'The line includes the following equipment: a belt conveyor, silage, vibratory separator, air separation, Excell 206 Super Fine Screen Cleaner, Excell 226 Flat Screen Graders, kamneotdelitel, gravity separator and Fotoseparator.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', 'Mobile line for processing sesame');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', '99.09% purity mobile line cleaning sesame output product');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' All Turnkey and Mobil Plant Solutions');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper font', '  Dubai chickpea processing line');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper ul li font', ' Equipment for the processing line of Dubai chickpeas'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie .wpb_wrapper hr + p font', ' Akyurek processing line chickpea capacity of 3 tons / h, such equipment includes: vibratory separator, gravity separator, Z-Noriyu, inspection table.');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper font', '  Gravity separation of legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper ul li font', ' A gravity separator for legumes Egypt');  
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper hr + p font', ' Videos gravity separation beans in Egypt'); 
// cHanger('article#post-1932 .moflex + .moflex + .moflex + .moflex + .moflex + .moflex  + .moflex + .moflex + .moflex  + .moflex  .cardie + .cardie .wpb_wrapper hr + p br + font', ' Seed Gravity Separator Machine');  
}
function ukrProjectsFix(){
function goodsFix(){
  //    cHanger('.project_grid .project .overlay + h4 font font', 'CLEANING PLANT LEGUMES');
//    cHanger('.project_grid .project .overlay + h4 + a font font', 'CLEANING PLANT LEGUMES');  // Прицел под кнопку
//    jQuery('.project_grid .project:nth-child(2) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(3) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(4) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(5) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(6) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(7) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(8) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(9) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(10) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(11) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(12) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(13) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(14) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(15) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(16) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(17) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(18) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(19) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(20) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(21) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(22) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(23) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(24) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(25) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(26) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(27) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(28) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(29) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(30) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(31) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(32) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(33) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(34) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(35) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(36) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(37) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(38) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(39) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(40) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(41) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(42) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(43) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(44) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(45) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(46) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(47) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(48) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(49) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(50) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(51) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(52) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(53) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(54) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(55) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(56) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(57) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(58) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(59) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(60) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(61) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(62) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(63) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(64) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(65) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(66) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(67) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(68) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(69) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(70) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(71) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(72) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(73) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(74) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(75) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(76) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(77) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(78) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(79) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(80) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(81) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(82) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(83) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(84) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(85) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(86) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(87) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(88) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(89) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(90) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(91) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(92) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(93) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(94) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(95) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(96) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(97) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(98) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(99) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(100) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(101) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(102) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(103) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(104) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(105) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(106) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(107) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
//    jQuery('.project_grid .project:nth-child(108) .overlay + h4 font font').text('117 GRAIN CLEANER AKYUREKEXCELL')
} goodsFix();
function countryFix(){
     //TABLIST
//  cHanger('#tab-c2baa85f-8864-1 div h4 font', 'Flowing green peas');           //Заголовок 1
//  cHanger('#tab-c2baa85f-8864-1 div h5 font', 'Flowing green peas');              // Заголовок 2
//  jQuery('#tab-c2baa85f-8864-1 div h5 + p font').empty().first().text('FIXD');   // Параграф
//  jQuery('#tab-c2baa85f-8864-1 a.button.view_more').empty().first().text('FIXD'); // Кнопка
    // Разумно будет функционализировать весь countryдля сокращения веса файла

    
    //  cHanger('#tab-c2baa85f-8864-1 div h4 font', 'Flowing green peas');  
//  cHanger('#tab-1432271904839-2-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272205045-2-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272585677-3-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1432272636552-4-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309663043-5-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309712091-6-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309729020-7-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309739035-8-10 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309771259-9-8 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309787603-10-7 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309805371-11-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309832403-12-2 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309854740-13-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309889698-15-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309902387-16-1 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309924740-17-3 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309954852-18-0 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309971379-19-9 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491309988979-20-7 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310003163-21-5 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310027729-22-6 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310044229-23-1 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310073500-25-2 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310086275-26-8 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310099138-27-6 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310113978-28-10 div h4 font', 'Flowing green peas'); 
//  cHanger('#tab-1491310129306-29-9 div h4 font', 'Flowing green peas'); 
  }countryFix();
}
function ukrContactsFix(){
// cHanger('.entry-header.clearfix .h2 font', 'FEEDBACK');  
// cHanger('.entry-header.clearfix .sub_title', 'For all issues related to our equipment, feel free to call the number +380 66 500 2212.');  
// cHanger('.entry-content h2 font', 'Representations');  
// cHanger('.wpb_tabs.wpb_content_element ul li', 'Ukraine');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(2) font').text('Italy');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(3) font').text('Russia');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(4) font').text('Spain');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(5) font').text('Bulgaria');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(6) font').text('India');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(7) font').text('Algeria');  
// jQuery('.wpb_tabs.wpb_content_element ul.wpb_tabs_nav.ui-tabs-nav li:nth-child(8) font').text('Ethiopia');  
// jQuery('.vc_custom_heading.vc_custom_1493123263435 h4 font').text('Contacts');  
// jQuery('.vc_custom_1491312664818 .stm_contact_job font').text('Head of the Ukrainian company department');  
// jQuery('aside.vc_custom_1491311861603 ul li:first-child').text('161 black sea cossacks of ukraine, odessa');  
// jQuery('aside.vc_custom_1491311861603 ul li:nth-child(2)').text('call-center +38066 500 22');  
// jQuery('aside.vc_custom_1491311861603 ul li:nth-child(3)').text('info@akyurekltd.com');  
  
  }
//--------------ukr phrase tables
fixIfLanguageChanged(); 



//ar,az,be,de,en,es,fr,hu,it,pl,pt,ru,sk,sr,tr,uk,uzwe must support them