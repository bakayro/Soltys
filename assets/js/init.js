new WOW().init();

$(".scroll-up").click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});

$(".anchor-link").click(function (e) {
	var data_scroll = $($(this).data("scroll"));
	$("html, body").animate({ scrollTop: data_scroll.offset().top }, "slow", "swing", function () { });
	return false;
});

$("a[href='#top']").click(function () {
	$("html, body").animate({ scrollTop: 0 }, 100);
	return false;
});

/* COUNT-UP */
$('.counter-1').counterUp({
	delay: 10,
	time: 1750
});

$('.counter-2').counterUp({
	delay: 5,
	time: 2000
});

$('.counter-3').counterUp({
	delay: 10,
	time: 1750
});
$('.counter-4').counterUp({
	delay: 10,
	time: 1750
});

$(document).ready(function () {

	/* OWL-SLIDER */
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 1500,
		margin: 10,
		nav: false,
	})
});