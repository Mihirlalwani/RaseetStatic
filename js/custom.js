$(document).ready(function(){
	var $el = $('.topHdrSec');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position-y':(+.01 * scroll) + 'px'
        });
    });

	

	// On Click Scrollar
	$('a[rel="relativeanchor"]').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 65
		}, 1000);
		return false;
	});
	$('.menu > li > a').on('click', function() {
		$('.menu > li > a').removeClass('active');
		$(this).addClass('active');
		/* Act on the event */
	});

	// Top Scroll Icon
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100){
			$('.top_scroll_btn').show();
			$('header').addClass('_fixed');
		} else {
			$('.top_scroll_btn').hide();
			$('header').removeClass('_fixed');
		}
	});

	$('.hmSlider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 2500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
	});
	$('.hmSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	    $('.slick-list').removeClass('do-transition');
	}).on('afterChange', function(){
	    $('.slick-list').addClass('do-transition');
	});


	$('.srchBtn').on('click', function() {
		$(this).addClass('open');
	});

	$('.srchClsBtn').on('click', function() {
		$('.srchBtn').addClass('open');
	});

	var collapsBtn = $('.collapsBtn');

	collapsBtn.on('click', function() {
		$(this).toggleClass('active');
		$(this).find('._cntnt').slideToggle();
	});

	$('.hmbrgerMenu').on('click', function() {
		$(this).toggleClass('active');
		$(this).closest('.subHdr').find('.mainNav').find('.menu').slideToggle();
	});
	

	var windwoWidth = $(window).width();
	$('a[rel="relativeanchor"]').on('click',  function() {
		if (windwoWidth <= 1023) {
			$(this).closest('.menu').slideUp();
			$('.hmbrgerMenu').removeClass('active');
		}		
	});

});
// $('.web').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 500,
	
//   });

$(document).ready(function(){
	$('.web').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay:true,
		autoplaySpeed:2000,
		dots:true,
		
	});
  });

//carousel effect
// const img31=document.querySelector(".hwitWrkSec ._imgCont.web img.img31");
// const img32=document.querySelector(".hwitWrkSec ._imgCont.web img.img32");

// 	setTimeout(carousel,2000);

// function carousel(){
//      if(img31.style.display==="none"){
// 		 img31.style.display="block";
// 		 img32.style.display="none";
// 	 }else{
// 		img31.style.display="none";
// 		img32.style.display="block";
// 	 }
// }
