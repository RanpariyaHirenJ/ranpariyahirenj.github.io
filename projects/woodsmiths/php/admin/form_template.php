<?php 
$pageTitle = "Add/Edit Doctor";
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("/shared/header.php"); ?>
</head>
<body>
<div class="topContainer">
  <div class="logo"><img src="intermind-logo.png"></div>
</div>  
<div class="formContainer" id="loginForm">
  <div class="formTitle">Login</div>
  <div class="formElement">
    <input type="text" id="userid" name="userid" placeholder="Enter your user ID" isdate="yes">
    <label for="userid">Login ID</label>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <input type="password" id="password" name="password" placeholder="Enter your password">
    <label for="password">Password</label>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <select id="drpdown">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
    </select>
    <label for="drpdown">Dropdown</label>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <div class="response">
      <div class="label">Option</div>
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
    </div>
  </div>
  <div class="clear"></div>
  <div class="formElement">
    <div class="response">
      <div class="label">Check Box</div>
      <ul>
        <li>
          	<input type="checkbox" id="test1" checked>
    		<label for="test1">Apple</label>
        </li>
        <li>
          	<input type="checkbox" id="test2" checked>
    		<label for="test2">Mango</label>
        </li>
        <li>
          	<input type="checkbox" id="test3" checked>
    		<label for="test3">Orange</label>
        </li>
      </ul>
    </div>
  </div>
   <div class="formElement">
    <label class="caption" for="comment_text">Text Area</label>
    <textarea placeholder="This is an awesome comment box" rows="20" name="comment" id="comment_text" cols="40" class="ui-autocomplete-input"></textarea>
  </div>
  <div class="clear"></div>
  <div class="buttonContainer">
    <div class="float_center">
      <ul class="child">
        <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Save</a></li>
        <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Cancel</a></li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</div>
</body>
</html>
