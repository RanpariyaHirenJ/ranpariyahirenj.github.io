function setREVStartSize(e){			
	try {								
		var pw = document.getElementById(e.c).parentNode.offsetWidth,
			newh;
		pw = pw===0 || isNaN(pw) ? window.innerWidth : pw;
		e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
		e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
		e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
		e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
		e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
		e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
		e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
		if(e.layout==="fullscreen" || e.l==="fullscreen") 						
			newh = Math.max(e.mh,window.innerHeight);				
		else{					
			e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
			for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
			e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
			e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
			for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
								
			var nl = new Array(e.rl.length),
				ix = 0,						
				sl;					
			e.tabw = e.tabhide>=pw ? 0 : e.tabw;
			e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
			e.tabh = e.tabhide>=pw ? 0 : e.tabh;
			e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
			for (var i in e.rl) nl[i] = e.rl[i]<window.innerWidth ? 0 : e.rl[i];
			sl = nl[0];									
			for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
			var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					

			newh =  (e.type==="carousel" && e.justify==="true" ? e.gh[ix] : (e.gh[ix] * m)) + (e.tabh + e.thumbh);
		}			
		
		if(window.rs_init_css===undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));					
		document.getElementById(e.c).height = newh;
		window.rs_init_css.innerHTML += "#"+e.c+"_wrapper { height: "+newh+"px }";				
	} catch(e){
		console.log("Failure at Presize of Slider:" + e)
	}					   
  };
  
setREVStartSize({c: 'rev_slider_1_1',rl:[1920,1700,1130,700],el:[900,768,960,720],gw:[1300,1100,778,480],gh:[900,768,960,720],type:'standard',justify:'',layout:'fullscreen',offsetContainer:'.no-touchevents #qodef-top-area',offset:'',mh:"0"});
	var	revapi1,
		tpj;
	jQuery(function() {
		tpj = jQuery;
		if(tpj("#rev_slider_1_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		}else{
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				jsFileLocation:"wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				duration:"2000ms",
				visibilityLevels:"1920,1700,1130,700",
				gridwidth:"1300,1100,778,480",
				gridheight:"900,768,960,720",
				editorheight:"900,768,960,720",
				responsiveLevels:"1920,1700,1130,700",
				fullScreenOffsetContainer:".no-touchevents #qodef-top-area",
				disableProgressBar:"on",
				navigation: {
					onHoverStop:false,
					arrows: {
						enable:true,
						tmp:"<div class=\"tp-arr-allwrapper\">	<div class=\"tp-arr-imgholder\"></div></div>",
						style:"stal_dark",
						hide_onmobile:true,
						hide_under:"500px",
						left: {
							v_align:"bottom",
							h_offset:0
						},
						right: {
							v_align:"bottom",
							h_offset:0
						}
					},
					bullets: {
						enable:true,
						tmp:"",
						style:"stal_light",
						hide_over:"100px",
						h_offset:-15,
						v_offset:50
					}
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
			});
		}
		
	});

var basicScrollTop = function () {  
  // The button
  var btnTop = document.querySelector('body');
  // Reveal the button
  var btnReveal = function () { 
    if (window.scrollY >= 300) {
      btnTop.classList.add('qodef-header--sticky-display');
    } else {
      btnTop.classList.remove('qodef-header--sticky-display');
    }    
  }  
  // Listeners
  window.addEventListener('scroll', btnReveal);    
};
basicScrollTop();