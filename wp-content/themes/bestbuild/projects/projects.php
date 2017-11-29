<?php get_header();?>
<?php/** * Template Name: Проекты - рубрика * * @package WordPress * @subpackage Twenty_Fourteen * @since Twenty Fourteen 1.0 */?>
 <?php function metapolename($detali, $pid) { $metko = get_post_meta($pid, $detali, true); if (empty($metko)) { } else { return $metko; }; } ?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/assets/css/apc.css">
  <div class="banner_bottom_w3ls_agile stroy prj">
<div class="entry-header clearfix" style="">
  <div id="melnica" class="paspin zaaddal">
    <div class="spinner">
      <img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png">
    </div>
  </div>
  <div class="entry-title-left">
    <div class="entry-title">
      <h1 class="h2" style="">
        <?php echo the_title(); ?>
      </h1>
    </div>
  </div>
  <div class="entry-title-right">
  </div>
</div>
<div class="container proj">
  <div class="agile_inner_info">
    <div class="col-md-12 w3agile_blog_left parnt">
      <?php  $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
      $params = array( 'category_name'       => 'proekty-kompanii', 'posts_per_page' => 100, 'paged'  => $current_page ); query_posts($params); $wp_query->is_archive = true; $wp_query->is_home = false; while(have_posts()): the_post(); ?>
      <div class="w3agile_blog_left_grid col-md-3 rubrika-proj iv">
        <div class="w3agile_blog_left_grid_sub"> <a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title() ?>" class="img-responsive"> <span class="status"><?php echo get_post_meta($post->ID, 'статус', true); ?></span></a> </div>
        <div class="custom block">
          <div class="child">
          <div class="w3agile_blog_left_grid_r special naf">
            <h3>
              <a href="<?php the_permalink();?>">
                <?php the_title() ?>
              </a>
            </h3>
            <div class="proj_desc_cat"><p><?php echo metapolename('дополнительная_строка_для_виджета', $post->ID);?></p></div></div>
            <a href="<?php the_permalink();?>">
              <button class="btn classic" type="button" name="button">Перейти</button>
            </a>
          </div>
        </div>
      </div>
      <?php endwhile; ?>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
    <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/projects/js/apc.js"></script>
  <?php get_footer();?>
