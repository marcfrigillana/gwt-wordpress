<?php
/*
Template Name: Search Page
*/
?>
<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package gwt_wp
 */

get_header();
?>

<?php govph_displayoptions( 'govph_panel_top' ); ?>

<div id="main-content" class="container-main" role="document">
	<div class="row">
		
		<div id="content" class="<?php govph_displayoptions( 'govph_content_position' ); ?>columns" role="main">
			<h1><?php the_title(); ?></h1>
			<?php while ( have_posts() ) : the_post(); ?>
				
				<?php get_template_part ('content', 'page'); ?>
				
				<!-- comments (uncommented out) -->
				<?php
					//If comments are open or there is at least one comment, load up the comment template
					//if ( comments_open() || '0' !=get_comments_number() )
					//	comments_template();
				?>
			<?php endwhile; //end of the loop ?>

			<?php get_search_form(); ?>
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
		
	</div><!-- end row -->
</div><!-- end main -->

<?php govph_displayoptions( 'govph_panel_bottom' ); ?>

<?php get_footer(); ?>