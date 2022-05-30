<?php 
if($_GET['clean']=="true"){
  unlink('data.txt'); 
}
echo file_get_contents($_GET['url']);
// echo file_get_contents('http://www.yellowpagesofafrica.com/showCoo.cfm?key=M%29%24L%2BV%5DO9XXK%5FM%5C%26MAQJEOY6V%40W8%5DGQNKL%3B%26MA%25%2A2C8ALV%2C8G%3F%2F%5F%5CG%2BRZOW%3A%5C%0A%2D%2F1%3B39M5%3AB%29WT%278%5D%2FR%40%20%20%0A');
 ?>

<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

  <script type="text/javascript">
  	
  	$(".ct-js-search-results .col-sm-6").each(function(){

  		console.log($(this).find('.ct-product--tilte').text());
  		var dd = $(this).find('.ct-product--description div').attr('onclick');
  		var link = dd.replace("ColdFusion.navigate('", "http://www.yellowpagesofafrica.com/");
  		link = link.replace("', '", "");
  		link = link.replace($(this).find('.ct-product--description div').next().attr('id')+"');", "");
  		$.post('store.php',{'name':$(this).find('.ct-product--tilte').text(),'link':link},function(){

      });
  	})

  </script>