$(document).ready(function () {
/**button messages**/
	$("#eternalButton").click(function () {
		alert("Sorry, Lacuna Inc. isn't quite ready yet... Coming soon!");
	});
	$("#prestigeButton").click(function () {
		alert("Sorry, Tesla is fixing this glitch... Not quite ready!");
	});
	$("#eternalMobileButton").click(function () {
		alert("Sorry, Lacuna Inc. isn't quite ready yet... Coming soon!");
	});
	$("#prestigeMobileButton").click(function () {
		alert("Sorry, Tesla is fixing this glitch... Not quite ready!");
	});
/**slide**/
	$("#mobileStarted a").click(slideToPage);
/**footer toggle**/
	$("#normalFooter").click(expandFooter);
/**fixing colors on topbar hover**/
	$("#topBar").hover(function (){
		$("#topBar a").attr("class", "black");
		}, function (){
			$("#topBar a").removeClass("black");
	});
/**expand About in Nav**/
	$(".social div").click(expandNav);
	$(".burger").click(expandNav);
/**calculation width of window and assigning - redundant**/
	var w = $(window).width();
 	$("#blankPadding").css("width", w);
 	console.log(w);

 	var h = $(window).height();
 	$("#blankPadding").css("height", h);
 	console.log(w);
/*scrolling*/



	// $(window).scroll(function() {    
	//     var scroll = $(window).scrollLeft();
	//     var slideElement1 = $($(".pulpSlide1"));
	//     var getPosition = slideElement1.offset().left;

	//     if (scroll == getPosition) {
	//         $(".pulpSlide1").removeClass("slide");
	//     }
	//    console.log("scroll:" + scroll + "getPos:" + getPosition);
	// });
});


// 	function checkIfEnd(e) {
// 	  var scrollSection = $(e.currentTarget); // grab the section that is scrollable

// 	  var totalScrollWidth = scrollSection[0].scrollWidth; // total scroll length
// 	  var leftPosition = scrollSection.scrollLeft(); // current length that has been scrolled
// 	  var totalWidthNoScroll = scrollSection.outerWidth(); // total length (without scroll)

// 	  if (totalScrollWidth - leftPosition == totalWidthNoScroll) {
// 	    console.log("end of scroll");

// 	  } else if (leftPosition == 0) {
// 	    console.log("start of scroll");
// 	  } else if (totalWidthNoScroll >= $("#specialMoment").offset().left) {
// 	    // console.log("Reached special moment");
// 	  }

// 	  console.log("width:" + totalWidthNoScroll);
// 	  console.log("whereisdiv:" + $("#specialMoment").offset().left);
// }


function slideToPage () {
	var page = $($(this).attr("href"));
	var location = page.offset().top;
	$("body").animate({scrollTop:location}, 600);
}

function expandFooter () {
	$("#longFooter").toggleClass("expand");
	$("footer").toggleClass("expand");
	$('html, body').animate({
          scrollTop: $("footer").offset().top + $('window').height()
        }, 2000);
/**arrow switch in footer**/
	if ($("footer").hasClass("expand")) {
		$("div .plain").hide("2000");
		$("div .clicked").show("2000");	
		}

	else {
		$("div .clicked").hide("2000");
		$("div .plain").show("2000");
		console.log("DONE");
	}
}

function expandNav () {
	$(".aboutNav").toggleClass("extendAbout");
}




