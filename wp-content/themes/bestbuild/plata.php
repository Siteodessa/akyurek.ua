<?php
/**
* Template Name: Platforma
*
* @package WordPress
* @subpackage Twenty_Fourteen
* @since Twenty Fourteen 1.0
*/
// Чтобы сделать платформу для нового типа культуры  
// Открываем platform.css, заменяем yachmen на название культуры
// Открываем platform.js, заменяем yachmen на название культуры
// В верстке меняем на имя культуры
// Убрать лишний слот - добавить нули в clip-path, добавить слот - в верстке делаем новый клипборд , добавить кнопку - просто валим кнопку , и трогаем js и css , плачем и писаем кровью
// PROFIT


get_header();  
?>

<link rel='stylesheet' href='/assets/src/platform/zern/yachmen/platform.css' type='text/css' media='all'/>
<div id="box" class="box default">
  <div class="shadowboard" ></div>
  <div data-clip="1" class="clipboard c1"></div>
  <div data-clip="2" class="clipboard c2"></div>
  <div data-clip="3" class="clipboard c3"></div>
  <div data-clip="4" class="clipboard c4"></div>
  <div data-clip="5" class="clipboard c5"></div>
</div> 
<div class="prazdnik">
<button id="yachmen-separ" ssil="http://akyurek.ua/product-category/vse-tovary/separatory-semyan/">Сепараторы семян</button>
<button id="yachmen-polir" ssil="http://akyurek.ua/product-category/vse-tovary/shelushiteli-semyan-vse-tovary/">Шелушители семян</button>
<button id="yachmen-trans" ssil="http://akyurek.ua/product-category/transportnaya-sistema/">Транспортная система</button>
<button id="yachmen-defence" ssil="http://akyurek.ua/product-category/vse-tovary/zashhita-ot-pyli/">Защита от пыли</button>
<button id="yachmen-hranenie" ssil="http://akyurek.ua/product-category/vse-tovary/hranenie-zerna/">Хранение</button>
  

</div>
<script>




</script>

<script src="/assets/src/platform/zern/yachmen/platform.js"></script>
<?php
 wp_footer();
get_footer();  
?>
  </body>
  </html>