<?php
$inc_path     = get_template_directory() . '/inc';
if ( ! isset( $content_width ) ) $content_width = 1120;
add_action( 'after_setup_theme', 'stm_theme_setup' );
if ( ! function_exists( 'stm_theme_setup' ) ) {
	function stm_theme_setup() {
		load_theme_textdomain( 'bestbuild', get_template_directory() . '/languages' );
		add_image_size( 'projects_gallery', 360, 240, true );
		add_image_size( 'projects_gallery_2', 383, 242, true );
		add_image_size( 'thumb-355x216', 355, 216, true );
		add_image_size( 'thumb-86x86', 86, 86, true );
		add_image_size( 'thumb-180x96', 180, 96, true );
		add_image_size( 'thumb-335x170', 335, 170, true );
		add_image_size( 'thumb-795x440', 795, 440, true );
		add_image_size( 'thumb-176x104', 176, 104, true );
		add_image_size( 'thumb-540x320', 540, 320, true );
		add_image_size( 'thumb-795x340', 795, 340, true );
		add_image_size( 'thumb-640x445', 640, 445, true );
		add_image_size( 'thumb-247x185', 247, 185, true );
		add_image_size( 'thumb-280x280', 280, 280, true );
		add_image_size( 'thumb-124x108', 124, 108, true );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption'
		) );
		add_theme_support( 'woocommerce' );
		register_nav_menus(
			array(
				'primary_menu'   => __( 'Top Menu', 'bestbuild' )
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Default Sidebar', 'bestbuild' ),
				'id'            => 'default',
				'description'   => '',
				'before_widget' => '<aside id="%1$s" class="widget %2$s default_widgets">',
				'after_widget'  => '</aside>',
				'before_title'  => '<div class="widget_title"><h4>',
				'after_title'   => '</h4></div>',
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Footer', 'bestbuild' ),
				'id'            => 'footer',
				'description'   => '',
				'before_widget' => '<aside id="%1$s" class="widget %2$s footer_widgets">',
				'after_widget'  => '</aside>',
				'before_title'  => '<div class="widget_title"><h4>',
				'after_title'   => '</h4></div>',
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Shop Sidebar', 'bestbuild' ),
				'id'            => 'shop',
				'description'   => '',
				'before_widget' => '<aside id="%1$s" class="widget %2$s shop_widgets">',
				'after_widget'  => '</aside>',
				'before_title'  => '<div class="widget_title"><h4>',
				'after_title'   => '</h4></div>',
			)
		);
	}
}
if ( ! function_exists( '_wp_render_title_tag' ) ) {
	function stm_slug_render_title() {
		return '<title>' . wp_title( '|', false, 'right' ) . '</title>';
	}
	add_action( 'wp_head', 'stm_slug_render_title' );
}

