<?php get_header();?>
<?php
/**
 * Template Name: APK
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>
<link rel="stylesheet" href="/assets/src/apk.css">
<div class="row apk">
<div class="container">
<div class="">
<?php
 echo file_get_contents('http://akyurek.ua/wp-content/themes/bestbuild/ua.svg');
?>
</div>
<div class="">
<h2>
Выберите область  </h2>
  
  <a class="btn red" href="http://akyurek.ua/ukraine.xls" style="margin:0 12px">Скачать в виде Excel c номерами предприятий</a>
  <a class="btn red" target="_blank" href="http://akyurek.ua/2017/07/04/apk-ukrainy-po-oblastyam/" style="margin:0 12px">Открыть в виде списка на сайте</a>
  <div class="renderer">
      <?php
// echo file_get_contents('http://akyurek.ua/wp-content/themes/bestbuild/apk-companies.php');
?>
  </div>
</div>
</div>
</div>
<script src="/assets/src/apk.js"></script>
<?php get_footer();?>
