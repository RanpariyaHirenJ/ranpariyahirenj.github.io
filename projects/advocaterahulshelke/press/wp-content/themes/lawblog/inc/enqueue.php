<?php
function lawblog_scripts() {

	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css');

	wp_enqueue_style( 'lawblog-style', get_stylesheet_uri() );
	
	wp_enqueue_style('font-awesome',get_template_directory_uri().'/css/font-awesome.min.css');

	wp_enqueue_style('animate',get_template_directory_uri().'/css/animate.min.css');


	/* Js script */

	wp_enqueue_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.js', array('jquery'));

    wp_enqueue_script('lawblog-customscript-smartmenus', get_template_directory_uri() . '/js/jquery.smartmenus.min.js' , array('jquery'));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action('wp_enqueue_scripts', 'lawblog_scripts');


?>