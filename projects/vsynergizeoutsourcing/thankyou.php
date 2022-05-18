<?php 
session_start();
 ?>
<!doctype html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta charset="utf-8">
<link rel="icon" type="image/png" href="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/favicon.png" />
<title>Thank You</title>
<meta name="Description" content="">
<style>
.case-studies-thumb-cntr .case-studies-list ul li h2 {min-height: 82px;}
.powerVCntr.d-flex{padding-bottom: 120px;padding-top:0px;}
.powerVCntr .powerVtxt {width: 100%; padding: 0px !important;border: 0 !important;margin: 0px !important;}
.powerVtxt p {font-size: 20px;line-height:32px;font-weight: 500;}
.powerVtxt p a{color: #ff7046;}
.powerVtxt p a:hover{text-decoration:underline;}
.adotingTechnology h2 {padding-bottom:50px;text-align:center;}

@media screen and (min-width: 0) and (max-width: 767px){
.topBg {margin-bottom: 0px;}

}
</style>
</head>

<body class="landing-page">
<div class="wrapper careers case-studies-page">
  <div class="topBg">
    <header class="header header2">
      <section class="navigation">
        <div class="container">
          <div class="menubar">
            <div class="logo"> <a href="https://www.vsynergizeoutsourcing.com/"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/logo.png" alt="Vsynergize Outsourcing" title="Vsynergize Outsourcing"></a></div>
            <p class="phonenumber"> <a href="tel:1-855-203-8196"><i class="phoneIcon"></i> 1-855-203-8196 </a> </p>
            <div class="mobile-nav-icon">
              <button class="menu-icon mobil-icon-toggle"> <span>toggle menu</span> </button>
            </div>
            <div class="mobileNav">
              <div class="shortMenu">
                <ul>
                  <li class="phonenumber"> <a href="tel:1-855-203-8196"><i class="phoneIcon"></i> 1-855-203-8196 </a> </li>
                  <li> <a href="mailto:info@vsynergize.com"><i class="emailIcon"></i> info@vsynergize.com </a> </li>
                  <li> <a href="javascript:void(0);"  onClick="overlayBox('overlayQuote')" class="getStartedLink">Get Started</a> </li>
                </ul>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
              <div class="menulinks">
                <ul>
                  <li class="hasSubmenu"> <a href="javascript:void(0);">Solutions </a>
                    <div class="submenu submenu-level2">
                      <div class="d-flex">
                        <div class="menuBlocks"> <a class="title" href="lead-generation.html">Lead Generation</a>
                          <ol>
                            <li><a href="b2b-data.html">B2B Data</a></li>
                            <li><a href="marketing-qualified-leads.html">Marketing Qualified Leads</a></li>
                            <li><a href="bant-qualified-leads.html">BANT Qualified Leads</a></li>
                            <li><a href="sales-qualified-leads.html">Sales Qualified Leads</a></li>
                            <li><a href="voice-verified-leads.html">Voice Verified Leads</a></li>
                            <li><a href="appointment-setting.html">Appointment Setting</a></li>
                            <li><a href="contact-discovery.html">Contact Discovery</a></li>
                            <li><a href="data-append-cleaning.html">Data Append & Cleaning</a></li>
                          </ol>
                        </div>
                        <div class="menuBlocks"> <a class="title" href="demand-generation.html">Demand Generation</a>
                          <ol>
                            <li><a href="account-based-marketing.html">Account Based Marketing</a></li>
                            <li><a href="content-syndications.html">Content syndication</a></li>
                            <li><a href="sdr-service.html">SDR as a Service</a></li>
                            <li><a href="lead-nurturing.html">Lead Nurturing</a></li>
                            <li><a href="email-marketing.html">Email Marketing</a></li>
                            <li><a href="event-marketing.html">Event Marketing</a></li>
                                                    <li><a href="vconnect.html">VConnect</a></li>
                                                    <li><a href="webinar-marketing.html">Webinar Marketing</a></li>
                                                  </ol>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="hasSubmenu"> <a href="javascript:void(0);">Why Vsynergize? </a>
                    <div class="submenu">
                      <ol>
                        <li><a href="client-testimonials.html">Client Testimonials</a></li>
                        <li><a href="compliance.html">Compliance</a></li>
                      </ol>
                    </div>
                  </li>
                  <li class="hasSubmenu"> <a href="javascript:void(0);">About </a>
                    <div class="submenu">
                      <ol>
                        <li><a href="about.html">Company</a></li>
                        <li><a href="management-team.html">Management Team</a></li>
                        <li><a href="news/index.html">News</a></li>
                        <li><a href="https://vsynergize.freshteam.com/jobs" target="_blank">Careers</a></li>
                        <li><a href="events.html">Events</a></li>
                      </ol>
                    </div>
                  </li>
                  <li> <a href="https://www.vsynergizeoutsourcing.com/">Case Studies </a> </li>
                  <li> <a href="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/" target="_blank">Blog </a> </li>
                  <li> <a href="faq.html">FAQ</a> </li>
                  <li> <a href="contact.html">Contact </a> </li>
                </ul>
                <div class="clear"></div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </section>
    </header>
    <section class="main-slider commonSpace">
      <div class="mainslider-cntr innerBanner">
        <div class="container">
          <div class="mainSlider">
            <div class="slider">
              <div class="slider-row banner-1">
                <div class="dis-table">
                  <div class="dis-tablecell">
                    <div class="banner-txt text-center">
                      <h1><span>Thank You! <?php echo ucwords($_SESSION['member_name']); ?></span></h1>                      	
                          <div class="powerVCntr d-flex w-900px">
                            <div class="powerVtxt mid-cntr w100 align-center">
                                <p class="text-center" style="color: #53607c;" >For showing your interest. We will respond to your requirements shortly.</br></br>
                                Follow us on <a href="https://www.linkedin.com/company/2457258/admin/" target="_blank">LinkedIn</a> for the latest updates.</p>                            
                                <div class="sliderFixedbtn">
                                    <div class="readMore"> <a href="<?php echo ucwords($_SESSION['previous_path']); ?>" class="box-btn">Back</a> </div>
                                </div>
                            </div>
                         </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="adotingTechnology case-studies-thumb-cntr">
    <div class="container">
    	<h2>Latest Blogs</h2>
      <div class="case-studies-list casestudies">
        <ul>
          <li> 
          <a href="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/what-demand-generation-managers-should-do-to-survive-covid-19/">
          <div class="case-studies-img"> 
          <img src="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/wp-content/uploads/2020/06/what-demand-generation-managers-should-do-to-survive-covid-19-738x423.png" alt="What Demand Generation Managers should do to survive COVID-19" title="What Demand Generation Managers should do to survive COVID-19"> </div>
            <div class="case-studies-details">
              <h2>What Demand Generation Managers should do to survive COVID-19</h2>
              <div class="twocommonbtn">
                <div class="btn btn-primary">Know More</div>
              </div>
            </div>
            </a> </li>
          <li> 
          <a href="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/how-webinars-can-benefit-networking-during-covid-19/">
            <div class="case-studies-img"> <img src="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/wp-content/uploads/2020/06/how-webinars-can-benefit-networking-during-covid-19-738x423.png" alt="How Webinars Can Benefit Networking During COVID-19" title="How Webinars Can Benefit Networking During COVID-19"> </div>
            <div class="case-studies-details">
              <h2>How Webinars Can Benefit Networking During COVID-19</h2>
              <div class="twocommonbtn">
                <div class="btn btn-primary">Know More</div>
              </div>
            </div>
            </a> </li>
          <li> 
          <a href="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/importance-of-converting-event-budgets-into-strong-webinar-leads/">
            <div class="case-studies-img"> <img src="https://www.vsynergizeoutsourcing.com/outsourcing-services-blog/wp-content/uploads/2020/06/importance-of-converting-event-budgets-into-strong-webinar-leads-738x423.png" alt="Importance Of Converting Event Budgets Into Strong Webinar Leads" title="Importance Of Converting Event Budgets Into Strong Webinar Leads"> </div>
            <div class="case-studies-details">
              <h2>Importance Of Converting Event Budgets Into Strong Webinar Leads</h2>
              <div class="twocommonbtn">
                <div class="btn btn-primary">Know More</div>
              </div>
            </div>
            </a> </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <div class="mountainsImgSep"> <img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/blue-mountain.png"> </div>
  <footer class="footer">
    <div class="container">
      <div class="footerBoxes">
        <div class="footerCols">
          <div class="footerLinks officeLinks">
            <dl>
              <dt>USA OFFICE</dt>
              <dd>
                <ul>
                  <li> 01 California Street, Suite 2710, San Francisco,<br>
                    CA 94111, USA</li>
                  <li> +1-855-203-8196 (Toll Free), +1-732.481.9424</li>
                  <li> <a href="mailto:info@vsynergize.com">info@vsynergize.com</a> </li>
                  <li> Skype:  VSynergize </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="footerCols">
          <div class="footerLinks">
            <dl>
              <dt>lead generation </dt>
              <dd>
                <ul>
                  <li><a href="b2b-data.html">B2B Data</a></li>
                  <li><a href="marketing-qualified-leads.html">Marketing Qualified Leads</a></li>
                  <li><a href="bant-qualified-leads.html">BANT Qualified Leads</a></li>
                  <li><a href="sales-qualified-leads.html">Sales Qualified Leads</a></li>
                  <li><a href="voice-verified-leads.html">Voice Verified Leads</a></li>
                  <li><a href="appointment-setting.html">Appointment Setting</a></li>
                  <li><a href="contact-discovery.html">Contact Discovery</a></li>
                  <li><a href="data-append-cleaning.html">Data Append & Cleaning</a></li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
				<div class="footerCols">
					<div class="footerLinks">
						<dl>
							<dt>DEMAND GENERATION</dt>
							<dd>
								<ul>
									<li><a href="account-based-marketing.html">Account Based Marketing</a></li>
                                    <li><a href="content-syndications.html">Content syndication</a></li>
                                    <li><a href="sdr-service.html">SDR as a Service</a></li>
                                    <li><a href="lead-nurturing.html">Lead Nurturing</a></li>
                                    <li><a href="email-marketing.html">Email Marketing</a></li>
                                    <li><a href="event-marketing.html">Event Marketing</a></li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div class="footerCols">
					<div class="footerLinks">
						<dl>
							<dt>Subscribe to Newsletter</dt>
							<dd>
								<!-- Begin Mailchimp Signup Form -->
                                <div id="mc_embed_signup">
                                <form action="https://vsynergizeoutsourcing.us10.list-manage.com/subscribe/post?u=a9cf6a1c6ac8f37627196dfc2&amp;id=7d485f7d82" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                    <div id="mc_embed_signup_scroll">
                                    
                                <div class="mc-field-group">
                                    <label for="mce-EMAIL">Enter your Email Address </label>
                                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                                </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a9cf6a1c6ac8f37627196dfc2_7d485f7d82" tabindex="-1" value=""></div>
                                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                    </div>
                                </form>
                                </div>
                                
                                <!--End mc_embed_signup-->
							</dd>
						</dl>
					</div>
				</div>
			</div>
      <div class="socialBox">
        <div class="whiteLogo"> <a href="index.html"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/white-logo.png" alt="Vsynergize Outsourcing" title="Vsynergize Outsourcing"></a> </div>
        <div class="socialLinks">
          <div class="socialIcons d-flex"> <a href="https://www.facebook.com/VSynergize-Outsourcing-222984121120231/" target="_blank"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/fb.png" alt="Connect on Facebook" title="Connect on Facebook"></a> <a href="https://twitter.com/vSynergize_IT" target="_blank"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/twitter.png" alt="Connect on Twitter" title="Connect on Twitter" ></a> <a href="https://www.linkedin.com/company/2457258/admin/" target="_blank"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/linkedin.png" alt="Connect on Linkedin" title="Connect on Linkedin"></a> <a href="https://www.instagram.com/vsynergize/" target="_blank"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/instagram.png" alt="Connect on Instagram" title="Connect on Instagram"></a> <a href="https://www.youtube.com/channel/UCzimE6c3lFGRauVGDfS0keg" target="_blank"><img src="https://vsynergizeoutsourcing.s3.ap-south-1.amazonaws.com/images/youtube.png" alt="Connect on Youtube" title="Connect on Youtube"></a> </div>
        </div>
      </div>
      <div class="copyTxt">
        <p>Copyright All Rights Reserved © 2013-2019<br>
          <a href="privacy-policy.html">Privacy Policy</a> Site by <a href="https://www.interminddigital.com/" target="_blank">Intermind</a></p>
      </div>
    </div>
		<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> 
        <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="50" data-darkbg="1" data-clutchcompany-id="197278"></div>
	</footer>
</div>
<script>
  (function(d,u){for (var i in u) {var l=d.createElement('link');l.type='text/css';l.rel='stylesheet';l.href=u[i]; d.getElementsByTagName('head')[0].appendChild(l);}}(document,['styles/style.css']));
</script> 
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script> 
<script src="scripts/common.js"></script> 
<script src='https://www.google.com/recaptcha/api.js'></script> 
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-120527915-1"></script> 
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-120527915-1');
</script>
<script>
  window.intercomSettings = {
    app_id: "uh4jgfbf"
  };
</script>
<script>
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/uh4jgfbf'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/uh4jgfbf';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
</script> 
<script>
new WOW().init();
$(window).on('load', function() {
setTimeout(function(){(function(a,l,b,c,r,s){_nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];r.async=1;
r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;s.parentNode.insertBefore(r,s);
})(document,"script","serve.albacross.com/track.js","89841027");

  function createFcn(nm){(window.freshsales)[nm]=function(){(window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments,0)))}; } (function(url,appToken,formCapture){window.freshsales=window.freshsales||[];if(window.freshsales.length==0){list='init identify trackPageView trackEvent set'.split(' ');for(var i=0;i<list.length;i++){var nm=list[i];createFcn(nm);}var t=document.createElement('script');t.async=1;t.src='https://d952cmcgwqsjf.cloudfront.net/assets/analytics.js';var ft=document.getElementsByTagName('script')[0];ft.parentNode.insertBefore(t,ft);freshsales.init('https://vsynergizeoutsourcing.freshsales.io','abf4df883d1380ede040d39ac99a1451e8852b95a77ae5b537138a6056713746',true);}})();



<!-- Start Jumplead Code -->
window.Jumplead||function(b,d){function k(){return["<",l,' onload="var d=',c,";d."+m+"('head')[0].",n,"(d.",p,"('script')).",e,"='",q,"'\"></",l,">"].join("")}var c="document",f=b[c],l="body",p="createElement",m="getElementsByTagName",r=f[m]("head")[0],n="appendChild",a=f[p]("iframe"),e="src",g,q="//cdn.jumplead.com/tracking_code.js";b.jump=b.jump||function(){(b.jump.q=b.jump.q||[]).push(arguments)};d.events=b.jump;a.style.display="none";r[n](a);try{a.contentWindow[c].open()}catch(s){d.domain=f.domain,
g="javascript:var d="+c+".open();d.domain='"+f.domain+"';",a[e]=g+"void(0);"}try{var h=a.contentWindow[c];h.write(k());h.close();h.params=d}catch(t){a[e]=g+'d.write("'+k().replace(/"/g,'\"')+'");d.close();',a[e].contentDocument.params=d}}
(window,{account:"JL-1549963136-9329",version:4});
<!-- End Jumplead Code -->
}, 3000);
});

</script>
</body>
</html>