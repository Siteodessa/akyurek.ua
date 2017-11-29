<?php get_header();?>
    <style>
        /*
  .col_in.__padd-left.__three-cols {
opacity: 0;
}
*/
        button#check {
            /* padding-top: 100px; */
            position: absolute;
            top: 130px;
        }
        li#menu-item-3579 .sub-menu {
            display: none!important
        }
        @media only screen and (max-width: 992px) {
            .col-lg-3.col-lg-pull-9.col-md-3.col-md-pull-9 {
                clear: both;
            }
        }
    </style>
<script>
              jQuery(document).ready(function() {
                              jQuery('.col-lg-9').css('opacity', '1');
                jQuery('.greeting').css('opacity', '1');
                var id = location.hash;
                if (id === "") {
                    jQuery('.greeting').css('display', 'block');
                } else {
                    setTimeout(function() {
                        jQuery('.col-lg-9.col-lg-push-3.col-md-9.col-md-push-3.col-sm-12.col-xs-12').prepend('<img id="loadd" src="http://akyurek.ua/wp-content/uploads/2017/04/preloader_10.gif">');
                      id = id.slice(1, -1);
              jQuery(document).find(jQuery('[gid="'+id+'"]')).trigger('click');
                        jQuery('#loadd').detach();
                    }, 100);
                    setTimeout(function() {
                        prepareYourLinks();
                        prepareYourLinks();
                    }, 2500)
                }
              // сюда бы дописать - если window.location содержит fastshop -> релоад
              window.onhashchange = function () {
                if (window.location == 'http://akyurek.ua/fastshop/') {
                  window.location.reload();
                }
              }
            })
</script>
    
<div class="fastshop">
  <div class="entry-header clearfix small" style="">
    <div id="melnica" class="paspin zaaddal">
      <div class="spinner"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div>
    </div>
    <div class="entry-title-left">
      <div class="entry-title">
        <h1 class="h2" style="">Интернет-магазин</h1>
        <div class="breadcrumbs">Продукции Akyurek</div>
      </div>
    </div>
    <div class="entry-title-right"></div>
  </div>

  <div id="scrolltome"></div>
  <div id="platform"></div>
  <div class="row">   
    
    <?php  $multiview = "<div class='multiview'><a class='btn' id='card-view'><i class='fa fa-th' aria-hidden='true'></i></a><a class='btn' id='bigcards-view'><i class='fa fa-th-large' aria-hidden='true'></i></a><a class='btn' id='list-view'><i class='fa fa-th-list' aria-hidden='true'></i></a></div>" ;
              if( current_user_can('editor') || current_user_can('administrator') ) {  ?> 
<?php echo $multiview; } ?>
       
    
    
    <div class="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
      <div class="greeting">
        <div class="allproducts">
  <ul class="products">
    <li class="chk ni post-6422 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka first instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-25-do-50-kg/')" gid="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-25-do-50-kg/">
	<div class="product_thumbnail"><a ssil="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-25-do-50-kg/">
			<img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121311-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="11_08482303_20150828_121311.jpg" title="11_08482303_20150828_121311.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121311-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121311-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121311-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px">		</a>
	</div>
	<h5>Автоматические весы , закрытого типа — от 25 дo 50 кг</h5>
	<div class="product_info clearfix">
	</div>
	<a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-25-do-50-kg/" data-quantity="1" data-product_id="6422" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
