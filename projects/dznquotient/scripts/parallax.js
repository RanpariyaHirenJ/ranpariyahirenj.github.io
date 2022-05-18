// Set the Scroll Page speed
// using https://github.com/gblazex/smoothscroll-for-websites
// SmoothScroll({ stepSize: 40 })

// Add some parallax
// ====================

if ($(window).width() > 1023){
	const aboutImage = document.querySelector(".aboutImage-parallax");
	const aboutText = document.querySelector(".aboutText-parallax");
	
	const howwedoImage = document.querySelector(".howwedoImage-parallax");
	const howwedosmallImage = document.querySelector(".howwedosmallImage-parallax");
	const howwedoText = document.querySelector(".howwedoText-parallax");
	
	const ourworkImage = document.querySelector(".ourwork2");
	const hellocardImage = document.querySelector(".hellocardimg");
	
	
	const text1h1 = document.querySelector(".text1h1");
	const text2h1 = document.querySelector(".text2h1");
	 
	// Create the translate3d function
	function setTranslate(xPos, yPos, el) {
	 el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
	}
	
	// Add event Listenter to Window
	window.addEventListener("DOMContentLoaded", scrollLoop, false);
	
	// Define position variables
	let xScrollPosition;
	let yScrollPosition;
	
	// Scroll function
	function scrollLoop() {
	  xScrollPosition = window.pageYOffset;
	  yScrollPosition = window.pageYOffset;
	 
	  // We only change the Y variable
	  setTranslate(0, yScrollPosition * -0.2, aboutImage);
	  setTranslate(0, yScrollPosition * 0.2, aboutText);
	  
	  
	  setTranslate(0, yScrollPosition * 0, howwedoImage);
	  setTranslate(0, yScrollPosition * 0.4, howwedosmallImage);
	  setTranslate(0, yScrollPosition * 0.19, howwedoText);
	  
	  setTranslate(0, yScrollPosition * 0.4, ourworkImage);
	  setTranslate(0, yScrollPosition * 0.2, hellocardImage);
	  
	  
	  setTranslate( xScrollPosition * 0.4, 0, text1h1);  
	  setTranslate( - xScrollPosition * 0.4, 0, text2h1);
	 
	  // We use requestAnimationFrame to target the GPU instead of the CPU
	  requestAnimationFrame(scrollLoop);
	}
}