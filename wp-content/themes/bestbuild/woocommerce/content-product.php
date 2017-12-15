<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woothemes.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.6.1
 */
if ( ! defined( 'ABSPATH' ) ) {exit; }
global $product;
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}?>
<li <?php post_class(); ?>>
	<?php //do_action( 'woocommerce_before_shop_loop_item' ); ?>
	<a href="<?php the_permalink(); ?>"><div class="product_thumbnail"><?php	do_action( 'woocommerce_before_shop_loop_item_title' );?></div></a>
	<a href="<?php the_permalink(); ?>"><h5><?php the_title(); ?></h5></a>
<?php do_action( 'woocommerce_after_shop_loop_item_title' );?>
	<?php do_action( 'woocommerce_after_shop_loop_item' ); ?>
</li>
