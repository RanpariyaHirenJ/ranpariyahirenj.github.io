<?php

// Custom control for carousel category
 
if (class_exists('WP_Customize_Control')) {
    class lawblog_Customize_Category_Control extends WP_Customize_Control {
 
        public function render_content() {
   
            $dropdown = wp_dropdown_categories( 
                array(
                    'name'              => '_customize-dropdown-category-' . $this->id,
                    'echo'              => 0,
                    'show_option_none'  => __( '&mdash; Select &mdash;', 'lawblog' ),
                    'option_none_value' => '0',
                    'selected'          => $this->value(),
                    
                )
            );
 
            $dropdown = str_replace( '<select', '<select ' . $this->get_link(), $dropdown );
  
            printf(
                '<label class="customize-control-select"><span class="customize-control-title">%s</span> %s</label>',
                $this->label,
                $dropdown
            );
        }
    }
}
 
// Register slider customizer section 
 
add_action( 'customize_register' , 'lawblog_carousel_options' );
 
function lawblog_carousel_options( $wp_customize ) {

/*  HomePage Setting Panel*/

$wp_customize->add_panel( 'homepage_panel', array(
    'priority'       => 50,
    'capability'     => 'edit_theme_options',
    'theme_supports' => '',
    'title'          => __('Custom HomePage Settings', 'lawblog'),
    'description'    => __('Customize HomePage Sections', 'lawblog'),
) );

/* HomePage Setting Panel */
 
$wp_customize->add_section(
    'carousel_section',
    array(
		'title'    => __( 'Carousel Settings', 'lawblog' ),
        'capability'  => 'edit_theme_options',
        'panel'  => 'homepage_panel',
    )
);
 
/* End HomePage Setting Panel */

/*Carousel Slider Setting Start*/

    /* Display Slider Option*/

        $wp_customize->add_setting( 
            'display_slider',
            array(
            'default' => false,
            'sanitize_callback' => 'lawblog_sanitize_checkbox',
            'panel'  => 'homepage_panel',
        ) );

        $wp_customize->add_control( 'display_slider', array(
            'type' => 'checkbox',
            'label' => __('Display Slider','lawblog'),
            'section' => 'carousel_section',
        ) );

$wp_customize->add_setting(
    'carousel_setting',
     array(
    'default'   => '1',
	'sanitize_callback' => 'sanitize_text_field',
    'panel'  => 'homepage_panel',
  )
);
 
$wp_customize->add_control(
    new lawblog_Customize_Category_Control(
        $wp_customize,
        'carousel_category',
        array(
			'label'          => __( 'Category', 'lawblog' ),
            'settings' => 'carousel_setting',
            'section'  => 'carousel_section'
        )
    )
);
 
$wp_customize->add_setting(
    'count_setting',
     array(
    'default'   => '4',
	'sanitize_callback' => 'absint',
 
  )
);
 
$wp_customize->add_control(
    new WP_Customize_Control(
        $wp_customize,
        'carousel_count',
        array(
            'label'          => __( 'Number of posts', 'lawblog' ),
            'section'        => 'carousel_section',
            'settings'       => 'count_setting',
            'type'           => 'text',
        )
    )
);
 
/* --------------------------- END Carousel Slider Setting Start -------------------------*/

/* Start Contact-Us Section */

    $wp_customize->add_section( 'Welcome_section', array(
        'title'       => __( 'Contact Us Section', 'lawblog' ),
        'description' => 'This section will appear below the slider. ',
        'panel'  => 'homepage_panel',
    ) );

    /*Welcome Display Option*/

        $wp_customize->add_setting( 
            'welcome_display_option',
            array(
            'default' => false,
            'sanitize_callback' => 'lawblog_sanitize_checkbox',
            'panel'  => 'homepage_panel',
        ) );

        $wp_customize->add_control( 'welcome_display_option', array(
            'type' => 'checkbox',
            'label' => __('Display Contact Us Section','lawblog'),
            'section' => 'Welcome_section',
        ) );

    /*Welcome Heading*/

        $wp_customize->add_setting( 'Welcome_message_heading', array(
            'default' => 'Your Law Firm',
            'sanitize_callback' => 'sanitize_text_field',
            'panel'  => 'homepage_panel',
        ) );
        $wp_customize->add_control( 'welcome_heading_control', array(
            'label'    => __( 'Title ', 'lawblog' ),
            'section'  => 'Welcome_section',
            'settings' => 'Welcome_message_heading' 
        ) );

    /*Welcome Description*/

        $wp_customize->add_setting( 'Welcome_message_description', array(
            'default' => 'Law Firm Mission/Objective',
            'sanitize_callback' => 'sanitize_text_field',
            'panel'  => 'homepage_panel',
        ) );
        $wp_customize->add_control( 'welcome_description_control', array(
            'label'    => __( 'Description ', 'lawblog' ),
            'section'  => 'Welcome_section',
            'settings' => 'Welcome_message_description' 
    ) );

/* Second Section Button Description */

        $wp_customize->add_setting( 'second_section_button_description', array(
            'default' => 'Contact Us',
            'sanitize_callback' => 'sanitize_text_field',
            'panel'  => 'homepage_panel',
        ) );
        $wp_customize->add_control( 'second_section_button_description', array(
            'label'    => __( 'Button Description: ', 'lawblog' ),
            'section'  => 'Welcome_section',
            'settings' => 'second_section_button_description'    
        ) );    

    // Second Section Button link
        $wp_customize->add_setting('second_section_button_link', array(
            'sanitize_callback' => 'esc_url_raw',
            'panel'  => 'homepage_panel',
            'default' => '#',
        ) );
        $wp_customize->add_control('second_section_button_link', array(
            'label' => __('Button Link URL','lawblog'),
            'section' => 'Welcome_section',
            'type' => 'text',
        ) );

    /* Welcome Section Image Upload */
        $wp_customize->add_setting( 
            'welcome_section_image', array(
            'sanitize_callback' => 'lawblog_sanitize_image',
        ) );

        $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 
            'welcome_section_image', array(
            'label'    => __( 'Choose Background Image', 'lawblog' ),
            'section'  => 'Welcome_section',
            'settings' => 'welcome_section_image',) 
        ) );

/* ---------------- END Contact-Us Section ----------------------- */

}

?>