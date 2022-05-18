<?php 
/**
 * The template for displaying the content.
 * @package lawblog
 */
?>
<div class="article-container">
	<div class="col-lg-12">
		<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<div class="lb-blog-post-box">
				<h1 class="post-title-head">
					<a title="<?php the_title_attribute(); ?>" href="<?php the_permalink(); ?>">
						<?php the_title(); ?>
					</a>
				</h1>
				<article class="small">
					<div class="lb-blog-category post-meta-data"> 
						<i class="fa fa-user meta-fa-icon-user"></i>
						<a class="meta-user-des" href="<?php echo esc_url(get_author_posts_url( get_the_author_meta( 'ID' ) ));?>">
							<?php the_author(); ?>
						</a>
						<i class="fa fa-calendar meta-fa-icons"></i>
						<span class="meta-data-date"><?php echo esc_html(get_the_date( get_option( 'date_format' ) )); ?></span>
					</div>
					<div class="row">
							<div class="col-lg-12 col-md-12 col-xs-12">
								
								<?php if(has_post_thumbnail()){ ?>
									<a href="<?php the_permalink(); ?>">

										<?php if(has_post_thumbnail()): ?>
										<?php $defalt_arg =array('class' => "img-responsive"); ?>
										<?php the_post_thumbnail('', $defalt_arg); ?>
										<?php endif; ?>

									</a>
								<?php } else { 
										$img =get_template_directory_uri().'/images/overlay.png';

										echo '<img src="'. esc_url($img) .'"class="overlay-image">';}
								?>
										
								
								<p class="content-paragraph">
									<?php
										the_excerpt();
									?>
								</p>
								<?php wp_link_pages( array( 'before' => '<div class="link">' . __( 'Pages:', 'lawblog' ), 'after' => '</div>' ) ); ?>
								<div class="category-tag-div">
									<?php $cat_list = get_the_category_list();
									if(!empty($cat_list)) { ?>
										<i class="fa fa-folder meta-fa-icons"></i>
											<?php if(!empty($cat_list)) { ?>
												<?php the_category(', '); ?>
										<?php }
									} ?>
									<br>
									<?php the_tags( '<i class="fa fa-tag" aria-hidden="true"></i> ', ', ', '<br />' ); ?>
								</div>
							</div>
					</div>
				</article>
			</div>
		</div>
	</div>
</div>