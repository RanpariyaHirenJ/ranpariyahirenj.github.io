/*
 * Homepage
 *
 */

var $window = $('.scrollbox3');
var scrollTime = 1.2;
var scrollDistance = 170;
var w = window.innerWidth;
var h = window.innerHeight;
var home = document.querySelector('#homepage body');


if ( is_touch_device() == true ) {
	// Add class to reposition elements that will be without parallax
	document.getElementsByTagName('body')[0].classList.add('noparallax');
}

if ( bowser.msie ) {
	document.getElementsByTagName('body')[0].classList.add('ie');
}

if ( is_touch_device() !== true ) {
	document.querySelector('body').classList.add('desktop');
} else {
	document.querySelector('body').classList.add('mobile');
}


// Dismiss cookies warning on click if cookie is not set
$('#cookies button, #cookies span').click(function(){
	setCookie('cookies', 1, 10);
	$('#cookies').removeClass('cookies--show');
});

// show cookies warning
if ( !getCookie('cookies') ) {
	$('#cookies').addClass('cookies--show');
}

document.addEventListener('gesturestart', function (e) {
	e.preventDefault();
});


// Check client screen ratio
window.onresize = function(event) {
	if (typeof(home) != 'undefined' && home != null) {
		checkConditions();
		calculateVisibilityForDiv();
	}
};

window.onload = function () {
	document.querySelector('body').classList.remove('loading-page');
	if (typeof(home) != 'undefined' && home != null) {
		checkConditions();
		calculateVisibilityForDiv();
	}
}


// Scroll or drag to explore arrow
$('#arrow-navigate').click(function(){
	// Go to second stage
	navAnchor(this, '.box.second', 'nav__second');
	// and remove arrow from scene
	$(this).fadeOut(400, function() {
		$(this).remove();
	});
});


// Logo animation
var logoSignTop = document.getElementById('logo-main-top');
var logoSignBottom = document.getElementById('logo-main-bottom');

if (typeof(home) != 'undefined' && home != null) {
	setInterval(function(){
		new TimelineMax()
		.to( [logoSignTop, logoSignBottom] , 1, { fill: '#00f6ff' , ease:Power1.easeInOut })
		.to( [logoSignTop, logoSignBottom] , 1, { fill: '#ffffff' , ease:Power1.easeInOut }, '+=5');
	}, 5000);
}


if (typeof(home) != 'undefined' && home != null) {
	// walk scene with mouse wheel
	$(document).on("mousewheel DOMMouseScroll", function(event){
		event.preventDefault();

		// only if document has not an active overlay
		if ( !$('body').hasClass('on-overlay') ) {

			parallaxElements();

			var delta = event.originalEvent.wheelDelta / 80 || - event.originalEvent.detail / 3;
			var scrollLeft = $window.scrollLeft();
			var finalScroll = scrollLeft - parseInt(delta * scrollDistance);

			if ( scrollLeft > 100 ) {
				$('#arrow-navigate').fadeOut(400, function() {
					$(this).remove();
				});
			}

			TweenMax.to($window, scrollTime, {
				scrollTo : {
					x: finalScroll,
					autoKill:true
				},
				ease: Power1.easeInOutQuad,
				overwrite: 5,
				onUpdate: function() {
					calculateVisibilityForDiv();
				}
			});

		}

	});

	// bind arrow keys to navigate: left, right
	window.onkeydown = function(e) {
		if(e.keyCode == 37 || e.keyCode == 39){

			calculateVisibilityForDiv();
			parallaxElements();

		}
	};
}


// var clickToDiscover = document.querySelector('#case-interaction button');
// var bagCase = document.getElementById('case');

// if (typeof(clickToDiscover) != 'undefined' && clickToDiscover != null) {
// 	clickToDiscover.onclick = function() {
// 		this.blur();
// 		new TimelineMax()
// 		.to( this, 1, { opacity: 0, ease:Power1.easeInOut } )
// 		// Enter Case
// 		.to( bagCase, 2, { opacity: 1, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}) } )
// 		// Leave Case
// 		.to( bagCase, 2, { opacity: 0, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}) }, '+=4' )
// 		.to( this, 1, { opacity: 1, ease:Power1.easeInOut } );
// 	}
// }

var personaBtn = document.getElementById('persona-interaction');
var persona = document.getElementById('persona');

if (typeof(personaBtn) != 'undefined' && personaBtn != null) {
	personaBtn.onclick = function() {
		new TimelineMax()
		.to( this, 1, { opacity: 0, ease:Power1.easeInOut } )
		// Enter Persona
		.to( persona, 2, { opacity: 1, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}) } )
		// Leave Persona
		.to( persona, 2, { opacity: 0, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}) }, '+=4' )
		.to( this, 1, { opacity: 1, ease:Power1.easeInOut } );
	}
}


// Open and Close Menu

var triggerMenu = document.querySelector('.burguer-menu');
var containerMenu = document.querySelector('.head-menu');

triggerMenu.onclick = function() {
	this.classList.toggle('active');
	if ( !hasClass(containerMenu, 'head-menu--open') ) {
    	containerMenu.classList.add('head-menu--open');
    	document.getElementsByTagName('body')[0].classList.add('on-overlay');
	} else if ( hasClass('head-menu--open') ) {
    	document.getElementsByTagName('body')[0].classList.remove('on-overlay');
		containerMenu.classList.add('head-menu--closing');
		setTimeout(function(){
			containerMenu.classList.remove('head-menu--open');
		}, 1000);
		setTimeout(function(){
			containerMenu.classList.remove('head-menu--closing');
		}, 2500);
	}
}


// Open and Close Share window

var shareContainer = document.querySelector('.share-container');

