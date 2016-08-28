$(document).ready(function () {
	$('.submenu-body').on("click", function(e){ //введение подменю
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});


	var totalItems = $('.navbar-nav').children().length;
	var itemWidth = 100 / totalItems + "%";

	function calcSize () {
		console.log("size changed")
		var innerItemWidth = $('.navbar-nav').outerWidth(true)/totalItems;
		$('.navbar-nav').children().css('width',itemWidth);
		$('.dropdown-menu li').css('width',innerItemWidth);
		$('ul.inner-menu').css('left',innerItemWidth);
		$('ul.nav li.dropdown:last ul.inner-menu').css('left',-innerItemWidth-1);
	};

	calcSize();
	$(window).resize(function(){
		calcSize ();
	});

});