<li class="chk ni post-6421 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-5-do-50-kg/')" gid="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-5-do-50-kg/">
	<div class="product_thumbnail"><a ssil="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-5-do-50-kg/">
			<img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121317-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="11_08482303_20150828_121317.jpg" title="11_08482303_20150828_121317.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121317-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121317-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/11_08482303_20150828_121317-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px">		</a>
	</div>
	<h5>Автоматические весы , закрытого типа — от 5 дo 50 кг</h5>
	<div class="product_info clearfix">
	</div>
	<a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-5-do-50-kg/" data-quantity="1" data-product_id="6421" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-716 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/konveernaya-lenta/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/17_02300458_1-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="17_02300458_1.jpg" title="17_02300458_1.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/17_02300458_1-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/17_02300458_1-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/17_02300458_1-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Конвейерная лента</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/konveernaya-lenta/" data-quantity="1" data-product_id="716" data-product_sku="aa32b47a2dd9" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-678 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/jog-conveyor/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/jog-conveyor-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="jog-conveyor.jpg" title="jog-conveyor.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/jog-conveyor-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/jog-conveyor-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/jog-conveyor-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/jog-conveyor-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Вибротранспортеры</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/jog-conveyor/" data-quantity="1" data-product_id="678" data-product_sku="e8d696b6c622" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-671 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/easy-dump-elevator/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/easy-dump-elevator-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="easy-dump-elevator.jpg" title="easy-dump-elevator.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/easy-dump-elevator-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/easy-dump-elevator-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/easy-dump-elevator-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/easy-dump-elevator-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Легкий самосвальный лифт/ элеватор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/easy-dump-elevator/" data-quantity="1" data-product_id="671" data-product_sku="c023d2415935" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-718 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/linejnye-vesy-dlya-multizadachnosti/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/head-scale-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="head-scale.png" title="head-scale.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/head-scale-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/head-scale-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/head-scale-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Линейные весы для мультизадачности</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/linejnye-vesy-dlya-multizadachnosti/" data-quantity="1" data-product_id="718" data-product_sku="3a990ad24795" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-679 product type-product status-publish has-post-thumbnail product_cat-metallicheskie-separatory product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/magnet-separators/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/magnet-separators-machine-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="magnet-separators-machine.png" title="magnet-separators-machine.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/magnet-separators-machine-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/magnet-separators-machine-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/magnet-separators-machine-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Магнитный сепаратор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/magnet-separators/" data-quantity="1" data-product_id="679" data-product_sku="a6eb3e215e81" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-720 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/mayatnikovyj-kovshovyj-elevator/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/pendulum-elevator-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="pendulum-elevator.jpg" title="pendulum-elevator.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/pendulum-elevator-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/pendulum-elevator-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/pendulum-elevator-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Маятниковый ковшовый элеватор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/mayatnikovyj-kovshovyj-elevator/" data-quantity="1" data-product_id="720" data-product_sku="4ebbdf8fd578" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-690 product type-product status-publish has-post-thumbnail product_cat-tsilindricheskie-sortirovochnye-mashiny product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/wire-mesh-pre-cleaner/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02730007_33320kopya-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02730007_33320kopya.jpg" title="15_02730007_33320kopya.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02730007_33320kopya-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02730007_33320kopya-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02730007_33320kopya-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Многострунный ленточный очиститель</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/wire-mesh-pre-cleaner/" data-quantity="1" data-product_id="690" data-product_sku="a1d7978181fa" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-675 product type-product status-publish has-post-thumbnail product_cat-metallicheskie-separatory product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/hammer-mills/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/hammer-mills-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="hammer-mills.jpg" title="hammer-mills.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/hammer-mills-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/hammer-mills-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/hammer-mills-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/hammer-mills-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Молотковая дробилка(мельница)</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/hammer-mills/" data-quantity="1" data-product_id="675" data-product_sku="3def025849f8" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-681 product type-product status-publish has-post-thumbnail product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/modular-pipework-systems/')">
      <div class="product_thumbnail">
        <a> <img width="242" height="174" src="http://akyurek.ua/wp-content/uploads/2017/03/14_09388839_modular-pipes.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="14_09388839_modular-pipes.jpg" title="14_09388839_modular-pipes.jpg"> </a>
      </div>
      <h5>Системы соединительных трубок</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/modular-pipework-systems/" data-quantity="1" data-product_id="681" data-product_sku="4e05bb5f0858" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-687 product type-product status-publish has-post-thumbnail product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/sesame-peeler-sp-4000/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sesame-peeling-machine-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sesame-peeling-machine.png" title="sesame-peeling-machine.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sesame-peeling-machine-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sesame-peeling-machine-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sesame-peeling-machine-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Шелушитель кунжута – SP-4000</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/sesame-peeler-sp-4000/" data-quantity="1" data-product_id="687" data-product_sku="153cf01c912b" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-684 product type-product status-publish has-post-thumbnail product_cat-vse-tovary product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/plant-automation/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="255" src="http://akyurek.ua/wp-content/uploads/2017/03/otomasyon11-300x255.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="otomasyon11.jpg" title="otomasyon11.jpg"> </a>
      </div>
      <h5>Автоматизация производства</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/plant-automation/" data-quantity="1" data-product_id="684" data-product_sku="f05b522c966e" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-691 product type-product status-publish has-post-thumbnail product_cat-vozdushnye-separatory product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/aspirator-s-zamknutym-tsiklom-vozduha-ara/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/air-recycling-aspirator-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="air-recycling-aspirator.jpg" title="air-recycling-aspirator.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/air-recycling-aspirator-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/air-recycling-aspirator-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/air-recycling-aspirator-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Аспиратор с Замкнутым Циклом Воздуха ARA</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/aspirator-s-zamknutym-tsiklom-vozduha-ara/" data-quantity="1" data-product_id="691" data-product_sku="1c322abff583" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-692 product type-product status-publish has-post-thumbnail product_cat-vozdushnye-separatory product_cat-zashhita-ot-pyli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/aspiratsionnaya-kamera/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02259611_aspiration20box20copy-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02259611_aspiration20box20copy.jpg" title="15_02259611_aspiration20box20copy.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02259611_aspiration20box20copy-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02259611_aspiration20box20copy-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02259611_aspiration20box20copy-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Аспирационная Камера</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/aspiratsionnaya-kamera/" data-quantity="1" data-product_id="692" data-product_sku="b5d625e6969d" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-686 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/rotary-drum-seed-cleaner/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/rotary-drum-seed-cleaner-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="rotary-drum-seed-cleaner.png" title="rotary-drum-seed-cleaner.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/rotary-drum-seed-cleaner-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/rotary-drum-seed-cleaner-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/rotary-drum-seed-cleaner-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Барабанный очиститель</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/rotary-drum-seed-cleaner/" data-quantity="1" data-product_id="686" data-product_sku="3790c98e0d1d" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-689 product type-product status-publish has-post-thumbnail product_cat-barhatnyj-filtr product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/velvet-roller/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/velvet-roller-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="velvet-roller.jpg" title="velvet-roller.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/velvet-roller-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/velvet-roller-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/velvet-roller-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/velvet-roller-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Бархатный фильтр</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/velvet-roller/" data-quantity="1" data-product_id="689" data-product_sku="b69928abbde7" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-663 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/big-bag-scale-above-ground-weighing/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/bigbag2-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="bigbag2.png" title="bigbag2.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/bigbag2-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/bigbag2-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/bigbag2-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Большие наземные весы</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/big-bag-scale-above-ground-weighing/" data-quantity="1" data-product_id="663" data-product_sku="a87155c36631" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-673 product type-product status-publish has-post-thumbnail product_cat-sverhintensivnye-ochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/excell-50-series-super-fine-screen-cleaners/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/fine-screen-cleaner050-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="fine-screen-cleaner050.jpg" title="fine-screen-cleaner050.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/fine-screen-cleaner050-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/fine-screen-cleaner050-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/fine-screen-cleaner050-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/fine-screen-cleaner050-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Интенсивный очиститель серии Excell 50</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/excell-50-series-super-fine-screen-cleaners/" data-quantity="1" data-product_id="673" data-product_sku="5db35fdaa18e" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-707 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnaya-mashina-b-mac-007-5/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/five-deck-grading-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="five-deck-grading-machine.jpg" title="five-deck-grading-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/five-deck-grading-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/five-deck-grading-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/five-deck-grading-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная Машина B.MAC-007-5</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnaya-mashina-b-mac-007-5/" data-quantity="1" data-product_id="707" data-product_sku="761432b93caa" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-709 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnaya-mashina-s-odnim-reshetny/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/single-deck-seed-grader-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="single-deck-seed-grader.jpg" title="single-deck-seed-grader.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/single-deck-seed-grader-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/single-deck-seed-grader-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/single-deck-seed-grader-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная машина для семян B.MAC-007-1</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-odnim-reshetny/" data-quantity="1" data-product_id="709" data-product_sku="257db4ad1f61" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-708 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnaya-mashina-s-dvumya-reshetny/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/double-deck-grading-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="double-deck-grading-machine.jpg" title="double-deck-grading-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/double-deck-grading-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/double-deck-grading-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/double-deck-grading-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная машина с двумя решетными станками B.MAC-007-2</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-dvumya-reshetny/" data-quantity="1" data-product_id="708" data-product_sku="e58af04df555" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-710 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnaya-mashina-s-tremya-reshetny/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/three-deck-grading-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="three-deck-grading-machine.jpg" title="three-deck-grading-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/three-deck-grading-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/three-deck-grading-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/three-deck-grading-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная машина с тремя решетными станками B.MAC-007-3</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-tremya-reshetny/" data-quantity="1" data-product_id="710" data-product_sku="e2b03c02f13d" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-706 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovachnaya-mashina-s-chetyrmya-reshe/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/four-deck-grading-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="four-deck-grading-machine.jpg" title="four-deck-grading-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/four-deck-grading-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/four-deck-grading-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/four-deck-grading-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная машина с четырьмя решетными станками B.MAC-007-4</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovachnaya-mashina-s-chetyrmya-reshe/" data-quantity="1" data-product_id="706" data-product_sku="8b1bb286e69e" class  ="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-711 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnaya-mashina-s-shestyu-reshetn/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/6-tekneli-bakliyat-boylama-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="6-tekneli-bakliyat-boylama.jpg" title="6-tekneli-bakliyat-boylama.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/6-tekneli-bakliyat-boylama-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/6-tekneli-bakliyat-boylama-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/6-tekneli-bakliyat-boylama-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочная машина с шестью решетными станками B.MAC-007-6</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-shestyu-reshetn/" data-quantity="1" data-product_id="711" data-product_sku="a70daedc0ada" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-743 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-230/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/excell-230-series-super-flat-screen-graders-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="excell-230-series-super-flat-screen-graders.jpg" title="excell-230-series-super-flat-screen-graders.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/excell-230-series-super-flat-screen-graders-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/excell-230-series-super-flat-screen-graders-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/excell-230-series-super-flat-screen-graders-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочные очистители Excell 230</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-230/" data-quantity="1" data-product_id="743" data-product_sku="6f20f584aa7d" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-664 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/big-bag-scale-on-ground-weighing/')">
      <div class="product_thumbnail">
        <a> <img width="277" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/bigbag-277x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="bigbag.png" title="bigbag.png"> </a>
      </div>
      <h5>Большие наземные весы</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/big-bag-scale-on-ground-weighing/" data-quantity="1" data-product_id="664" data-product_sku="8c85baf0c0f9" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-693 product type-product status-publish has-post-thumbnail product_cat-hranenie-zerna product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/bunkery-dlya-hraneniya-produktsii/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/20_02880658_silo-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="20_02880658_silo.jpg" title="20_02880658_silo.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/20_02880658_silo-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/20_02880658_silo-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/20_02880658_silo-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Бункеры Для Хранения Продукции</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/bunkery-dlya-hraneniya-produktsii/" data-quantity="1" data-product_id="693" data-product_sku="33baf5581c91" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-694 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/vertikalnyj-shelushitel-splt-340/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/vertical-huller-machines-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="vertical-huller-machines.jpg" title="vertical-huller-machines.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/vertical-huller-machines-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/vertical-huller-machines-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/vertical-huller-machines-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Шелушитель зерновых SPLT 340</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/vertikalnyj-shelushitel-splt-340/" data-quantity="1" data-product_id="694" data-product_sku="de116c7d4a7f" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-685 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/puls-hull-split/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/puls-hull-split-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="puls-hull-split.png" title="puls-hull-split.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/puls-hull-split-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/puls-hull-split-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/puls-hull-split-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/puls-hull-split-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Вертикальный шелушитель семян</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/puls-hull-split/" data-quantity="1" data-product_id="685" data-product_sku="2b0d2bfd7bd2" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-672 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/electronic-scale-in-bag-net-weigher-5-to-50-kg/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="mechanic-scale-in-bag-gross-weigher.png" title="mechanic-scale-in-bag-gross-weigher.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Механические весы , закрытого типа - от 5 дo 50 кг</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/electronic-scale-in-bag-net-weigher-5-to-50-kg/" data-quantity="1" data-product_id="672" data-product_sku="9c8d024e155c" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-680 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/mechanic-scale-in-bag-gross-weigher-25-to-50-kg/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="mechanic-scale-in-bag-gross-weigher.png" title="mechanic-scale-in-bag-gross-weigher.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/mechanic-scale-in-bag-gross-weigher-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Механические весы , закрытого типа - от 5 дo 50 кг</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/mechanic-scale-in-bag-gross-weigher-25-to-50-kg/" data-quantity="1" data-product_id="680" data-product_sku="504bba5b57c8" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-695 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/vesy-proizvoditelnosti-rdktr-017/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/20_02297593_333-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="20_02297593_333.jpg" title="20_02297593_333.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/20_02297593_333-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/20_02297593_333-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/20_02297593_333-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Весы Производительности RDKTR-017</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/vesy-proizvoditelnosti-rdktr-017/" data-quantity="1" data-product_id="695" data-product_sku="8332930a5e91" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-696 product type-product status-publish has-post-thumbnail product_cat-drugie-ochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/vibratsionnyj-separator-c-sas-013/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/vibratory-sieve-seed-pre-cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="vibratory-sieve-seed-pre-cleaner.jpg" title="vibratory-sieve-seed-pre-cleaner.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/vibratory-sieve-seed-pre-cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/vibratory-sieve-seed-pre-cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/vibratory-sieve-seed-pre-cleaner-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Вибрационный Сепаратор C.SAS -013</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/vibratsionnyj-separator-c-sas-013/" data-quantity="1" data-product_id="696" data-product_sku="276f8137bc36" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-712 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kalibrovochnye-ochistiteli-excell-serii-220/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/excell-220-series-flat-screen-graders-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="excell-220-series-flat-screen-graders.jpg" title="excell-220-series-flat-screen-graders.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/excell-220-series-flat-screen-graders-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/excell-220-series-flat-screen-graders-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/excell-220-series-flat-screen-graders-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/excell-220-series-flat-screen-graders-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочные очистители Excell серии 220</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kalibrovochnye-ochistiteli-excell-serii-220/" data-quantity="1" data-product_id="712" data-product_sku="52b952057d19" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-661 product type-product status-publish has-post-thumbnail product_cat-ochistiteli-vse-v-odnom product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/akyurekexcell-33-screen-cleaner-grader/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/akyurekexcell-33-screen-cleaner-grader-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="akyurekexcell-33-screen-cleaner-grader.jpg" title="akyurekexcell-33-screen-cleaner-grader.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/akyurekexcell-33-screen-cleaner-grader-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/akyurekexcell-33-screen-cleaner-grader-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/akyurekexcell-33-screen-cleaner-grader-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/akyurekexcell-33-screen-cleaner-grader-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Калибровочный очиститель серии EXCELL 33</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/akyurekexcell-33-screen-cleaner-grader/" data-quantity="1" data-product_id="661" data-product_sku="a1f61523ce91" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-713 product type-product status-publish has-post-thumbnail product_cat-kamneotdeliteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kamneotdelitel-t-mac-009/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="14_02771601_İki katlı yeni taş makinesi1 copy (1)" title="14_02771601_İki katlı yeni taş makinesi1 copy (1)" srcset="http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-600x600.png 600w, http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-86x86.png 86w, http://akyurek.ua/wp-content/uploads/2017/03/14_02771601_-ki-katl-yeni-ta-makinesi1-copy-1-280x280.png 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Камнеотделитель T.MAC-009</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kamneotdelitel-t-mac-009/" data-quantity="1" data-product_id="713" data-product_sku="7dfca324af02" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-668 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/continuous-cup-z-elevators/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/17_02662389_z20tipi-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="17_02662389_z20tipi.jpg" title="17_02662389_z20tipi.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/17_02662389_z20tipi-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/17_02662389_z20tipi-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/17_02662389_z20tipi-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ковшовая Z-образная нория</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/continuous-cup-z-elevators/" data-quantity="1" data-product_id="668" data-product_sku="a5c5289e077d" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-665 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/bucket-elevators/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02644108_f_eq9755cd-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02644108_f_eq9755cd.jpg" title="15_02644108_f_eq9755cd.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02644108_f_eq9755cd-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02644108_f_eq9755cd-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02644108_f_eq9755cd-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ковшовая нория</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/bucket-elevators/" data-quantity="1" data-product_id="665" data-product_sku="e5253b33ece4" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-714 product type-product status-publish has-post-thumbnail product_cat-ochistiteli-vse-v-odnom product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="combo-screen-cleaner-grader.jpg" title="combo-screen-cleaner-grader.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Комбинированный очиститель с шестью решетными станками O.MAC-001</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu/" data-quantity="1" data-product_id="714" data-product_sku="bf7e93d8bfcc" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-3586 product type-product status-publish has-post-thumbnail product_cat-ochistiteli-vse-v-odnom product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-003/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="combo-screen-cleaner-grader.jpg" title="combo-screen-cleaner-grader.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/combo-screen-cleaner-grader-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Комбинированный очиститель с шестью решетными станками O.MAC-003</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-003/" data-quantity="1" data-product_id="3586" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-715 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/konveer-lentochnyj-naklonnyj-y-belt-0014/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/yukleme-bandi-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="yukleme-bandi.jpg" title="yukleme-bandi.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/yukleme-bandi-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/yukleme-bandi-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/yukleme-bandi-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>конвейер ленточный наклонный Y.BELT-0014</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/konveer-lentochnyj-naklonnyj-y-belt-0014/" data-quantity="1" data-product_id="715" data-product_sku="ce3827f2600b" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-738 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/separator-arahisa-po-plotnosti/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/08_05620404_1-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="08_05620404_1.jpg" title="08_05620404_1.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/08_05620404_1-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/08_05620404_1-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/08_05620404_1-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Сепаратор арахиса по плотности</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/separator-arahisa-po-plotnosti/" data-quantity="1" data-product_id="738" data-product_sku="ac3607d87f58" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-682 product type-product status-publish has-post-thumbnail product_cat-hranenie-zerna product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/outdoor-storage-silos/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/20_02137705_siloooo-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="20_02137705_siloooo.jpg" title="20_02137705_siloooo.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/20_02137705_siloooo-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/20_02137705_siloooo-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/20_02137705_siloooo-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Силосы для открытых пространств</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/outdoor-storage-silos/" data-quantity="1" data-product_id="682" data-product_sku="70a371a68e96" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-739 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/sitovoj-vibratsionnyj-separator-50-x-80-c-sas-013/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/50x80-vibro-elek-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="50x80-vibro-elek.jpg" title="50x80-vibro-elek.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/50x80-vibro-elek-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/50x80-vibro-elek-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/50x80-vibro-elek-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ситовой вибрационный сепаратор 50 x 80 C.SAS 013</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/sitovoj-vibratsionnyj-separator-50-x-80-c-sas-013/" data-quantity="1" data-product_id="739" data-product_sku="fb172786640b" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-736 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/semennoj-ochistitel-sita-380-jog-screen-cleaner/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02699075_sdc1077420copy-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02699075_sdc1077420copy.jpg" title="15_02699075_sdc1077420copy.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02699075_sdc1077420copy-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02699075_sdc1077420copy-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02699075_sdc1077420copy-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/15_02699075_sdc1077420copy-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ситовой очиститель семян и гранул Jog 380</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/semennoj-ochistitel-sita-380-jog-screen-cleaner/" data-quantity="1" data-product_id="736" data-product_sku="b3f4d9d4ff53" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-734 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/predvaritelnyj-ochistitel-barabann/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/drum-sieve-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="drum-sieve-machine.jpg" title="drum-sieve-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/drum-sieve-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/drum-sieve-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/drum-sieve-machine-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/drum-sieve-machine-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Скальператор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/predvaritelnyj-ochistitel-barabann/" data-quantity="1" data-product_id="734" data-product_sku="d20c65a83023" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-740 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/sortirovshhik-po-tsvetu-s-remennym-prints/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/yatay-tip-renk-ayirma-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="yatay-tip-renk-ayirma.png" title="yatay-tip-renk-ayirma.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/yatay-tip-renk-ayirma-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/yatay-tip-renk-ayirma-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/yatay-tip-renk-ayirma-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Сортировочное оборудование для чая. Фотосепаратор с ременным принципом работы</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/sortirovshhik-po-tsvetu-s-remennym-prints/" data-quantity="1" data-product_id="740" data-product_sku="39ca1006c22e" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-688 product type-product status-publish has-post-thumbnail product_cat-spiralnyj-separator product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/spiral-separator/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/spiral-separator-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="spiral-separator.jpg" title="spiral-separator.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/spiral-separator-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/spiral-separator-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/spiral-separator-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/spiral-separator-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Винтовой сепаратор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/spiral-separator/" data-quantity="1" data-product_id="688" data-product_sku="6c6765b3bd57" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-747 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/teleskopicheskaya-lenta-teles-belt-180/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/telescopic-conveyor-belt-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="telescopic-conveyor-belt.png" title="telescopic-conveyor-belt.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/telescopic-conveyor-belt-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/telescopic-conveyor-belt-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/telescopic-conveyor-belt-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/telescopic-conveyor-belt-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Телескопическая лента Teles. Belt 180</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/teleskopicheskaya-lenta-teles-belt-180/" data-quantity="1" data-product_id="747" data-product_sku="ef23866b72c2" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-728 product type-product status-publish has-post-thumbnail product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/osteolomatel-excell-150/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/fircali-kilcik-kiran-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="fircali-kilcik-kiran.jpg" title="fircali-kilcik-kiran.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/fircali-kilcik-kiran-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/fircali-kilcik-kiran-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/fircali-kilcik-kiran-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Остеоломатель EXCELL 150</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/osteolomatel-excell-150/" data-quantity="1" data-product_id="728" data-product_sku="8b3b83baf3ca" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-729 product type-product status-publish has-post-thumbnail product_cat-osteotdeliteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/osteolomatel-k-kran-054/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02850295_1-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02850295_1.jpg" title="15_02850295_1.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02850295_1-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02850295_1-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02850295_1-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Остеоломатель K.KRAN-054</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/osteolomatel-k-kran-054/" data-quantity="1" data-product_id="729" data-product_sku="be0fdafe0320" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-730 product type-product status-publish has-post-thumbnail product_cat-polirovalnye-mashiny product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/polirovalnaya-mashina/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02729793_555-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02729793_555.jpg" title="15_02729793_555.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02729793_555-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02729793_555-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02729793_555-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Полировальная машина</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/polirovalnaya-mashina/" data-quantity="1" data-product_id="730" data-product_sku="10b322439e91" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-731 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/poluavtomaticheskie-vesy-double-scale-net-weigher-bagger-5-to-50-kg/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/double-scale-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="double-scale.png" title="double-scale.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/double-scale-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/double-scale-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/double-scale-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/double-scale-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>АВТОМАТИЧЕСКИЕ ВЕСЫ — ОТ 5 ДО 50 КГ</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/poluavtomaticheskie-vesy-double-scale-net-weigher-bagger-5-to-50-kg/" data-quantity="1" data-product_id="731" data-product_sku="3f59cd2833b5" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-732 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/portsionnyj-robot/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/open-mouth-bagger-robot-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="open-mouth-bagger-robot.jpg" title="open-mouth-bagger-robot.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/open-mouth-bagger-robot-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/open-mouth-bagger-robot-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/open-mouth-bagger-robot-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Порционный робот</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/portsionnyj-robot/" data-quantity="1" data-product_id="732" data-product_sku="668051298a7a" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-5458 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli last instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/predvaritelnye-ochistiteli-serii-excell-100/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/06/EXCELL-100-Series-Seed-Pre-Cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="EXCELL-100-Series-Seed Pre-Cleaner" title="EXCELL-100-Series-Seed Pre-Cleaner" srcset="http://akyurek.ua/wp-content/uploads/2017/06/EXCELL-100-Series-Seed-Pre-Cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/06/EXCELL-100-Series-Seed-Pre-Cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/06/EXCELL-100-Series-Seed-Pre-Cleaner-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/06/EXCELL-100-Series-Seed-Pre-Cleaner-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Предварительные очистители серии Excell 100</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/predvaritelnye-ochistiteli-serii-excell-100/" data-quantity="1" data-product_id="5458" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-733 product type-product status-publish has-post-thumbnail product_cat-ochistiteli-vse-v-odnom product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistit/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="double-pre-fine-screen-cleaner.jpg" title="double-pre-fine-screen-cleaner.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Предварительный интенсивный очиститель с шестью решетными станками C.O.TEM-004</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistit/" data-quantity="1" data-product_id="733" data-product_sku="6583b7141d89" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-3581 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/pre-cleaner-de-stoner/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="Ground-Peanut-Pre-Cleaner-and-Stone-Separator" title="Ground-Peanut-Pre-Cleaner-and-Stone-Separator" srcset="http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-600x600.jpg 600w, http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/Ground-Peanut-Pre-Cleaner-and-Stone-Separator-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Предварительный очиститель Арахиса с камнеотделителем</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/pre-cleaner-de-stoner/" data-quantity="1" data-product_id="3581" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-3587 product type-product status-publish has-post-thumbnail product_cat-ochistiteli-vse-v-odnom product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistitel-s-shestyu-reshetnymi-stankami-c-o-tem-006/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="double-pre-fine-screen-cleaner.jpg" title="double-pre-fine-screen-cleaner.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/double-pre-fine-screen-cleaner-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Предварительный тонкий очиститель с шестью решетными станками C.O.TEM-006</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistitel-s-shestyu-reshetnymi-stankami-c-o-tem-006/" data-quantity="1" data-product_id="3587" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk ni post-662 product type-product status-publish has-post-thumbnail product_cat-protravlivateli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/batch-type-seed-coating-machine/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/batch-kaplama-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="batch-kaplama.jpg" title="batch-kaplama.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/batch-kaplama-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/batch-kaplama-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/batch-kaplama-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Протравливатель</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/batch-type-seed-coating-machine/" data-quantity="1" data-product_id="662" data-product_sku="5b423280f090" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-735 product type-product status-publish has-post-thumbnail product_cat-protravlivateli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/protravlivatel/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="continuous-seed-treating-machine.jpg" title="continuous-seed-treating-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Протравливатель</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/protravlivatel/" data-quantity="1" data-product_id="735" data-product_sku="aa4b70aba8f1" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-669 product type-product status-publish has-post-thumbnail product_cat-protravlivateli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/continuous-seed-treating-machine/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="continuous-seed-treating-machine.png" title="continuous-seed-treating-machine.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/continuous-seed-treating-machine-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Протравливатель для промасливания и увлажнения семян</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/continuous-seed-treating-machine/" data-quantity="1" data-product_id="669" data-product_sku="c5be6be36a57" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-676 product type-product status-publish has-post-thumbnail product_cat-laboratornoe-oborudovanie product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/hand-screen-set/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/15_02200836_lab-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_02200836_lab.jpg" title="15_02200836_lab.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/15_02200836_lab-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/15_02200836_lab-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/15_02200836_lab-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ручной очистительный набор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/hand-screen-set/" data-quantity="1" data-product_id="676" data-product_sku="f08adea26457" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-737 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/semennorushitelnaya-mashina-udarnogo/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sunflower-de-huller-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sunflower-de-huller-machine.jpg" title="sunflower-de-huller-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sunflower-de-huller-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/sunflower-de-huller-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/sunflower-de-huller-machine-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Семеннорушильная машина ударного типа DE-HULL-038</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/semennorushitelnaya-mashina-udarnogo/" data-quantity="1" data-product_id="737" data-product_sku="bd27b367adb8" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-742 product type-product status-publish has-post-thumbnail product_cat-intensivnye-ochistiteli-ochistitelnye-mashiny product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-210/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/excell-210-series-fine-screen-cleaners-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="excell-210-series-fine-screen-cleaners.jpg" title="excell-210-series-fine-screen-cleaners.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/excell-210-series-fine-screen-cleaners-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/excell-210-series-fine-screen-cleaners-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/excell-210-series-fine-screen-cleaners-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Тонкие очистители Excell 210</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-210/" data-quantity="1" data-product_id="742" data-product_sku="284f2e2d1e43" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class=" chk post-674 product type-product status-publish has-post-thumbnail product_cat-intensivnye-ochistiteli-ochistitelnye-mashiny product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/excell-60-series-fine-screen-cleaners/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/excell-fine-screen-cleaner-60-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="excell-fine-screen-cleaner-60.png" title="excell-fine-screen-cleaner-60.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/excell-fine-screen-cleaner-60-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/excell-fine-screen-cleaner-60-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/excell-fine-screen-cleaner-60-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Тонкие очистители серии Excell 60</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/excell-60-series-fine-screen-cleaners/" data-quantity="1" data-product_id="674" data-product_sku="bc8c26d37af3" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-702 product type-product status-publish has-post-thumbnail product_cat-intensivnye-ochistiteli-ochistitelnye-mashiny product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/intensivnoj-ochistitel-s-odnim-reshet/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/single-deck-fine-screen-cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="7 - convertli" title="7 - convertli" srcset="http://akyurek.ua/wp-content/uploads/2017/03/single-deck-fine-screen-cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/single-deck-fine-screen-cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/single-deck-fine-screen-cleaner-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/single-deck-fine-screen-cleaner-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Тонкий очиститель с одним решетным станом O.TEM-005-1</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-odnim-reshet/" data-quantity="1" data-product_id="702" data-product_sku="4e49d4872dd5" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
        <li class="chk post-701 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/intensivnoj-ochistitel-s-dvumya-reshet/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/cift-tekneli-hassas-eleme-makinasi-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="cift-tekneli-hassas-eleme-makinasi.jpg" title="cift-tekneli-hassas-eleme-makinasi.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/cift-tekneli-hassas-eleme-makinasi-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/cift-tekneli-hassas-eleme-makinasi-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/cift-tekneli-hassas-eleme-makinasi-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/cift-tekneli-hassas-eleme-makinasi-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Тонкий очиститель семян с двумя решетными станами O.TEM-005-2</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-dvumya-reshet/" data-quantity="1" data-product_id="701" data-product_sku="96f89af4070f" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-704 product type-product status-publish has-post-thumbnail product_cat-intensivnye-ochistiteli-ochistitelnye-mashiny product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/intensivnoj-ochistitel-s-tremya-reshet/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/three-deck-fine-screen-cleaner-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="7 - convertli" title="7 - convertli" srcset="http://akyurek.ua/wp-content/uploads/2017/03/three-deck-fine-screen-cleaner-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/three-deck-fine-screen-cleaner-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/three-deck-fine-screen-cleaner-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/three-deck-fine-screen-cleaner-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Тонкий очиститель с тремя решетными станами O.TEM-005-3</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-tremya-reshet/" data-quantity="1" data-product_id="704" data-product_sku="e19e3285c4c7" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>

    <li class="chk post-3588 product type-product status-publish has-post-thumbnail product_cat-triernye-bloki  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/mega-triernyj-modul/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/28_03773697_IMG_6071-copy-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="28_03773697_IMG_6071 copy" title="28_03773697_IMG_6071 copy" srcset="http://akyurek.ua/wp-content/uploads/2017/04/28_03773697_IMG_6071-copy-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/28_03773697_IMG_6071-copy-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/28_03773697_IMG_6071-copy-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/28_03773697_IMG_6071-copy-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Триерный блок</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/mega-triernyj-modul/" data-quantity="1" data-product_id="3588" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-677 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/impact-dehuller-id-900/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/impact-de-shuller-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="impact-de-shuller.jpg" title="impact-de-shuller.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/impact-de-shuller-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/impact-de-shuller-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/impact-de-shuller-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/impact-de-shuller-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Ударный шелушитель ID-900</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/impact-dehuller-id-900/" data-quantity="1" data-product_id="677" data-product_sku="30183db04e04" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-748 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/universalnye-predvaritelnye-ochist/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/excell-universal-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="excell-universal.jpg" title="excell-universal.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/excell-universal-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/excell-universal-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/excell-universal-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/excell-universal-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Универсальные предварительные очистители Excell 240</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/universalnye-predvaritelnye-ochist/" data-quantity="1" data-product_id="748" data-product_sku="c6561bce2920" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-697 product type-product status-publish has-post-thumbnail product_cat-vozdushnye-separatory product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/vozdushnyj-separator-zig-zag/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/zig-zag-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="zig-zag.png" title="zig-zag.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/zig-zag-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/zig-zag-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/zig-zag-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/zig-zag-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Воздушный Сепаратор Zig Zag</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/vozdushnyj-separator-zig-zag/" data-quantity="1" data-product_id="697" data-product_sku="b99b8e7854f0" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="chk post-3630 product type-product status-publish has-post-thumbnail product_cat-vozdushnye-separatory  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/vozdushnyj-udalitel-sheluhi/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="25_08289990_Shell-Removal-Blower3" title="25_08289990_Shell-Removal-Blower3" srcset="http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-600x600.jpg 600w, http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/25_08289990_Shell-Removal-Blower3-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Воздушный удалитель шелухи</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/vozdushnyj-udalitel-sheluhi/" data-quantity="1" data-product_id="3630" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-698 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/gorizontalnyj-shelushitel-splt-400/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/yatay-soyma-makinasi-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="yatay-soyma-makinasi.png" title="yatay-soyma-makinasi.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/yatay-soyma-makinasi-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/yatay-soyma-makinasi-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/yatay-soyma-makinasi-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Горизонтальный Шелушитель SPLT 400</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/gorizontalnyj-shelushitel-splt-400/" data-quantity="1" data-product_id="698" data-product_sku="ef7970b0f4ab" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-699 product type-product status-publish has-post-thumbnail product_cat-gravitatsionnye-separatory product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/gravitatsionnyj-separator-g-mac-010/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/14_02443400_22-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="14_02443400_22.jpg" title="14_02443400_22.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/14_02443400_22-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/14_02443400_22-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/14_02443400_22-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Гравитационный сепаратор G-MAC-010</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/gravitatsionnyj-separator-g-mac-010/" data-quantity="1" data-product_id="699" data-product_sku="9aed58bead5b" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-670 product type-product status-publish has-post-thumbnail product_cat-tsilindricheskie-sortirovochnye-mashiny product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/cylindrical-needle-sorter-cns-100/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-needle-sorter-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="cylindrical-needle-sorter.jpg" title="cylindrical-needle-sorter.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-needle-sorter-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-needle-sorter-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-needle-sorter-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-needle-sorter-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Игольчатый цилиндрический просеиватель CNS 100</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/cylindrical-needle-sorter-cns-100/" data-quantity="1" data-product_id="670" data-product_sku="8ad81ce5fbff" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-700 product type-product status-publish has-post-thumbnail product_cat-inspektsionnye-stoly product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/inspektsionnyj-konveernyj-stol-s-belt-0011/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/inspection-conveyor-belt-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="inspection-conveyor-belt.jpg" title="inspection-conveyor-belt.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/inspection-conveyor-belt-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/inspection-conveyor-belt-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/inspection-conveyor-belt-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Инспекционный конвейерный стол S.BELT-0011</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/inspektsionnyj-konveernyj-stol-s-belt-0011/" data-quantity="1" data-product_id="700" data-product_sku="79b3ef090da2" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-744 product type-product status-publish has-post-thumbnail product_cat-predvaritelnye-zernoochistiteli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-240/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/13_02798896_excell131-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="13_02798896_excell131.jpg" title="13_02798896_excell131.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/13_02798896_excell131-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/13_02798896_excell131-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/13_02798896_excell131-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Интенсивный очиститель Excell 240</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-240/" data-quantity="1" data-product_id="744" data-product_sku="fbf741cf7ad3" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-745 product type-product status-publish has-post-thumbnail product_cat-sverhintensivnye-ochistiteli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-serii-200/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/super_hassas_eleme_makinesi-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="super_hassas_eleme_makinesi.jpg" title="super_hassas_eleme_makinesi.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/super_hassas_eleme_makinesi-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/super_hassas_eleme_makinesi-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/super_hassas_eleme_makinesi-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/super_hassas_eleme_makinesi-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Интенсивный очиститель Excell серии 200</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-serii-200/" data-quantity="1" data-product_id="745" data-product_sku="0a9af105c852" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-755 product type-product status-publish has-post-thumbnail product_cat-kalibrovochnye-ochistiteli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/tsilindricheskie-proseivayushhie-mashiny-csl-9/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="cylindrical-screen-grader.jpg" title="cylindrical-screen-grader.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader-600x600.jpg 600w, http://akyurek.ua/wp-content/uploads/2017/03/cylindrical-screen-grader.jpg 696w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Цилиндрические просеивающие машины CSL 90×500</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/tsilindricheskie-proseivayushhie-mashiny-csl-9/" data-quantity="1" data-product_id="755" data-product_sku="eb7cfe9999a8" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-3609 product type-product status-publish has-post-thumbnail product_cat-triernye-bloki  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/tsilindricheskij-separator-s-otstupom/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="15_03260157_Indent Cyclinder Separator (18)" title="15_03260157_Indent Cyclinder Separator (18)" srcset="http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-600x600.jpg 600w, http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/15_03260157_Indent-Cyclinder-Separator-18-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Цилиндрический сепаратор с отступом</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/tsilindricheskij-separator-s-otstupom/" data-quantity="1" data-product_id="3609" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-756 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_tag-arahis product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/shelushitel-arahisa/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/22_04755423_1-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="22_04755423_1.jpg" title="22_04755423_1.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/22_04755423_1-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/22_04755423_1-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/22_04755423_1-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>ШЕЛУШИТЕЛЬ АРАХИСА</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/shelushitel-arahisa/" data-quantity="1" data-product_id="756" data-product_sku="93742a1b6503" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-683 product type-product status-publish has-post-thumbnail product_cat-shelushiteli-semyan-vse-tovary product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/peanut-sheller/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/peanut-sheller-machine-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="peanut-sheller-machine.jpg" title="peanut-sheller-machine.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/peanut-sheller-machine-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/peanut-sheller-machine-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/peanut-sheller-machine-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/peanut-sheller-machine-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Шелушитель арахиса (комплекс)</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/peanut-sheller/" data-quantity="1" data-product_id="683" data-product_sku="60a2632ec8e9" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-757 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/shlyuzovoj-klapan-alv-52/')">
      <div class="product_thumbnail">
        <a> <img width="145" height="182" src="http://akyurek.ua/wp-content/uploads/2017/03/hava-kilidi.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="hava-kilidi.jpg" title="hava-kilidi.jpg"> </a>
      </div>
      <h5>Шлюзовой клапан ALV-52</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/shlyuzovoj-klapan-alv-52/" data-quantity="1" data-product_id="757" data-product_sku="af422878a912" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-758 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/shnekovye-konvejery/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/17_02195186_untitled-120copy-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="17_02195186_untitled-120copy.jpg" title="17_02195186_untitled-120copy.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/17_02195186_untitled-120copy-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/17_02195186_untitled-120copy-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/17_02195186_untitled-120copy-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Шнековые конвейеры</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/shnekovye-konvejery/" data-quantity="1" data-product_id="758" data-product_sku="c3dc78744da6" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-3634 product type-product status-publish has-post-thumbnail product_cat-osteotdeliteli  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/brush-de-awner-machines/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/08_05232679_3-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="08_05232679_3" title="08_05232679_3" srcset="http://akyurek.ua/wp-content/uploads/2017/04/08_05232679_3-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/08_05232679_3-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/08_05232679_3-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/08_05232679_3-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Щеточный отделитель стеблей</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/brush-de-awner-machines/" data-quantity="1" data-product_id="3634" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-749 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_tag-oroz product_tag-pshenitsa product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/20_02220733_1-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="20_02220733_1.jpg" title="20_02220733_1.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/20_02220733_1-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/20_02220733_1-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/20_02220733_1-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Фасовочно-Упаковочная Машина</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina/" data-quantity="1" data-product_id="749" data-product_sku="476ade85f892" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-750 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-odnim/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/single-scale-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="single-scale.png" title="single-scale.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/single-scale-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/single-scale-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/single-scale-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/single-scale-600x600.png 600w, http://akyurek.ua/wp-content/uploads/2017/03/single-scale.png 750w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Фасовочно-упаковочная машина с одним весовым дозатором С.KTR-017-PLC — 5 до 50 кг.</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-odnim/" data-quantity="1" data-product_id="750" data-product_sku="53b64bbf9f57" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-751 product type-product status-publish has-post-thumbnail product_cat-vesy-upakovka product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-chetyr/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/quadruple-scale-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="quadruple-scale.png" title="quadruple-scale.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/quadruple-scale-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/quadruple-scale-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/quadruple-scale-180x180.png 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Фасовочно-упаковочная машина с четырьмя весовыми дозаторами С.KTR-017-PLC — 5 до 50 кг.</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-chetyr/" data-quantity="1" data-product_id="751" data-product_sku="842f3d991287" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-752 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/filtry-tipa-jet-akjf/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/jet-filtre-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="jet-filtre.jpg" title="jet-filtre.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/jet-filtre-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/jet-filtre-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/jet-filtre-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Фильтры типа Jet AKJF</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/filtry-tipa-jet-akjf/" data-quantity="1" data-product_id="752" data-product_sku="bd8db40f0b83" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-741 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/sortirovshhik-chaya/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/tea-sorter-machine-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="tea-sorter-machine.png" title="tea-sorter-machine.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/tea-sorter-machine-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/tea-sorter-machine-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/tea-sorter-machine-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/tea-sorter-machine-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Фотосепаратор для сортировки чая «Sorturk Tea»</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/sortirovshhik-chaya/" data-quantity="1" data-product_id="741" data-product_sku="986a4835ef77" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-753 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/tsentrobezhnyj-ventilyator/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/centrifugal-fans-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="centrifugal-fans.jpg" title="centrifugal-fans.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/centrifugal-fans-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/centrifugal-fans-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/centrifugal-fans-180x180.jpg 180w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Центробежный вентилятор</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/tsentrobezhnyj-ventilyator/" data-quantity="1" data-product_id="753" data-product_sku="0d6f44216161" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-666 product type-product status-publish has-post-thumbnail product_cat-transportnaya-sistema product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/chain-conveyor/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/chain-conveyor-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="chain-conveyor.jpg" title="chain-conveyor.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/chain-conveyor-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/chain-conveyor-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/chain-conveyor-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/chain-conveyor-600x600.jpg 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Цепной конвейер</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/chain-conveyor/" data-quantity="1" data-product_id="666" data-product_sku="aa5e35f48eed" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-754 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/tsiklony/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/siklon-cyclones-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="siklon-cyclones.jpg" title="siklon-cyclones.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/siklon-cyclones-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/03/siklon-cyclones-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/siklon-cyclones-180x180.jpg 180w, http://akyurek.ua/wp-content/uploads/2017/03/siklon-cyclones.jpg 411w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Циклоны</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/tsiklony/" data-quantity="1" data-product_id="754" data-product_sku="847759d915bf" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-3660 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli first instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/nabor-trubok-dlya-optimizatsii/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/04/18_02270792_havaland-rma-300x300.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="18_02270792_havalandırma" title="18_02270792_havalandırma" srcset="http://akyurek.ua/wp-content/uploads/2017/04/18_02270792_havaland-rma-300x300.jpg 300w, http://akyurek.ua/wp-content/uploads/2017/04/18_02270792_havaland-rma-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/04/18_02270792_havaland-rma-86x86.jpg 86w, http://akyurek.ua/wp-content/uploads/2017/04/18_02270792_havaland-rma-280x280.jpg 280w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Набор трубок для оптимизации</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/nabor-trubok-dlya-optimizatsii/" data-quantity="1" data-product_id="3660" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-721 product type-product status-publish has-post-thumbnail product_cat-zashhita-ot-pyli product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/nagnetatel/')">
      <div class="product_thumbnail">
        <a> <img width="196" height="197" src="http://akyurek.ua/wp-content/uploads/2017/03/hava-korukleri.jpg" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="hava-korukleri.jpg" title="hava-korukleri.jpg" srcset="http://akyurek.ua/wp-content/uploads/2017/03/hava-korukleri.jpg 196w, http://akyurek.ua/wp-content/uploads/2017/03/hava-korukleri-150x150.jpg 150w, http://akyurek.ua/wp-content/uploads/2017/03/hava-korukleri-180x180.jpg 180w" sizes="(max-width: 196px) 100vw, 196px"> </a>
      </div>
      <h5>Нагнетатель</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/nagnetatel/" data-quantity="1" data-product_id="721" data-product_sku="45658a726a34" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
        <li class="post-723 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-1/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c1-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c1.png" title="sorturk-c1.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c1-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c1-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c1-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c1-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-1</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-1/" data-quantity="1" data-product_id="723" data-product_sku="ccf300b6ac1a" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-722 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-c-2/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c2-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c2.png" title="sorturk-c2.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c2-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c2-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c2-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c2-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик C-2</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-c-2/" data-quantity="1" data-product_id="722" data-product_sku="80803c313262" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-724 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-3/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c3-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c3.png" title="sorturk-c3.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c3-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c3-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c3-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c3-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-3</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-3/" data-quantity="1" data-product_id="724" data-product_sku="b54e53799c16" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-5435 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory  instock shipping-taxable product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-4-2/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/02_09339945_sorturk-c5-1-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="02_09339945_sorturk-c5-1.png" title="02_09339945_sorturk-c5-1.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/02_09339945_sorturk-c5-1-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/02_09339945_sorturk-c5-1-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/02_09339945_sorturk-c5-1-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/02_09339945_sorturk-c5-1-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-4</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-4-2/" data-quantity="1" data-product_id="5435" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-726 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6 last instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-5/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c5.png" title="sorturk-c5.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-5</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-5/" data-quantity="1" data-product_id="726" data-product_sku="42e36c6bcc02" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
        <li class="chk post-3629 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6 first instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-6/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c5.png" title="sorturk-c5.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c5-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-6</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-6/" data-quantity="1" data-product_id="3629" data-product_sku="" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
    <li class="post-727 product type-product status-publish has-post-thumbnail product_cat-fotoseparatory product_shipping_class-6  instock product-type-simple" onclick="catax('http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-7/')">
      <div class="product_thumbnail">
        <a> <img width="300" height="300" src="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c7-300x300.png" class="attachment-shop_catalog size-shop_catalog wp-post-image" alt="sorturk-c7.png" title="sorturk-c7.png" srcset="http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c7-300x300.png 300w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c7-150x150.png 150w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c7-180x180.png 180w, http://akyurek.ua/wp-content/uploads/2017/03/sorturk-c7-600x600.png 600w" sizes="(max-width: 300px) 100vw, 300px"> </a>
      </div>
      <h5>Оптический сортировщик SORTURK C-7</h5>
      <div class="product_info clearfix"> </div> <a rel="nofollow" onclick="function (e) {e.preventDefault();}, false" href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-7/" data-quantity="1" data-product_id="727" data-product_sku="cffc539904fd" class="button product_type_simple ajax_add_to_cart">Подробнее</a></li>
  </ul>
                  <hr style="padding-bottom:30px">
