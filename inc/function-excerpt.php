<?php
/**
 * govph exerpt
 *
 * @package govph
 */
// Replaces the excerpt "more" text by a link
function new_excerpt_more($more) {
  global $post;
  return '<a class="moretag" href="'. get_permalink($post->ID) . '"> continue reading <span class="meta-nav">&rarr;</span></a>';
}
add_filter('excerpt_more', 'new_excerpt_more');