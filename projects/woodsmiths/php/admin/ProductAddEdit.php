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
span{
      font-size: 12px;
}
label{
      font-size: 14px;
}
</style>
</head>
<body>
<?php include("shared/TopMenu.php"); ?>
<form action="<?php echo $data['action']['form-action'] ?>" method="post" id="product-form" enctype="multipart/form-data">

<div class="formContainer" id="productForm">
  <div class="formTitle"><?php echo $data['action']['title'] ?> Product</div>
  <div class="formElement">
    <div class="response">
    <input type="text" id="name" name="name" value="<?php echo $data['list']['name'] ?>" validation="text" title="name"  placeholder="" >
    <label for="name">Product Name</label>
    </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="price" name="price" value="<?php echo $data['list']['price'] ?>" validation="number" data-required="false" title="price" placeholder="">
    <label for="price">Price </label>
  </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="slug" name="slug" value="<?php echo $data['list']['slug'] ?>" validation="text" title="Slug" placeholder="">
    <label for="slug">Slug Name </label>
  </div>
  </div>

    <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="dimensions" name="dimensions" value="<?php echo $data['list']['dimensions'] ?>" validation="text" title="Dimensions" placeholder="">
    <label for="dimensions">Dimensions </label>
  </div>
  </div>


  <div class="clear"></div>
 <div class="formElement">
    <label class="caption" for="comment_text">Short Description</label>
    <textarea placeholder="This is an for short description" rows="20" class="ckeditor" name="short_description"  title="short_description" id="short_description" cols="40" class="ui-autocomplete-input"><?php echo $data['list']['short_description'] ?></textarea>
  </div>
   

  <div class="clear"></div>
  <div class="formElement">
    <label class="caption" for="comment_text">Product Description</label>
    <textarea placeholder="" rows="20" name="description" class="ckeditor" validation="text" title="description" id="description" cols="40" class="ui-autocomplete-input"><?php echo $data['list']['description'] ?></textarea>
  </div>



  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="meta_title" name="meta_title" value="<?php echo $data['list']['meta_title'] ?>" validation="text" title="Meta title" placeholder="">
    <label for="meta_title">Meta Title</label>
  </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="tag" name="tag" value="<?php echo $data['list']['tag'] ?>"  title="Meta tag" placeholder="">
    <label for="tag">Tag</label>
  </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="meta_keyword" name="meta_keyword" value="<?php echo $data['list']['meta_keyword'] ?>"  title="Meta keyword" placeholder="">
    <label for="meta_keyword">Meta Keyword</label>
  </div>
  </div>


  <hr>

  <div class="formElement">
    <div class="response">
        <input type="hidden" name="parent_id" id="parent_id" validation="text"  value="<?php echo $data['list']['category_id']; ?>">
    <input type="text" id="path"  class="choose-category" name="path" title="Parent" value="<?php echo $data['list']['path']; ?>"  placeholder="Type Category Name" >
    <label for="parent_id">Select Category</label>
    </div>
  </div>

  <div class="clear"></div>
   <div class="formElement">
    <div class="response">
    <input type="file" style="display: none" id="image" validation="file" data-value="<?php echo $data['list']['image']; ?>" data-required="true" title="Image" name="filename" accept="image/jpeg,image/jpg" placeholder="Category Banner">
    <label for="image">Main Image</label>
    <span style="margin-left: 29%;padding: 7px;height: 39px;position: absolute;cursor: pointer;color: #6d6463" onclick="$('#image').click()"><?php echo $data['list']['image']?$data['list']['image']:"please upload only .jpeg, .jpg file format(600 x 720). " ?></span>
    <?php
    if($data['list']['image']!=""){
     ?>
     <input type="hidden" name="text_filename" value="<?php echo $data['list']['image']; ?>">
    <?php } ?>
  </div>
  </div>

  <div class="clear"></div>
   <div class="formElement">
    <div class="response">
    <input type="file" style="display: none" id="pdf" validation="file" data-value="<?php echo $data['list']['pdf_file']; ?>" data-required="false"  title="PDF" name="pdf_file" accept="application/pdf" placeholder="">
    <label for="pdf">PDF</label>
    <span style="margin-left: 29%;padding: 7px;height: 39px;position: absolute;cursor: pointer;color: #6d6463" onclick="$('#pdf').click()"><?php echo $data['list']['pdf_file']?$data['list']['pdf_file']:"please upload only .pdf file format. " ?></span>
    <?php 
    if($data['list']['pdf_file']!=""){
     ?> 
     <input type="hidden" name="text_pdf_file" value="<?php echo $data['list']['pdf_file']; ?>">
    <?php } ?>
  </div>
  </div>

    <div class="clear"></div>
   <div class="formElement">
    <div class="response">
    <input type="file" style="display: none" id="sketch" validation="file" data-required="false" data-value="<?php echo $data['list']['sketch_file']; ?>"  title="Sketch" name="sketch_file"  placeholder="">
    <label for="sketch">Sketch</label>
    <span style="margin-left: 29%;padding: 7px;height: 39px;position: absolute;cursor: pointer;color: #6d6463" onclick="$('#sketch').click()"><?php echo $data['list']['sketch_file']?$data['list']['sketch_file']:"please upload only .sketch file format." ?></span>
    <?php 
    if($data['list']['sketch_file']!=""){
     ?> 
     <input type="hidden" name="text_sketch_file" value="<?php echo $data['list']['sketch_file']; ?>">
    <?php } ?>
  </div>
  </div>

    <div class="clear"></div>
   <div class="formElement">
    <div class="response">
    <input type="file" style="display: none" id="revit" validation="file" data-required="false" data-value="<?php echo $data['list']['revit_file']; ?>" title="Banner" name="revit_file"  placeholder="">
    <label for="revit">Revit</label>
    <span style="margin-left: 29%;padding: 7px;height: 39px;position: absolute;cursor: pointer;color: #6d6463" onclick="$('#revit').click()"><?php echo $data['list']['revit_file']?$data['list']['revit_file']:"please upload only .revit file format. " ?></span>
    <?php 
    if($data['list']['revit_file']!=""){
     ?> 
     <input type="hidden" name="text_revit_file" value="<?php echo $data['list']['revit_file']; ?>">
    <?php } ?>
  </div>
  </div>

  <div class="clear"></div>

  <hr>


<!--   <div class="clear"></div>
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
  </div> -->
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="product-form">Save</a></li>
        <li><a href="product<?php echo $_SESSION['page']>1?'/'.$_SESSION['page']:''?>" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</form>
</body>
</html>