$(document).on('click', '.tools__share', function() {
	this.classList.toggle('active');
	if ( !hasClass(shareContainer, 'share-container--open') ) {
		shareContainer.classList.add('share-container--open');
		document.getElementsByTagName('body')[0].classList.add('on-overlay');
		document.querySelector('.share-list__wrapper').style.filter = 'blur(0.1px)';
		setTimeout(function(){
			document.querySelector('.share-list__wrapper').style.filter = 'blur(0px)';
		}, 2000);
	} else if ( hasClass(shareContainer, 'share-container--open') ) {
		document.getElementsByTagName('body')[0].classList.remove('on-overlay');
		shareContainer.classList.add('share-container--closing');
		setTimeout(function(){
			shareContainer.classList.remove('share-container--open');
		}, 1000);
		setTimeout(function(){
			shareContainer.classList.remove('share-container--closing');
		}, 2500);
	}
});

$(document).on('click', '.share-close', function() {
	$('.tools__share').toggleClass('active');
	if ( hasClass(shareContainer, 'share-container--open') ) {
		document.getElementsByTagName('body')[0].classList.remove('on-overlay');
		shareContainer.classList.add('share-container--closing');
		setTimeout(function(){
			shareContainer.classList.remove('share-container--open');
			shareContainer.classList.remove('share-container--closing');
		}, 1500);
	}
});


// Open and Close Info at bottom

var closeInfo = document.querySelector('.bottom__info-close');
var infoContainer = document.querySelector('.bottom__info');

$(document).on('click', '.bottom__info-trigger', function() {
	$('.bottom__info').addClass('bottom__info--open');
});

$(document).on('click', '.bottom__info-close', function() {
	$('.bottom__info').addClass('bottom__info--closing');
	setTimeout(function(){
		$('.bottom__info').removeClass('bottom__info--open');
		$('.bottom__info').removeClass('bottom__info--closing');
	}, 400);
});

// Wait animation to complete to remove the class
// if (typeof(infoContainer) != 'undefined' && infoContainer != null) {
	setTimeout(function(){
		$('.bottom__info').removeClass('bottom__info--open');
		$('.bottom__info').removeClass('bottom__info--closing');
	}, 500);
// }


// Open and Close lang menu

var focus = 0;
$('.lang-menu button').click(function(e){
	if ( focus == 1 ) {
		$(this).removeClass('open');
		focus = 0;
		document.querySelector('body').click();
	} else {
		$(this).addClass('open');
		focus = 1;
	}
	e.preventDefault();
	e.stopPropagation();
});

$('*:not(.lang-menu button)').click(function(event){
	$('.lang-menu button').removeClass('open');
	focus = 0;
});



/**
 *
 * Stage Interactions
 *
**/

// Press space to complete path

var spaced = 0;
var pressSpaceBtn = document.querySelector('.press-space');

document.onkeydown = function(e) {
	if (typeof(home) != 'undefined' && home != null) {
		if ( e.keyCode == 32 && spaced == 0 ) { // if spacebar pressed
			new TweenLite.fromTo('#solid', 1, {drawSVG:'20%', ease:Power1.easeInOut}, {drawSVG:'50%', ease:Power1.easeInOut} );
		} else if ( e.keyCode == 32 && spaced == 1 ) { // if path is half way
			new TweenLite.fromTo('#solid', 1, {drawSVG:'50%', ease:Power1.easeInOut}, {drawSVG:'100%', ease:Power1.easeInOut} );
			new TimelineMax().to( pressSpaceBtn, 0.5, { opacity: 0, ease:Power1.easeInOut }, '+=1' );
		}

		// if escape key is pressed, dismiss interaction
		if ( e.keyCode == 27 && $target != 'undefined' && $target != null ) {
			$('.room__characters').removeClass('blur');

			// element, duration, proprieties{ css, animationType }, overlap/delay
			var tl = new TimelineMax();
			tl.to( $('.interaction-overlay').find('.interaction-desc'), 1, {  opacity: 0, transform: 'translate3d(0, 70px, 0)', ease:Power4.easeInOut })
			  .to( $('.interaction-overlay'), 0.1, { opacity: 0, ease:Power1.easeInOut })
			  .to( $('.interaction-overlay'), 0.5, { opacity: 0, ease:Power1.easeInOut }, "-=1")
			  .to( $('.interaction-overlay'), 0, { display: 'none' })
			  .to( $('.interaction-overlay'), 0, { display: 'none' } )
			  .to( $('#couch'), 0.2, { opacity: 0 } );

			$('.interaction-overlay').find('.interaction-desc').removeClass('shown');

			if ( pressSpaceBtn != null ) {
				setTimeout(function() {
					pressSpaceBtn.style.opacity = 1;
				}, 1000);
			}

			$('body').removeClass('on-overlay');
		}

		// prevent click bubling 
		if ( e.keyCode == 32 || e.keyCode == 27 ) {
			e.preventDefault();
		}
		spaced++;
	}
};


