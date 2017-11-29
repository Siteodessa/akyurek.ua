<?php stm_get_header(); ?>

	<div class="content-area">

		<?php
			while ( have_posts() ) {
				the_post();

				get_template_part( 'partials/content', 'page' );

			}
		?>

	</div>

<div id="wtfff">
<?php 
$ideshka = $post->ID;
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];  
$ideshka_separator  = '<div class="inax_group">  <div class="shop699">  Всесторонний опыт в инжиниринге и глубокие знания продуктов позволяют Кимбрии поставлять решения для очистки, сортировки и обработки различных видов зерна и семян. Мы предлагаем консультации и разрабатываем заводы для всех видов очистки различных продуктов на основе научных достижений и многолетнего практического опыта.Во всем мире семенная отрасль движется в сторону увеличения уровня промышленного производства и повышения производительности заводов по очистке и сортировке семян.Такое развитие событий способствует увеличению спроса на высокопроизводительные, высококачественные и экономичные семенные заводы Кимбрия. У нас есть полностью оборудованный испытательный центр с современной лабораторией и производственными машинами.Все это вместе с нашим обширным опытом эксплуатации оборудования обеспечивает наивысшее качество технических показателей исследований и непрерывное усовершенствование технологии обработки и оборудования. Наш испытательный центр и опыт позволяют нам предоставлять особые и адаптированные решения для каждого запроса.Кимбрия разрабатывает и производит широкий спектр машин для переработки семян и оборудования, а так же решений для всех видов очистки и сортировки. Мы поставляем семенные заводы для различных видов зерна, злаков, масличных культур, семян трав, риса, бобовых, семян трав и других товарных видов семян. Наши комплексы могут работать в любых климатических условиях, в любой точке мира. Мы поставляем комплексные семенные линии производительностью до 25 тонн в час на одну линию.Бережное обращение и точность сортировки без риска смешения сортов – наш насущный хлеб и основной принцип нашей работы.  </div></div>';
$ideshka_travim = '<div class="inax_group"><div class="shop669"></div></div>';
$ideshka_sheluha = '<div class="inax_group"><div class="shop756"></div></div>';
$ideshka_polir = '<div class="inax_group"><div class="shop667"></div></div>';
$ideshka_transport = '<div class="inax_group"><div class="shop666"></div></div>';
$ideshka_wesi = '<div class="inax_group"><div class="shop732"></div></div>';
$ideshka_dust = '<div class="inax_group"><div class="shop757"></div></div>';
$ideshka_silos = '<div class="inax_group"><div class="shop746"></div></div>';
    if (strpos($url,'separatory-semyan') !== false) {
    echo $ideshka_separator;
} 
    elseif (strpos($url,'protravlivateli') !== false) {
    echo $ideshka_travim;
} 
    elseif (strpos($url,'shelushiteli-semyan-vse-tovary') !== false) {
    echo $ideshka_sheluha;
} 
    elseif (strpos($url,'polirovalnye') !== false) {
    echo $ideshka_polir;
} 
    elseif (strpos($url,'transportnaya-sistema') !== false) {
    echo $ideshka_transport;
} 
    elseif (strpos($url,'vesy-upakovka') !== false) {
    echo $ideshka_wesi;
} 
    elseif (strpos($url,'zashhita-ot-pyli') !== false) {
    echo $ideshka_dust;
} 
    elseif (strpos($url,'hranenie-zerna') !== false) {
    echo $ideshka_silos;
}  
else
{
  echo '';
} 
?>
</div>
           
<?php get_footer(); ?>
