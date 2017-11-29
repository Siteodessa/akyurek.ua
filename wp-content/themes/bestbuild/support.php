<?php get_header();?>
<?php
/**
 * Template Name: Поддержка
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

?>


<!--<link rel="stylesheet" href="/assets/src/expenses.css">-->
<style>
  .support-intro {
    background: #ae100e;
    margin: -120px -60px 0;
}
.col-sm-4 div.wpcf7 {
    background: whitesmoke;
    padding: 10px 20px;
}
.support-intro h1 {
    color: #fff;
    text-align: center;
    padding: 50px 0;
}
.container.support {
    background: #ae100e;
  overflow: hidden
}
.container.support img#coga {
    animation: rotating 17s linear infinite;
}
.spinner {
    transform: scale(6) translateX(-10%) translateY(50%);
}
  p.p {
    color: white;
    font-size: 16px;
    line-height: 1.6;
}

.support h2 {
    padding: 10px 0 50px;
    color: whitesmoke;
}
.col-sm-4 div.wpcf7 {
    background: whitesmoke;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
}
.spinner:before{display:none}
.spinner:after{display:none}
</style>
 <div class="support-intro">
  <h1>Поддержка компании Akyurek</h1></div>
<div class="container support">

<h2>Вы можете оставить заявку на дополнительное оборудование или запчасти.</h2>
<div id="melnica" class="paspin zaaddal"> <div class="spinner"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div></div>
<div class="col-sm-4">
  <p class="p">На любом производстве бывают непредвиденные обстоятельства, по этой причине мы осуществляем поставку дополнительных запчастей нашим клиентам. Для того, чтобы заказать деталь вам достаточно заполнить форму заявки, и мы свяжемся с вами в часы работы не позднее 1 суток после подачи заявки</p></div>
<div class="col-sm-4"><?php echo do_shortcode( '[contact-form-7 id="8233" title="Поддержка"]' ); ?></div>
<div class="col-sm-4"></div>
</div>

<!--<script src="/assets/src/expenses.js"></script>-->
<?php get_footer();?>
