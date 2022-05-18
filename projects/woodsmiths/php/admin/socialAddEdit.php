<?php 
$pageTitle = "Add/Edit Social";
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
<form action="<?php echo $data['action']['form-action'] ?>" method="post" id="social-form" enctype="multipart/form-data">

<div class="formContainer" id="categoryForm">
  <div class="formTitle"><?php echo $data['action']['title'] ?> Social Link</div>
  <div class="formElement">
    <div class="response">
    <input type="text" id="social" name="social" value="<?php echo $data['list']['social_name'] ?>" validation="text" title="Social Name" placeholder="Enter Social Name" >
    <label for="name">Social Name</label>
    </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="url" name="url" value="<?php echo $data['list']['url'] ?>" validation="text" title="URL" placeholder="Url">
    <label for="seo">URL</label>
  </div>
  </div>

  <div class="clear"></div>
  <div class="formElement">
     <div class="response">
    <input type="text" id="icon" name="icon" value="<?php echo $data['list']['icon'] ?>" validation="text" title="icon" placeholder="Icon">
    <label for="seo">Icon Code</label>
  </div>
  </div>

  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="social-form">Save</a></li>
        <li><a href="social<?php echo $_SESSION['page']>1?'/'.$_SESSION['page']:''?>" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</form>
</body>
</html>
