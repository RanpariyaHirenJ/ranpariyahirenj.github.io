 <div class="header-lower">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="header-lawer-content clearfix">
              <div class="header-lower-left">
                <div class="logo"> <a href="<?php echo base_url; ?>"> <img src="images/logo.png" alt="Awesome Logo"> </a> </div>
                <div class="clear"></div>
              </div>
              <div class="mobile-nav-icon">
                <button class="menu-icon mobil-icon-toggle"> <span>toggle menu</span> </button>
              </div>
              <div class="header-lower-right animated clearfix">
                <nav class="main-menu clearfix">
                  <div class="navbar-collapse clearfix">
                    <ul class="navigation clearfix">
                      <?php 
                      foreach ($data['menu'] as $value) {
                       
                       ?>
                      <li class="dropdown"><a href="<?php echo $value['href']; ?>"><?php echo $value['name'] ?><?php if(count($value['children'])){ ?> <i class="fal fa-angle-down"></i><?php } ?></a> <span class="mobileDropDown"><i class="fa fa-plus-square"></i></span>
                           <?php 
                          if($value['children']){
                                echo '<ul class="rightMenu">';
                          foreach ($value['children'] as $children) {
                           
                           ?>
                          
                            <li>
                              <a href="<?php echo $children['href']; ?>"><?php echo $children['name'] ?></a>
                              <?php 
                              if($children['sub_children']){
                                echo '<ul class="rightMenu">';
                              foreach ($children['sub_children'] as $child) {
                               
                               ?>
                              <li><a href="<?php echo $child['href']; ?>"><?php echo $child['name'] ?></a></li>
                              <?php }
                              echo '</ul>';
                             } ?>
                            </li>
                          
                        <?php }
                        echo "</ul>";
                         }?>
                       <!--  <ul class="rightMenu">
                          <li> <a href="slab-tables.html">Slab Tables</a> </li>
                          <li> <a href="communal-chef-tables.html">Communal / Chef Tables</a> </li>
                          <li> <a href="dining-tables.html">Dining Tables</a> </li>
                          <li> <a href="occasional-tables.html">Occasional Tables</a> </li>
                          <li> <a href="game-tables.html">Game Tables</a> </li>
                          <li> <a href="conference-tables.html">Conference Tables</a> </li>
                        </ul> -->
                      </li>
                      <?php } ?>
                      <li>
                        <div class="menuIcons"> 

                            <a href="search"><i class="fal fa-search"></i></a> 
                            <a href="enquiry"><i class="fal fa-envelope-open-text"><span class="enquiry-count cart-count pa"><?php echo count($data['account_details']['enquiry']); ?></span></i></a> 
                            <a href="cart" ><i class="fal fa-cart-plus"><span class="acart-count cart-count pa"><?php echo count($data['account_details']['cart']); ?></span></i></a>
                           
                        </div>
                      </li>
                        <?php 
                            if($_SESSION['customer_id']<=0){
                            ?>
                       <li class="dropdown userdetails"><a href="login"> Login / Register</a></li>
                       <?php }else{ ?>
                         <li class="dropdown userdetails"><a href="javascript:void(0);">Hi <?php echo $_SESSION['customer_name'] ?> <i class="fal fa-angle-down"></i></a> <span class="mobileDropDown"><i class="fa fa-plus-square"></i></span>
                              <ul class="rightMenu">
                                <li> <a href="my-account">My Account</a> </li>
                                <li> <a href="change-password">Change Password</a> </li>
                                <li> <a href="wishlist" class="wishlist-count">Wishlist (<span><?php echo count($data['account_details']['wishlist']); ?></span>)</a> </li>
                                <li> <a href="order-history">Order History (<span><?php echo count($data['account_details']['orders']); ?></span>)</a> </li>
                                <li> <a href="logout">Logout</a> </li>
                              </ul>
                            </li>
                          <?php } ?>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>