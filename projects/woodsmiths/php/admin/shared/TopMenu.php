<div class="topContainer">
  <div class="logo" style="background-color: white;"><img src="<?php echo LOGO ?>"></div>
 
  <div class="welcomeUser">
    <label>Welcome <?php echo $_SESSION["login_name"] ?></label> | <a href="./Login/PerformLogout">Logout</a><br/>
    <label class="date"><?php echo date('D d M Y') ?></label>
  </div>
</div>
 <div class="cm-e-menu" style="min-width:450px">
    <ul>
      <li class="topmenu"> <a>Catalog</a>
        <ul class="submenu">
          <li><a href="banner">Home Page Banner</a></li>
          <li><a href="category">Manage Product Category</a></li>
          <li><a href="product">Manage Product</a></li>
         
          <li class="divider"></li>
        </ul>
      </li>
      <li class="topmenu"> <a>Orders</a>
        <ul class="submenu">
          <li><a href="order-list">Manage Orders</a></li>
          <li><a href="enquiry">Manage Project Enquiry</a></li>
         
        </ul>
      </li>
      <li class="topmenu"> <a>Footer</a>
        <ul class="submenu">
           <li><a href="information">Information</a></li>
          <li><a href="social">Social Links</a></li>
         
        </ul>
      </li>          
    </ul>
  </div>