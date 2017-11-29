

 <?php function metapolename($detali, $pid) { $metko = get_post_meta($pid, $detali, true); if (empty($metko)) { } else { return $metko; }; } ?>


 <style>
    .darky {
      background: #3d3d3d url(/pattern_1.png) !important;
    padding: 40px 0;
    }    .darky .lama-container {
      width: 100%;
      height: auto;
      margin-left: auto;
      margin-right: auto;

    }
    .darky .lama-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: 200px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  </style>

</div></div>
  <div class="darky">


<div class="botbord">

    <div class="container naf">
     <h2><a>Выполненные работы</a></h2>       <a href="http://akyurek.ua/proekty-kompanii/">     <button class="btn red">Смотреть все</button></a> </div>  </div>
       <div class="container">
  <div class="lama-container s2 ivl">
    <div class="lama-wrapper">
<?php
$catname = 'Проекты компании';
$current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
$params = array( 'category_name' =>  $catname,
                'order'  => 'DESC',
                'posts_per_page' => 100,
                'paged' => $current_page );
query_posts($params); $wp_query->is_archive = true;
$wp_query->is_home = false;
while(have_posts()): the_post(); ?>
      <div class="lama-slide">
        <span class="over">
          <span class="spn">
            <p class="defs"><?php the_title();?></p>
            <p class="conts"><?php echo metapolename('дополнительная_строка_для_виджета', $post->ID);?></p>
                <a href="<?php the_permalink();?>">     <button class="btn">Перейти</button></a>

          </span>
        </span>
<img src="<?php echo the_post_thumbnail_url();?>" /></div>
        <?php endwhile; ?>
    </div>
    <!-- Add Pagination -->
    <div class="lama-pagination"></div>
  </div>
  </div>
  </div>
  <!-- lama JS -->
  <!-- Initialize lama -->

            <script>


            var lama1 = new lama('.s1', {
              nextButton: '.lama-button-next',
              prevButton: '.lama-button-prev',
              paginationClickable: true,
              spaceBetween: 30,
              centeredSlides: true,
              autoplayDisableOnInteraction: false,
              autoplay: 6000,
              loop: true,
              height: 1550,
              'onInit': function() {
                setTimeout(function() {
                  jQuery('.s1').addClass('round2');
                }, 150);
                setTimeout(function() {
                  jQuery('.s1').removeClass('round2');
                }, 5500);
              }
            });
            lama1.on('slideChangeStart', function() {
              setTimeout(function() {
                jQuery('.s1').addClass('round2');
              }, 750);
              setTimeout(function() {
                jQuery('.s1').removeClass('round2');
              }, 5500);
            });

            var lama2 = new lama('.s2', {
              slidesPerView: 3,
              slidesPerColumn: 2,
              spaceBetween: 30,
              autoplay: 4000,
              pagination: {
                el: '.lama-pagination',
                clickable: true,
              },
            });
            </script>
<div class="container">
<div class="vc_row wpb_row">
