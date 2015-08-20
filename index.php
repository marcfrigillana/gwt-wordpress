<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package gwt_wp
 */

get_header();
include_once('inc/banner.php');
?>
<?php govph_displayoptions( 'govph_panel_top' ); ?>

<div class="container-main" role="document">
	<div id="acsblty">
		<div id="acsblty-button">
			<img id="openMenu" class="is_closed" src="<?php bloginfo('template_directory'); ?>/images/arrow-right.png" onclick="changeImage()">
		</div>
		<div id="acsblty-panel">
			<ul>
				<li><a href="#" role="button" class="toggle-contrast" id="is_normal_contrast" title="Toggle High Contrast">1</a></li>
				<li><a href="#" role="button" class="toggle-grayscale" id="is_normal_color" title="Toggle Grayscale">2</a></li>
				<li><a href="#" role="button" class="toggle-fontsize" id="is_normal_fontsize" title="Toggle Font size">3</a></li>
				<li><a href="#" role="button" class="toggle-accessibility" id="gwt_accessibility" title="Toggle Accessibility">4</a></li>
			</ul>
		</div>
	</div>
	
	
	<div id="main-content" class="row">
		
		<div id="content" class="<?php govph_displayoptions( 'govph_content_position' ); ?>columns" role="main">
			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php
						/* Include the Post-Format-specific template for the content.
						 * If you want to overload this in a child theme then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'content', get_post_format() );
					?>

				<?php endwhile; ?>

				<?php gwt_wp_content_nav( 'nav-below' ); ?>

			<?php else : ?>

				<?php get_template_part( 'no-results', 'index' ); ?>

			<?php endif; ?>
		</div><!-- end content -->
		
		<?php 
		if(is_active_sidebar('left-sidebar')){
			govph_displayoptions( 'govph_sidebar_left' );
		}
		?>
		<?php 
		if(is_active_sidebar('right-sidebar')){
			govph_displayoptions( 'govph_sidebar_right' );
		}
		?>
		
	</div>
</div>

<?php govph_displayoptions( 'govph_panel_bottom' ); ?>

<?php get_footer(); ?>