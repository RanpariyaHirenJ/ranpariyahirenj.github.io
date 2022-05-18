<?php 
$pageTitle = "Add/Edit Category";
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("shared/header.php"); ?>
<style type="text/css">
  .formElement {
    margin-top: 18px;
}
.btn-danger {
    color: #fff;
    background-color: #e3503e;
    border-color: #dd3520;
}
.btn-primary {
    color: #fff;
    background-color: #1e91cf;
    border-color: #197bb0;
}
</style>
</head>
<body>
<?php include("shared/TopMenu.php"); ?>
<form action="upload-product-image" method="post" id="product-image-form" enctype="multipart/form-data">

<div class="formContainer" id="categoryForm">
  <div class="formTitle"><?php echo $data['action']['title'] ?> Product Images</div>

 <div class="table-responsive">
<table id="images" class="w3-table-all w3-hoverable">
<thead>
<tr>
<td class="text-left">Additional Images</td>
<td class="text-right">Sort Order</td>
<td></td>
</tr>
</thead>
<tbody>

<?php 
  $i = 0;
  if(count($data['product-image']) > 0){ 
   
    foreach ($data['product-image'] as $value) {

      $image = $value['image']?IMAGE_PATH.$data['path'].'/'.$value['image']:IMAGE_PATH.'default.png';  
  ?>
  <tr id="image-row<?php echo $i; ?>">
     <td class="text-left"><a href="JavaScript:void(0)" onclick="$('#input-image<?php echo $i; ?>').click();" id="thumb-image<?php echo $i; ?>" data-toggle="image" class="img-thumbnail"><img width="100" src="<?php echo $image; ?>" alt="" title=""></a>  
      <input type="file" style="display:none" title="Additional Image" accept="image/jpeg,image/jpg" validation="product-image" data-value="<?php echo $image; ?>" name="product_image[<?php echo $i; ?>][image]" value="" id="input-image<?php echo $i; ?>">
      <input type="hidden" name="product_image[<?php echo $i; ?>][text_image]" value="<?php echo $value['image']; ?>">
     </td>
     <td class="text-right">
        <input type="text" name="product_image[<?php echo $i; ?>][sort_order]" value="<?php echo $value['sort_order']; ?>" validation="number" title="Sort Order" placeholder="Sort Order" class="form-control">
        <p style="color:red"><small><i>Image upload only .jpg, .jpeg format and dimension size (600x720)   </i></small></p>
     </td>
     <td class="text-left"><button type="button"  data-tr-id="image-row<?php echo $i; ?>" data-id="<?php echo $value['product_image_id']; ?>" data-toggle="tooltip" title="Remove" class="btn btn-danger delete-image-row"><i class="fa fa-minus-circle"></i></button></td>
  </tr>

<?php $i++; } } ?>
</tbody>
<tfoot>
<tr>
<td colspan="2"></td>
<td class="text-left"><button type="button"  data-row="<?php echo $i; ?>" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Add Image" id="add-row"><i class="fa fa-plus-circle"></i></button></td>
</tr>
</tfoot>
</table>
</div>
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="product-image-form">Save</a></li>
        <li><a href="product" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</form>
</body>
</html>