</div>
                    <p style="text-indent:10px">Компания «Akyurek LTD» осуществляет деятельность по производству машинного оборудования для предприятий, специализирующихся на переработке пищевых продуктов — злаковых, бобовых, масличных культур и специй.</p>
                    <p>Наше оборудование производит очистку продукции от пыли, камней, почвы, сена и других инородных элементов. Наши машины способны отсортировать зерна по размеру, зрелости, сорту, целостности, и другим параметрам. Во время процедур фиксируется и учитывается длина, ширина и высота продукции.</p>
                    <p>Акюрек является уникальным производителем машин с механическим и\или компъютерным управлением и различной производительной мощностью, способных адаптироваться к любому виду перерабатываемой продукции, соотвутствующей любому бюджету и плану. Процедуры по очистке, расфасовке или классификации продуктов по длине , планируются и проектируются индивидуально под цели и требования заказчика. Предварительно выслушав Ваши требования, мы предлагаем советы, опираясь на свой опыт эффективного и надежного сервисного обслуживания , а также на мировые практики в области.</p> <img class="shopintra" src="http://akyurek.ua/wp-content/uploads/2017/06/imgonline-com-ua-Resize-5w6Zdx4QnII.jpg">
                    <p> Будучи ориентированными на долгосрочное сотрудничество, мы готовы оказывать услуги для наших партнеров и в послепродажные периоды, выходя за рамки продажи и установки оборудования. Акюрек остается с вами, учавствуя в ваших инвестиционных проектах, проверках производства и техническом обслуживании.</p>
                    <p> Наша компания предлагает вам пакет услуг, в состав которого входят: поставка запасных частей к машинному оборудованию, восстановление и техническое обслуживание машин, услуги по анализу и обучению , а также консультационные услуги.</p>
                  <hr style="padding-bottom:30px">
        
                    <div class="col_in __padd-left __three-cols">
                        <div id="state" ssil="http://akyurek.ua/goods/vse-tovary/"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9">
                <div class="sidebar-area">
                    <div id="datazeren"></div>
                    <div class="vc_row wpb_row ">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="wpb_widgetised_column wpb_content_element">
                                        <div class="wpb_wrapper">
                                            <aside id="text-4" class="widget widget_text shop_widgets" style="height: 578px;">
                                                <div class="textwidget">
                                                    <div class="search-filters wiggle" id="Search-Filters">
                                                        <div id="undefined-sticky-wrapper" class="sticky-wrapper" style="">
                                                            <div class="tbsticky filters-sidebar">
                                                              <a id="vsekat"><h3>Все категории</h3></a>
                                                                <div id="dataload"><img id="coga" class="rotating" src="http://akyurek.ua/wp-content/uploads/2017/04/koleso.png"></div>
                                                                <div class="accordion" id="big8"><br>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle inactive collapsed accordion-sep" data-toggle="collapse" data-parent="#big8" href="#collapseTwwo1" alt="Seed Separators" title="Seed Separators" aria-expanded="false">
                                                                                <strong>Зерноочистительные машины</strong>
                                                                                <i class="fa fa-angle-down"></i>
                                                                                <a class="imax imax-sep" gid="separatori-semyan" onclick="" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/">
                                                                                    <i class="fa fa-angle-right"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div id="collapseTwwo1" class="accordion-body collapse" aria-expanded="false" style="height: 0px;">
                                                                            <div class="accordion-inner">
                                                                                <div class="" id="sepArea">
                                                                                    <div class="accordion-group panel">
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle active collapsed insep-lvl1 and-lvl2" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo2" id="col-aps" alt="Screen Cleaners" title="Screen Cleaners" aria-expanded="false">
                                                                                                <font size="" color="#8e1412">Зерноочистители</font> <i class="fa fa-angle-down"></i> <a class="imax imax-ochist" gid="ochistitelnye-mashiny" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo2" class="accordion-body collapse" aria-expanded="false" style="height: 0px;">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody></tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="chiArea">
                                                                                                    <div class="accordion-group panel">
                                                                                                        <div class="accordion-heading togglize">
                                                                                                            <div class="accordion-toggle " data-toggle="collapse" data-parent="#chiArea" href="#collapseOne3">
                                                                                                                <font size="" color="#db4040">Предварительная очистка</font> <i class="fa fa-angle-down"></i><a class="inax" gid="predvaritelnye-zernoochistiteli" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/predvaritelnye-zernoochistiteli/"><i class="fa fa-angle-right"></i></a> </div>
                                                                                                        </div>
                                                                                                        <div id="collapseOne3" class="accordion-body collapse">
                                                                                                            <div class="accordion-inner">
                                                                                                                <table class="table table-striped">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td> <a gid="predvaritelnyj-ochistitel-barabann" href="http://akyurek.ua/товар/predvaritelnyj-ochistitel-barabann/" alt="" title="">Предварительный очиститель барабанного типа</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/predvaritelnye-ochistiteli-serii-excell-100/" id="predvaritelnye-ochistiteli-serii-excell-100" alt="зерноочистительные машины" title="зерноочистительное оборудование">Предварительные очистители серии Excell 100</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/rotary-drum-seed-cleaner/" gid="rotary-drum-seed-cleaner" alt="" title="">Барабанный очиститель</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/universalnye-predvaritelnye-ochist/" id="universalnye-predvaritelnye-ochist" alt="" title="">Универсальные предварительные очистители excell</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/pre-cleaner-de-stoner/" gid="pre-cleaner-de-stoner" alt="" title="">Предварительный очиститель с камнеотделителем</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/wire-mesh-pre-cleaner/" gid="wire-mesh-pre-cleaner" alt="" title="">Многострунный ленточный очиститель</a> </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="accordion-heading togglize">
                                                                                                            <div class="accordion-toggle" data-toggle="collapse" data-parent="#chiArea" href="#collapseOne10">
                                                                                                                <font size="" color="#db4040">Интенсивная очистка</font> <i class="fa fa-angle-down"></i><a class="inax" gid="sverhintensivnye-ochistiteli" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/sverhintensivnye-ochistiteli/"><i class="fa fa-angle-right"></i></a> </div>
                                                                                                        </div>
                                                                                                        <div id="collapseOne10" class="accordion-body collapse">
                                                                                                            <div class="accordion-inner">
                                                                                                                <table class="table table-striped">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td> <a gid="super-intensivnyj-ochistitel-excell-serii-200" href="http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-serii-200/" alt="" title="">Интенсивные очистители серии Excell 200 </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/excell-50-series-super-fine-screen-cleaners/" gid="excell-50-series-super-fine-screen-cleaners" alt="" title=""> Интенсивные очистители серии Excell 50  </a> </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="accordion-heading togglize">
                                                                                                            <div class="accordion-toggle" data-toggle="collapse" data-parent="#chiArea" href="#collapseOne13">
                                                                                                                <font size="" color="#db4040">Тонкая очистка</font> <i class="fa fa-angle-down"></i> <a class="inax" gid="intensivnye-ochistiteli-ochistitelnye-mashiny" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/intensivnye-ochistiteli-ochistitelnye-mashiny/"><i class="fa fa-angle-right"></i></a> </div>
                                                                                                        </div>
                                                                                                        <div id="collapseOne13" class="accordion-body collapse">
                                                                                                            <div class="accordion-inner">
                                                                                                                <table class="table table-striped">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-210/" gid="super-intensivnye-ochistiteli-excell-210" alt="" title="">Тонкие очистители серии Excell 210</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/excell-60-series-fine-screen-cleaners/" gid="excell-60-series-fine-screen-cleaners" alt="" title="">Тонкие очистители серии Excell 60 </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a gid="intensivnoj-ochistitel-s-odnim-reshet" href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-odnim-reshet/" gid="intensivnoj-ochistitel-s-odnim-reshet" alt="" title="">Интенсивный очиститель с одним решетным станом </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-dvumya-reshet/" gid="intensivnoj-ochistitel-s-dvumya-reshet" alt="" title="">Интенсивный очиститель с двумя решетными станами </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/intensivnoj-ochistitel-s-tremya-reshet/" gid="intensivnoj-ochistitel-s-tremya-reshet" alt="" title="">Интенсивный очиститель с тремя решетными станами </a> </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                                                     <div class="accordion-heading togglize">
                                                                                                            <div class="accordion-toggle" data-toggle="collapse" data-parent="#sepArea" href="#collapseOne19">
                                                                                                                <font size="" color="#db4040">Калибровочная очистка</font> <i class="fa fa-angle-down"></i><a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/kalibrovochnye-ochistiteli/" gid="kalibrovochnye-ochistiteli"><i class="fa fa-angle-right"></i></a> </div>
                                                                                                        </div>
                                                                                                        <div id="collapseOne19" class="accordion-body collapse">
                                                                                                            <div class="accordion-inner">
                                                                                                                <table class="table table-striped">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnye-ochistiteli-excell-serii-220/" gid="kalibrovochnye-ochistiteli-excell-serii-220" alt="" title="">Калибровочные очистители Excell серии 220</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/super-intensivnye-ochistiteli-excell-230/" gid="super-intensivnye-ochistiteli-excell-230" alt="" title="">Калибровочные очистители Excell 230</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/super-intensivnyj-ochistitel-excell-240/" gid="super-intensivnyj-ochistitel-excell-240" alt="" title="">Интенсивный очиститель Excell 240</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-odnim-reshetny/" gid="kalibrovochnaya-mashina-s-odnim-reshetny" alt="" title="">Калибровочная машина с одним решетным станком B.MAC-007-1</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-dvumya-reshetny/" gid="kalibrovochnaya-mashina-s-dvumya-reshetny" alt="" title="">Калибровочная машина с двумя решетными станками </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-tremya-reshetny/" gid="kalibrovochnaya-mashina-s-tremya-reshetny" alt="" title="">Калибровочная машина с тремя решетными станками </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovachnaya-mashina-s-chetyrmya-reshe/" gid="kalibrovachnaya-mashina-s-chetyrmya-reshe" alt="" title="">Калибровочная машина с четырьмя решетными станками </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnaya-mashina-b-mac-007-5/" gid="kalibrovochnaya-mashina-b-mac-007-5" alt="" title="">Калибровочная Машина </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kalibrovochnaya-mashina-s-shestyu-reshetn/" gid="kalibrovochnaya-mashina-s-shestyu-reshetn" alt="" title="">Калибровочная машина с шестью решетными станками </a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/tsilindricheskie-proseivayushhie-mashiny-csl-9/" gid="tsilindricheskie-proseivayushhie-mashiny-csl-9" alt="" title="">Цилиндрические просеивающие машины</a> </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="accordion-heading togglize">
                                                                                                            <div class="accordion-toggle" data-toggle="collapse" data-parent="#sepArea" href="#collapseOne30">
                                                                                                                <font size="" color="#db4040">Очистители "Все в Одном"</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/ochistiteli-vse-v-odnom/" gid="ochistitelnye-mashiny/ochistiteli-vse-v-odnom"><i class="fa fa-angle-right"></i></a> </div>
                                                                                                        </div>
                                                                                                        <div id="collapseOne30" class="accordion-body collapse">
                                                                                                            <div class="accordion-inner">
                                                                                                                <table class="table table-striped">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/akyurekexcell-33-screen-cleaner-grader/" gid="akyurekexcell-33-screen-cleaner-grader" alt="" title="">Калибровочный очиститель серии EXCELL 33</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu/" gid="kombinirovannyj-ochistitel-s-shestyu" alt="" title="">Комбинированный очиститель с шестью решетными станками O.MAC-001</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-002/" gid="kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-002" alt="" title="">Комбинированный очиститель с шестью решетными станками O.MAC-002</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-003/" gid="kombinirovannyj-ochistitel-s-shestyu-reshetnymi-stankami-o-mac-003" alt="" title="">Комбинированный очиститель с шестью решетными станками O.MAC-003</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistit" gid="predvaritelnyj-intensivnyj-ochistit" alt="" title="">Предварительный интенсивный очиститель с шестью решетными станками C.O.TEM-004</a> </td>
                                                                                                                        </tr>
                                                                                                                        <tr>
                                                                                                                            <td> <a href="http://akyurek.ua/товар/predvaritelnyj-intensivnyj-ochistitel-s-shestyu-reshetnymi-stankami-c-o-tem-006/" gid="predvaritelnyj-intensivnyj-ochistitel-s-shestyu-reshetnymi-stankami-c-o-tem-006" alt="" title="">Предварительный интенсивный очиститель с шестью решетными станками C.O.TEM-006</a> </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                            </div>
                                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo37" alt="Other Screen Cleaners" title="Other Screen Cleaners">
                                                                                                <font size="" color="#8e1412">Другие очистители</font> <i class="fa fa-angle-down"></i><a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/drugie-ochistiteli/" gid="drugie-ochistiteli"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo37" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/sitovoj-vibratsionnyj-separator-50-x-80-c-sas-013/" gid="sitovoj-vibratsionnyj-separator-50-x-80-c-sas-013" alt="" title="">Ситовой вибрационный сепаратор 50 x 80 C.SAS 013</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="toggleArea">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo40" alt="Stone Separator" title="Stone Separator">
                                                                                                <font size="" color="#8e1412">Камнеотделители</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/kamneotdeliteli/" gid="kamneotdeliteli"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo40" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/kamneotdelitel-t-mac-009/" gid="kamneotdelitel-t-mac-009" alt="" title="">Камнеотделитель</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/vibratsionnyj-separator-c-sas-013/" gid="vibratsionnyj-separator-c-sas-013" alt="" title="">Вибрационный Сепаратор </a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/separator-arahisa-po-plotnosti/" gid="separator-arahisa-po-plotnosti" alt="" title="">Сепаратор арахиса по плотности</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="toggleArea">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo44" alt="Indented Cylinder Separators" title="Indented Cylinder Separators">
                                                                                                <font size="" color="#8e1412">Триерные блоки</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/triernye-bloki/" gid="triernye-bloki"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo44" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/mega-triernyj-modul/" gid="mega-triernyj-modul" alt="" title="">Триерный блок</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/tsilindricheskij-separator-s-otstupom/" gid="tsilindricheskij-separator-s-otstupom" alt="" title="">Цилиндрический сепаратор с отступом</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo47" alt="Gravity Separators" title="Gravity Separators">
                                                                                                <font size="" color="#8e1412">Гравитационные сепараторы</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/separatori/gravitatsionnye-separatory/" gid="gravitatsionnye-separatory"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo47" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/gravitatsionnyj-separator-g-mac-010/" gid="gravitatsionnyj-separator-g-mac-010" alt="" title="">Гравитационный сепаратор</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo49" alt="Color Sorters" title="Color Sorters">
                                                                                                <font size="" color="#8e1412">Фотосепараторы</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/fotoseparatory/" gid="fotoseparatory"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo49" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-1/" gid="opticheskij-sortirovshhik-sorturk-c-1" alt="" title="">Оптический сортировщик SORTURK C-1</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/sortirovshhik-po-tsvetu-s-remennym-prints/" gid="sortirovshhik-po-tsvetu-s-remennym-prints" alt="" title="">Сортировщик по цвету с ременным принципом работы</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-c-2/" gid="opticheskij-sortirovshhik-c-2" alt="" title="">Оптический сортировщик SORTURK C-2</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-3/" gid="opticheskij-sortirovshhik-sorturk-c-3" alt="" title="">Оптический сортировщик SORTURK C-3</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-4/" gid="opticheskij-sortirovshhik-sorturk-c-4" alt="" title="">Оптический сортировщик SORTURK C-4</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-5/" gid="opticheskij-sortirovshhik-sorturk-c-5" alt="" title="">Оптический сортировщик SORTURK C-5</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-6/" gid="opticheskij-sortirovshhik-sorturk-c-6" alt="" title="">Оптический сортировщик SORTURK C-6</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/opticheskij-sortirovshhik-sorturk-c-7/" gid="opticheskij-sortirovshhik-sorturk-c-7" alt="" title="">Оптический сортировщик SORTURK C-7</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/sortirovshhik-chaya/" gid="sortirovshhik-chaya" alt="" title="">Сортировщик чая</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo59" alt="Inspection Conveyor Belts" title="Inspection Conveyor Belts">
                                                                                                <font size="" color="#8e1412">Инспекционные конвейерные столы</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/inspektsionnye-stoly/" gid="inspektsionnye-stoly"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo59" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/inspektsionnyj-konveernyj-stol-s-belt-0011/" gid="inspektsionnyj-konveernyj-stol-s-belt-0011" alt="" title="">Инспекционный конвейерный стол </a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo61" alt="Air Separators" title="Air Separators">
                                                                                                <font size="" color="#8e1412">Воздушные сепараторы</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/vozdushnye-separatory/" gid="vozdushnye-separatory"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo61" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/aspirator-s-zamknutym-tsiklom-vozduha-ara/" alt="" title="">Аспиратор с замкнутым циклом Воздуха </a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/vozdushnyj-separator-zig-zag/" alt="" title="">Воздушный сепаратор зигзагообразный</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/aspiratsionnaya-kamera/" alt="" title="">Аспирационная камера</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/vozdushnyj-udalitel-sheluhi/" alt="" title="">Воздушный удалитель шелухи</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo66" alt="De-Awner &amp; Brush Machine" title="De-Awner &amp; Brush Machine">
                                                                                                <font size="" color="#8e1412">Остеотделители</font> <i class="fa fa-angle-down"></i> <a class="inax" gid="inax15" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/osteotdeliteli/"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo66" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/osteolomatel-k-kran-054/" gid="osteolomatel-k-kran-054" alt="" title="">Остеоломатель</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/brush-de-awner-machines/" gid="brush-de-awner-machines" alt="" title="">Щеточный отделитель стеблей</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo69" alt="Velvet Roller" title="Velvet Roller">
                                                                                                <font size="" color="#8e1412">Бархатный фильтр</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/barhatnyj-filtr/" gid="barhatnyj-filtr"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo69" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/velvet-roller/" gid="velvet-roller" alt="" title="">Бархатный фильтр</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo71" alt="Cylindrical Needle Sorter" title="Cylindrical Needle Sorter">
                                                                                                <font size="" color="#8e1412">Цилиндрические сортировочные машины</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/ochistitelnye-mashiny/tsilindricheskie-sortirovochnye-mashiny/" gid="tsilindricheskie-sortirovochnye-mashiny"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo71" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/cylindrical-needle-sorter-cns-100/" gid="cylindrical-needle-sorter-cns-100" alt="" title="">Игольчатый цилиндрический просеиватель</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo73" alt="Spiral Separator" title="Spiral Separator">
                                                                                                <font size="" color="#8e1412">Спиральный сепаратор</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/spiralnyj-separator/" gid="spiralnyj-separator"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo73" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/spiral-separator/" gid="spiral-separator" alt="" title="">Спиральный сепаратор</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo75" alt="Metal Separators" title="Metal Separators">
                                                                                                <font size="" color="#8e1412">Металлические сепараторы</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/metallicheskie-separatory/" gid="metallicheskie-separatory"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo75" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/magnet-separators/" gid="magnet-separators" alt="" title="">Магнитный сепаратор</a> </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/hammer-mills/" gid="hammer-mills" alt="" title="">Молотковая дробилка(мельница)</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="accordion-heading togglize">
                                                                                            <div class="accordion-toggle insep-lvl1" data-toggle="collapse" data-parent="#sepArea" href="#collapseTwwo78" alt="Laboratory Equipments" title="Laboratory Equipments">
                                                                                                <font size="" color="#8e1412">Лабораторное оборудование</font> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/laboratornoe-oborudovanie/" gid="laboratornoe-oborudovanie"><i class="fa fa-angle-right"></i></a> </div>
                                                                                        </div>
                                                                                        <div id="collapseTwwo78" class="accordion-body collapse">
                                                                                            <div class="accordion-inner">
                                                                                                <table class="table table-striped">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td> <a href="http://akyurek.ua/товар/hand-screen-set/" gid="hand-screen-set" alt="" title="">Ручной очистительный набор</a> </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <div class="accordion" id="toggleArea">
                                                                                                    <div class="accordion-group panel"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-protr inactive simple collapsed" data-toggle="collapse" data-parent="#big8" href="#collapseTwwo80" alt="Seed Treaters" title="Seed Treaters" aria-expanded="false"> <strong>Протравливатели семян</strong> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/protravlivateli/" gid="protravlivateli"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo80" class="accordion-body collapse" aria-expanded="false" style="height: 0px;">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/continuous-seed-treating-machine/" gid="continuous-seed-treating-machine" alt="Continuous Seed Treating Machine" title="Continuous Seed Treating Machine">Протравливатель для промасливания и увлажнения семян</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/batch-type-seed-coating-machine/" gid="batch-type-seed-coating-machine" alt="Batch Type Seed Coating Machine" title="Batch Type Seed Coating Machine">Протравливатель</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-shell inactive  simple collapsed" data-toggle="collapse" data-parent="#big8" href="#collapseTwwo83" alt="Seed Hullers" title="Seed Hullers" aria-expanded="false"> <strong>Шелушители семян</strong> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/shelushiteli-semyan-vse-tovary/" gid="shelushiteli-semyan-vse-tovary"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo83" class="accordion-body collapse" aria-expanded="false" style="height: 0px;">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/vertikalnyj-shelushitel-splt-340/" gid="vertikalnyj-shelushitel-splt-340" alt="Vertical Huller" title="Vertical Huller">Вертикальный шелушитель</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/gorizontalnyj-shelushitel-splt-400/" gid="gorizontalnyj-shelushitel-splt-400" alt="Emery Stone Mill" title="Emery Stone Mill">Горизонтальный шелушитель</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/shelushitel-arahisa/" gid="shelushitel-arahisa" alt="Peanut Blancher" title="Peanut Blancher">Машины для снятия скорлупы арахиса</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/puls-hull-split/" gid="puls-hull-split" alt="Puls Hull &amp; Split" title="Puls Hull &amp; Split">	Вертикальный шелушитель семян</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/peanut-sheller/" gid="peanut-sheller" alt="Peanut Sheller" title="Peanut Sheller">Шелушитель арахиса</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle inactive ax-polir simple collapsed" data-toggle="collapse" data-parent="#big8" href="#collapseTwwo89" alt="Seed Polishers" title="Seed Polishers" aria-expanded="false"> <strong>Полировальные машины</strong> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/polirovalnye-mashiny/" gid="polirovalnye-mashiny"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo89" class="accordion-body collapse" aria-expanded="false" style="height: 0px;">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <!--
                                        <tr>
                                          <td> <a href="http://akyurek.ua/товар/continous-polishers/" id="continous-polishers" alt="Continous Polishers" title="Continous Polishers">Полировщик семян</a> </td>
                                        </tr>
