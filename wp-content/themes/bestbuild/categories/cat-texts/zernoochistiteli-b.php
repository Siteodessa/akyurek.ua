<div class="row special naf">
  
  
  <h2 class="c">Все виды оборудования для зерновых линий</h2>
  <div class="container">
    

        <div class="lama-container lama-container-horizontal twin"><div class="lama-wrapper">


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
  <div class="lama-pagination lama-pagination-clickable lama-pagination-bullets"><span class="lama-pagination-bullet lama-pagination-bullet-active"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span><span class="lama-pagination-bullet"></span></div>
  <div class="lama-button-next"></div>
  <div class="lama-button-prev ls-nav-prev"></div>
</div>


    <div class="sepintroparagraph scnd content-area">Во всем мире семенная отрасль движется в сторону увеличения качества промышленного производства и повышения производительности заводов по очистке и сортировке семян. Такое развитие событий способствует увеличению спроса на высокопроизводительные, высококачественные и экономичные семенные заводы. У нас есть полностью оборудованный испытательный центр с производственными машинами и современной лабораторией. Это обеспечивает наивысшее качество технических показателей исследований и непрерывное совершенствование технологии обработки. Наши зерноперерабатывающие машины по праву считаются одними из самых популярных и узнаваемых зерноочистительных машин не только в Украине, но и в странах ближнего зарубежья, они могут выполнять функции как скальператора (предварительная очистка), так и сепаратора (первичная и вторичная очистка). Используются на элеваторах, мукомольных и зерноочистительных заводах. Благодаря плавной регулировке скорости движения решет и уменьшенной вибрации корпуса, обеспечивается более легкое разделение зёрен через решета в процессе очистки. Это позволяет нашим сепараторам работать даже с очень тяжелыми в очистке культурами. Всесторонний опыт в инженерии и глубокое знание продуктов позволяют поставлять решения для очистки, сортировки и обработки различных видов зерна и семян. Мы разрабатываем заводы для всех видов очищаемых продуктов на основе научных достижений и многолетнего практического опыта. </div>
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
    autoplay: 6000,
    loop: true,
    height: 1550,
    'onInit': function() {
      setTimeout(function() {
        jQuery('.lama-container').addClass('round2');
      }, 150);
      setTimeout(function() {
        jQuery('.lama-container').removeClass('round2');
      }, 5500);
    }
  });
  lama.on('slideChangeStart', function() {
    setTimeout(function() {
      jQuery('.lama-container').addClass('round2');
    }, 750);
    setTimeout(function() {
      jQuery('.lama-container').removeClass('round2');
    }, 5500);
  });
</script>