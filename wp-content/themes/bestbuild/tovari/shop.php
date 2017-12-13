<?php
/*
Template Name: Товары
*/
?>
<?php wp_head();?>
<?php get_header();?>
<link rel="stylesheet" href="/assets/src/tovari.css">
<div class="entry-header clearfix" style="">
  <div id="melnica" class="paspin zaaddal">
    <div class="spinner"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div>
  </div>
  <div class="entry-title-left">
    <div class="entry-title">
      <h1 class="h2" style="">Оборудование</h1>
    </div>
  </div>
  <div class="entry-title-right">
  </div>
</div>
<div class="row produc naf">
 <div class="container">
  <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'separatory-semyan',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Зерноочистительные машины</h4>
   </div>
   <div class="description">
    <p> Мы производим оборудование и производственные линии для всех видов очищаемых продуктов на основе научных достижений и многолетнего практического опыта.</p>
    <a href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
    <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'protravlivateli',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Протравливатели</h4>
   </div>
   <div class="description">
    <p>Протравливатели от Akyurek — высокопроизводительные машины , дающие решения для повышения качества генного материала продукции, а также защиту от болезней и вредителей.</p>
    <a href="http://akyurek.ua/goods/vse-tovary/protravlivateli/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'shelushiteli-semyan-vse-tovary',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'DESC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Шелушители</h4>
   </div>
   <div class="description">
    <p>Оборудование для удаления твердой оболочки семени растения, для повышения его всхожести или для дальнейшего использования семян в качестве сырья или готовой продукции</p>
    <a href="http://akyurek.ua/goods/vse-tovary/shelushiteli-semyan-vse-tovary/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'polirovalnye-mashiny',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Полировальные машины</h4>
   </div>
   <div class="description">
    <p>Оборудование от Akyurek , применяемое для создания готовой для конечного потребителя продукции. Очищает семена от пыли и грязи после уборки или зерносушильного оборудования,  </p>
    <a href="http://akyurek.ua/goods/vse-tovary/polirovalnye-mashiny/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'transportnaya-sistema',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Транспортная система</h4>
   </div>
   <div class="description">
    <p>Цепные, ленточные конвейеры и нории разных габаритов, с датчиками, самоочисткой, перезагрузкой рассыпавшегося материала, щадящими, для зерна, режимами работы</p>
    <a href="http://akyurek.ua/goods/transportnaya-sistema/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'vesy-upakovka',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Весы и упаковка</h4>
   </div>
   <div class="description">
    <p>Фасовочно-упаковочное оборудование позволяющее осуществлять взвешивание и размещение  сыпучей продукции в мешки и биг-бэги в автоматическом и полуавтоматическом режимах</p>
    <a href="http://akyurek.ua/goods/vse-tovary/vesy-upakovka/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'zashhita-ot-pyli',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Защита от пыли</h4>
   </div>
   <div class="description">
    <p>Аспирационные, вентиляционные машины, нагнетатели, циклоны и фильтры, воздушные очистители, соединительное оборудование для всех типов воздушных очистителей и экстракторов</p>
    <a href="http://akyurek.ua/goods/vse-tovary/zashhita-ot-pyli/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
     <div class="col-md-3 catcard iv">
   <div class="image">
       <div class="lama-container lama-container-horizontal"><div class="lama-wrapper">
<?php
$loop = new WP_Query( array(
'post_type' => 'product',
//'category' => 'Калибровочные очистители',
   'product_cat' => 'hranenie-zerna',
'posts_per_page' => 5,
'orderby' => 'menu_order',
'order' => 'ASC',
));
while ( $loop->have_posts() ): $loop->the_post(); ?>
    <div class="lama-slide">
<?php the_post_thumbnail("thumbnail-215x300"); ?>
    </div>
<?php endwhile; wp_reset_postdata(); ?>
  </div>
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span>
    <span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>

    </div>
   <div class="heading">
    <h4>Бункеры</h4>
   </div>
   <div class="description">
    <p>Готовые силосы и склады, открытого и закрытого типа. Защита хранимого сырья от воздействия внешних факторов окружающей среды сырости, дождя, снега, пыли</p>
    <a href="http://akyurek.ua/goods/vse-tovary/hranenie-zerna/" class="button product_type_simple tovbtn ">Подробнее</a>
   </div>
  </div>
 </div>
</div>
<script>
  var lama = new lama('.lama-container', {
    pagination: '.lama-pagination',
    nextButton: '.lama-button-next',
    prevButton: '.lama-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplayDisableOnInteraction: false,
    autoplay: 700,
    loop: true,
    height: 1550,
    speed: 3600
  });
</script>
<script src="<?php echo get_template_directory_uri();?>/tovari/js/tovari.js"></script>
<?php get_footer();?>