-->
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/polirovalnaya-mashina/" gid="polirovalnaya-mashina" alt="Batch Friction Polisher" title="Batch Friction Polisher">Полировальная машина</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-trans simple " data-toggle="collapse" data-parent="#big8" href="#collapseTwwo92" alt="Conveyors" title="Conveyors"> <strong>Транспортная система</strong> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/transportnaya-sistema/" gid="transportnaya-sistema"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo92" class="accordion-body collapse">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/bucket-elevators/" gid="bucket-elevators" alt="Bucket Elevators" title="Bucket Elevators">Ковшовая нория</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/easy-dump-elevator/" gid="easy-dump-elevator" alt="Easy Dump Elevator" title="Easy Dump Elevator">Легкий самосвальный лифт</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/continuous-cup-z-elevators/" gid="continuous-cup-z-elevators" alt="Continuous Cup Z Elevators" title="Continuous Cup Z Elevators">Ковшовая Z-образная нория</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/mayatnikovyj-kovshovyj-elevator/" gid="mayatnikovyj-kovshovyj-elevator" alt="Pendulum Elevator" title="Pendulum Elevator">Маятниковый ковшовый элеватор</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/chain-conveyor/" gid="chain-conveyor" alt="Chain Conveyor" title="Chain Conveyor">Цепной конвейер</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>
                                                                                                <a href="http://akyurek.ua/товар/teleskopicheskaya-lenta-teles-belt-180/" gid="teleskopicheskaya-lenta-teles-belt-180" alt="Telescopic Boom Conveyor Belt" title="Telescopic Boom Conveyor Belt">Телескопическая лента</a> </td>
                                                                                        </tr>
