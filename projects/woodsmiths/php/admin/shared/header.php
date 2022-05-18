<title>Woodsmiths - <?php echo $pageTitle ?></title>
<base href="<?php echo base_url; ?>">
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"></script>
<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">-->
<!-- Compiled and minified JavaScript -->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> -->           
<link rel="stylesheet" type="text/css" href="styles/styles.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="scripts/sweetalert/sweetalert.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="scripts/js_class.js"></script>
<script type="text/javascript" src="scripts/myScripts.js"></script>
<script type="text/javascript" src="scripts/sweetalert/sweetalert.min.js"></script>
<script type="text/javascript" src="scripts/sweetalert/jquery.sweet-alert.custom.js"></script>
<script type="text/javascript" src="scripts/ckeditor/ckeditor.js" type="text/javascript"></script>
<script>
	
 
</script>

<script type="text/javascript">
$(function(){

	<?php 
	if(isset($data['message']['title'])){
	?> 

	swal("<?php echo $data['message']['title'] ?>", "<?php echo $data['message']['msg'] ?>", "<?php echo $data['message']['type'] ?>");

    <?php } ?>

});	
</script>


