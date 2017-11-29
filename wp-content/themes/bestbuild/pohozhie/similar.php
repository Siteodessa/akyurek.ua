


        <div class="wpb_column vc_column_container col-sm-6  rltd">
    <h4 style="text-align: left;font-family:Roboto;font-weight:900;font-style:normal">Другие проекты</h4>
    <div class="lama-container relatd">
      <div class="lama-wrapper">

          <?php
          $categories = get_the_category();
                if ( ! empty( $categories ) ){
                $cata = esc_html( $categories[0]->name );
                $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $params = array( 'category_name' =>  $cata, 'order'  => 'DESC',  'posts_per_page' => 100,  'paged' => $current_page );
                query_posts($params); $wp_query->is_archive = true;
                $wp_query->is_home = false;
                while(have_posts()): the_post();?>
                        <div class="lama-slide">
            <span class="over">
              <span class="spn">
                <p class="defs"><?php the_title();?></p>
                <p class="conts"><?php echo metapolename('дополнительная_строка_для_виджета', $post->ID);?></p>
                    <a href="<?php the_permalink();?>">     <button class="btn">Перейти</button></a>

              </span>
            </span>
   <img src="<?php echo the_post_thumbnail_url();?>" />
        </div>

      <?php endwhile; } ?>
      </div>
      <div class="lama-pagination"></div>
    </div>    </div>
