
<div id="solution">
  <div class="prj">
    <div class="container proj">
      <h2 class="razd">Комплексные решения</h2>
      <div class="col-md-12 w3agile_blog_left parnt">
        <?php $categories = get_the_category();
              if ( ! empty( $categories ) )
              $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
              $params = array( 'category_name' =>  'Готовые линии', 'order'  => 'DESC',  'posts_per_page' => 4,  'paged' => $current_page );
              query_posts($params); $wp_query->is_archive = true;
              $wp_query->is_home = false;
              while(have_posts()): the_post();?>
        <div class="w3agile_blog_left_grid col-md-3 rubrika-proj iv">
          <div class="w3agile_blog_left_grid_sub">
            <a href="<?php the_permalink();?>">
              <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" class="img-responsive"> <span class="status"></span></a>
          </div>
          <div class="custom block">
            <div class="child">
              <div class="w3agile_blog_left_grid_r special naf">
                <h3>
                  <a href="<?php the_permalink();?>">
<?php the_title(); ?></a>
                </h3>
                <div class="proj_desc_cat">
                  <p><?php echo metapolename('текст_для_виджета', $post->ID);?></p>
                </div>
              </div>
              <a href="<?php the_permalink();?>">
                <button class="btn classic" type="button" name="button">Перейти</button>
              </a>
            </div>
          </div>
        </div>
      <?php endwhile; ?>
      </div>
    </div>
  </div>
</div>
