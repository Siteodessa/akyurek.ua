<?php 
$nefastshop = file_get_contents('./wp-content/themes/bestbuild/nefastshop.php');
$galler = do_shortcode('[lightgallery images="3811,508,3837,423,3583,3982,538,476"]');
$gallerfotosep = do_shortcode('[lightgallery images="6381,6382,6383,6384,6385,6386,6387,6388,6389,6390,6391,6392,6393,6394,6395,6396,6397,6398,6400,6401,6402,6403,6404,6405,6406,6407,6409,6410"]');
$fotosep  = '<div id="inax01" class="inax_group">  <div class="shop699"> <div class="support-css-shapes"></div><div class=""><div class="texo0"><div class="golo0"><div class="zagolovok0"><div class="lin0"></div><div class="lin1"></div><div class="lin2"></div>Фотосепараторы от Akyurek</div></div>известны своим продолжительным сроком эксплуатации и продолжительным сроком службы. Наши зерноперерабатывающие машины могут выполнять функции как скальператора (предварительная очистка), так и сепаратора (первичная и вторичная очистка). Сепараторы эксплуатируются в зерноподготовительных отделениях и на элеваторах мукомольных заводов, в том числе, в составе комплектного оборудования для вновь строящихся мельниц,  надежно отделяя от мелко- или крупнозернистых продуктов частицы соломы, веревки, бумагу, частицы древесины. Благодаря плавной регулировке скорости движения решет и уменьшенной вибрации корпуса, обеспечивается. Одним из главным достоинств линий, включающих этап предварительной очистки является увеличение эксплуатационного срока оборудования в последующих этапах переработки. В разрабатываемых нами скальператорах используются только прочные детали и соединения, присутствуют возможности быстрой смены сита и подключения аспирации для скоростной очистки сит.<div class="roundgallery rgl">' . $gallerfotosep . '</div><p class="spisok">Оптические сортировальные машины от Акюрек поддерживают очистку широкого спектра культур: Подсолнечник, Ядро подсолнечника, Семена тыквы, Рис, Пшеница, Ячмень, Гречка, Просо, Горчица, Кукуруза, Арахис, Соя, Грецкий орех, Фасоль, Кунжут, Пшено, Кешью, Фундук, Сушеные овощи, Пластик, Стекло, Кедровый орех, Миндаль, Чечевица, Чипсы картофельные, Горох, Изюм, Сафлор, Кофе бобы, Рапс, Замороженные ягоды	</p></div></div></div></div>';
$predvar  = file_get_contents('./wp-content/themes/bestbuild/predvariteli.php');
$ideshka_separator  = file_get_contents('wp-content/themes/bestbuild/categories/cat-texts/zernoochistiteli-b.php');
$ideshka_travim = file_get_contents('wp-content/themes/bestbuild/categories/cat-texts/protraviteli-b.php');
$ideshka_sheluha = file_get_contents('./wp-content/themes/bestbuild/shelushiteli.php');
$ideshka_polir = file_get_contents('./wp-content/themes/bestbuild/polirovka.php');
$ideshka_transport = file_get_contents('./wp-content/themes/bestbuild/transport.php');
$ideshka_wesi = file_get_contents('./wp-content/themes/bestbuild/wesi.php');
$ideshka_dust = file_get_contents('./wp-content/themes/bestbuild/dust.php');
$ideshka_silos = file_get_contents('./wp-content/themes/bestbuild/silos.php');
$kalibra = file_get_contents('./wp-content/themes/bestbuild/kalibra.php');
$ideshka = $post->ID;
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];



//if (stripos($url,'separatory-semyan/predvaritelnye-zernoochistiteli') !== false) {} 
//if (stripos($url,'separatory-semyan/ochistitelnye-mashiny/kalibrovochnye-ochistiteli/') !== false) {} 
//  elseif (stripos($url,'fotoseparatory') !== false) {echo $fotosep;} 
//  elseif (stripos($url,'kalibrovochnye') !== false) {echo $kalibra;} 
  if (stripos($url,'separatory-semyan') !== false) {
    if (stripos($url,'separatory-semyan/page') !== false){}
    else{ include('wp-content/themes/bestbuild/categories/cat-texts/zernoochistiteli-b.php');}  
  } 
  elseif (strrpos($url,'protravlivateli') !== false) {echo $ideshka_travim;} 
//  elseif (strpos($url,'shelushiteli-semyan-vse-tovary') !== false) {echo $ideshka_sheluha;} 
//  elseif (strpos($url,'polirovalnye') !== false) {echo $ideshka_polir;} 
//  elseif (strpos($url,'transportnaya-sistema') !== false) {echo $ideshka_transport;} 
//  elseif (strpos($url,'vesy-upakovka') !== false) {echo $ideshka_wesi;} 
//  elseif (strpos($url,'zashhita-ot-pyli') !== false) {echo $ideshka_dust;}
//  elseif (strpos($url,'hranenie-zerna') !== false) {echo $ideshka_silos;}  
//  elseif (stripos($url,'/product-category/vse-tovary/') !== false) {echo '$nefastshop';}  
else { echo '';} ?>