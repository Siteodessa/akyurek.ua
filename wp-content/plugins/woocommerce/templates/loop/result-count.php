<?php
/**
 * Result Count
 *
 * Shows text: Showing x - x of x results.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/result-count.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
 
global $wp_query;

if ( ! woocommerce_products_will_display() )
	return;
?>
<p class="woocommerce-result-count">
	<?php
	$paged    = max( 1, $wp_query->get( 'paged' ) );
	$per_page = $wp_query->get( 'posts_per_page' );
	$total    = $wp_query->found_posts;
	$first    = ( $per_page * $paged ) - $per_page + 1;
	$last     = min( $total, $wp_query->get( 'posts_per_page' ) * $paged );

	if ( $total <= $per_page || -1 === $per_page ) {
		//printf( _n( 'Showing the single result', 'Showing all %d results', $total, 'woocommerce' ), $total );
	} else {
		printf( _nx( 'Showing the single result', 'Показ %1$d&ndash;%2$d из %3$d результатов', $total, '%1$d = first, %2$d = last, %3$d = total', 'woocommerce' ), $first, $last, $total );
	}
	?>
</p>

 <style></style>
<div id="category-description">
<?php 
$nefastshop = file_get_contents('./wp-content/themes/bestbuild/nefastshop.php');
$galler = do_shortcode('[lightgallery images="3811,508,3837,423,3583,3982,538,476"]');
$gallerfotosep = do_shortcode('[lightgallery images="6381,6382,6383,6384,6385,6386,6387,6388,6389,6390,6391,6392,6393,6394,6395,6396,6397,6398,6400,6401,6402,6403,6404,6405,6406,6407,6409,6410"]');
$fotosep  = '<div id="inax01" class="inax_group">  <div class="shop699"> <div class="support-css-shapes"></div><div class=""><div class="texo0"><div class="golo0"><div class="zagolovok0"><div class="lin0"></div><div class="lin1"></div><div class="lin2"></div>Фотосепараторы от Akyurek</div></div>известны своим продолжительным сроком эксплуатации и продолжительным сроком службы. Наши зерноперерабатывающие машины могут выполнять функции как скальператора (предварительная очистка), так и сепаратора (первичная и вторичная очистка). Сепараторы эксплуатируются в зерноподготовительных отделениях и на элеваторах мукомольных заводов, в том числе, в составе комплектного оборудования для вновь строящихся мельниц,  надежно отделяя от мелко- или крупнозернистых продуктов частицы соломы, веревки, бумагу, частицы древесины. Благодаря плавной регулировке скорости движения решет и уменьшенной вибрации корпуса, обеспечивается. Одним из главным достоинств линий, включающих этап предварительной очистки является увеличение эксплуатационного срока оборудования в последующих этапах переработки. В разрабатываемых нами скальператорах используются только прочные детали и соединения, присутствуют возможности быстрой смены сита и подключения аспирации для скоростной очистки сит.<div class="roundgallery rgl">' . $gallerfotosep . '</div><p class="spisok">Оптические сортировальные машины от Акюрек поддерживают очистку широкого спектра культур: Подсолнечник, Ядро подсолнечника, Семена тыквы, Рис, Пшеница, Ячмень, Гречка, Просо, Горчица, Кукуруза, Арахис, Соя, Грецкий орех, Фасоль, Кунжут, Пшено, Кешью, Фундук, Сушеные овощи, Пластик, Стекло, Кедровый орех, Миндаль, Чечевица, Чипсы картофельные, Горох, Изюм, Сафлор, Кофе бобы, Рапс, Замороженные ягоды	</p></div></div></div></div>';
$predvar  = file_get_contents('./wp-content/themes/bestbuild/predvariteli.php');
$ideshka_separator  = file_get_contents('./wp-content/themes/bestbuild/zernoochistiteli.php');
$ideshka_travim = file_get_contents('./wp-content/themes/bestbuild/protraviteli.php');
$ideshka_sheluha = file_get_contents('./wp-content/themes/bestbuild/shelushiteli.php');
$ideshka_polir = file_get_contents('./wp-content/themes/bestbuild/polirovka.php');
$ideshka_transport = file_get_contents('./wp-content/themes/bestbuild/transport.php');
$ideshka_wesi = file_get_contents('./wp-content/themes/bestbuild/wesi.php');
$ideshka_dust = file_get_contents('./wp-content/themes/bestbuild/dust.php');
$ideshka_silos = file_get_contents('./wp-content/themes/bestbuild/silos.php');
$kalibra = file_get_contents('./wp-content/themes/bestbuild/kalibra.php');
$ideshka = $post->ID;
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
if (stripos($url,'separatory-semyan/predvaritelnye-zernoochistiteli') !== false) {echo $predvar;} 
if (stripos($url,'separatory-semyan/ochistitelnye-mashiny/kalibrovochnye-ochistiteli/') !== false) {echo $kalibra;} 
  elseif (stripos($url,'fotoseparatory') !== false) {echo $fotosep;} 
  elseif (stripos($url,'kalibrovochnye') !== false) {echo $kalibra;} 
  elseif (stripos($url,'separatory-semyan') !== false) {echo $ideshka_separator;} 
  elseif (strrpos($url,'protravlivateli') !== false) {echo $ideshka_travim;} 
  elseif (strpos($url,'shelushiteli-semyan-vse-tovary') !== false) {echo $ideshka_sheluha;} 
  elseif (strpos($url,'polirovalnye') !== false) {echo $ideshka_polir;} 
  elseif (strpos($url,'transportnaya-sistema') !== false) {echo $ideshka_transport;} 
  elseif (strpos($url,'vesy-upakovka') !== false) {echo $ideshka_wesi;} 
  elseif (strpos($url,'zashhita-ot-pyli') !== false) {echo $ideshka_dust;}
  elseif (strpos($url,'hranenie-zerna') !== false) {echo $ideshka_silos;}  
  elseif (stripos($url,'/product-category/vse-tovary/') !== false) {echo '$nefastshop';}  
else { echo '';} ?>
</div>
<script> 
  
  jQuery(document).ready(function ($) { 
  jQuery('.circul').addClass('go') ;
   setTimeout(function(){
    jQuery('.inax_group').addClass('go') ;
        }, 400);
});

//jQuery(document).ready(function(){
//    jQuery("#inax01").animate({left:200, opacity:"1", top:100}, 1500);
//    jQuery("#wtfff").animate({left:200, opacity:"1", top:100}, 1500);
//    
//});

</script>




