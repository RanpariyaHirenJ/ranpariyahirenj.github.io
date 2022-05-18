<?php 
   $pageTitle = "Add Banner";
   
   ?>
<!DOCTYPE html>
<html>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <?php include("shared/header.php"); ?>
      <link rel="stylesheet" type="text/css" href="styles/bootstrap.css">
   </head>
   <body>
      <?php include("shared/TopMenu.php"); ?>
      <div class="searchContainer">
      </div>
      <div class="gridContainer">
         <div class="formTitle"><?php echo $data['action']['title']; ?> Banner</div>
         <br>
        <form action="<?php echo $data['action']['form-action']; ?>" method="post" enctype="multipart/form-data" id="form-banner" class="form-horizontal">
         <div class="container-fluid">
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h3 class="panel-title"><i class="fa fa-pencil"></i> Banner Details</h3>
               </div>
               <div class="panel-body">
                    
                     <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-name">Module Name</label>
                        <div class="col-sm-10">
                           <input type="text" name="module" validation="text" placeholder="Module Name" value="<?php echo $data['banner_details']['module']; ?>" title="Module Name"  class="form-control">
                        </div>
                     </div>
                     <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-name">Banner Heading</label>
                        <div class="col-sm-10">
                           <input type="text" name="name" validation="text" placeholder="Banner Name" value="<?php echo $data['banner_details']['name']; ?>" title="Banner Name" id="input-name" class="form-control">
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-status">Status</label>
                        <div class="col-sm-10">
                           <select name="status" data-selected="<?php echo $data['banner_details']['status']; ?>" id="input-status" class="form-control">
                              <option value="1" selected="selected">Enabled</option>
                              <option value="0">Disabled</option>
                           </select>
                        </div>
                     </div>
                      <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-name">Banner Description</label>
                        <div class="col-sm-10">
                           <textarea name="description"  placeholder="Description"  title="Description"  class="form-control"><?php echo $data['banner_details']['description']; ?></textarea>
                        </div>
                     </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-status">Image Config</label>
                        <div class="col-sm-4">
                           <input type="text" name="height"  validation="number" data-required="true" value="<?php echo $data['banner_details']['height']; ?>" placeholder="Height in pixel" title="Height"  class="form-control">
                        </div>
                        <div class="col-sm-4">
                           <input type="text" name="width" value="<?php echo $data['banner_details']['width']; ?>" validation="number" data-required="true" placeholder="Width in pixel" title="Width"  class="form-control">
                        </div>
                        <div class="col-sm-2">
                            <select name="file_extension" data-selected="<?php echo $data['banner_details']['file_extension']; ?>" id="file_extension" class="form-control">
                              <option value="jpeg">.jpeg</option>
                              <option value="png">.png</option>
                              
                           </select>
                        </div>
                     </div>

                     <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-status">Show Product Count</label>
                        <div class="col-sm-10">
                           <select name="product_count_flag" data-selected="<?php echo $data['banner_details']['product_count_flag']; ?>" id="input-status" class="form-control">
                            <option value="0">Disabled</option>
                            <option value="1">Enabled</option>
                              
                           </select>
                        </div>
                     </div>
                     <br>
                     <div id="error"></div>
                     <div class="tab-content">
                        <div class="tab-pane active" id="language1">
                           <table id="banner-images" class="table table-striped table-bordered table-hover">
                              <thead>
                                 <tr>
                                    <td class="text-left">Title</td>
                                    <td class="text-left">Link</td>
                                    <td class="text-left">Description</td>
                                    <td class="text-center">Image</td>
                                    <td class="text-right">Sort Order</td>
                                    <td></td>
                                 </tr>
                              </thead>
                              <tbody>
                                <?php 
                                $i = 0;
                                foreach ($data['banner_images'] as $value) {

                                  $image = $value['image']?IMAGE_PATH.'banner/small-'.$value['image']:IMAGE_PATH.'default.png';  
                                  
                                 ?>
                                 <tr id="image-row<?php echo $i; ?>">
                                    <td class="text-left"><input type="text" name="banner_image[<?php echo $i; ?>][title]" validation="text" value="<?php echo $value['title']; ?>" placeholder="Title" title="Title" class="form-control"></td>
                                    <td class="text-left" style="width: 30%;"><input type="text" validation="text" title="Link" name="banner_image[<?php echo $i; ?>][link]" value="<?php echo $value['link']; ?>" placeholder="Link" class="form-control"></td>
                                    <td class="text-left" style="width: 30%;"><textarea name="banner_image[<?php echo $i; ?>][description]" style="height: 100px;" placeholder="Description"  class="form-control"><?php echo $value['description']; ?></textarea></td>
                                    <td class="text-center"><a href="javascript:void(0)" id="thumb-image0" data-toggle="image" onclick="$('#input-image<?php echo $i; ?>').prev().click()" class="img-thumbnail"><img height="100" src="<?php echo $image; ?>" alt="" title="" ></a><input type="file" style="display: none" name="banner_image[<?php echo $i; ?>][image]" accept="image/jpeg,image/jpg,image/png" id="image<?php echo $i; ?>"><input type="hidden" name="banner_image[<?php echo $i; ?>][image_text]" value="<?php echo $value['image']; ?>" id="input-image<?php echo $i; ?>"></td>
                                    <td class="text-right" style="width: 10%;"><input type="text" validation="number" data-required="true" title="Sort" name="banner_image[<?php echo $i; ?>][sort_order]" value="<?php echo $value['sort_order']; ?>" placeholder="Sort Order" class="form-control"></td>
                                    <td class="text-left"><button type="button" data-delete="<?php echo $value['banner_image_id'] ?>" data-toggle="tooltip" title="Remove" class="btn btn-danger"><i class="fa fa-minus-circle"></i></button></td>
                                 </tr>
                                 <?php $i++; } ?>
                              </tbody>
                              <tfoot>
                                 <tr>
                                    <td colspan="5"></td>
                                    <td class="text-left"><button type="button" onclick="addImage('1');" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Add Banner"><i class="fa fa-plus-circle"></i></button></td>
                                 </tr>
                              </tfoot>
                           </table>
                        </div>
                     </div>
                 
               </div>
            </div>
            <div class="buttonContainer botCont">
               <div class="clear"></div>
               <div class="float_center">
                  <ul class="child">
                     <li><a href="javascript:void(0)" title="Button push" class="button btnPush btnBlueGreen submitBtn" frm-id="form-banner">Submit</a></li>
                     <li><a href="banner" title="Button push" class="button btnPush btnBlueGreen">Back</a></li>
                  </ul>
               </div>
            </div>
             </form>
         </div>
      </div>
   
   </body>
