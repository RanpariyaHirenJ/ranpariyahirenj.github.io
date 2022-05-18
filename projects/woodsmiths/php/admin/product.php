<?php 
$pageTitle = "Product";

?>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("shared/header.php"); ?>
</head>
<body>
<?php include("shared/TopMenu.php"); ?>

<div class="searchContainer">
  
  <button class="collapsible ">Search</button>
  <div class="content" >
    <form method="post" action="product" id="search-form">
  <table width="100%" border="0" cellspacing="5">
      <tr>
        <td style="    width: 25%;"><label>Product Name</label>
          <div>
            <input name="name" value="<?php echo $_SESSION['search_cond_for_product']['name']; ?>" type="text">
          </div></td>
        <td style="    width: 25%;"><label>Category Name</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_product']['category_id']; ?>" name="category_id">
              <option value="0">All</option>
            <?php 
            foreach ($data['categories'] as $value) {
            ?>
            <option value="<?php echo $value['category_id']; ?>"><?php echo $value['name']; ?></option>
            <?php } ?>
           
          </select>
         
          </div></td>
        <td style="    width: 25%;"><label>Status</label>
          <div>
            <select id="drpdown" data-selected="<?php echo $_SESSION['search_cond_for_product']['status']; ?>" name="status">
            <option value="2">All</option>
            <option value="1">Enabled</option>
            <option value="0">Disabled</option>

          </select>
          </div></td>
          <td style="    width: 25%;"><label>Form Date</label>
          <div>
            <input name="fromDate" id="fromDate" value="<?php echo $_SESSION['search_cond_for_product']['fromDate']; ?>" autocomplete="off" type="text">
          </div></td>
      </tr>
      <tr>
       
      

      <td style="    width: 25%;"><label>To Date</label>
          <div>
            <input name="toDate" id="toDate" value="<?php echo $_SESSION['search_cond_for_product']['toDate']; ?>" autocomplete="off"  type="text">
          </div></td>
      </tr>
    </table>
    <div class="buttonContainer" style="position:relative;width:100%;">
      <div class="float_center">
        <ul class="child">
          <li><a href="javascript:void(0)" onclick="$('#search-form').submit()" title="Button push" class="button btnPush btnBlueGreen">Search</a></li>
          <li><a href="ManageProduct/sessionReset" title="Button push" class="button btnPush btnBlueGreen">Reset</a></li>
        </ul>
      </div>
    </div>
    </form>
  </div> 
  
</div>

<form method="post" action="delete-product"  id="table-form">

<div class="gridContainer">
  <div class="formTitle">All Product</div>
  <table class="w3-table-all w3-hoverable">
    <thead>
      <tr class="w3-light-grey">
        <th>Sr. No.</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Manage Product Image</th>
        <th>Status</th>
       
        <th>Select</th>
      </tr>
    </thead>
    <tbody>
      <?php
      if(count($data['products']) > 0){
        if($_SESSION['page'] > 1){
          $i = (($_SESSION['page']-1)*10)+1;
        }else{
          $i = 1;
        }
        
        foreach ($data['products'] as  $value) {
          
          $path = ManageProduct::format_uri($value['category_name']);
          $path = str_replace('-gt-', '/', $path);
          $value['image'] = $value['image']?IMAGE_PATH.$path.'/small-'.$value['image']:IMAGE_PATH.'default.png'; 
       ?>
       <tr>
        <td><?php echo $i++; ?></td>
        <td><img width="50" src="<?php echo $value['image']; ?>"></td>
        <td><a href="edit-product/<?php echo $value['product_id'] ?>" class="editLink" title="Edit"><?php echo $value['name'] ?></a></td>
        <td><?php echo $value['category_name'] ?></td>
        
        <td>  &#36; <?php echo $value['price']; ?></td>
        <td><a href="javascript:void(0)" data-id="<?php echo $value['product_id']; ?>" class="product-image">Mange Slideshow(<?php echo $value['image_count']; ?>)</a></td>
     
        <td><a href="product-toggle-status/<?php echo $value['product_id'] ?>/<?php echo $value['status']?>" ><i class="fa fa-toggle-<?php echo $value['status']?'on':'off'; ?>" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
      
        <td><input type="checkbox" name="selected[]" id="sel<?php echo $value['product_id']; ?>" value="<?php echo $value['product_id']; ?>"><label for="sel<?php echo $value['product_id']; ?>">&nbsp;</label></td>
        
      </tr>
      <?php } ?>
       <!-- <tr><td colspan="9"><?php echo $data['pagination']; ?></td>   -->
      <?php }?>
    </tbody>
    
   
  </table>
</div>
<div class="buttonContainer botCont">
   <div class="float_center">
    <?php echo $data['pagination']; ?> 
  </div>
  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
      <li><a href="add-product" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <li><a href="javascript:void(0)" title="Button push" id="delete-record" class="button btnPush btnBlueGreen">Delete</a></li>
    </ul>
  </div>
</div>
</form>

<form action="product-image" id="product-image" method="post">
  <input type="hidden" name="product_id">
</form>
</body>
</html>
<script type="text/javascript">
  $(".product-image").click(function(){
    $('input[name="product_id"]').val($(this).data('id'));
    $("#product-image").submit();
  });

  if("<?php echo count($_SESSION['search_cond_for_product']) ?>" > 0){
  $(".collapsible").addClass('active');
  $(".collapsible").next().css('max-height','192px');

}
</script>
