

<?php if(get_theme_mod( "welcome_display_option", false) == true) : ?>

<div class="first-block">
	<div class="first-block-content">
		<div class="balance-scale">
			<i class="fa fa-balance-scale"></i>
		</div>
		<h1>
			<?php echo esc_html(get_theme_mod( 'Welcome_message_heading', 'Your Law Firm' )); ?>
		</h1>
		<p>
			<?php echo esc_html(get_theme_mod( 'Welcome_message_description', 'Law Firm Mission/Objective' )); ?>
		</p>
		<a class="btn btn-link" href="<?php echo esc_url(get_theme_mod( 'second_section_button_link', '#' )); ?>">
			<i class="fa fa-gavel"></i><?php echo esc_html(get_theme_mod( 'second_section_button_description', 'Contact Us' )); ?>
		</a>
	</div>
</div>

<?php endif; ?>