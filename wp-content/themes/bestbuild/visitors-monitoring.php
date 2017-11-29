<?php get_header();?>
<?php
/**
 * Template Name: visitors-monitoring
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

?>

<style>
  .row.visitors input {
    padding: 10px;
}.row.visitors {
    background: wheat;
    background: linear-gradient(to top, rgba(181, 189, 200, 0.94) 0%, rgba(130, 140, 149, 0.89) 36%, rgba(40, 52, 59, 0.83) 100%);
}
.bannerec {
    border: 1px solid #444;
    padding: 12px;
    margin: -12px 0 32px;
    display: table-cell;
}
.row.visitors .col-sm-6 {
    background: #e3e3e3;
    padding: 30px;
    box-shadow: 0px 10px 10px;
    margin: 20px 0;
}
  .nadrow.visitors {
    background: url(https://www.chatstack.com/images/BenefitsHappyCustomersGroup.png);
    background-size: 27%;
} .bannerec+.wpcf7 {
    margin: 35px 0 0;
}
  .page-template-visitors-monitoring header#header{
    margin: 0
  }
</style>
<link rel="stylesheet" href="/assets/src/visitors.css">

<div class="nadrow visitors">
<div class="row visitors">
  <div class="col-sm-3">
   
</div>
<div class="col-sm-6">
<div class="bannerec">
<div class="col-sm-10">
  <h3> Эта страница предназначена для электронного фиксирования посетителей демо-зала</h3>
  <p>Постарайтесь заполнить как можно больше полей</p>
  
  </div>
<div class="col-sm-2"> 
  <a href="http://akyurek.ua/wp-admin/admin.php?page=save_contact_form_7"><button class="view-vismon btn red">Просмотр</button></a></div>
  </div>
<?php echo do_shortcode( '[contact-form-7 id="8163" title="Visitors-monitoring"]' ); ?>
</div>
  <div class="col-sm-3">
  
</div>
</div>
</div>

<script src="/assets/src/visitors.js"></script>
<?php get_footer();?>
