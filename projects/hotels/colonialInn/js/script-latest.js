$('#fullpage').fullpage({
  sectionsColor: ['', '', '', '', ''],
      navigation: true,
      navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
	  slidesNavigation: true,
			'resize' : true,
		loopHorizontal: false,
	afterRender: function () {
		setInterval(function () {
			$.fn.fullpage.moveSlideRight();
		}, 4000);
	}
      //scrollBar: true,
	  //scrollingSpeed:2000,
      //loopBottom: true,
	  //anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
	  //menu: '#menu',
});