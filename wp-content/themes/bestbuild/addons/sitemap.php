<?php get_header();?>
<?php
/**
 * Template Name: Sitemap
 * Template Post Type: page
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>
<style>ul li ul {
    margin: 5px 30px;
    list-style-type: none;
}.s_m {margin: 60px auto;}
.s_m li {
    list-style-type: none;
}</style>
<div class="s_m">


<ul>
  <li><a href="http://akyurek.ua/">Главная</a></li>
  <li><a href="http://akyurek.ua/tovary/">Оборудование</a>
    <ul class="sub-menu">

      <li> <a href="http://akyurek.ua/goods/vse-tovary/separatory-semyan/">Сепараторы семян</a><ul class="sepo"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'separatory-semyan',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
  <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/protravlivateli/">Протравливатели семян</a><ul class="protravi"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'protravlivateli',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/shelushiteli-semyan-vse-tovary/">Шелушители семян</a><ul class="shelushi"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'shelushiteli-semyan-vse-tovary',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/polirovalnye-mashiny/">Полировальные машины</a><ul class="poliri"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'polirovalnye-mashiny',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/transportnaya-sistema/">Транспортная система</a><ul class="transpo"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'transportnaya-sistema',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/vesy-upakovka/">Весы и упаковка</a><ul class="veso"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'vesy-upakovka',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/zashhita-ot-pyli/">Защита от пыли</a><ul class="dusto"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'zashhita-ot-pyli',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
      <li> <a href="http://akyurek.ua/goods/vse-tovary/hranenie-zerna/">Бункеры для хранения</a><ul class="siloo"> <button class="cnt">Не трогать</button>
        <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
        'product_cat' => 'hranenie-zerna',
          			'post_type' => 'product',
          'posts_per_page' => 100,  // ???-??
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
 <li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
    </ul>
  </li>
  <li><a href="http://akyurek.ua/akyurek-gotovye-resheniya/">Решения</a><ul class="resha">
  <?php
        $current_page = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $params = array(
          'category_name'       => 'resheniya',
          'posts_per_page' => 100,
          'paged'           => $current_page
        );
        query_posts($params);
        $wp_query->is_archive = true;
        $wp_query->is_home = false;
        while(have_posts()): the_post(); ?>
<li><a href="<?php the_permalink() ?>"> <img width="25" class="news-image" src="<?php the_post_thumbnail_url(); ?>" /><?php the_title() ?></a></li>
        <?php endwhile; ?>
</ul></li>
  <li><a href="http://akyurek.ua/projects/">Проекты</a>  <ul><li><a href="http://akyurek.ua/project/zavod-po-ochistke-bobovyh/">Завод по очистке бобовых</a></li>
<li><a href="http://akyurek.ua/project/zernoochistitel-akyurekexcell-117/">Зерноочиститель AkyurekExcell 117</a></li>
<li><a href="http://akyurek.ua/project/3446/">Завод по очистке кунжута и др. масличных</a></li>
<li><a href="http://akyurek.ua/project/kompaktnyj-zernoochistitel-pod-klyuch/">Компактный зерноочиститель под ключ</a></li>
<li><a href="http://akyurek.ua/project/zernoochistitelnye-mashiny-dlya-podsolnechnika-i-tykvy/">Зерноочистительные машины для подсолнечника и тыквы</a></li>
<li><a href="http://akyurek.ua/project/ochistitelnoe-oborudovanie-tykvennye-semena/">Очистительное оборудование (Тыквенные семена )</a></li>
<li><a href="http://akyurek.ua/project/cortirovka-po-tsvetu-remennogo-tipa/">Cортировка по цвету ременного типа</a></li>
<li><a href="http://akyurek.ua/project/akyurekexcell-107/">AkyurekExcell 107</a></li>
<li><a href="http://akyurek.ua/project/gravitatsionnyj-separator/">Гравитационный сепаратор</a></li>
<li><a href="http://akyurek.ua/project/ochistitel-arahisa/">Очиститель арахиса</a></li>
<li><a href="http://akyurek.ua/project/ochistitel-pshenitsy-zernoochistitelnoe-oborudovanie/">Очиститель пшеницы — Зерноочистительное оборудование</a></li>
<li><a href="http://akyurek.ua/project/shelushiteli-podsolnechnika/">Шелушители подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/sortirovshhiki-novogo-pokoleniya-sorturk/">Сортировщики нового поколения Sorturk</a></li>
<li><a href="http://akyurek.ua/project/desyatitonnyj-ochistitelnyj-kompleks/">Десятитонный очистительный комплекс в Турции</a></li>
<li><a href="http://akyurek.ua/project/sortirovka-zerna-fotoseparatorami-sorturk/">Сортировка булгура Фотосепараторами Sorturk</a></li>
<li><a href="http://akyurek.ua/project/sortirovshhiki-novogo-pokoleniya-c-7/">Сортировщики нового поколения C-7</a></li>
<li><a href="http://akyurek.ua/project/sortirovshhiki-novogo-pokoleniya-sorturk-c-4/">Сортировщики нового поколения Sorturk C-4</a></li>
<li><a href="http://akyurek.ua/project/zernoochistitelnyj-kompleks/">Зерноочистительный комплекс в Турции</a></li>
<li><a href="http://akyurek.ua/project/sistema-proseivaniya-spetsij/">Система просеивания специй</a></li>
<li><a href="http://akyurek.ua/project/sistema-dlya-protravlivaniya-semyan/">Система для протравливания семян</a></li>
<li><a href="http://akyurek.ua/project/ochistka-bobovyh/">Очистка бобовых</a></li>
<li><a href="http://akyurek.ua/project/nextgen-sortirovshhiki-zerna-sorturk-ot-akyurek/">NextGen Сортировщики зерна Sorturk от Akyurek</a></li>
<li><a href="http://akyurek.ua/project/sortirovka-zerna-s-1-fotoseparatory-akyurek/">Сортировка зерна С-1 Фотосепараторы Akyurek</a></li>
<li><a href="http://akyurek.ua/project/zavod-ochistki-semyan/">Завод очистки семян</a></li>
<li><a href="http://akyurek.ua/project/sorturk-c-7/">SORTURK C-7</a></li>
<li><a href="http://akyurek.ua/project/novoe-pokolenie-sorturk-c-1/">Новое поколение Sorturk C-1</a></li>
<li><a href="http://akyurek.ua/project/ochistka-podsolnuha/">Очистка подсолнуха</a></li>
<li><a href="http://akyurek.ua/project/novoe-pokolenie-sorturk-c-7/">Новое поколение Sorturk C-7</a></li>
<li><a href="http://akyurek.ua/project/gorizontalnyj-fotoseparator-sortirovshhik/">Горизонтальный фотосепаратор — сортировщик</a></li>
<li><a href="http://akyurek.ua/project/razvitie-agrosektora/">Развитие агросектора</a></li>
<li><a href="http://akyurek.ua/project/ochistka-sezama-kunzhuta/">Очистка сезама(кунжута)</a></li>
<li><a href="http://akyurek.ua/project/obrabotka-semyan-podsolnechnika/">Обработка семян подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/ochistka-semyan-podsolnechnika/">Очистка семян подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/sistema-po-ochistke-zerna/">Система по очистке зерна</a></li>
<li><a href="http://akyurek.ua/project/3047/">Силос на 300 тонн</a></li>
<li><a href="http://akyurek.ua/project/3040/">Новое поколение сортировщиков Sorturk C-6</a></li>
<li><a href="http://akyurek.ua/project/akyurekexcell-245-novoe-slovo-v-fistashkovom-biznese/">AkyurekExcell 245 — новое слово в фисташковом бизнесе</a></li>
<li><a href="http://akyurek.ua/project/novye-investitsii-kompanii-tagra/">Новые инвестиции компании Tagra</a></li>
<li><a href="http://akyurek.ua/project/svekolnye-kultivatory-predpochitayut-akyurek/">Свекольные культиваторы предпочитают Akyurek</a></li>
<li><a href="http://akyurek.ua/project/3011/">Новое поколение сортировальщиков Sorturk</a></li>
<li><a href="http://akyurek.ua/project/ochistitel-dlya-tykvennyh-semyan-10t-h/">Очиститель для тыквенных семян 10T/H</a></li>
<li><a href="http://akyurek.ua/project/novye-sortirovshhiki-po-tsvetu-sorturk-c-1/">Новые сортировщики по цвету Sorturk C-1</a></li>
<li><a href="http://akyurek.ua/project/altilar-otomotiv-i-kompaniya-tarim-stanovitsya-silnee-s-novym-semyan-rastenij/">ALTILAR OTOMOTİV И компания TARIM становится сильнее с новым семян растений</a></li>
<li><a href="http://akyurek.ua/project/mashiny-dlya-chistki-i-hraneniya-lugovyh-trav/">Машины для чистки и хранения луговых трав</a></li>
<li><a href="http://akyurek.ua/project/nuts-atom-usilivaet-sebya-novoj-tehnologiej-sorturk/">NUTS ATOM Усиливает себя  новой технологией Sorturk</a></li>
<li><a href="http://akyurek.ua/project/sortirovka-fistashek-po-tsvetu-s-fotoseparatorami-sorturk/">Сортировка фисташек по цвету с фотосепараторами Sorturk</a></li>
<li><a href="http://akyurek.ua/project/2931/">Новое поколение сортировальных машин Sorturk</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnyj-zavod-po-ochistke-tykvennyh-semyan/">Сортировочный завод по очистке тыквенных семян</a></li>
<li><a href="http://akyurek.ua/project/novye-investitsii-v-selskohozyajstvennoj-produktsii/">Новые инвестиции в сельскохозяйственной продукции</a></li>
<li><a href="http://akyurek.ua/project/novyj-zavod-evnova/">Новый завод EVNOVA</a></li>
<li><a href="http://akyurek.ua/project/tehnologii-dlya-ustanovki-ochistki/">Технологии для установки очистки.</a></li>
<li><a href="http://akyurek.ua/project/kompaniya-stanovitsya-silnee-blagodarya-novomu-zavodu/">Компания становится сильнее благодаря новому заводу</a></li>
<li><a href="http://akyurek.ua/project/2873/">Улучшение работы зерноперерабатывающего завода</a></li>
<li><a href="http://akyurek.ua/project/kompaniya-hisar-tarim-dokazala-vazhnost-kotoruyu-ona-pridaet-kachestvu-produktsii/">Компания Хисар TARIM доказала важность, которую она придает качеству продукции</a></li>
<li><a href="http://akyurek.ua/project/sortirovshhik-zerna-novogo-pokoleniya-pokoril-novuyu-kompaniyu/">Сортировщик зерна нового поколения покорил новую компанию!</a></li>
<li><a href="http://akyurek.ua/project/sistemy-fotosortirovki-zerna/">Системы фотосортировки зерна</a></li>
<li><a href="http://akyurek.ua/project/sortirovshhiki-novogo-pokoleniya/">2 тонны в час — фильтрация подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/zernoochistitelnaya-mashina-10tonn-chas/">Зерноочистительная машина 10тонн\час</a></li>
<li><a href="http://akyurek.ua/project/novoe-pokolenie-selskohozyajstvennyh-sortirovshhikov-uzhe-v-ukraine/">Новое поколение сельскохозяйственных сортировщиков уже в Украине!</a></li>
<li><a href="http://akyurek.ua/project/avtomaticheskaya-sistema-vesov-10-tonn-chas/">Автоматическая система весов — 10 тонн\час</a></li>
<li><a href="http://akyurek.ua/project/kompaniya-obnovila-tehnologiyu-s-akyurekexcell-208/">Компания обновила технологию с AkyurekExcell 208</a></li>
<li><a href="http://akyurek.ua/project/ochistka-anisovyh-1-5-tonn-chas/">Очистка анисовых , 1,5 тонн\час</a></li>
<li><a href="http://akyurek.ua/project/i/">Измельчитель зерна AkyurekExcell 243</a></li>
<li><a href="http://akyurek.ua/project/novoe-pokolenie-fotoseparatorov-sorturk-c-5/">Новое поколение фотосепараторов Sorturk C-5</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnaya-mashina-dlya-pyltsy/">Сортировочная машина для пыльцы</a></li>
<li><a href="http://akyurek.ua/project/2714/">Гравитационный сепаратор для семян подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnaya-mashina-s-fotoseparatsiej-i-triernym-blokom/">Сортировочная машина с фотосепарацией и триерным блоком</a></li>
<li><a href="http://akyurek.ua/project/gravitatsionnaya-separatsiya-i-tsvetovaya-sortirovka-tykvennyh-semyan/">Гравитационная сепарация и цветовая сортировка тыквенных семян</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnaya-mashina-dlya-arahisa/">Сортировочная машина для арахиса</a></li>
<li><a href="http://akyurek.ua/project/ochistka-podsolnechnika/">Очистка подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/vysokaya-emkost-newtechnology/">Новые технологии больших объемов</a></li>
<li><a href="http://akyurek.ua/project/vozobnovilo-suhofrukt/">Ela возобновило обработку сухофруктов</a></li>
<li><a href="http://akyurek.ua/project/mashina-dlya-sortirovki-semechek-podsolnuha-po-tsvetu/">Машина для сортировки семечек подсолнуха по цвету</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnaya-tsvet-mashina/">Сортировочная (цвет) машина</a></li>
<li><a href="http://akyurek.ua/project/zavod-po-ochistke-kunzhuta-2/">Завод  по очистке кунжута</a></li>
<li><a href="http://akyurek.ua/project/ustanovka-ochistki-sezam/">Установка по очистке сезама</a></li>
<li><a href="http://akyurek.ua/project/polnotsennyj-zernoochistitelnyj-kompleks-v-peru/">Полноценный зерноочистительный комплекс в Перу</a></li>
<li><a href="http://akyurek.ua/project/ochistka-i-konditsionirovanie-semyan/">Очистка и кондиционирование семян.</a></li>
<li><a href="http://akyurek.ua/project/zavod-po-ochistke-kunzhuta/">Завод по очистке кунжута</a></li>
<li><a href="http://akyurek.ua/project/ochistka-kunzhuta-v-nigerii-5-t-chas/">Очистка кунжута в Нигерии — 5 т / час.</a></li>
<li><a href="http://akyurek.ua/project/mobilnyj-zavod-dlya-ochistki-kunzhuta/">Мобильный завод для очистки кунжута</a></li>
<li><a href="http://akyurek.ua/project/zavod-po-ochistke-sezama-2/">Завод по очистке сезама</a></li>
<li><a href="http://akyurek.ua/project/sortirovochnyj-zavod-v-litve/">Сортировочный завод в Литве</a></li>
<li><a href="http://akyurek.ua/project/zavod-shelushitelej-podsolnechnika/">Завод шелушителей подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/akyurekexcell-117/">Предварительная очистка зерна</a></li>
<li><a href="http://akyurek.ua/project/polnyj-zernoochistitelnyj-kompleks-mashin-v-litve/">Полный зерноочистительный комплекс машин в Литве</a></li>
<li><a href="http://akyurek.ua/project/impulsnaya-liniya-ochistki-v-italii/">Импульсная линия очистки в Италии</a></li>
<li><a href="http://akyurek.ua/project/sistema-ochistki-zelenogo-goroshka/">Система очистки зеленого горошка</a></li>
<li><a href="http://akyurek.ua/project/zavod-po-obrabotke-semyan-tykvy-v-ukraine-obem-5-t-ch/">Завод по обработке семян тыквы в Украине. Объем — 5 т / ч</a></li>
<li><a href="http://akyurek.ua/project/sistema-ochistki-fasoli-goroha-pshenitsy/">Система очистки фасоли, гороха, пшеницы</a></li>
<li><a href="http://akyurek.ua/project/zavod-po-ochistke-sezama/">Завод по очистке сезама</a></li>
<li><a href="http://akyurek.ua/project/zernoobrabatyvayushhaya-mashina-obem-15-tonn-chas/">Зернообрабатывающая машина . Объем 15 тонн\час</a></li>
<li><a href="http://akyurek.ua/project/koriandr-tmin-i-fenhel-v-indii/">Кориандр, тмин и фенхель в Индии</a></li>
<li><a href="http://akyurek.ua/project/obrabotka-zeren-sezama/">Обработка зерен  тмина, арбуза, подсолнечника</a></li>
<li><a href="http://akyurek.ua/project/obrabotka-zeren-sezama-yachmenya-i-sorgo/">Обработка зерен сезама,  ячменя и сорго</a></li>
<li><a href="http://akyurek.ua/project/2420/">Обородувание для очистки фасоли</a></li>
<li><a href="http://akyurek.ua/project/2408/">Сортировка и хранение зерна</a></li>
<li><a href="http://akyurek.ua/project/2380/">Готовое решение по переработке зерна</a></li>
<li><a href="http://akyurek.ua/project/zernoobrabatyvayushhij-kompleks-pod-klyuch/">Зернообрабатывающий комплекс под ключ в Алжире</a></li>
<li><a href="http://akyurek.ua/project/mobilnyj-zernoobrabatyvayushhij-kompleks/">Мобильный зернообрабатывающий комплекс в Алжире</a></li>
<li><a href="http://akyurek.ua/project/2249/">Зерноочистительный комплекс в Боливии</a></li>
<li><a href="http://akyurek.ua/project/2164/">Сухие завтраки — фильтрация, аспирация, сепарация в одном комплексе</a></li>
<li><a href="http://akyurek.ua/project/2165/">Очистка, кондиционирование и транспортные ленты в Австрии</a></li>
<li><a href="http://akyurek.ua/project/2166/">Чистка семян подсолнечника и тыквы гравитационным сепаратором</a></li>
<li><a href="http://akyurek.ua/project/2167/">Полный зерновой комплекс в Бангладеше</a></li>
<li><a href="http://akyurek.ua/project/2168/">Очистка сезама в Буркина-фасо</a></li>
<li><a href="http://akyurek.ua/project/2170/">Сортировщик нового поколения C-4 в Болгарии</a></li>
<li><a href="http://akyurek.ua/project/project-9/">Измельчитель зеленого горошка</a></li></ul></li>
  <li><a href="http://akyurek.ua/our-team-transparent/">Компания</a></li>
  <li><a href="http://akyurek.ua/1932-2/">Видео</a></li>
  <li><a href="http://akyurek.ua/contact-us/">Контакты</a></li>
</ul>
</div>

<script>
function testli(a){

jQuery(a).each(function(){
  jQuery(this).click(function(){
  setTimeout(function(){
    var uli = jQuery(a).parent();
    uli.css('background', 'red');
    uli.find('li').each(function(){
    sors = jQuery(this).children('a').attr('href');
    window.open(sors);

    });
  },250);});
})
}
testli('.cnt');

</script>
<?php get_footer();?>
