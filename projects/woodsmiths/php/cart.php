<!doctype html>
<html>
<head>
<?php include('shared/header.php'); ?>
</head>

<body>

<div class="wrapper">
<!--Start header area-->
<header class="header-area">
  <!--Start header lawer-->
  <?php include('shared/TopMenu.php'); ?>
  <!--End header lawer--> 
</header>
<!--End header area-->

<div class="mainbody">
  <div class="page-heading pt_40 pb_40">
    <div class="container">
      <div class="row">
        <div class="page-heading-position tc">
          <h2 class="page-title">Add to <?php echo $data['cart_type']?'Cart':'Enquiry'; ?></h2>
        </div>
        <div class="page-heading-position tc">
          <nav class="woocommerce-breadcrumb"><a href="<?php echo base_url; ?>">Home</a><span></span></nav>
        </div>
      </div>
    </div>
  </div>
  
  <div class="page-content-inner ">
    <div class="page-container container">
      <div class="row fl-page ">
        <div id="main-content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb_75">
          <div class="woocommerce">
            <div class="woocommerce-notices-wrapper"></div>
            <form class="woocommerce-cart-form">
              <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
                <thead>
                  <tr>
                    <th class="product-thumbnail">&nbsp;</th>
                    <th class="product-name">Product</th>
                    <?php if($data['cart_type']){ ?>
                    <th class="product-price">Price</th>
                    <?php } ?>
                    <th class="product-quantity">Quantity</th>
                    <?php if($data['cart_type']){ ?>
                    <th class="product-subtotal">Sub Total</th>
                    <?php } ?>
                    <th class="product-remove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <?php 
                  $total = 0;
                  if(count($data['card_list'])){

                    foreach ($data['card_list'] as $value) {
                      
                      $total += $value['price']*$value['quantity'];
                   ?>
                  
                  <tr class="woocommerce-cart-form__cart-item cart_item">
                    <td class="product-thumbnail"><a href="javascript:void(0);"><img  src="<?php echo IMAGE_PATH.'uploads/'.$value['dir_path'].'/small-'.$value['image']; ?>" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="<?php echo $value['name']; ?>"></a></td>
                    <td class="product-name" data-title="Product"><a href="slab-tables.html"><?php echo $value['name']; ?></a></td>
                    <?php if($data['cart_type']){ ?>
                    <td class="product-price" data-title="Price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span><span class="price"><?php echo $value['price']; ?></span></span></td>
                    <?php } ?>
                    <td class="product-quantity" data-title="Quantity">
                        <div class="quantity pr fl mr_10">
                            <input type="number"  class="input-text tc" id="<?php echo $value['cart_id'] ?>-quantity" step="1" min="0"  readonly="readonly" value="<?php echo $value['quantity'] ?>" title="Qty" size="4" />
                            <div class="qty tc"> 
                                <a class="plus db pa" data-id="<?php echo $value['cart_id'] ?>"  href="javascript:void(0);"> <i class="icon-plus"></i> </a> 
                                <a class="minus db pa" data-id="<?php echo $value['cart_id'] ?>" href="javascript:void(0);"> <i class="icon-minus"></i> </a> 
                            </div>
                        </div>
                    </td>
                    <?php if($data['cart_type']){ ?>
                    <td class="product-subtotal" data-title="Total"><span style="font-weight: 600;">MSRP :</span>&nbsp;<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span><?php echo $value['price']*$value['quantity']; ?></span></td>
                    <?php } ?>
                    <td class="product-remove"><a href="javascript:void(0);" class="remove" data-cart-type="<?php echo $data['cart_type']; ?>" onclick="cart.remove(<?php echo $value['cart_id'] ?>)" aria-label="Remove this item"  data-product_sku="">&times;</a></td>
                  </tr>
                  <?php } }else{ ?>
                    <tr><td colspan="6">Cart is empty!</td></tr>
                  <?php } ?>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      <div class="send-enquiry">
        <?php if($data['cart_type']){ ?>
        <p>Total : <span>$<?php echo $total; ?></span></p>
        <?php } ?>
        <?php $order = $data['cart_type']?'cart-order':'enquiry-order'; ?>
        <input type="button" class="button update-cart" onclick="window.location.href='<?php echo $order ?>'" value="Send <?php echo $data['cart_type']?'Cart':'Enquiry'; ?>" />
      </div>
  </div>
  <footer id="footer-wrapper" class="footer">
    <?php include('shared/footer.php'); ?>
  </footer>
  <!-- End Footer Top --> 
  
</div>
<?php include('shared/footer_links.php'); ?>
<!--<script src="scripts/owl.carousel.js"></script> 
<script src="scripts/owl.carousel.min.js"></script> --> 

<!--<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/43033/owl.carousel.min.js'></script> --> 

<script>
new WOW().init();
// wow Animations
$('.collections-box .product-box .product-thumb i.fa-heart').click(function(){
	$(this).addClass('fas');
})
$(window).load(function () {
  $('.plus').click(function(){
    var target =  $(this).parents('.quantity').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value + 1)
    cart.update($(this).data('id'),(target_value + 1));
    var amount = parseInt($(this).closest('.product-quantity').prev().find('.price').html());
    $(this).closest('.product-quantity').next().find('.woocommerce-Price-amount').html('$'+(amount*(target_value + 1)));

    var total = parseInt($(".send-enquiry").find('span').text().replace("$", ""));
    $(".send-enquiry").find('span').html('$'+(total+amount));
  });

  $('.minus').click(function(){
    var target =  $(this).parents('.quantity').find('input[type="number"]');
    var target_value = parseInt(target.val());
    if(target_value >=2){
      target.val(target_value - 1)
      cart.update($(this).data('id'),(target_value - 1));
      var amount = parseInt($(this).closest('.product-quantity').prev().find('.price').html());
      $(this).closest('.product-quantity').next().find('.woocommerce-Price-amount').html('$'+(amount*(target_value - 1)));

      var total = parseInt($(".send-enquiry").find('span').text().replace("$", ""));
      $(".send-enquiry").find('span').html('$'+(total-amount));
    }
    
  });
})
$(document).ready(function() {
	$('.product-remove a').click(function () {
		var evalue = $(".enquiry-count").text();
    var avalue = $(".acart-count").text();

    var sub_total = parseInt($(this).parent().prev().find('.woocommerce-Price-amount').text().replace("$", ""));
    var total = parseInt($(".send-enquiry").find('span').text().replace("$", ""));
    $(".send-enquiry").find('span').html('$'+(total-sub_total));

    if($(this).data('cart-type')==1){
      avalue--;
      $(".fa-cart-plus .cart-count").html(avalue);
    }else{
      evalue--;
      $(".fa-envelope-open-text .cart-count").html(evalue);
    }
      
		$(this).parent().parent('.cart_item').remove();
		//alert($('.removeproductbox').parent())
	});
});
$(window).load(function() {

});
</script>
</body>
</html>