// Open interaction
$('.box .interaction').click(function(){

	// Get target position
	$target = $(this).attr('data-target');

	if ( $target != 'second' && $target != 'fourth' && $target != 'sixth' ) {

		// Change mouse cursor
		$('body').addClass('toClose');
		$('.interaction-overlay').css({display:'block'});
		$('.interaction__' + $target).css({display:'block'});

		if ( $target == 'third' && w > 992 ) {
			// init path to 20%
			TweenLite.fromTo('#solid', 1, {drawSVG:0, ease:Power1.easeInOut}, {drawSVG:'20%', ease:Power1.easeInOut} );
			spaced = 0;
		}

		if ( w > 992 ) {
			// element, duration, proprieties{ css, animationType }, overlap/delay
			var translateAmount = $('.interaction__' + $target + ' .interaction-desc').outerHeight() / 2;
			var tl = new TimelineMax();
			tl.to( $('.interaction-overlay') , 0.5, { opacity: 1 , ease:Power1.easeInOut })
			  .to( $('.interaction__' + $target + ' .interaction-desc') , 2, {  opacity: 1, transform: 'translate3d(0, -' + translateAmount + 'px, 0)' }, '-=0.5')
			  .to( $('.interaction__' + $target) , 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=0.5');
		} else {
			// element, duration, proprieties{ css, animationType }, overlap/delay
			var translateAmount = $('.interaction__' + $target + ' .interaction-desc').outerHeight() / 2;
			var tl = new TimelineMax();
			tl.to( $('.interaction-overlay') , 0.5, { opacity: 1 , ease:Power1.easeInOut })
			  .to( $('.interaction__' + $target + ' .interaction-desc') , 2, {  opacity: 1, transform: 'translate3d(0, 20px, 0)' }, '-=0.5')
			  .to( $('.interaction__' + $target) , 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=0.5');
		}

		setTimeout(function(){
			$('.interaction__' + $target + ' .interaction-desc').addClass('shown');
		}, 500);

		// To prevent user from scroll
		$('body').addClass('on-overlay');

	} else if ( $target == 'fourth' ) {

		var room = document.getElementById('room');
		var astronaut = document.querySelector('.room__astronaut');

		room.classList.add('room-container--active');
		setTimeout(function(){
			room.classList.add('room-container--open');
		}, 100);

		setTimeout(function(){
			room.classList.add('room-container--in');
		}, 1500);

		$('body').addClass('on-overlay');

		// Enable parallax each time room is open
		scene = $('.room-container--active .room__characters').get(0);
		parallax = new Parallax(scene);

	}

});

// Room interaction
$('#sixth-interaction').click(function(){
	// Change mouse cursor
	$('body').addClass('toClose');
	$('.interaction-overlay').css({display:'block'});
	$('.interaction__sixth').css({display:'block'});


	if ( w > 992 ) {
		// element, duration, proprieties{ css, animationType }, overlap/delay
		var translateAmount = $('.interaction__sixth .interaction-desc').outerHeight() / 2;
		var tl = new TimelineMax();
		tl.to( $('.interaction-overlay') , 0.5, { opacity: 1 , ease:Power1.easeInOut })
		  .to( $('.interaction__sixth .interaction-desc') , 2, {  opacity: 1, transform: 'translate3d(0, -' + translateAmount + 'px, 0)' }, '-=0.5')
		  .to( $('.interaction__sixth') , 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=0.5')
		  .to( $('#couch'), 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=1')
		  .add( function() {
		  	$('.room__characters').addClass('blur');
		  }, '-=3' );
	} else {
		// element, duration, proprieties{ css, animationType }, overlap/delay
		var translateAmount = $('.interaction__sixth .interaction-desc').outerHeight() / 2;
		var tl = new TimelineMax();
		tl.to( $('.interaction-overlay') , 0.5, { opacity: 1 , ease:Power1.easeInOut })
		  .to( $('.interaction__sixth .interaction-desc') , 2, {  opacity: 1, transform: 'translate3d(0, 20px, 0)' }, '-=0.5')
		  .to( $('.interaction__sixth') , 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=0.5')
		  .to( $('#couch'), 1, {  opacity: 1 , ease:Power1.easeInOut }, '-=1')
		  .add( function() {
		  	$('.room__characters').addClass('blur');
		  }, '-=3' );
	}

	setTimeout(function(){
		$('.interaction__sixth .interaction-desc').addClass('shown');
	}, 1000);

	$('body').addClass('on-overlay');
});


var closeRoom = document.getElementById('fifth-interaction');

if (typeof(closeRoom) != 'undefined' && closeRoom != null) {
	closeRoom.onclick = function() {
		room.classList.add('room-container--close');
		setTimeout(function(){
			room.classList.remove('room-container--in');
			room.classList.remove('room-container--open');
			room.classList.remove('room-container--active');
			$('body').removeClass('on-overlay');
			room.classList.remove('room-container--close');
			// Disable characters parallax when not in room
			parallax.disable();
		}, 500);
	}
}


// Close interaction
$('.interaction-overlay').click(function(){

	$('.room__characters').removeClass('blur');

	// element, duration, proprieties{ css, animationType }, overlap/delay
	var tl = new TimelineMax();
	tl.to( $(this).find('.interaction-desc'), 1, {  opacity: 0, transform: 'translate3d(0, 70px, 0)', ease:Power4.easeInOut })
	  .to( $(this), 0.1, { opacity: 0, ease:Power1.easeInOut })
	  .to( $('.interaction-overlay'), 0.5, { opacity: 0, ease:Power1.easeInOut }, "-=1")
	  .to( $(this), 0, { display: 'none' })
	  .to( $('.interaction-overlay'), 0, { display: 'none' } )
	  .to( $('#couch'), 0.2, { opacity: 0 } );

	$(this).find('.interaction-desc').removeClass('shown');

	if ( pressSpaceBtn != null ) {
		setTimeout(function() {
			pressSpaceBtn.style.opacity = 1;
		}, 1000);
	}

	$('body').removeClass('on-overlay');

});





/**
 *
 * 360 view
 *
**/

var enterMuseum = document.getElementById('second-interaction');

if (typeof(enterMuseum) != 'undefined' && enterMuseum != null) {
 	enterMuseum.onclick = function() {
 		openMuseum();
 	}
}

var museumContainer = document.getElementById('museum');

function openMuseum() {
 	museumContainer.classList.add('museum-container--open');
 	setTimeout(function(){
 		var xmlhttp = new XMLHttpRequest();

		// Open 360 view by ajax
 		xmlhttp.onreadystatechange = function() {
 			if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
 				if (xmlhttp.status == 200) {
 					museumContainer.innerHTML = xmlhttp.responseText;
 					embedpano({swf:"/tour.swf", xml:"/tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
 					museumContainer.classList.add('museum-container--loaded');
 					window.addEventListener('devicemotion', function(event) {
 					    if ( event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma ) {
 					    	// plugin[gyro].enabled;
 					    }
 					});
 				} else if (xmlhttp.status == 400) {
 					alert('There was an error 400');
 				} else {
 					alert('something else other than 200 or 400 was returned');
 				}
 			}
 		};
 		// Prevent stage scrolling while on 360
 		document.getElementsByTagName('body')[0].classList.add('on-overlay');

 		xmlhttp.open('GET', '/tour.html', true);
 		xmlhttp.send();
 	}, 500);
}


// Exit and remove Museum

function exitMuseum() {
	museumContainer.classList.remove('museum-container--loaded');
	museumContainer.classList.add('museum-container--close');
	document.getElementsByTagName('body')[0].classList.remove('on-overlay');
	setTimeout(function(){
		museumContainer.classList.remove('museum-container--open');
		museumContainer.classList.remove('museum-container--close');
		museumContainer.innerHTML = '<span></span>';
	}, 1000);
}


// to checkConditions()
var boxEl = document.querySelectorAll('.box'),
	imgPane = document.querySelector('.imgPane'),
	charElems = document.querySelectorAll('.px-el img, .room__characters img'),
	descBox = document.querySelectorAll('.intro__desc'),
	parentDrag = null,
	// set different drag force values for desktop and mobile
	// 0 on mobile has no resistance
	// 0.5 on mobile has no resistance
	dragValue = ( is_touch_device() == true ? 0 : 0.5 );

function checkConditions() {
	if (typeof(home) != 'undefined' && home != null) {
		w = window.innerWidth;
		h = window.innerHeight;
		var ratioResult =  w / h;

		// if ( ratioResult < 1.3 || ratioResult > 2.4 || w < h ) {
		if ( ratioResult < 1.3 || w < h ) {
			$('.check-device').show();
			return false;
		} else {
			$('.check-device').hide();
		}

		imgPane.style.height = h + 'px';

		document.querySelector('.container').style.height = h + 'px';
		document.querySelector('.container').style.width = imgPane.offsetWidth + 'px';


		for ( var i = 0; i < boxEl.length; i++ ) {
			boxEl[i].style.height = h + 'px';
			boxEl[i].style.width = imgPane.offsetWidth / 4 + 'px';
		}


		// Update first and last intro
		var transformDiff = (w - descBox[0].parentNode.offsetWidth) / 2;
		descBox[0].style.transform = 'translate3d(' + transformDiff + 'px, 0, 0)';
		descBox[descBox.length-1].style.transform = 'translate3d(-' + transformDiff + 'px, 0, 0)';


		// Resize scene characters
		for (var i = 0; i < charElems.length; i++) {
			var size = charElems[i].getAttribute('data-size');
			charElems[i].style.height = ( h * size ) / 100 + 'px';
		}


		if ( parentDrag == null ) {
			parentDrag = Draggable.create(".scrollbox3", {
				type:"scrollLeft",
				lockAxis:true,
				throwProps:true,
				dragClickables:true,
				dragResistance: dragValue,
				onDrag: function() {
					if ( is_touch_device() !== true ) {
						parallaxElements();
					}
					if ( this.endX > -100 ) {
						$('#arrow-navigate').fadeOut(400, function() {
							$(this).remove();
						});
					}
					calculateVisibilityForDiv();
				},
				onThrowUpdate: function() {
					if ( is_touch_device() !== true ) {
						parallaxElements();
					}
					if ( this.endX > -100 ) {
						$('#arrow-navigate').fadeOut(400, function() {
							$(this).remove();
						});
					}
					calculateVisibilityForDiv();
				}
			});
		}

	}
}



// First stage active by default
var activeNav = 0;


// Calculate which stage is active
var wrapper = document.querySelector('.scrollbox3');

function calculateVisibilityForDiv() {

	var boxStage = document.querySelectorAll('.box');
	var docScroll = 0;
	var windowWidth = document.documentElement.clientWidth;

	for (var i = 0; i < boxStage.length; i++) {
		var divPosition = boxStage[i].getBoundingClientRect().left;
		var divWidth = boxStage[i].offsetWidth;
		var hiddenBefore = docScroll - divPosition;
		var hiddenAfter = (divPosition + divWidth) - (docScroll + windowWidth);

		if ((docScroll > divPosition + divWidth) || (divPosition > docScroll + windowWidth)) {
			if ( boxStage[i].classList[1] == 'first' ) {
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.left = '100%';
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.right = 0;
			} else if ( boxStage[i].classList[1] == 'fourth' ) {
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.right = '100%';
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.left = 0;
			}
		} else {
			var result = 100;

			resultBefore = result - (100 - (hiddenBefore * 100) / divWidth);
			resultAfter = result - (100 - (hiddenAfter * 100) / divWidth);

			if (hiddenBefore > 0) {
				// update nav progress previous page
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.left = Math.max(resultBefore, 0) + '%';
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.right = Math.max(resultAfter, 0);

				if ( boxStage[i].classList[1] == 'first' || boxStage[i].classList[1] == 'second' ) {
					document.querySelector('#nav__third i').style.right = '100%';
					document.querySelector('#nav__third i').style.left = 0;
				}
				if ( boxStage[i].classList[1] == 'third' || boxStage[i].classList[1] == 'fourth' ) {
					document.querySelector('#nav__second i').style.left = '100%';
					document.querySelector('#nav__second i').style.right = 0;
				}
				if ( boxStage[i].classList[1] == 'second' || boxStage[i].classList[1] == 'fourth' ) {
					if ( windowWidth < divWidth ) {
						document.querySelector('#nav__third i').style.left = '100%';
						document.querySelector('#nav__third i').style.right = 0;
					} else {
						document.querySelector('#nav__third i').style.left = 0;
						document.querySelector('#nav__third i').style.right = 0;
					}
				}
				if ( boxStage[i].classList[1] == 'fourth' ) {
					document.querySelector('#nav__second i').style.left = '100%';
					document.querySelector('#nav__second i').style.right = 0;
				}
			}

			if (hiddenAfter > 0) {
				// update nav progress previous page
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.right = Math.max(resultAfter, 0) + '%';
				document.querySelector('#nav__' + boxStage[i].classList[1] + ' i').style.left = Math.max(resultBefore, 0);
			}
		}
	}

	// updates current nav

	var anchorActive = document.querySelectorAll('.bottom__nav__column');

	var ele = findMostVisible($('.box'));
	if ( ele != false ) {
		// gets index of active stage
		eleIndex = ele.index() - 2;
		anchorActive[eleIndex].children[0].classList.add('active');
		if ( activeNav != eleIndex ) {
			// remove previous active class if active stage is another one
			anchorActive[activeNav].children[0].classList.remove('active');
			// saves the new one for later
			activeNav = eleIndex;
		}
	} else {
		// if undefined last active continues active
		anchorActive[activeNav].children[0].classList.add('active');
	}
}

// Add parallax effects to elements
function parallaxElements() {
	if (typeof(home) != 'undefined' && home != null) {
		if ( is_touch_device() !== true ) {
			var containerScroll = document.querySelector('.scrollbox3');
			var parallaxElms = document.querySelectorAll('.box .px-el');
			var sky = document.querySelector('.imgPaneSky');
			for ( var i = 0; i < parallaxElms.length; i++ ) {

				if ( checkVisibleHorizontal( parallaxElms[i] ) ) {
					// Microsoft browsers and Safari gets
					// jumpy when animating with transforms
					// class wheel adds transition propriety to secure smooth positioning
					if ( bowser.msie || bowser.msedge || bowser.safari ) {
						document.querySelector('body').classList.add('wheel');
					} 
					parallaxElms[i].style.transform = 'translate3d(' + $(containerScroll).scrollLeft() / parallaxElms[i].getAttribute('data-speed') + 'px, 0, 0)';
					// TweenMax.to(parallaxElms[i], 0.3, {css:{marginLeft: $(containerScroll).scrollLeft() / parallaxElms[i].getAttribute('data-speed') }});
				}

			}

			// Disable sky parallax on mobile devices
			// due to performance reasons
			if ( is_touch_device() !== true ) {
				sky.style.transform = 'translate3d(' + $(containerScroll).scrollLeft() / sky.getAttribute('data-speed') + 'px, 0, 0)';
			}
		}
	}
}


// Enable bottom navigation - snap stage
function navAnchor(el, target, nav) {

	// Different center calculations for second, third and last stage
	if ( nav == 'nav__second' || nav == 'nav__third' ) {
		// Calculate middle position
		var delta = $(target).offset().left;
		var scrollLeft = $window.scrollLeft();	
		var windowW = window.innerWidth;
		var finalScroll = scrollLeft + parseInt(delta) - ( (window.innerWidth - $(target).width() ) / 2);
	} else if ( nav == 'nav__fourth' ) {
		var boxRatio = $('.box.fourth').width() / $('.box.fourth').height();
		var windowRatio = window.innerWidth / window.innerHeight;
		if ( boxRatio > windowRatio ) {
			var delta = $(target).offset().left;
			var scrollLeft = $window.scrollLeft();	
			var windowW = window.innerWidth;
			var finalScroll = scrollLeft + parseInt(delta) - ( (window.innerWidth - $(target).width() ) / 2);
		} else {
			var imgPane = document.querySelector('.imgPane');
			var finalScroll = imgPane.offsetWidth - window.innerWidth;
		}
	} else {
		var delta = $(target).offset().left;
		var scrollLeft = $window.scrollLeft();	
		var finalScroll = scrollLeft + parseInt(delta);
	}

	// Remove arrow
	if ( finalScroll > 100 ) {
		$('#arrow-navigate').fadeOut(400, function(){
			$(this).remove();
		});
	}

	// Go to area
	TweenMax.to($window, 2, {
		scrollTo : {
			x: finalScroll,
			autoKill:true
		},
		ease: Expo.easeInOut,
		overwrite: 5,
		onUpdate: function() {
			if ( is_touch_device() !== true ) {
				parallaxElements();
			}
			calculateVisibilityForDiv();
		}
	});

}




// Stop and Play background sound

var soundCookie = null;
var soundToggle = document.querySelector('.tools__sound');
var sounds = document.getElementsByTagName('audio')[0];
if (typeof(sounds) != 'undefined' && sounds != null) {
	sounds.autoplay = false;
	sounds.volume = 0;

	if ( getCookie('sound') == 0 && is_touch_device() !== true ) {
		fadeInSound();
	} else {
		soundToggle.classList.add('paused');
	}

	if (typeof(soundToggle) != 'undefined' && soundToggle != null) {
		soundToggle.onclick = function() {
			if ( hasClass(this, 'paused') ) {
				this.classList.remove('paused');
				this.classList.add('playing');
				setCookie('sound', 0, 4);
				fadeInSound();
				// sounds.volume = 1;
			} else {
				this.classList.remove('playing');
				this.classList.add('paused');
				setCookie('sound', 1, 4);
				fadeOutSound();
				// sounds.volume = 0;
			}
		}
	}
}


function fadeOutSound() {
	sounds.volume = 0;
	sounds.pause();
	// var newVolume = sounds.volume - 0.1;
	// // Check if the newVolume is greater than zero
	// if(newVolume >= 0){
	// 	sounds.volume = newVolume;
	// } else {
	// 	// Stop fade
	// 	clearInterval(interval);
	// 	sounds.volume = 0;
	// 	sounds.currentTIme = 0;
	// }
}

function fadeInSound() {
	sounds.volume = 1;
	sounds.play();
	// var newVolume = sounds.volume + 0.1;
	// Check if the newVolume is less than one
	// if(newVolume <= 1){
		// sounds.volume = newVolume;
	// } else {
		// Stop fade
		// clearInterval(interval);
		// sounds.volume = 1;
		// setCookie('sound', 0, 4);
		// soundToggle.classList.add('playing');
	// }
}




// Detect if device is touch
function is_touch_device() {
	return 'ontouchstart' in window // works on most browsers 
	|| navigator.maxTouchPoints;	// works on IE10/11 and Surface
}


// Set, Get and Check Cookies
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toGMTString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie( cname ) {
	return /^(.*;)?\s*cookie1\s*=\s*[^;]/.test(cname);
}



var pageAnchors = document.querySelectorAll('.menu-list__main a, .page-menu a, .logo');

for (var i = 0; i < pageAnchors.length; i++) {
	pageAnchors[i].onclick = function(e) {
		e.preventDefault();
		var location = this.getAttribute('href');
		document.querySelector('body').classList.add('exit-page');
		setTimeout(function() {
			window.location.href = location;
		}, 1000);
	};
}



// Hero intro parallax
$(document).on('scroll', function() {

	var $hero = $('.hero-intro'),
		heroTitle = document.querySelector('.hero-intro h1'),
		$heroSubtitle = $('.hero-intro h3'),
		move,

		$headerMenu = $('.head-menu'),
		$targetNav = $('.full.white');

	if ( $hero.length > 0 ) {
		move = 50 - ((($hero.offset().top - $(window).scrollTop()) / 2) * 100) / $hero.outerHeight();
		if ( move > 100 ) {
			move = 100;
		}
		// $heroTitle.css({ top: move + '%' });
		heroTitle.style.top = move + '%';
	}

	if ( $(window).scrollTop() > 100 ) {
		$('.hero__scroll').addClass('hide');
	} else {
		$('.hero__scroll').removeClass('hide');
	}


	// Change 
	if ( $targetNav.length ) {
		if ( $targetNav.offset().top - $(window).scrollTop() - $headerMenu.outerHeight() <= 0 ) {
			$headerMenu.addClass('light');
		} else {
			$headerMenu.removeClass('light');
		}

		// Change 
		if ( $targetNav.offset().top - $(window).scrollTop() - $headerMenu.outerHeight() <= 50 ) {
			$targetNav.addClass('show');
		} else {
			$targetNav.removeClass('show');
		}
	}
});


var slider = document.querySelector('.slider');

if (typeof(slider) != 'undefined' && slider != null) {

	var controls = document.querySelectorAll('.slider__controls');

	for(var i = 0; i < controls.length; i++){
		controls[i].style.display = 'inline-block';
	}

	var slides = document.querySelectorAll('#slider__slides .slider__slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,2000);
	var dot = document.querySelectorAll('.slider__pager li');

	currentPage(currentSlide);

	function currentPage(page) {
		for ( var i = 0; i < dot.length; i++ ) {
			dot[i].classList.remove('active');
		}
		dot[page].classList.add('active');
	}

	function nextSlide() {
		goToSlide(currentSlide+1);
		currentPage(currentSlide);
	}

	function previousSlide() {
		goToSlide(currentSlide-1);
		currentPage(currentSlide);
	}

	function goToSlide(n) {
		slides[currentSlide].className = 'slider__slide';
		currentSlide = (n + slides.length)%slides.length;
		slides[currentSlide].className = 'slider__slide showing';
	}

	var playing = true;

	function pauseSlideshow() {
		playing = false;
		clearInterval(slideInterval);
	}

	function playSlideshow() {
		playing = true;
		slideInterval = setInterval(nextSlide,4000);
	}

	var next = document.getElementById('slider__next');
	var previous = document.getElementById('slider__previous');
	var pag = document.querySelectorAll('.slider__pager li button');

	for ( var i = 0; i < pag.length; i++ ) {
		pag[i].onclick = function() {
			for ( var j = 0; j < pag.length; j++ ) {
				pag[j].classList.remove('active');
			}
			goToSlide(Number(this.getAttribute('data-pag')) - 1);
			this.classList.add('active');
			pauseSlideshow();
			setTimeout(playSlideshow, 10000);
		};
	}

	next.onclick = function() {
		pauseSlideshow();
		nextSlide(); 
	};
	previous.onclick = function() {
		pauseSlideshow();
		previousSlide();
	};

}


// Open and close newsletter box

$(document).on('click', '.newsletter-trigger', function(e){
	e.preventDefault();
	$('.newsletter').addClass('newsletter--show');
});

$(document).on('click', '.newsletter__close', function(e){
	$(this).parent().removeClass('newsletter--show');
});




var elmsParallax,
	backParallax,
	windowW;

document.onscroll = function() {

	elmsParallax = document.querySelectorAll('.do-parallax');
	backParallax = document.querySelectorAll('.full.img');
	windowW 	 = window.innerWidth;

	for (var i = 0; i < elmsParallax.length; i++) {
		var speed = elmsParallax[i].getAttribute('data-speed');
		var direction = elmsParallax[i].getAttribute('data-direction');
		var mobile = elmsParallax[i].getAttribute('data-mobile');

		doParallax(speed, direction, elmsParallax[i], mobile);
	}

	// Apply parallax to fullscreen images
	if ( typeof(backParallax) != 'undefined' && backParallax != null && windowW > 992 ) {
		for (var i = 0; i < backParallax.length; i++) {
			if ( backParallax[i].offsetHeight > backParallax[i].offsetWidth ) {
				backParallax[i].style.backgroundSize = 'auto 150%';

				if ( checkVisible(backParallax[i]) ) {
					var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
						bodyRect = document.body.getBoundingClientRect(),
						elemRect = backParallax[i].getBoundingClientRect(),
						offset   = elemRect.top - bodyRect.top;
					backParallax[i].style.backgroundPosition = '50% ' + (offset - scrollTop) / 4 + 'px';
				}
			} else {
				if ( checkVisible(backParallax[i]) ) {
					var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
						bodyRect = document.body.getBoundingClientRect(),
						elemRect = backParallax[i].getBoundingClientRect(),
						offset   = elemRect.top - bodyRect.top;
					backParallax[i].style.backgroundPosition = '50% ' + (offset - scrollTop) / 2 + 'px';
				}
			}
		}
	}
};



// Set mouse parallax to list active cell
$(document).on({
	'mousemove': function(e) {
		var $poster = $('.owl-item.active > div'),
			windowWidth = $(window).width(), //window width
			windowHeight = $(window).height(), //window height
			offsetX = 0.5 - e.pageX / w, //cursor position X
			offsetY = 1 - e.pageY / h, //cursor position Y
			dy = e.pageY - h / 2, //@h/2 = center of poster
			dx = e.pageX - w / 2, //@w/2 = center of poster
			theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
			angle = theta * 180 / Math.PI - 90, //convert rad in degrees
			transformPoster = 'translateY(' + (- offsetX) + 'px) rotateX(' + (- offsetY) + 'deg) rotateY(' + (offsetX * 2) + 'deg)'; //poster transform
	  	//get angle between 0-360
		if (angle < 0) {
			angle = angle + 360;
		}
		// apply poster transform
		$poster.css('transform', transformPoster);
	},
	'mouseleave': function() {
		var $poster = $('.owl-item.active > div');
		$poster.removeAttr( 'style' );
	}
}, '.owl-item.active');



if ( $('.owl-carousel').length ) {
	// List carousel settings
	var carousel_Settings = {
		items: 1,
		nav: true,
		dots: true
	};

	// init OWL slider with settings
	var $carousel = $('.owl-carousel').owlCarousel( carousel_Settings );
	var carouselWrapper = document.querySelector('.owl-carousel');

	// Destroy slider on mobile
	if ( !breakpointVisibility( 'sm' ) ) {
		$carousel.trigger('destroy.owl.carousel');
		carouselWrapper.classList.add('destroyed');
		control = 1;
	}

	var control = 0;
	window.onresize = function() {
		// redeclare variables due to ajax calls
		var $carousel = $('.owl-carousel').owlCarousel( carousel_Settings );
		var carouselWrapper = document.querySelector('.owl-carousel');
		// Destroy slider on mobile
		if ( !breakpointVisibility( 'sm' ) ) {
			$carousel.trigger('destroy.owl.carousel');
			carouselWrapper.classList.add('destroyed');
			control = 1;
		} else if ( control = 1 ) {
			// re-enable
			$carousel = $('.owl-carousel').owlCarousel( carousel_Settings );
			carouselWrapper.classList.remove('destroyed');
			control = 1;
		}
	}
}


$(document).on('click', '.owl-item:not(.active) a', function(e) {
	e.preventDefault();
});

/*
 * smoothState plugin
 * Set smooth page transition between list and detail
 */
var $page = $('#main'),
	options = {
		debug: true,
		prefetch: false,
		cacheLength: 0,
		anchors: 'a.smoothState',
		blacklist: '.owl-item:not(.active) a',
		onBefore: function($currentTarget, $container) {
			// if list page animates image to final position
			if ($currentTarget.parents('.owl-carousel').length) {
				moveToTop($currentTarget);
			}
		},
		onStart: {
			duration: 2000, // Duration of our animation
			render: function ($container) {
				// Add your CSS animation reversing class
				$container.addClass('is-exiting');
				// Restart your animation
				smoothState.restartCSSAnimations();
			}
		},
		onReady: {
			duration: 0,
			render: function ($container, $newContent) {
				// Remove your CSS animation reversing class
				$container.removeClass('is-exiting');
				// Inject the new content
				$container.html($newContent);
			}
		},
		onAfter: function($container, $newContent) {
			// if from list to detail animate image to top
			if ( $('.cloned').length > 0 ) {
				$('.cloned').css({ position: 'absolute', top: 0 });
				new TimelineMax().to( $('.cloned'), 1, { opacity: 0 }, '+=1');
			}
			// init OWL carousel after ajax call
			var carousel_Settings = {
				items: 1,
				nav: true,
				dots: true
			};
			var $carousel = $('.owl-carousel').owlCarousel( carousel_Settings );
			var carouselWrapper = document.querySelector('.owl-carousel');
			// check if carousel should be destroyed or not
			if ( !breakpointVisibility( 'sm' ) ) {
				$carousel.trigger('destroy.owl.carousel');
				carouselWrapper.classList.add('destroyed');
				control = 1;
			}
			// init video after ajax call
			videoTrigger();
			// init plugin again after ajax call
			smoothState = $page.smoothState(options).data('smoothState');
		}
	},
	smoothState = $page.smoothState(options).data('smoothState');




// Clone and animates image to final position

function moveToTop( $currentTarget ) {
	// removes parallax from slide
	$currentTarget.parent().removeAttr( 'style' );
	// check position relative to window
	var topPos  = Math.round( $currentTarget[0].getBoundingClientRect().top );
	var leftPos = Math.round( $currentTarget[0].getBoundingClientRect().left );
	// clone element and append to beginning of the body
	$currentTarget.find('.owl-image').clone().addClass('cloned').prependTo('body');
	// set initial size and position relative to window
	$('.cloned').css({ height: $('div', $currentTarget).outerHeight(), width: $('div', $currentTarget).outerWidth(), position: 'fixed', top: topPos, left: leftPos, overflow: 'hidden' });

	// responsive conditions
	if ( !breakpointVisibility( 'md' ) ) {
		var clonedLeft = '0';
		var clonedHeight = '50vw';
	} else {
		var clonedLeft = '20%';
		var clonedHeight = '27vw';
	}

	// animate to final position
	new TimelineMax()
		.to( $('cloned'), 0, { opacity: 1 })
		.to( $('.cloned'), 1.5, { width: 'auto', right: 0, left: clonedLeft, ease:Expo.easeInOut })
		.to( $('.cloned'), 1.5, { top: $('.head-menu').outerHeight(), height: clonedHeight, ease:Expo.easeInOut }, '-=1.5')
		.add( function() {
			$('.cloned').remove(); // remove element from DOM
		}, '+=2' ); // waiting for the image behind to fully appear
}




// Open video modal
function videoTrigger() {
	var openVideo = document.querySelector('.video-container > div');
	var videoContainer = document.querySelector('.video-overlay');
	var closeVideo = document.querySelector('.video-overlay__close');

	if (typeof(openVideo) != 'undefined' && openVideo != null) {
		openVideo.addEventListener('click', function(e) {
			videoContainer.classList.add('video-overlay--show');
		});

		closeVideo.addEventListener('click', function(e) {
			e.stopPropagation();
			e.preventDefault();
			videoContainer.classList.remove('video-overlay--show');
			// Stop video when it closes
			var video = $('.video-overlay__wrapper iframe').attr('src');
			$('.video-overlay__wrapper iframe').attr('src', '');
			$('.video-overlay__wrapper iframe').attr('src',video);
		});
	}
}
// runs it
videoTrigger();





function doParallax(speed, direction, element, mobile) {

	// Check if element exists
	if ( (typeof(element) == 'undefined' || element == null) || (typeof(speed) == 'undefined' || speed == null) ) {
		return false;
	}

	if ( window.innerWidth < 768 ) {
		if ( typeof(mobile) == 'undefined' || mobile == null || mobile == 0 ) {
			// remove styles on mobile to not overlap text
			element.removeAttribute('style');
			return false;
		}
	}

	if (typeof(direction) == 'undefined' || direction == null) {
		// default direction
		direction = 'y';
	}

	// Only do parallax if element is visible on screen
	// to have better performance
	if ( checkVisible(element) ) {
		var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
			bodyRect = document.body.getBoundingClientRect(),
		    elemRect = element.getBoundingClientRect(),
		    offset   = elemRect.top - bodyRect.top;
		element.style.transform = 'translate3d(0, ' + Math.floor((offset - scrollTop) / element.getAttribute('data-speed')) + 'px, 0)';
	}

}




// check which breakpoint is active / inactive
function breakpointVisibility( breakpoint ) {
	var breakpoint = '.' + breakpoint + '-breakpoint',
		element = document.querySelector(breakpoint);
	// Check if breakpoint exists
	if ( typeof(element) != 'undefined' && element != null ) {
		var style = window.getComputedStyle(element),
			display = style.getPropertyValue('display');
	} else {
		console.log('invalid breakpoint');
		return false;
	}

	if ( display == 'block' ) {
		return true;
	} else {
		return false;
	}
}




// Stop and Play sound when 360 open youtube player

function stopSound() {
	var backAudio = $('audio');
	var muted = false;

	backAudio.animate({volume: 0}, 1000, function(){
		muted = true;
	});
}

function resumeSound() {
	var backAudio = $('audio');
	var muted = false;

	if ( getCookie('sound') == 0 ) {
		backAudio.animate({volume: 1}, 1000, function(){
			muted = true;
		});
	}
}



// Check if element is visible on page

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < -100 || rect.top - viewHeight >= 100);
}

function checkVisibleHorizontal(elm) {
	var rect = elm.getBoundingClientRect();
	var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
	return !(rect.right < -100 || rect.left - viewWidth >= 100);
}



function findMostVisible(_elements) {

    // find window top and bottom position.
    var wleft = $(window).scrollLeft();
    var wright = wleft + $(window).width();


    var max = 0; // use to store value for testing
    var maxEle = false; // use to store most visible element

    // find percentage visible of each element
    _elements.each(function(){

        // get top and bottom position of the current element
        var left = $(this).offset().left;
        var right = left + $(this).width();

        // get percentage of the current element
        var cur = eleVisible(left, right, wleft, wright);
        
        // if current element is more visible than previous, change maxEle and test value, max 
        if(cur > max) {
            max = cur;
            maxEle = $(this);
        }
    });

    return maxEle;
}

// find visible percentage
function eleVisible(left, right, wleft, wright) {

    var wwidth = wright - wleft;

    // both bottom and top is vissible, so 100%
    if(left > wleft && left < wright && right > wleft && right < wright) {
        return 100;
    }

    // only left is visible
    if(left > wleft && left < wright) {
        return  100 + (wleft - left) / wwidth * 100;
    }

    // only right is visible
    if(right > wleft && right < wright) {
        return  100 + (right - wright) / wwidth * 100;
    }

    // element is not visible
    return 0;
}


/* Helpers */

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function shuffleArray(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}



/**
 * incluir jquery validate
 * criar form <form method="post" class="js-form" action="#">
 * category-contact -> category_contact
 * substituir <button> por <a  href="#" class="button-send js-btn-submit">
 * <div class="field-select-holder"> a envolver a <select>
 * incluir <input type="hidden" name="subject" value="assunto do contacto" /> no form
 * nas <select>s, o value deve ser o texto e não um nº para o texto ir no email e funcionar de forma dinamica
 */

$(document).ready(function () {

    /**
     * ao tentar submeter, validar e enviar por ajax
     */
    $('.js-btn-submit').click(function () {
		// check if Google Recaptcha is solved
		if ( $('.g-recaptcha').length > 0 ) {
			var response = grecaptcha.getResponse();
		}
		var $element = $(this);
		
        if( $('.g-recaptcha').length > 0 && response.length == 0 && !$(this).hasClass('no-captcha')) {
    		alert('You must validate the captcha');
        } else {
			if ( !$element.hasClass('no-captcha') ) {
	       		if ( validateForm() ) {
					$.ajax({
						url: 'formHandler.php',
						type: 'POST',
						data: $('.js-form').serialize(),
						dataType: 'json',
						success: function (dataJson) {
							if ( dataJson.status == 1 ) {
								$('.form-demo').empty();
								$('.form-demo').html('<div class="warning success">' + dataJson.msg + '</div>');
								// alert(dataJson.msg);
							
							} else {
								var $divForm = $('.form-demo').html();
								$('.form-demo').html( '<div class="warning error">' + dataJson.msg + '</div>' + $divForm );
								// alert(dataJson.msg);
							}
							// dataJson.status == 1 -> sucesso
							// dataJson.status == 0 -> erro
							// dataJson.msg -> msg a acompanhar o status
						}
					});
				}
	        } else {

				if ( validateFormNewsletter() ) {
					
					$.ajax({
						url: 'formHandler.php',
						type: 'POST',
						data: $('.js-form-newsletter').serialize(),
						dataType: 'json',
						success: function (dataJson) {
							if ( dataJson.status == 1 ) {
								$element.parent().parent().empty().html('<div class="col-xs-12"><div class="warning success">' + dataJson.msg + '</div></div>');
								
							} else {
								$element.parent().parent().prepend('<div class="col-xs-12"><div class="warning error">' + dataJson.msg + '</div></div>');
							}
							// dataJson.status == 1 -> sucesso
							// dataJson.status == 0 -> erro
							// dataJson.msg -> msg a acompanhar o status
						}
					});
					
				}
				
			}
        }
        return false;
    });

});

function validateForm() {
    $('.js-form').validate({
        rules: {
            name: 'required',
            company: 'required',
            email: {
                required: true,
                email: true
            },
            msg: 'required'
        }
    });
    return $('.js-form').valid();
}

function validateFormNewsletter() {
    $('.js-form-newsletter').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        }
    });
    return $('.js-form-newsletter').valid();
}
