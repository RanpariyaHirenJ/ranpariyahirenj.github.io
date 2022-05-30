<?php
	include("admin_global.php");
	include "./libchart/classes/libchart.php";
	check_login();
	$whereclause = "";
	$whereclause1 = "";
	
	/*$from_month = date('m');
	$to_month = date('m');
	
	$from_year = date('Y');
	$to_year = date('Y');*/
	
	$from_month = "";
	$to_month 	= "";
	
	$from_year 	= "";
	$to_year 	= "";
	
	if(isset($_REQUEST['filter']))
	{
		$from_month	= $_REQUEST['from_month'];
		$from_year 	= $_REQUEST['from_year'];
		$to_month	= $_REQUEST['to_month'];
		$to_year 	= $_REQUEST['to_year'];
		
		if($from_month != "" && $from_year != "" && $to_month != "" && $to_year != "")
		{
			
			$date1 = $from_year."-".$from_month."-01";
			$date2 = $to_year."-".$to_month."-31";
			
			
			$whereclause = " WHERE em.order_date >= '$date1' AND em.order_date <= '$date2' ";
			
			$whereclause1 = " WHERE om.order_date >= '$date1' AND om.order_date <= '$date2' ";
			
			$whereclause3 = " AND em.order_date >= '$date1' AND em.order_date <= '$date2' ";

			$whereclause4 = " AND om.order_date >= '$date1' AND om.order_date <= '$date2' ";
			
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Operational  Stats</title>
<link rel="stylesheet" type="text/css" href="styles/style.css">
<link rel="stylesheet" type="text/css" media="all" href="jsdatepick-calendar/jsDatePick_ltr.min.css" />	
<style>
html, body, h1, h2, h3, h4, h5, h6, ul, li, a, div, p, label, input, select {
	margin:0;
	padding:0;
	text-decoration:none;
	list-style:none;
	font-family:Arial, Helvetica, sans-serif
}
a {
	cursor:pointer
}
.wrapper {
	width:90%;
	margin:0px auto
}
.fl {
	float:left
}
.fr {
	float:right
}
.clear {
	clear:both
}
.AC {
	text-align:center
}
.AR {
	text-align:right
}
.AL {
	text-align:left
}
.DN {
	display:none !important
}
strong {
	font-weight:700
}
.pad0 {
	padding:0px
}

.noBG {
	background:none !important
}
.marB0 {
	margin-bottom:0px
}
.padB0 {
	padding-bottom:0px
}
.status {
	border:solid 1px #ccc;
	margin-bottom:20px
}
.topCnt {
	background:#DE6C50;
	color:#fff
}
.topCnt h1 {
	font-size:24px;
	padding:5px 0 5px 5px
}
.leftCnt {
	width:67%;
	float:left;
	border-right:solid 1px #ccc;
	padding:10px 10px 10px 5px
}
.leftCnt h3 {
	border-bottom:solid 1px #ccc;
	padding-bottom:5px
}
.rytCnt {
	width:29%;
	float:right;
	padding:10px 10px 10px 5px
}
.rytCnt h3 {
	border-bottom:solid 1px #ccc;
	padding-bottom:5px
}
.Content {
	height:300px;
}

.Content img{
	bottom:0;
}
.leftCnt .Content {
	height:300px;
	overflow:auto;
	color:#a4a4a3;
}
.status .date{ float:right; font-size:16px; padding:0 10px;}
.status .ReffContent{overflow-x:auto; height:320px;}
.status .ReffContent .hotsbar {
	width:65px;
	text-align:center;
	margin:0 20px;
	float:left;
}
.status .ReffContent table td{
height:200px;margin:0;width:55px;vertical-align:bottom !important
}
.status .ReffContent .Verticalbar{width:60px;vertical-align:middle;overflow:hidden;border:#333 solid 1px; margin:0 10px 5px 10px;}
.status .ReffContent .site{border-top:#D5D4D4 solid 1px; width:50px; margin:0; padding: 0 6px 0 6px; height:50px;display:block;overflow:inherit}
.status .ReffContent .site p{width:50px;float:left}

.status .leftCnt .Content .campaign{padding-right:20px; width:200px;border:solid 1px #333;padding:5px 10px 5px 5px;font-size:12px; text-align:left;height:20px;}
.status .leftCnt .Content .horizontal{padding-right:0px;border:solid 1px #333; height:28px;}
</style>
</head>

<body>
<?php include("header.php"); ?>	
<div class="wrapper">

<div class="status">
<div class="topCnt">
<h1>OPERATIONAL STATS

  
  <div class="date">
  <form action="dashboard.php" method="get">
  <span>
  From
  <select name="from_month">
  	<option value="">Month</option>
    <option value="01" <?php echo $db_object->return_compare("01",$from_month,"selected=\"selected\"","") ?> >Jan</option>
    <option value="02" <?php echo $db_object->return_compare("02",$from_month,"selected=\"selected\"","") ?>>Feb</option>
    <option value="03" <?php echo $db_object->return_compare("03",$from_month,"selected=\"selected\"","") ?>>Mar</option>
    <option value="04" <?php echo $db_object->return_compare("04",$from_month,"selected=\"selected\"","") ?>>Apr</option>
    <option value="05" <?php echo $db_object->return_compare("05",$from_month,"selected=\"selected\"","") ?>>May</option>
    <option value="06" <?php echo $db_object->return_compare("06",$from_month,"selected=\"selected\"","") ?>>Jun</option>
    <option value="07" <?php echo $db_object->return_compare("07",$from_month,"selected=\"selected\"","") ?>>Jul</option>
    <option value="08" <?php echo $db_object->return_compare("08",$from_month,"selected=\"selected\"","") ?>>Aug</option>
    <option value="09" <?php echo $db_object->return_compare("09",$from_month,"selected=\"selected\"","") ?>>Sep</option>
    <option value="10" <?php echo $db_object->return_compare("10",$from_month,"selected=\"selected\"","") ?>>Oct</option>
    <option value="11" <?php echo $db_object->return_compare("11",$from_month,"selected=\"selected\"","") ?>>Nov</option>
    <option value="12" <?php echo $db_object->return_compare("12",$from_month,"selected=\"selected\"","") ?>>Dec</option>
  </select>
  
  
  <select name="from_year">
  	<option value="">Year</option>
    <option value="2015" <?php echo $db_object->return_compare("2015",$from_year,"selected=\"selected\"","") ?>>2015</option>
    <option  value="2014" <?php echo $db_object->return_compare("2014",$from_year,"selected=\"selected\"","") ?>>2014</option>
  </select>
  </span>
  <span style=" margin:0 30px;">
   To
  <select name="to_month">
    <option value="">Month</option>
    <option value="01" <?php echo $db_object->return_compare("01",$to_month,"selected=\"selected\"","") ?> >Jan</option>
    <option value="02" <?php echo $db_object->return_compare("02",$to_month,"selected=\"selected\"","") ?>>Feb</option>
    <option value="03" <?php echo $db_object->return_compare("03",$to_month,"selected=\"selected\"","") ?>>Mar</option>
    <option value="04" <?php echo $db_object->return_compare("04",$to_month,"selected=\"selected\"","") ?>>Apr</option>
    <option value="05" <?php echo $db_object->return_compare("05",$to_month,"selected=\"selected\"","") ?>>May</option>
    <option value="06" <?php echo $db_object->return_compare("06",$to_month,"selected=\"selected\"","") ?>>Jun</option>
    <option value="07" <?php echo $db_object->return_compare("07",$to_month,"selected=\"selected\"","") ?>>Jul</option>
    <option value="08" <?php echo $db_object->return_compare("08",$to_month,"selected=\"selected\"","") ?>>Aug</option>
    <option value="09" <?php echo $db_object->return_compare("09",$to_month,"selected=\"selected\"","") ?>>Sep</option>
    <option value="10" <?php echo $db_object->return_compare("10",$to_month,"selected=\"selected\"","") ?>>Oct</option>
    <option value="11" <?php echo $db_object->return_compare("11",$to_month,"selected=\"selected\"","") ?>>Nov</option>
    <option value="12" <?php echo $db_object->return_compare("12",$to_month,"selected=\"selected\"","") ?>>Dec</option>
  </select>
  
  
  <select name="to_year">
  	<option>Year</option>
    <option value="2015" <?php echo $db_object->return_compare("2015",$to_year,"selected=\"selected\"","") ?>>2015</option>
    <option value="2014" <?php echo $db_object->return_compare("2014",$to_year,"selected=\"selected\"","") ?>>2014</option>
  </select>
  </span>
  <input name="filter" type="submit" value="Filter" />
  </form>
  </div>
  </h1>
</div>

<div class="leftCnt">
<h3>Month Vise Inquiry</h3>

<div class="Content">
         <?php
		$sql = "SELECT DATE_FORMAT(em.order_date,'%b %Y') as month , COUNT(*) as total_enquiry
				FROM enquiry_master em  $whereclause
				GROUP BY MONTH(em.order_date) 
				ORDER BY em.order_date ASC
				LIMIT 0,12";
		//die($sql);
		$result = $db_object->execute_query($sql);
		$row_count = mysqli_num_rows($result);
		if($row_count >= 1)
		{	
			//$chart = new HorizontalBarChart(1007, ($row_count*50)+70);
			$chart = new HorizontalBarChart(1007, ($row_count*50)+90);
			$dataSet = new XYDataSet();
			while($value = mysqli_fetch_array($result))
			{
				
				$dataSet->addPoint(new Point($value['month'],$value['total_enquiry']));
			}
			$chart->setDataSet($dataSet);
			$chart->getPlot()->setGraphPadding(new Padding(5, 30, 20, 140));
			$chart->render("generate-graph/Inquirybymonth.png");
			?>
			<img alt="Horizontal bars chart"  src="generate-graph/Inquirybymonth.png" style="width:100%"/>
			<?php
        }
		else
		{
			?>
			<h2>Record not found between these date.</h2>
		<?php
        }
		?>	
      </div>
</div><!--end of leftCnt-->

<div class="rytCnt">
<h3>Inquiry Status</h3>
    
<?php
$chart = new PieChart(360,285);
$dataSet = new XYDataSet();

$sql = "SELECT em.enquiry_status, COUNT(*) as total_count 
		FROM enquiry_master em
		$whereclause
		GROUP BY em.enquiry_status 
		ORDER BY em.enquiry_status ASC";
$result = $db_object->execute_query($sql);
if(mysqli_num_rows($result) >= 1)
{
	while($value = mysqli_fetch_array($result))
	{
		if($value['enquiry_status'] == 4)
		{
			$status = "Cancelled";
		}
		else if($value['enquiry_status'] == 3)
		{
			$status = "Completed";
		}
		else if($value['enquiry_status'] == 2)
		{
			$status = "Confirm";
		}
		else
		{
			$status = "Pending";
		}
		
		$dataSet->addPoint(new Point($status." (".$value['total_count'].")",$value['total_count']));
	}
	$chart->setDataSet($dataSet);
	
	$chart->render("generate-graph/Inquiry_status_pie.png");
	?>
    <img alt="Pie chart"  src="generate-graph/Inquiry_status_pie.png" style="height:100%; width:100%"/>
    <?php
}
?>
</div><!--end of rytCnt-->
<div class="clear"></div>


</div><!--end of status-->

<div class="status">

<div class="leftCnt">
<h3>Month Vise Order</h3>

<div class="Content">
         <?php
		$sql = "SELECT DATE_FORMAT(om.order_date,'%b-%Y') as month , COUNT(*) as total_order
				FROM order_master om 
				$whereclause1
				GROUP BY MONTH(om.order_date) 
				ORDER BY om.order_date ASC
				LIMIT 0,12";
				
		$result = $db_object->execute_query($sql);
		$row_count = mysqli_num_rows($result);
		if($row_count >= 1)
		{	
			//$chart = new HorizontalBarChart(1007, ($row_count*50)+70);
			$chart = new HorizontalBarChart(1007, ($row_count*50)+90);
			$dataSet = new XYDataSet();
			while($value = mysqli_fetch_array($result))
			{
				
				$dataSet->addPoint(new Point($value['month'],$value['total_order']));
			}
			$chart->setDataSet($dataSet);
			$chart->getPlot()->setGraphPadding(new Padding(5, 30, 20, 140));
			$chart->render("generate-graph/orderbymonth.png");
			?>
			<img alt="Horizontal bars chart"  src="generate-graph/orderbymonth.png" style="width:100%"/>
			<?php
        }
		else
		{
			?>
			<h2>Record not found between these date.</h2>
		<?php
        }
		?>	
      </div>
</div><!--end of leftCnt-->

<div class="rytCnt">
<h3>Order Status</h3>
    
<?php
$chart = new PieChart(360,285);
$dataSet = new XYDataSet();

$sql = "SELECT om.order_status, COUNT(*) as total_count 
		FROM order_master om
		$whereclause1
		GROUP BY om.order_status 
		ORDER BY om.order_status ASC";
$result = $db_object->execute_query($sql);
if(mysqli_num_rows($result) >= 1)
{
	while($value = mysqli_fetch_array($result))
	{
		if($value['order_status'] == 4)
		{
			$status = "Cancelled";
		}
		else if($value['order_status'] == 3)
		{
			$status = "Completed";
		}
		else if($value['order_status'] == 2)
		{
			$status = "Confirm";
		}
		else
		{
			$status = "Pending";
		}
		
		$dataSet->addPoint(new Point($status." (".$value['total_count'].")",$value['total_count']));
	}
	$chart->setDataSet($dataSet);
	
	$chart->render("generate-graph/order_status_pie.png");
	?>
    <img alt="Pie chart"  src="generate-graph/order_status_pie.png" style="height:100%; width:100%"/>
    <?php
}
?>
</div><!--end of rytCnt-->
<div class="clear"></div>
<div class="clear"></div>


</div><!--end of status-->
<div class="status">
 <div class="topCnt">
  <h1>Total Products Inquiry</h1>
</div>
<div class="ReffContent">
      <?php
		$sql = "SELECT cim.item_name, (SELECT COUNT(*) FROM enquiry_detail ed
										INNER JOIN enquiry_master em ON em.enquiry_id = ed.enquiry_id 
										WHERE ed.item_id = cim.item_id $whereclause3) as total_product
				FROM craft_items_master cim 
				ORDER BY cim.item_name ASC";
				
		$result = $db_object->execute_query($sql);
		$row_count = mysqli_num_rows($result);
		if($row_count >= 1)
		{
			$chart = new VerticalBarChart((55*$row_count)+100,300);
			//$chart = new VerticalBarChart((45*$row_count)+100,300);
			$dataSet = new XYDataSet();
			while($value = mysqli_fetch_array($result))
			{
				$dataSet->addPoint(new Point($value['item_name'], $value['total_product']));
			}
			$chart->setDataSet($dataSet);
			$chart->render("generate-graph/total_product_Inquiry.png");
		?>
        <img alt="Vertical bars chart" src="generate-graph/total_product_Inquiry.png"/>
        <?php
		}
		else
		{
			?>
            <h2>Record not found between these date.</h2>
            <?php
		}
		?>
    </div>
<div class="clear"></div>
<div class="clear"></div>
  </div>
  <div class="status">
 <div class="topCnt">
      <h1>Total Products Order</h1>
    </div>
<div class="ReffContent">
      <?php
		$sql = "SELECT cim.item_name, (SELECT COUNT(*) FROM order_detail od
										INNER JOIN order_master om ON om.order_id = od.order_id
										WHERE od.item_id = cim.item_id $whereclause4) as total_product
				FROM craft_items_master cim 
				ORDER BY cim.item_name ASC";
				
		$result = $db_object->execute_query($sql);
		$row_count = mysqli_num_rows($result);
		if($row_count >= 1)
		{
			$chart = new VerticalBarChart((55*$row_count)+100,300);
			//$chart = new VerticalBarChart((45*$row_count)+100,300);
			$dataSet = new XYDataSet();
			while($value = mysqli_fetch_array($result))
			{
				$dataSet->addPoint(new Point($value['item_name'], $value['total_product']));
			}
			$chart->setDataSet($dataSet);
			$chart->render("generate-graph/total_product_order.png");
		?>
        <img alt="Vertical bars chart" src="generate-graph/total_product_order.png"/>
        <?php
		}
		else
		{
			?>
            <h2>Record not found between these date.</h2>
            <?php
		}
		?>
    </div>
<div class="clear"></div>
<div class="clear"></div>
  </div>
  
  <div class="status">
 <div class="topCnt">
      <h1>Total Revenue (Customer cost - Our cost)</h1>
    </div>
<div class="ReffContent">
      <?php
		$sql = "SELECT DATE_FORMAT(om.order_date,'%b-%Y') as month , SUM(od.client_cost) as revenue, SUM(od.our_cost) as exp
				FROM order_master om 
				INNER JOIN order_detail od
				$whereclause1 
				GROUP BY MONTH(om.order_date) 
				ORDER BY om.order_date ASC
				LIMIT 0,12";
				//WHERE om.order_status = 3
		$result = $db_object->execute_query($sql);
		$row_count = mysqli_num_rows($result);
		if($row_count >= 1)
		{
			//$chart = new VerticalBarChart((45*$row_count)+100,300);
			$chart = new VerticalBarChart((55*$row_count)+100,300);
			
			$dataSet = new XYDataSet();
			while($value = mysqli_fetch_array($result))
			{
				$profit = $value['revenue'] - $value['exp'];
				$dataSet->addPoint(new Point($value['month'], $profit));
			}
			$chart->setDataSet($dataSet);
			$chart->render("generate-graph/total_profit.png");
		?>
        <img alt="Vertical bars chart" src="generate-graph/total_profit.png"/>
        <?php
		}
		else
		{
			?>
            <h2>Record not found between these date.</h2>
            <?php
		}
		?>
    </div>
<div class="clear"></div>
<div class="clear"></div>
  </div>
</div>
<?php include("footer.php"); ?>
</body>
</html>
