<div class="footer-top pt_70 pb_25">
  <div class="footer-container container">
    <div class="footer-row row">
      <div class="footer-position col-lg-3 col-md-3 col-sm-6 col-xs-12 mb_40 mobnone"> </div>
      <div class="footer-position col-lg-3 col-md-3 col-sm-6 col-xs-12 mb_40">
        <aside id="nav_menu-2" class="widget widget_nav_menu">
          <div class="widget-title">
            <h3>Infomation</h3>
          </div>
          <div class="menu-information-container">
            <ul class="menu">
              <?php
            
              foreach ($data['information'] as  $value) {
               ?>
              <li><a  href="<?php echo base_url.$value['keyword']; ?>" class=""><?php echo $value['title']; ?></a></li>
              <?php } ?>
            </ul>
          </div>
        </aside>
      </div>
      <div class="footer-position col-lg-3 col-md-3 col-sm-6 col-xs-12 mb_40">
        <aside id="nav_menu-4" class="widget widget_nav_menu">
          <div class="widget-title">
            <h3>Need help</h3>
          </div>
          <div class="menu-need-help-container">
            <ul class="menu">
               <?php 
            
              foreach ($data['help'] as  $value) {
               ?>
              <li><a  href="<?php echo base_url.$value['keyword']; ?>" class=""><?php echo $value['title']; ?></a></li>
              <?php } ?>
              
            </ul>
          </div>
        </aside>
      </div>
      <div class="footer-position col-lg-3 col-md-3 col-sm-6 col-xs-12 mb_40">
        <aside id="jms-instagram-2" class="widget jms-instagram">
          <div class="menu-need-help-container">
            <ul class="menu">
            	 <li><div class="footer-block"> Copyright 2019. All rights reserved. Design by <a href="https://www.interminddigital.com/" target="_blank">Intermind</a></div></li>
                 <li>
                    <div class="footer-block widget-bottom">
                      <aside id="social-network-2" class="widget widget_social_network">
                        <ul class="social-network">
                            <?php 
            
                            foreach ($data['social'] as  $value) {
                             ?>
                            <li><a href="<?php echo $value['url'] ?>" target="_blank"><span class="fab <?php echo $value['icon'] ?>"></span></a></li>
                            <?php } ?>
                          
                        <!--   <li><a href="#" class="twitter"><span class="fab fa-twitter"></span></a></li>
                          <li><a href="#" class="gplus"><span class="fab fa-google-plus-g"></span></a></li>
                          <li><a href="#" class="instagram"><span class="fab fa-instagram"></span></a></li>
                          <li><a href="#" class="pinterest"><span class="fab fa-pinterest"></span></a></li> -->
                        </ul>
                      </aside>
                    </div>
                 </li>
            </ul>
          </div>  
        </aside>
      </div>
    </div>
  </div>
</div>