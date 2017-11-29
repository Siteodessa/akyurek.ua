<?php get_header();?>
<?php
/**
 * Template Name: Линия Аспирационное оборудование
 * Template Post Type: post
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>
  <link rel="stylesheet" href="/wp-content/themes/bestbuild/assets/css/akyurek.css">
  <div class="entry-header clearfix" style=" min-height:230px;   background: url(<?php echo get_the_post_thumbnail_url(); ?>);  background-repeat: no-repeat;  background-size: 4%;  background-position: 49.6%;">
    <div class="overlap">
      <div id="melnica" class="paspin zaaddal">
        <div class="spinner"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div>
      </div>
      <div class="entry-title-left">
        <div class="entry-title">
          <h1 class="h2" style=""><?php echo the_title(); ?></h1>
        </div>
      </div>
      <div class="entry-title-right">
      </div>
    </div>
  </div>
  <span class="main">
    <span class="col-main">
      <span class="category-description std"><p>


        Увеличение мирового спроса на украинскую агропродукцию приводит к неуклонному увеличению производственных мощностей на элеваторах и зерноперерабатыающих предприятиях. В результате такой взаимосвязи, в совокупности с недостаточным уровнем технического оснащения предприятий, приводит к повышенной взрыво-пожароопасности последних. Ведь зачастую аспирационные меры воспринимают как санитарные методы, нивелируя безопасностью сотрудников и оборудования. <br><br>Зерновая пыль, образуемая на зерновых предприятиях, за счет трения семенной массы, обладает сокрушительным потенциалом воспламенения. Запалом может выступать любой источник тепла или электричества, которых на производстве всегда предостаточно.<br><br> Пожар, вызванный зерновой пылью, крайне затруднительно потушить штатными средствами пожаротушения, в силу чрезвычайно высокой температуры горения. Для предотвращения данной угрозы, устанавливаются различные системы воздушных экстракторов, вытягивающих воздух из точки пыления и выводящих его в атмосферу. В зависимости от запроса заказчика, пыль может быть возвращена в поток, или выведена из процесса. 
</p>
 
    
    
    <div class="grid-3 asp">  
          <?php
  $loop = new WP_Query( array(
  'post_type' => 'product',
     'product_cat' => 'zashhita-ot-pyli',
  'posts_per_page' => 5,
  'orderby' => 'menu_order',
  'order' => 'ASC',
  ));
  while ( $loop->have_posts() ): $loop->the_post(); ?>
      
      <a href="<?php the_permalink();?>" class="naf">
            <?php the_post_thumbnail("thumbnail-215x300"); ?>
        <h4 class="news-products nepr"> <?php the_title();?></h4>       
</a>

            <?php endwhile; wp_reset_postdata(); ?>
         </div> 
      
      
    
    </span>
  </span>
  </span>

  <?php include('/wp-content/themes/bestbuild/prefooter-slider/prefooter.php');?>
  <?php get_footer();?>
