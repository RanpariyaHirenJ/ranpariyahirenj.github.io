<?php 
$pageTitle = "Category";

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
 <!--  <button class="collapsible">Search</button>
  <div class="content">
    <table width="100%" border="0" cellspacing="5">
      <tr>
        <td><label>Label</label>
          <div>
            <input name="" type="text">
          </div></td>
        <td><label>Label</label>
          <div>
            <input name="" type="text">
          </div></td>
        <td><label>Label</label>
          <div>
            <input name="" type="text">
          </div></td>
        <td><label>Label</label>
          <div>
            <input name="" type="text">
          </div></td>
      </tr>
      <tr>
        <td><label>Label</label>
          <div>
            <select>
              <option>Option</option>
              <option>Option</option>
              <option>Option</option>
              <option>Option</option>
            </select>
          </div></td>
        <td><label>Checkbox Label</label>
          <div class="response">
            <ul>
              <li>
                <input type="checkbox" id="test1" >
                <label for="test1">Apple</label>
              </li>
              <li>
                <input type="checkbox" id="test2" >
                <label for="test2">Mango</label>
              </li>
              <li>
                <input type="checkbox" id="test3" >
                <label for="test3">Orange</label>
              </li>
            </ul>
          </div></td>
        <td><label>Radio Button Label</label>
          <div class="response">
            <ul>
              <li>
                <input name="q" id="option1" type="radio" value="Option 1">
                <label for="option1">Never</label>
              </li>
              <li>
                <input name="q" id="option2" type="radio" value="Option 2">
                <label for="option2">Option 2</label>
              </li>
              <li>
                <input name="q" id="option3" type="radio" value="Option 3">
                <label for="option3">Option 3</label>
              </li>
            </ul>
          </div></td>
        <td><label>Date Picker</label>
          <div>
            <input name="fromDate" id="fromDate" isdate="yes" type="text">
          </div></td>
      </tr>
    </table>
    <div class="buttonContainer" style="position:relative;width:100%;">
      <div class="float_center">
        <ul class="child">
          <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Search</a></li>
          <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Reset</a></li>
        </ul>
      </div>
    </div>
  </div> -->
</div>

<form method="post" action="delete-category"  id="table-form">

<div class="gridContainer">
  <div class="formTitle">All Categories</div>
  <table class="w3-table-all w3-hoverable">
    <thead>
      <tr class="w3-light-grey">
        <th>Sr. No.</th>
        <th>Category Name</th>
        <th>Product Count</th>
        <th>Image</th>
        <!-- <th>Sort</th> -->
        <th>Status</th>
        <th>Edit</th>
        <th>Select</th>
      </tr>
    </thead>
    <tbody>
      <?php 
      if(count($data['categories']) > 0){
        if($_SESSION['page'] > 1){
          $i = (($_SESSION['page']-1)*10)+1;
        }else{
          $i = 1;
        }
        foreach ($data['categories'] as  $value) {
          $value['banner'] = $value['banner']?IMAGE_PATH.$value['path'].'/small-'.$value['banner']:IMAGE_PATH.'default.png'; 
       ?>
       <tr>
        <td><?php echo $i++; ?></td>
        <td><?php echo $value['name'] ?></td>
        <td><a href="javascript:void(0)" class="get-product" data-id="<?php echo $value['category_id']; ?>"><?php echo $value['product_count']; ?></a></td>
        <td><img width="50" src="<?php echo $value['banner']; ?>"></td>

        <td><a href="category-toggle-status/<?php echo $value['category_id'] ?>/<?php echo $value['status']?>" ><i class="fa fa-toggle-<?php echo $value['status']?'on':'off'; ?>" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
        <td><a href="edit-category/<?php echo $value['category_id'] ?>" class="editLink" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
        <td><input type="checkbox" name="selected[]" id="sel<?php echo $value['category_id']; ?>" value="<?php echo $value['category_id']; ?>"><label for="sel<?php echo $value['category_id']; ?>">&nbsp;</label></td>
        
      </tr>
      <?php } ?>
      <!-- <tr><td colspan="6"><?php echo $data['pagination']; ?></td> -->
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
      <li><a href="add-category" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <li><a href="javascript:void(0)" title="Button push" id="delete-record" class="button btnPush btnBlueGreen">Delete</a></li>
    </ul>
  </div>
</div>
</form>

<form action="product" id="products" method="post">
  <input type="hidden" name="category_id">
</form>
</body>
</html>
<script type="text/javascript">
  $(".get-product").click(function(){
    $('input[name="category_id"]').val($(this).data('id'));
    $("#products").submit();
  });
</script>
