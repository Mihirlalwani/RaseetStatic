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

  const enterBtn=document.querySelector(".enter");

  enterBtn.addEventListener("click",function submitToAPI(e) {
    e.preventDefault();
	console.log("In Api");
    var URL = "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input";

        //  var Namere = /[A-Za-z]{1}[A-Za-z]/;
        //  if (!Namere.test($("#name-input").val())) {
        //               alert ("Name can not less than 2 char");
        //      return;
        //  }
         var mobilere = /[0-9]{10}/;
         if (!mobilere.test($("#phone-input").val())) {
             alert ("Please enter valid mobile number");
             return;
         }
        //  if ($("#email-input").val()=="") {
        //      alert ("Please enter your email id");
        //      return;
        //  }

        //  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        //  if (!reeamil.test($("#email-input").val())) {
        //      alert ("Please enter valid email address");
        //      return;
        //  }

    // var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    // var email = $("#email-input").val();
    // var desc = $("#description-input").val();
    var data = {
    //    name : name,
       phone : phone,
	   
	   
    //    email : email,
    //    desc : desc
     };

    $.ajax({
      type: "POST",
      url : "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input",
      dataType: "json",
	  headers:{"x-api-key":"9OvsRPph281TqJZsKRSMe2EmLn0BkY2688YP9X"},
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
  });
  
 
//   function(e){
// 	  e.preventDefault();
// 	  const input=document.querySelector(".input").value;
// 	  const invalidMsg=document.querySelector(".invalid-msg");
// 	  if(input.length<10 || input.length>10){
// 		invalidMsg.innerHTML="Please enter valid 10 digit number*";
// 		console.log(invalidMsg);
// 		  setTimeout(() => {
// 			invalidMsg.innerHTML="";
// 		  }, 2000); 
// 	  }
	  
//   })

  
  window.addEventListener("scroll",function(){
	if($(window).width()>1024){
	const scroll=this.scrollY;
	const navBtn=document.querySelectorAll(".vnav-item");
	const sec1=document.getElementById("howItWorks");
	const sec2=document.getElementById("get-onboard");
	const sec3=document.getElementById("start-serving");
	const vnav=document.querySelector(".vertical-nav");
	
	if(scroll>=sec1.offsetTop-(sec1.offsetHeight/2) && scroll<sec3.offsetTop+(sec3.offsetHeight/2)-70){
		$(".vertical-nav").show(10);
	}
	else{
		$(".vertical-nav").hide(10);
	}
	
		if(scroll>sec1.offsetTop-70 && scroll<sec1.offsetTop+(sec1.offsetHeight/2)){
			 navBtn[0].classList.add("active");
			 setTimeout(() => {
				navBtn[1].classList.remove("active");
				navBtn[2].classList.remove("active");
				document.querySelector(".p2").style.display="none"; 
				document.querySelector(".p1").style.display="block"
			}, 50);
			
		}
		else if(scroll>sec2.offsetTop-70 && scroll<sec2.offsetTop+(sec2.offsetHeight/2)){
			    navBtn[1].classList.add("active");
				navBtn[0].classList.remove("active");
				navBtn[2].classList.remove("active");
				document.querySelector(".p1").style.display="none";
				document.querySelector(".p2").style.display="block"; 
		}
		else if(scroll>sec3.offsetTop-70 && scroll<sec3.offsetTop+(sec3.offsetHeight/2)){
			setTimeout(() => {
				navBtn[2].classList.add("active");
				navBtn[0].classList.remove("active");
				navBtn[1].classList.remove("active");
			}, 50);			
			document.querySelector(".p2").style.display="none";
			document.querySelector(".p1").style.display="none";
		}
	}
	
  });
