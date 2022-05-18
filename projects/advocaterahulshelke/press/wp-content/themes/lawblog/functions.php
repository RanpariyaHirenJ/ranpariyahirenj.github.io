<?php
/**
 * lawblog functions and definitions.
 *
 *
 * @package lawblog
 */


	$lawblog_theme_path = get_template_directory() . '/inc/';

	require( $lawblog_theme_path . '/custom-navwalker.php' );

	/*-----------------------------------------------------------------------------------*/
	/*	Enqueue scripts and styles.
	/*-----------------------------------------------------------------------------------*/
	require( $lawblog_theme_path .'/enqueue.php');
	/* ----------------------------------------------------------------------------------- */
	/* Customizer */
	/* ----------------------------------------------------------------------------------- */

	require( $lawblog_theme_path . '/customize/theme_customize.php');
	require( $lawblog_theme_path . '/customize/customizer_options.php');
	require( $lawblog_theme_path . '/customize/customize_control/class-customize-alpha-color-control.php');
	

if ( ! function_exists( 'lawblog_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function lawblog_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on lawblog, use a find and replace
	 * to change 'lawblog' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'lawblog', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __('Primary menu','lawblog' )
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
	
	//Custom Logo
	add_theme_support( 'custom-logo');

	function lawblog_the_custom_logo() {
		the_custom_logo();
	}

	add_filter('get_custom_logo','lawblog_logo_class');


	function lawblog_logo_class($html)
	{
	$html = str_replace('custom-logo-link', 'navbar-brand', $html);
	return $html;
	}

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'lawblog_custom_background_args', array(
		'default-color' => 'eeeeee',
		'default-image' => '',
	) ) );

}
endif;
add_action( 'after_setup_theme', 'lawblog_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function lawblog_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'lawblog_content_width', 640 );
}
add_action( 'after_setup_theme', 'lawblog_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function lawblog_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'lawblog' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="lb-widget %2$s bounceInRight animated">',
		'after_widget'  => '</div>',
		'before_title'  => '<h6>',
		'after_title'   => '</h6>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget Area', 'lawblog' ),
		'id'            => 'footer_widget_area',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="col-md-6 col-sm-6 rotateInDownLeft animated lb-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h6>',
		'after_title'   => '</h6>',
	) );
}
add_action( 'widgets_init', 'lawblog_widgets_init' );


function lawblog_enqueue_customizer_controls_styles() {
  wp_register_style( 'lawblog-customizer-controls', get_template_directory_uri() . '/css/customizer-controls.css', NULL, NULL, 'all' );
  wp_enqueue_style( 'lawblog-customizer-controls' );
  }
add_action( 'customize_controls_print_styles', 'lawblog_enqueue_customizer_controls_styles' );

//Read more Button on slider & Post
function lawblog_read_more() {
	if ( ! is_admin() ){
		global $post;
		$readbtnurl = '<br><a class="btn btn-tislider-two" href="' . esc_url(get_permalink()) . '">'.__('Read More','lawblog').'</a>';
	    return $readbtnurl;
	}
}
add_filter( 'the_content_more_link', 'lawblog_read_more' );

// Changing excerpt more
   function lawblog_excerpt_more($more) {
   	if ( is_admin() ){
		return $more;
	}
   	global $post;
   	return ' <br><div class="read-more-div"><a class="read-more-button" href="'. esc_url(get_permalink($post->ID)) . '">' . __('Read More &raquo;','lawblog') . '</a></div>';
   	}
   	add_filter('excerpt_more', 'lawblog_excerpt_more');

   	/**

* Add a pingback url auto-discovery header for singularly identifiable articles.
*/
function lawblog_pingback_header() {
    if ( is_singular() && pings_open() ) {
        printf( '<link rel="pingback" href="%s">' . "\n", esc_url(get_bloginfo( 'pingback_url' ) ) );
    }
}
add_action( 'wp_head', 'lawblog_pingback_header' );