</html>
<script type="text/javascript">

var image_row = "<?php echo $i; ?>";

function addImage(language_id) {
  html  = '<tr id="image-row' + image_row + '">';
    html += '<td class="text-left"><input type="text" name="banner_image[' + image_row + '][title]" value="" validation="text" title="Title" placeholder="Title" class="form-control" /></td>';  
    html += '  <td class="text-left" style="width: 30%;"><input type="text" name="banner_image[' + image_row + '][link]" value="" validation="text" title="Link" placeholder="Link" class="form-control" /></td>';  
     html += '  <td class="text-left" style="width: 30%;"><textarea style="height:100px" name="banner_image[' + image_row + '][description]" value="" placeholder="Description" class="form-control" /></td>';
  html += '  <td class="text-center"><a href="javascript:void(0)" id="thumb-image' + image_row + '" data-toggle="image" onclick="$(\'#input-image'+image_row+'\').prev().click()" class="img-thumbnail"><img src="http://localhost/woodsmiths/images/logo.png" height="100" alt="" title=""  /></a><input type="file" style="display: none" name="banner_image[' + image_row + '][image]" accept="image/jpeg,image/jpg,image/png" id="image'+image_row+'"><input type="hidden" name="banner_image[' + image_row + '][image_text]" value="" id="input-image' + image_row + '" /></td>';
  html += '  <td class="text-right" style="width: 10%;"><input type="text" name="banner_image[' + image_row + '][sort_order]" validation="number" data-required="true" title="Sort" value="" placeholder="Sort Order" class="form-control" /></td>';
  html += '  <td class="text-left"><button type="button" onclick="$(\'#image-row' + image_row  + ', .tooltip\').remove();" data-toggle="tooltip" title="Remove" class="btn btn-danger"><i class="fa fa-minus-circle"></i></button></td>';
  html += '</tr>';
  
  $('#banner-images tbody').append(html);
  
  image_row++;
}

$('button[data-delete]').click(function(){

  var _this = $(this);
  $.ajax({
      url: 'Banner/deleteBannerImage',
      type : 'POST',
      data : {'banner_image_id':$(this).data('delete')},
      success: function(data) {
          _this.closest('tr').remove();
      }
  });

});


$(document).on("change","input[type='file']",function(){

    //Get reference of FileUpload.

    $("#error").html('');

    if($('input[name="height"]').val().trim()==""){
        $('input[name="height"]').focus();
        return false;
    }

    if($('input[name="width"]').val().trim()==""){
        $('input[name="width"]').focus();
        return false;
    }

    var _this = $(this);

    var img_ext = $('#'+$(this).attr('id')).val().split('.').pop().toLowerCase();

    var ext = ['jpeg','jpg'];

    if($("#file_extension").val()=="png"){
      ext = ['png'];
    }

    if($.inArray(img_ext, ext) == -1) {
        $("#error").html('<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> Invalid file extension. upload only .'+$("#file_extension").val()+' file format. <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
        _this.prev().css('box-shadow','0px 0px 6px 1px red');
        return false;
    }

  

    var fix_height = $('input[name="height"]').val();
    var fix_width = $('input[name="width"]').val();


    var fileUpload = document.getElementById($(this).attr('id'));
    //Check whether the file is valid Image.

        
        //Check whether HTML5 is supported.
        if (typeof (fileUpload.files) != "undefined") {
            //Initiate the FileReader object.
            var reader = new FileReader();

            //Read the contents of Image File.
            reader.readAsDataURL(fileUpload.files[0]);
            reader.onload = function (e) {
                //Initiate the JavaScript Image object.
                var image = new Image();
 
                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;


                
                //Validate the File Height and Width.
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;

                    // console.log(this.);
                   
                    if (height == fix_height && width == fix_width) {
                        _this.prev().find('img').attr('src',image.src);
                         _this.prev().css('box-shadow','0px 0px 6px 1px green');
                        return true;
                    }else{
                        fileUpload.value = "";

                           $("#error").html('<div class="alert alert-danger alert-dismissible"><i class="fa fa-exclamation-circle"></i> Height and Width must be match given dimensions('+fix_height+'px x '+fix_width+'px) <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                        
                          _this.prev().css('box-shadow','0px 0px 6px 1px red');

                        return false;
                    }
                    return true;
                };
 
            }
        } else {
            alert("This browser does not support HTML5.");
            fileUpload.value = "";
            return false;
        }
   
    
})

</script>