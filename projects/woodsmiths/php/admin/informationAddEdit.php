<?php 
$pageTitle = "Add/Edit Information";
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
<form action="<?php echo $data['action']['form-action'] ?>" method="post" id="information-form" enctype="multipart/form-data">

<div class="formContainer" id="categoryForm">
  <div class="formTitle"><?php echo $data['action']['title'] ?> Information</div>
  <div class="formElement">
    <div class="response">
    <input type="text" id="title" name="title" value="<?php echo $data['list']['title'] ?>" validation="text" title="title"  placeholder="Enter title Name" >
    <label for="name">Title Name</label>
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
    <label class="caption" for="comment_text">Description</label>
    <textarea placeholder="This is an for short description" rows="20" class="ckeditor" validation="textarea" name="description"  title="short_description" id="short_description" cols="40" class="ui-autocomplete-input"><?php echo htmlentities($data['list']['description']) ?></textarea>
  </div>
  <div class="clear"></div>
    <div class="formElement">
    <div class="response">
    <input type="text" id="sort_order" name="sort_order" value="<?php echo $data['list']['sort_order'] ?>" validation="text" title="sort order"  placeholder="Sort Order" >
    <label for="name">Sort Order</label>
    </div>
  </div>
    <div class="clear"></div>
   <div class="formElement">
    <div class="response">
      <div class="label">Link Type</div>
      <ul>
        <li style="    margin-top: -5px;">
          <input type="radio" id="information" value="0"  <?php echo $data['list']['link_type']==0?'checked="checked"':'' ?> name="link_type" >
          <label for="information">Information</label>
          <input type="radio" id="need" value="1"  <?php echo $data['list']['link_type']?'checked="checked"':'' ?> name="link_type" >
          <label for="need">Need Help</label>
        </li>
       
      </ul>
    </div>
  </div>
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="information-form">Save</a></li>
        <li><a href="information<?php echo $_SESSION['page']>1?'/'.$_SESSION['page']:''?>" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</form>
</body>
</html>
