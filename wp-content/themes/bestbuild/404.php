<?php stm_get_header(); ?>
	<div class="page_404">
		<strong>404</strong>
		<h2><?php _e( 'Страница, которую вы ищете не существует', 'bestbuild' ); ?></h2>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="button"><?php _e( 'Назад на лавную', 'bestbuild' ); ?></a>
	</div>
<?php get_footer(); ?> 