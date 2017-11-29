<?php get_header();?>
<?php/** * Template Name: Блог * * @package WordPress * @subpackage Twenty_Fourteen * @since Twenty Fourteen 1.0 */?>



<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/akyurek.css">
  <div class="banner_bottom_w3ls_agile stroy solutions">

 <div class="entry-header clearfix" style="">
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
    <div class="container resheniya">
      <?php  $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1; $params = array( 'category_name'       => 'glavnayasektsiya3zagolovokobekty', 'posts_per_page' => 100, 'paged'  => $current_page ); query_posts($params); $wp_query->is_archive = true; $wp_query->is_home = false; while(have_posts()): the_post(); ?>
      <h3 class="agile_heading inner">
        <?php the_title() ?>
      </h3>
      <p class="sub_cap">
        <?php the_content(); ?>
      </p>
      <?php endwhile; ?>
      <div class="agile_inner_info">
        <div class="col-md-12 w3agile_blog_left">
          <?php  $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
          $params = array( 'category_name'       => 'resheniya', 'posts_per_page' => 100, 'paged'  => $current_page ); query_posts($params); $wp_query->is_archive = true; $wp_query->is_home = false; while(have_posts()): the_post(); ?>
          <div class="w3agile_blog_left_grid col-md-3 rubrika-resheniya">
            <div class="w3agile_blog_left_grid_sub"> <a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt=" " class="img-responsive"> <span class="status"><?php echo get_post_meta($post->ID, 'статус', true); ?></span></a> </div>
            <div class="custom block">
              <div class="w3agile_blog_left_grid_r special naf">
                <h3>
                  <a href="<?php the_permalink();?>">
                    <?php the_title() ?>
                  </a>
                </h3>
              </div>
              <div class="w3agile_blog_left_grid_sub1">
                <div class="w3agile_blog_left_grid_sub1_pos">
                  <p class="adress"><span class="directs dir-adress"><?php echo get_post_meta($post->ID, 'адрес', true); ?></span></p>
                  <p class="srok"><span class="directs dir-srok"><?php echo get_post_meta($post->ID, 'Срок сдачи', true); ?></span></p>
<!--                  <p class="adress">Цена :<span class="directs dir-price"></span></p>-->
                </div>
              </div>
            </div>
          </div>
          <?php endwhile; ?>
          <!-- <nav aria-label="Page navigation"> <ul class="w3_pagination"> <li class="disabled"><a class="active_p" href="#" aria-label="previous"><span aria-hidden="true">«</span></a></li> <li><a href="#">1</a></li> <li><a href="#">2</a></li> <li><a href="#">3</a></li> <li><a href="#">4</a></li> <li><a href="#">5</a></li> <li>   <a class="active_p" href="#" aria-label="next">     <span aria-hidden="true">»</span>   </a> </li> </ul> </nav>-->
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <?php get_footer();?>
