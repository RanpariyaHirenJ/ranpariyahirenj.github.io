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
.formElement input[type="text"] + label, .formElement input[type="file"] + label, .formElement input[type="password"] + label, .formElement select + label {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    min-width: 156px !important;
    line-height: 40px;
    color: white;
    border-radius: 3px 0 0 3px;
    padding: 0 15px;
    background: #6d6463;
    transform: translateZ(0) translateX(0);
    transition: all 0.3s ease-in;
    transition-delay: 0.2s;
}
</style>
</head>
<body>
<?php include("shared/TopMenu.php"); ?>
<form action="<?php echo $data['action']['form-action'] ?>" method="post" id="category-form" enctype="multipart/form-data">

<div class="formContainer" id="categoryForm">
  <div class="formTitle"><?php echo $data['action']['title'] ?> Category</div>
  <div class="formElement">
    <div class="response">
    <input type="text" id="name" name="name" value="<?php echo $data['list']['name'] ?>" validation="text" title="category"  placeholder="Enter Category Name" >
    <label for="name">Category Name</label>
    </div>
  </div>
  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="seo" name="seo" value="<?php echo $data['list']['keyword'] ?>" validation="text" title="Slug" placeholder="Slug">
    <label for="seo">SEO URL</label>
  </div>
  </div>
  <div class="clear"></div>
   <div class="formElement">
    <div class="response">
    <input type="file" style="display: none" id="banner" validation="file" title="Banner" name="filename" placeholder="Category Banner">
    <label for="banner">Category Banner</label>
    <span style="margin-left: 29%;padding: 7px;height: 39px;position: absolute;cursor: pointer;color: #6d6463" onclick="$('#banner').click()"><?php echo $data['list']['banner']?$data['list']['banner']:"Choose only .jpeg, .jpg format image file" ?></span>
    <?php 
    if($data['list']['banner']!=""){
     ?> 
     <input type="hidden" name="text_banner" value="<?php echo $data['list']['banner']; ?>">
    <?php } ?>
  </div>
  </div>
  <div class="clear"></div>
   <div class="formElement label">
     <div class="response">
    <input type="text" id="meta_title" name="meta_title" value="<?php echo $data['list']['meta_title'] ?>" validation="text" title="Meta Title" placeholder="Meta Title">
    <label for="meta_title">Meta Title</label>
  </div>
  </div>
  <div class="clear"></div>
   <div class="formElement">
     <div class="response">
    <input type="text" id="meta_keyword" name="meta_keyword" validation="text" value="<?php echo $data['list']['meta_keyword'] ?>" title="keyword" placeholder="Meta Keyword">
    <label for="keyword">Meta Keywords</label>
  </div>
  </div>
  <div class="clear"></div>
   <!-- <div class="formElement">
     <div class="response">
    <input type="text" id="description" name="description" validation="text" title="Description" placeholder="Description">
    <label for="description">Meta Description</label>
  </div>
  </div> -->
  <div class="formElement">
    <label class="caption" for="comment_text">Meta Description</label>
    <textarea placeholder="This is an for meta description" rows="20" name="description" validation="text" title="description" id="description" cols="40" class="ui-autocomplete-input"><?php echo $data['list']['description'] ?></textarea>
  </div>
 
  <div class="clear"></div>
  <hr>

  <div class="formElement">
    <small style="color: red;display: none" id="choose-category"><i>Choose one field "Parent category" or "Top Category". </i></small>
    <div class="response">
        <input type="hidden" name="parent_id" id="parent_id" validation="choose-one"  value="<?php echo $data['list']['parent_id']?$data['list']['parent_id']:0; ?>">
    <input type="text" id="path"  class="choose-category" name="path" title="Parent" value="<?php echo $data['list']['top']==0?$data['list']['path']:''; ?>"  placeholder="Type Category Name" >
    <label for="name">Parent Category</label>
  
    
    </div>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <div class="response">
      <div class="label">Check Box</div>
      <ul>
        <li style="    margin-top: -5px;">
          <input type="checkbox" id="top" value="1" validation="choose-one" <?php echo $data['list']['top']?'checked="checked"':'' ?> name="top">
          <label for="top">Top Category</label>
        </li>
       
      </ul>
    </div>
  </div>
   <div class="clear"></div>
  <div class="formElement">
    <div class="response">
      <div class="label">Cart Type</div>
      <ul>
        <li style="    margin-top: -5px;">
          <input type="radio" id="enquiry" value="0"  <?php echo $data['list']['cart_type']==0?'checked="checked"':'' ?> name="cart_type" >
          <label for="enquiry">Add to Enquiry</label>
          <input type="radio" id="cart" value="1"  <?php echo $data['list']['cart_type']?'checked="checked"':'' ?> name="cart_type" >
          <label for="cart">Add to Cart</label>
        </li>
       
      </ul>
    </div>
  </div>
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="category-form">Save</a></li>
        <li><a href="category<?php echo $_SESSION['page']>1?'/'.$_SESSION['page']:''?>" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</form>
</body>
</html>