<!--
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/chain-conveyor/" gid="chain-conveyor" alt="Belt Conveyors" title="Belt Conveyors">Ременной конвейер</a> </td>
                                                                                        </tr>
-->
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/konveer-lentochnyj-naklonnyj-y-belt-0014/" gid="konveer-lentochnyj-naklonnyj-y-belt-0014" alt="Inclined Conveyor Belt" title="Inclined Conveyor Belt">конвейер ленточный наклонный</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/shnekovye-konvejery/" gid="shnekovye-konvejery" alt="Screw Conveyors" title="Screw Conveyors">Шнековые конвейеры</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/jog-conveyor/" gid="jog-conveyor" alt="Jog Conveyor" title="Jog Conveyor">конвейер</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/konveernaya-lenta/" gid="konveernaya-lenta" alt="Jog Conveyor" title="Jog Conveyor">конвейерная лента</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/semennoj-ochistitel-sita-380-jog-screen-cleaner/" gid="semennoj-ochistitel-sita-380-jog-screen-cleaner" alt="" title="">Конвейер Jog</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-ves simple " data-toggle="collapse" data-parent="#big8" href="#collapseTwwo103" alt="Weighing &amp; Bagging" title="Weighing &amp; Bagging"> <strong>Весы и упаковка</strong> <i class="fa fa-angle-down"></i> <a class="imax imax-ves" href="http://akyurek.ua/goods/vse-tovary/vesy-upakovka/" gid="vesy-upakovka"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo103" class="accordion-body collapse">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-odnim/" gid="fasovochno-upakovochnaya-mashina-s-odnim" alt="Single Scale Net Weigher &amp; Bagger - 5 to 50 kg" title="Single Scale Net Weigher &amp; Bagger - 5 to 50 kg">Фасовочно-упаковочная машина с одним весовым дозатором от 5 до 50 кг.</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina-s-chetyr/" gid="fasovochno-upakovochnaya-mashina-s-chetyr" alt="Electronic Scale –In-Bag- Net Weigher - 5 to 50 kg" title="Electronic Scale –In-Bag- Net Weigher - 5 to 50 kg">Фасовочно-упаковочная машина с четырьмя весовыми дозаторами от 5 до 50 кг.</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/poluavtomaticheskie-vesy-double-scale-net-weigher-bagger-5-to-50-kg/" gid="poluavtomaticheskie-vesy-double-scale-net-weigher-bagger-5-to-50-kg" alt="Mechanic Scale In-Bag Gross Weigher-25 to 50 kg" title="Mechanic Scale In-Bag Gross Weigher-25 to 50 kg">Фасовочно-упаковочная машина с двумя весовыми дозаторами от 5 до 50 кг</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/electronic-scale-in-bag-net-weigher-5-to-50-kg/" gid="electronic-scale-in-bag-net-weigher-5-to-50-kg" alt="Double Scale Net Weigher &amp; Bagger-5 to 50 kg" title="Double Scale Net Weigher &amp; Bagger-5 to 50 kg">Механические весы , закрытого типа - от 5 дo 50 кг</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/mechanic-scale-in-bag-gross-weigher-25-to-50-kg/" gid="mechanic-scale-in-bag-gross-weigher-25-to-50-kg" alt="Quadruple Scale Net Weigher &amp; Bagger - 5 to 50 kg" title="Quadruple Scale Net Weigher &amp; Bagger - 5 to 50 kg">Механические весы , закрытого типа - от 25 дo 50 кг</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-25-do-50-kg/" gid="electronic-scale-in-bag-net-weigher-5-to-50-kg" alt="Автоматические весы , закрытого типа - от 5 дo 50 кг" title="Автоматические весы , закрытого типа - от 5 дo 50 кг">Автоматические весы , закрытого типа - от 5 дo 50 кг</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/avtomaticheskie-vesy-zakrytogo-tipa-ot-5-do-50-kg/" gid="electronic-scale-in-bag-net-weigher-5-to-50-kg" alt="Автоматические весы , закрытого типа - от 5 дo 50 кг" title="Автоматические весы , закрытого типа - от 5 дo 50 кг">Автоматические весы , закрытого типа - от 25 дo 50 кг</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/big-bag-scale-above-ground-weighing/" gid="big-bag-scale-above-ground-weighing" alt="Big Bag Scale - Above Ground Weighing" title="Big Bag Scale - Above Ground Weighing">Большие надземные весы </a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/big-bag-scale-on-ground-weighing/" gid="big-bag-scale-on-ground-weighing" alt="Big Bag Scale-On Ground Weighing" title="Big Bag Scale-On Ground Weighing">Большие наземные весы</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/vesy-proizvoditelnosti-rdktr-017/" gid="vesy-proizvoditelnosti-rdktr-017" alt="Flow Scale" title="Flow Scale">Весы производительности</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/fasovochno-upakovochnaya-mashina/" gid="fasovochno-upakovochnaya-mashina" alt="Weighing, Proportioning &amp; Mixing" title="Weighing, Proportioning &amp; Mixing">Фасовочно-упаковочная Машина</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/portsionnyj-robot/" gid="portsionnyj-robot" alt="Open-Mouth Bag Feeding Robot" title="Open-Mouth Bag Feeding Robot">Порционный робот</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/linejnye-vesy-dlya-multizadachnosti/" gid="linejnye-vesy-dlya-multizadachnosti" alt="Lenear Scale - Four Multi Head Scale 500gr to 5 Kg" title="Lenear Scale - Four Multi Head Scale 500gr to 5 Kg">Линейные весы для мультизадачности</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-aspir simple " data-toggle="collapse" data-parent="#big8" href="#collapseTwwo115" alt="Dust Control" title="Dust Control"> <strong>Защита от пыли</strong> <i class="fa fa-angle-down"></i> <a class="inax" gid="inax26" href="http://akyurek.ua/goods/vse-tovary/zashhita-ot-pyli/"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo115" class="accordion-body collapse">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/tsentrobezhnyj-ventilyator/" gid="tsentrobezhnyj-ventilyator" alt="Centrifugal Fans" title="Centrifugal Fans">Центробежный вентилятор</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/tsiklony/" gid="tsiklony" alt="Cyclones" title="Cyclones">Циклоны</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/filtry-tipa-jet-akjf/" gid="filtry-tipa-jet-akjf" alt="Jet Filters AKJF" title="Jet Filters AKJF">Jet-Фильтры</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/nagnetatel/" gid="nagnetatel" alt="Blower Group" title="Blower Group">Нагнетатель</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/shlyuzovoj-klapan-alv-52/" gid="shlyuzovoj-klapan-alv-52" alt="Airlockvalve" title="Airlockvalve">Шлюзовой клапан</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/nabor-trubok-dlya-optimizatsii/" gid="nabor-trubok-dlya-optimizatsii" alt="Modular Pipework Systems" title="Modular Pipework Systems">Набор трубок для оптимизации</a> </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="accordion-group panel">
                                                                        <div class="accordion-heading togglize">
                                                                            <div class="accordion-toggle ax-storage simple " data-toggle="collapse" data-parent="#big8" href="#collapseTwwo122" alt="Storage" title="Storage"> <strong>Хранение</strong> <i class="fa fa-angle-down"></i> <a class="inax" href="http://akyurek.ua/goods/vse-tovary/hranenie-zerna/" gid="hranenie-zerna"><i class="fa fa-angle-right"></i></a> </div>
                                                                        </div>
                                                                        <div id="collapseTwwo122" class="accordion-body collapse">
                                                                            <div class="accordion-inner">
                                                                                <table class="table table-striped">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/outdoor-storage-silos/" gid="outdoor-storage-silos" alt="Outdoor Storage Silos" title="Outdoor Storage Silos">Силосы для открытых помещений</a> </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td> <a href="http://akyurek.ua/товар/bunkery-dlya-hraneniya-produktsii/" gid="bunkery-dlya-hraneniya-produktsii" alt="Indoor Storage Silos" title="Indoor Storage Silos">Бункеры для хранения продукции</a> </td>
                                                                                        </tr>
                                                                                        <!--
                                        <tr>
                                          <td> <a href="http://akyurek.ua/товар/sushilki/" gid="sushilki" alt="Indoor Storage Silos" title="Indoor Storage Silos">Сушилки</a> </td>
                                        </tr>
-->
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <?php
 wp_footer();
get_footer();  
?>
<script src="/assets/src/fastshop.js"></script>
        </body>
        </html>