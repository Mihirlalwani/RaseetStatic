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
document.querySelector(".enter-down").addEventListener("click",function submitToAPI2(e){
	e.preventDefault();
	var URL = "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input";

	document.querySelector(".loadContact").style.display="inline-block";
	var Namere = /[A-Za-z]{1}[A-Za-z]/;
     if (!Namere.test($("#name").val())) {
		  setTimeout(() => {
			document.querySelector(".loadContact").style.display="none";
			document.querySelector(".response-foot").innerHTML="<i class='fas fa-times'></i> &nbsp; Name less than 2 characters"
			document.querySelector(".response-foot").style.display="flex";
		  }, 1000);
			
		  setTimeout(() => {
			 document.querySelector(".response-foot").style.display="none";
		  }, 3000);
             return;
     }
	 var mobilere = /[0-9]{10}/;
         if (!mobilere.test($("#number").val())) {
			  setTimeout(() => {
				document.querySelector(".loadContact").style.display="none";
				document.querySelector(".response-foot").innerHTML="<i class='fas fa-times'></i> &nbsp; Please Enter Valid Mobile No.";
			    document.querySelector(".response-foot").style.display="flex";
			  }, 1000);
			  
			  setTimeout(() => {
				 document.querySelector(".response-foot").style.display="none";
			  }, 3000);	
		       return;
         }
		 if ($("#email").val()=="") {
			setTimeout(() => {
				document.querySelector(".loadContact").style.display="none";
				document.querySelector(".response-foot").innerHTML="<i class='fas fa-times'></i> &nbsp; Please enter your Email";
				document.querySelector(".response-foot").style.display="flex";
			  }, 1000);
				
			  setTimeout(() => {
				 document.querySelector(".response-foot").style.display="none";
			  }, 3000);
			     return;
			 }
	 var name = $("#name").val();
	 var number = $("#number").val();
	 var email = $("#email").val();
	 var address = $("#address").val();
	 var subject = $("#subject").val();
	 var message = $("#message").val();

	 var data = {
	    name : name,
		number : number,	   
	    email : email,
		address:address,
		subject:subject,
		message:message
		 }

		 $.ajax({
			type: "POST",
			url : "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input",
			dataType: "json",
			headers:{"x-api-key":"9OvsRPph281TqJZsKRSMe2EmLn0BkY2688YP9XBj"},
			crossDomain: "true",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(data),
	  
			
			success: function () {

				setTimeout(() => {
					document.querySelector(".loadContact").style.display="none"; 
				    document.querySelector(".success-foot").style.display="flex";
				}, 1000);
				
				setTimeout(() => {
					 document.querySelector(".success-foot").style.display="none";
				  }, 3000);
				   
				document.getElementById("contact-form-below").reset();
			  return;
		  },
			error: function () {
			  // show an error message
			  setTimeout(() => {
				document.querySelector(".loadContact").style.display="none"; 
				document.querySelector(".fail-foot").style.display="flex";
			  }, 1000);			  
			  setTimeout(() => {
				 document.querySelector(".fail-foot").style.display="none";
			  }, 3000);
			  return;
			}});
  });
  enterBtn.addEventListener("click",submitToAPI);
  
  function submitToAPI(e) {
    e.preventDefault();
	// console.log("In Api");
    var URL = "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input";

        
		document.querySelector(".load").style.display="inline-block";
         var mobilere = /[0-9]{10}/;
         if (!mobilere.test($("#phone-input").val()) && !mobilere.test($("#foot-input").val())) {
			 if(e.target.classList.contains("enter-down")){
               document.querySelector(".response-foot").style.display="flex";
			 setTimeout(() => {
			    document.querySelector(".response-foot").style.display="none";
			 }, 3000);} else{
				
				setTimeout(() => {
					document.querySelector(".load").style.display="none";
					document.querySelector(".response").style.display="flex";
				}, 1000);
								
				setTimeout(() => {
				   document.querySelector(".response").style.display="none";
				   }, 3000);

			 }
             return;
         }
        
    var phone = $("#phone-input").val();
	if(e.target.classList.contains("enter-down")){phone=$("#foot-input").val();}
    var data = {
    phone : phone   
    };

    $.ajax({
      type: "POST",
      url : "https://pagcd7s9md.execute-api.ap-south-1.amazonaws.com/default/send-mail-website-input",
      dataType: "json",
	  headers:{"x-api-key":"9OvsRPph281TqJZsKRSMe2EmLn0BkY2688YP9XBj"},
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        
			document.querySelector(".load").style.display="none";  
			 document.querySelector(".success").style.display="flex";				
			 setTimeout(() => {
				document.querySelector(".success").style.display="none";
				}, 3000);
        document.getElementById("contact-form").reset();
    
      
	},
      error: function () {
        // show an error message  
			 document.querySelector(".load").style.display="none";       
			 document.querySelector(".fail").style.display="flex";				
			 setTimeout(() => {
				document.querySelector(".fail").style.display="none";
				}, 3000);
            
         
      }});
  }
  
  window.addEventListener("scroll",function(){
	const scroll=this.scrollY;
	const navBtn=document.querySelectorAll(".vnav-item");
	const sec1=document.getElementById("howItWorks");
	const sec2=document.getElementById("get-onboard");
	const sec3=document.getElementById("start-serving");
	const whysec=document.getElementById("whySec");
	const vnav=document.querySelector(".vertical-nav");
	if(scroll>whysec.offsetTop){
		document.querySelector(".goTop").style.display="block";
	}
	else{document.querySelector(".goTop").style.display="none";}
	if($(window).width()>1024 && $(window).width()<1400){
	
		if(scroll>=sec1.offsetTop-200 && scroll<sec3.offsetTop+60){
			$(".vertical-nav").show(10);
		}
		else{
			$(".vertical-nav").hide();
		}
		
			if(scroll>sec1.offsetTop-200 && scroll<sec1.offsetTop+(sec1.offsetHeight/2)){
				navBtn[0].classList.add("active");
				setTimeout(() => {
					navBtn[1].classList.remove("active");
					navBtn[2].classList.remove("active");
					document.querySelector(".p2").style.display="none"; 
					document.querySelector(".p1").style.display="block"
				}, 50);
				
			}
			else if(scroll>sec2.offsetTop-(sec2.offsetHeight)-150 && scroll<sec2.offsetTop+(sec2.offsetHeight/3)){
					navBtn[1].classList.add("active");
					navBtn[0].classList.remove("active");
					navBtn[2].classList.remove("active");
					document.querySelector(".p1").style.display="none";
					document.querySelector(".p2").style.display="block"; 
			}
			else if(scroll>sec3.offsetTop-(sec3.offsetHeight)-80 && scroll<sec3.offsetTop+(sec3.offsetHeight/2)){
				setTimeout(() => {
					navBtn[2].classList.add("active");
					navBtn[0].classList.remove("active");
					navBtn[1].classList.remove("active");
				}, 50);			
				document.querySelector(".p2").style.display="none";
				document.querySelector(".p1").style.display="none";
			}
	}
	else if($(window).width()>1400){
			if(scroll>=sec1.offsetTop-300 && scroll<sec3.offsetTop-80){
				$(".vertical-nav").show(10);
			}
			else{
				$(".vertical-nav").hide();
			}
			if(scroll>sec1.offsetTop-350 && scroll<sec1.offsetTop+(sec1.offsetHeight/8)){
				navBtn[0].classList.add("active");
				setTimeout(() => {
					navBtn[1].classList.remove("active");
					navBtn[2].classList.remove("active");
					document.querySelector(".p2").style.display="none"; 
					document.querySelector(".p1").style.display="block"
				}, 50);
				
			}
			else if(scroll>=sec2.offsetTop-(2*sec2.offsetHeight)-200 && scroll<sec2.offsetTop-(sec2.offsetHeight/10)){
					navBtn[1].classList.add("active");
					navBtn[0].classList.remove("active");
					navBtn[2].classList.remove("active");
					document.querySelector(".p1").style.display="none";
					document.querySelector(".p2").style.display="block"; 
			}
			else if(scroll>sec3.offsetTop-(sec3.offsetHeight)-200 && scroll<sec3.offsetTop+(sec3.offsetHeight/2)){
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


  function inputFocus(e){
	const input=e.target.previousElementSibling;
	input.style="color:#225E77; border:1px solid #225E77; border-right:none;"
  }
  function focusOut(e){
	const input=e.target.previousElementSibling;
	input.style=""
  }
  let flag=0;
  function btnNav(){  
	if(flag===0){
	document.querySelector(".business_item").style.display="flex";
	document.querySelector(".customer_item").style.display="flex";
	document.querySelector(".queLink").innerHTML='<i class="fas fa-times cross"></i>';
    flag=1;}else{
		document.querySelector(".business_item").style.display="none";
	    document.querySelector(".customer_item").style.display="none";
		document.querySelector(".queLink").innerHTML='<img src="./images/login.svg" alt="" srcset="">';
		flag=0;
	}
  };
  