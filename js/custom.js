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
			scrollTop: $( $.attr(this, 'href') ).offset().top -65
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

	
		// $(".vertical-nav").hide(); //hide your div initially
		// var topOfOthDiv = $("#howItWorks").offset().top;
		// var botOfDiv=$("#start-serving").offset().top;
		// $(window).scroll(function() {
		// 	if($(window).scrollTop() > topOfOthDiv-100) { //scrolled past the other div?
		// 		$(".vertical-nav").show(); //reached the desired point -- show div
		// 	}
		// 	 if($(window).scrollY() = botOfDiv){
		// 		$(".vertical-nav").hide();
		// 	}
		// });

	

});

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


  
  window.addEventListener("scroll",function(e){
	if($(window).width()>1024){
	const scroll=this.scrollY;
	const navBtn=document.querySelectorAll(".vnav-item");
	const sec1=document.getElementById("howItWorks");
	const sec2=document.getElementById("get-onboard");
	const sec3=document.getElementById("start-serving");
	const vnav=document.querySelector(".vertical-nav");
	
	if(scroll>=sec1.offsetTop-(sec1.offsetHeight/2) && scroll<sec3.offsetTop+(sec3.offsetHeight/2)-70){
		$(".vertical-nav").show(500);
	}
	else{
		$(".vertical-nav").hide(500);
	}
	
		if(scroll>sec1.offsetTop-70 && scroll<sec1.offsetTop+(sec1.offsetHeight/2)){
			 navBtn[0].classList.add("active");
			 setTimeout(() => {
				navBtn[1].classList.remove("active");
				navBtn[2].classList.remove("active");
			}, 50);
			
		}
		else if(scroll>sec2.offsetTop-70 && scroll<sec2.offsetTop+(sec2.offsetHeight/2)){
			setTimeout(() => {
				navBtn[1].classList.add("active");
				navBtn[0].classList.remove("active");
				navBtn[2].classList.remove("active");
			}, 50);
			
		}
		else if(scroll>sec3.offsetTop-70 && scroll<sec3.offsetTop+(sec3.offsetHeight/2)){
			setTimeout(() => {
				navBtn[2].classList.add("active");
				navBtn[0].classList.remove("active");
				navBtn[1].classList.remove("active");
			}, 50);			
		}
	}
	
  });