<?php get_header();?>
<?php
/**
 * Template Name: projects-template
 * Template Post Type: post
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

<?php edit_post_link(); ?>




  <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/projects/css/ap.css">
  <div id="main">
    <div class="container projects-template prote">
      <div class="content-area">
        <div class="entry-header clearfix">
          <div id="melnica" class="paspin zaaddal">
            <div class="spinner"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div>
          </div>
          <div class="entry-title-left">
            <div class="entry-title">
              <h1 class="h2" style="">
                <?php the_title()?>
              </h1>
            </div>
          </div>
          <div class="entry-title-right">
          </div>
        </div>
      </div>
<div class="project_row">
<div class="ligal">
<?php $metapolename = 'галерея';$befo = '';$afta = '';$metko = get_post_meta($post->ID, $metapolename, true); if (empty($metko)) {} else {  echo do_shortcode($metko);} ?>
</div>
      <div class="le left_column wpb_column vc_column_container col-sm-12 col-lg-9 col-md-9"  id="lightgallery">
      <div class="swp"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png">
          <div class="lama-container gallery-top  projectile">
    <div class="lama-wrapper">
    </div>
  </div>
  <div class="lama-container gallery-thumbs">
    <div class="lama-wrapper">
    </div>
  </div>
</div>
        <div class="project_description"><?php echo metapolename('описание', $post->ID);?></div>
        <div class="row">
          <div class="wpb_column vc_column_container col-sm-6 integra">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="vc_custom_heading vc_custom_1491779940036">
                  <h4 style="text-align: left;font-family:Roboto;font-weight:900;font-style:normal"><?php echo metapolename('особенности_интеграции_заголовок', $post->ID);?></h4>
                </div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <ul class="type_2"><?php echo metapolename('особенности_интеграции_список', $post->ID);?></ul>
                  </div>
                </div>
              </div>
            </div>
          </div><?php include ('/wp-content/themes/bestbuild/pohozhie/similar.php');?></div>
      </div>
      <script> jQuery( document ).ready( function( $ ) { $( '.lightgallery-default' ).lightGallery( LightGallery.Options ); }); </script>
      <div class="ri wpb_column vc_column_container col-sm-3 vc_hidden-sm vc_hidden-xs">
        <div class="vc_column-inner ">
          <div class="wpb_wrapper">
            <div class="project_info style_2">
              <h4><?php echo metapolename('детали_проекта', $post->ID);?></h4>
              <div class="project_info_wr">
                <table>
                  <tbody>
                    <tr>
                      <td><?php echo metapolename('страна', $post->ID);?></td>
                      <th><?php echo metapolename('страна-значение', $post->ID);?></th>
                    </tr>
                    <tr>
                      <td><?php echo metapolename('рабочая_площадь', $post->ID);?></td>
                      <th><?php echo metapolename('рабочая_площадь_-_значение', $post->ID);?>.00 м<sup>2</sup></th>
                    </tr>
                    <tr>
                      <td><?php echo metapolename('дата_окончания', $post->ID);?></td>
                      <th><?php echo metapolename('дата_окончания_список', $post->ID);?></th>
                    </tr>
                    <tr>
                      <td><?php echo metapolename('дополнительное_поле', $post->ID);?></td>
                      <th><?php echo metapolename('дополнительное_значение', $post->ID);?></th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="icon_button pres">
              <a target="_self" href="<?php echo metapolename('ссылка_на_презентацию', $post->ID);?>" class="iv"><i style="font-size: 19px; line-height: 29px; height: 29px;" class="fa fa-file-pdf-o"></i><span><?php echo metapolename('скачать_презентацию', $post->ID);?></span></a></div>
            <div class="icon_button skype quos">
              <a target="_self" href="<?php echo metapolename('ссылка_на_контакты', $post->ID);?>" class="iv"><i style="font-size: 21px; line-height: 29px; height: 29px;" class="fa fa-question-circle"></i><span><?php echo metapolename('есть_вопрос_спросите_у_экспертов', $post->ID);?></em></span></a></div>
            <aside class="widget widget_contacts wpb_content_element vc_widgets">
              <div class="widget_title">
                <h5><?php echo metapolename('надпись_контактные_данные', $post->ID);?></h5>
              </div>
              <ul>
                <li>
                  <div class="icon"><i class="fa fa-home"></i></div>
                  <div class="text"><?php echo metapolename('адрес', $post->ID);?></div>
                </li>
                <li>
                  <div class="icon"><i class="fa fa-phone-square"></i></div>
                  <div class="text"><?php echo metapolename('call-центр', $post->ID);?></div>
                </li>
                <li>
                  <div class="icon"><i class="fa fa-envelope"></i></div>
                  <div class="text"><a href="mailto:<?php echo metapolename('почта', $post->ID);?>"><?php echo metapolename('почта', $post->ID);?></a></div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      <?php echo do_shortcode( '[contact-form-7 id="14" title="Заявки сайта"]' ); ?>
      </div>
</div>
    </div>













  </div>
  <script type="text/javascript" src="<?php echo get_template_directory_uri();?>/projects/js/ap.js"></script>
  <?php get_footer();?>
