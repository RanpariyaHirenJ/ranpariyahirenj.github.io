<?php 
$pageTitle = "Banner List";

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
  <!-- <button class="collapsible">Search</button> -->
 <!--  <div class="content">
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
<div class="gridContainer">
  <div class="formTitle">All Banners</div>
  <table class="w3-table-all w3-hoverable">
    <thead>
      <tr class="w3-light-grey">
        <th>Banner Name</th>
        <th>Image Size</th>
        <th>Status</th>
        <th>Edit</th>
      </tr>
    </thead>
    <?php 
    if(count($data['banner_list']) > 0){
    foreach ($data['banner_list'] as $value) {
     
     ?>
    <tr>
      <td><?php echo ucwords(strtolower($value['name'])); ?></td>
      <td><?php echo $value['height']; ?> x <?php echo $value['width']; ?></td>
   
       <td><a href="update-banner-status/<?php echo $value['banner_id'] ?>/<?php echo $value['status']?>" ><i class="fa fa-toggle-<?php echo $value['status']?'on':'off'; ?>" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
       <td><a href="edit-banner/<?php echo $value['banner_id']; ?>" class="editLink" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true" style="font-size:25px;color:grey;"></i></a></td>
    </tr>
  <?php } }else{ ?>
    <tr><td colspan="4">Record not found.</td></tr>
  <?php } ?>
  </table>
</div>
<div class="buttonContainer botCont">
  <div class="float_center">
    <?php echo $data['pagination']; ?> 
  </div>
  <div class="clear"></div>

  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
      <li><a href="add-banner" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Delete</a></li>
    </ul>
  </div>
</div>
</body>
</html>
