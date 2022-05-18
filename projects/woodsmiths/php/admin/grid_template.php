<?php 
$pageTitle = "Grid Template";

?>

<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include("/shared/header.php"); ?>
</head>
<body>
<?php include("/shared/TopMenu.php"); ?>

<div class="searchContainer">
  <button class="collapsible">Search</button>
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
  </div>
</div>
<div class="gridContainer">
  <div class="formTitle">Here goes the page title</div>
  <table class="w3-table-all w3-hoverable">
    <thead>
      <tr class="w3-light-grey">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Column</th>
        <th>Column</th>
        <th>Column</th>
        <th>Column</th>
        <th>Points</th>
      </tr>
    </thead>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>67</td>
    </tr>
  </table>
</div>
<div class="buttonContainer botCont">
  <div class="float_center">
    <div class="pagination child"> <a href="#">&laquo;</a> <a href="#">1</a> <a class="active" href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">5</a> <a href="#">6</a> <a href="#">&raquo;</a> </div>
  </div>
  <div class="clear"></div>
  <div class="float_center">
    <ul class="child">
      <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Add</a></li>
      <li><a href="" title="Button push" class="button btnPush btnBlueGreen">Delete</a></li>
    </ul>
  </div>
</div>
</body>
</html>
