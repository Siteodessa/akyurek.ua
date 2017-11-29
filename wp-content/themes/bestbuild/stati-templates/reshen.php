<?php get_header();?>
<?php
/**
 * Template Name: Решения
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

?>

x
<link rel="stylesheet" href="/assets/src/news.css">
<div class="news-intro">
  <h1>Готовые решения для крупозаводов</h1></div>
<div class="container">
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
          'category_name'       => 'resheniya', // name ?????????
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
<div class="one-post">
  <div class="imageblock vc_col-sm-3">
    <img class="news-image" src="<?php the_post_thumbnail_url(); ?>" />
  </div>
          <div class="wrapper vc_col-sm-9">
                <strong><?php the_title() ?></strong>
            <?php the_content(); ?>
            <a href="<?php the_permalink(); ?>"><button class="btn redd">Перейти</button></a>
            <small><?php the_time('F jS, Y') ?></small>
          </div>
</div>
        <?php endwhile; ?>
</div>

<!--<script src="/assets/src/expenses.js"></script>-->
<?php get_footer();?>
