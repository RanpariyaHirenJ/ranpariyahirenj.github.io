<script src="scripts/common.js" type="text/javascript"></script> 
<script src="scripts/wow.min.js"></script> 
<script src="scripts/plugins.js"></script> 
<script src="scripts/sweetalert/sweetalert.min.js"></script>
<script src="scripts/sweetalert/jquery.sweet-alert.custom.js"></script>
<?php 

if(isset($data['message']['title'])){

	if(isset($data['message']['confirmButtonText'])){
?>
	<script>
		swal({   
            title: "<?php echo $data['message']['title'] ?>",   
            text: "<?php echo $data['message']['msg'] ?>",   
            type: "<?php echo $data['message']['type'] ?>",     
            // confirmButtonColor: "#DD6B55",   
            confirmButtonText: "OK"
        }, function(){   
            window.location.href = "my-account";
            
        });
	</script>
<?php }elseif(isset($data['message']['showForgotDiv'])){ ?>
    <script>
        swal({   
            title: "<?php echo $data['message']['title'] ?>",   
            text: "<?php echo $data['message']['msg'] ?>",   
            type: "<?php echo $data['message']['type'] ?>",     
            // confirmButtonColor: "#DD6B55",   
            confirmButtonText: "OK"
        }, function(){   
            $(".forgot-password a").click();
            
        });
    </script>
<?php }else{ ?>
<script>
 swal("<?php echo $data['message']['title'] ?>", "<?php echo $data['message']['msg'] ?>", "<?php echo $data['message']['type'] ?>");
</script>
<?php } } ?>





