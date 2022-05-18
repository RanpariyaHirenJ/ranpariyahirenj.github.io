<?php 
/* Template Name: HomePage */ 

get_header();

?>

<main id="content">
  	<div class="row">
		<div class="col-lg-12">
    		<div class="single-content-container">
				<div class="row">
					<div class="col-lg-12">
						<div>
							<?php if(get_theme_mod( "display_slider", false) == true) : ?>
								<?php get_template_part( 'slider' ); ?>
							<?php endif; ?>
							<?php get_template_part( 'contact-us-page' ); ?>
						</div>
					</div>
				</div>	
			</div>	
		</div>
	</div>
</main>


<?php
	get_footer();
?>