function stm_excerpt_more( $more ) {
	return '';
}
add_filter( 'excerpt_more', 'stm_excerpt_more' );
add_action( 'wp_head', 'stm_ajaxurl' );
function stm_ajaxurl() {
	?>
	<script type="text/javascript">
		var ajaxurl = '<?php echo esc_url( admin_url('admin-ajax.php') ); ?>';
	</script>
<?php
}
function stm_wp_head() {
	if ( $favicon = stm_option( 'favicon', false, 'url' ) ) {
		echo '<link rel="shortcut icon" type="image/x-icon" href="' . esc_url( $favicon ) . '" />' . "\n";
	} else {
		echo '<link rel="shortcut icon" type="image/x-icon" href="' . get_template_directory_uri() . '/favicon.ico" />' . "\n";
	}
	if( stm_option( 'color_skin' ) == 'skin_custom_color' ){
      $oldcss = '		<style type="text/css">
				body.skin_custom_color .project_grid_switcher:hover{
					color: ' . stm_option( 'primary_color' ) . ' !important;
				}
				body.skin_custom_color .slick_prev:hover,
				body.skin_custom_color .slick_next:hover,
				body.skin_custom_color .tp-leftarrow.default:hover,
				body.skin_custom_color .tp-rightarrow.default:hover,
				body.skin_custom_color .ls-construct .ls-nav-prev:hover,
				body.skin_custom_color .ls-construct .ls-nav-next:hover{
					border-color: ' . stm_option( 'primary_color' ) . ' !important;
				}
			</style>';
		echo '';
	}
}
add_action( 'wp_head', 'stm_wp_head' );
function stm_body_class( $classes ) {
	$classes[] = stm_option( 'color_skin' );
	$classes[] = stm_option( 'mobile_header_style' );
	$classes[] = get_header_style();
	if( stm_option( 'sticky_header' ) ){
		$classes[] = 'sticky_header';
	} 
	if( stm_option( 'site_boxed' ) ){
		$classes[] = 'boxed_layout';
	}
	if( stm_option( 'boxed_background_image_type' ) && stm_option( 'site_boxed' ) ){
		$classes[] = stm_option( 'boxed_background_image_type' );
	}
	if( isset( $_GET['header_demo'] ) && $_GET['header_demo'] == 'white' ){
		$classes[] = 'mobile_header_style_white';
	}
	if( get_post_meta( get_the_ID(), 'header_transparent', true ) ){
		$classes[] = 'header_transparent';
	}
	return $classes;
}
add_filter( 'body_class', 'stm_body_class' );
function stm_custom_css() {
	$site_css = stm_option( 'site_css' );
	$output = "\n<style id=\"stm_custom_css\" type=\"text/css\">\n" . preg_replace( '/\s+/', ' ', $site_css ) . "\n</style>\n";
	if ( !empty( $site_css ) ) {
		echo $output;
	}
}
add_action( 'wp_head', 'stm_custom_css' );
require_once ( $inc_path . '/redux-framework/admin-init.php' );
require_once( $inc_path . '/extras.php' );
require_once( $inc_path . '/tgm/tgm-plugin-registration.php' );
require_once( $inc_path . '/visual_composer.php' );
require_once( $inc_path . '/enqueue-scripts-styles.php' );
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	require_once( $inc_path . '/woocommerce_configuration.php' );
}
require_once( $inc_path . '/widgets/contacts.php' );
require_once( $inc_path . '/widgets/instagram.php' );
require_once( $inc_path . '/widgets/services.php' );
require_once( $inc_path . '/widgets/pages.php' );
//if (!function_exists('woocommerce_template_loop_add_to_cart')) {
//	function woocommerce_template_loop_add_to_cart() {
//		global $product;
//		if ( ! $product->is_in_stock() || ! $product->is_purchasable() ) return;
//		woocommerce_get_template('loop/add-to-cart.php');
//	}
//}
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_cart_button_text' );    // 2.1 +
function woo_custom_cart_button_text() {
        return __( 'Подробнее', 'woocommerce' );
}
add_filter( 'woocommerce_product_add_to_cart_text', 'woo_archive_custom_cart_button_text' );    // 2.1 +
function woo_archive_custom_cart_button_text() {
        return __( 'Подробнее', 'woocommerce' );
}
// Добавляет ссылку в админ бар
add_action( 'admin_bar_menu', 'my_admin_bar_menu', 30 );
function my_admin_bar_menu( $wp_admin_bar ) {
	$wp_admin_bar->add_menu( array(
		'id'    => 'menu_id',
		'title' => 'Админка',
		'href'  => 'http://akyurek.ua/wp-admin/index.php',
	) );
	$wp_admin_bar->add_menu( array(
		'id'    => 'homka',
		'title' => 'На главную',
		'href'  => 'http://akyurek.ua/',
	) );
	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'zapiska', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Записи',
		'href'   => 'http://akyurek.ua/wp-admin/edit.php?post_status=publish&post_type=post',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'pagi', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Страницы',
		'href'   => 'http://akyurek.ua/wp-admin/edit.php?post_type=page',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'tovari', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Товары',
		'href'   => 'http://akyurek.ua/wp-admin/edit.php?post_type=product',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'temas', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Темы',
		'href'   => 'http://akyurek.ua/wp-admin/themes.php',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'lugi', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Плагины',
		'href'   => 'http://akyurek.ua/wp-admin/plugins.php',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'manu', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Меню',
		'href'   => 'http://akyurek.ua/wp-admin/nav-menus.php',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'vidgi', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Виджеты',
		'href'   => 'http://akyurek.ua/wp-admin/widgets.php',
	) );
  	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'medias', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => 'Медиафайлы',
		'href'   => 'http://akyurek.ua/wp-admin/upload.php',
	) );
      	$wp_admin_bar->add_menu( array(
		'parent' => 'menu_id', // параметр id из первой ссылки
		'id'     => 'taski', // свой id, чтобы можно было добавить дочерние ссылки
		'title'  => '99 problems',
		'href'   => 'http://akyurek.ua/?p=3966',
	) );
}
function custom_excerpt_length( $length ) {
    return 8;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );  
function wptuts_scripts_basic()  
{  
    // Register the script like this for a theme:  
    wp_register_script( 'custom-script', get_template_directory_uri() . '/assets/js/test.js' );  
    // For either a plugin or a theme, you can then enqueue the script:  
    wp_enqueue_script( '/assets/js/test.js' );  
}  
add_action( 'wp_enqueue_scripts', 'wptuts_scripts_basic' );
add_filter( 'woocommerce_product_tabs', 'sb_woo_remove_reviews_tab', 98);
function sb_woo_remove_reviews_tab($tabs) {
unset($tabs['reviews']);
return $tabs;
}
#Делаем так, чтобы в worpdress уже загруженные изображения не линковались на само изображение
add_filter( 'the_content', 'del_image_link' );
function del_image_link( $content ) {
 $content =
 preg_replace(array('{<a[^>]*><img}','{/></a>}'), array('<img','/>'), $content);
 return $content;
}
/**
  * Remove link wrapping main product image in single product view.
  * @param $html
  * @param $post_id
  * @return string
*/
function custom_unlink_single_product_image( $html, $post_id ) {
    return get_the_post_thumbnail( $post_id, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ) );
}
add_filter('woocommerce_single_product_image_html', 'custom_unlink_single_product_image', 10, 2);
remove_action( 'woocommerce_before_single_product_summary', 'action_woocommerce_before_single_product_summary', 10, 2 ); 
add_theme_support( 'deactivate_layerslider' );


add_action('init', 'optimize_fixwp_head', 100);
function optimize_fixwp_head() {
//   remove_action('wp_head', array(visual_composer(), 'addMetaData')); 
}


function vc_remove_wp_ver_css_js( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );