<?php get_header();?>
<?php
/**
 * Template Name: расходы
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

?>

<style>
  .row.expenses input {
    padding: 10px;
}.row.expenses {
    background: wheat;
    background: linear-gradient(to top, rgba(181, 189, 200, 0.94) 0%, rgba(130, 140, 149, 0.89) 36%, rgba(40, 52, 59, 0.83) 100%);
}
.bannerec {
    border: 1px solid #444;
    padding: 12px;
    margin: -12px 0 32px;
    display: table-cell;
}
.row.expenses .col-sm-6 {
    background: #e3e3e3;
    padding: 30px;
    box-shadow: 0px 10px 10px;
    margin: 20px 0;
}
  .nadrow.expenses {
    background: url(https://wallpapercave.com/wp/qWFQnsb.jpg);
    background-repeat: no-repeat;
    background-size: cover;
} .bannerec+.wpcf7 {
    margin: 35px 0 0;
}
  .page-template-expenses-monitoring header#header{
    margin: 0
  }
</style>
<link rel="stylesheet" href="/assets/src/expenses.css">


<div class="nadrow expenses">
<div class="row expenses">
  <div class="col-sm-3">
   
</div>
<div class="col-sm-6">
<div class="bannerec">
<div class="col-sm-10">
  <h3> Эта страница предназначена для фиксирования расходов персонала</h3>
  <p>Во избежание путаницы с бухгалтерией, постарайтесь заполнить как можно больше полей</p>
  
  </div>
<div class="col-sm-2"> 
  <a href="http://akyurek.ua/wp-admin/admin.php?page=flamingo_inbound&s&_wpnonce=d6a1c10691&_wp_http_referer=%2Fwp-admin%2Fadmin.php%3Fpage%3Dflamingo_inbound&action=-1&m=0&channel_id=410&paged=1&action2=-1"><button class="view-vismon btn red">Просмотр</button></a></div>
  </div>
<?php echo do_shortcode( '[contact-form-7 id="8185" title="Расходы 2"]' ); ?>
</div>
  <div class="col-sm-3">
  
</div>
</div>
</div>

<script src="/assets/src/expenses.js"></script>
<?php get_footer();?>
