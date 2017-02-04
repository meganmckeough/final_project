$(document).ready(function () {
	console.log("ready");
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
	$("#mobileStarted a").click(slideToPage);
	$("#normalFooter").click(expandFooter);
	$("#topBar").hover(function (){
		$("#topBar a").attr("class", "black");
		}, function (){
			$("#topBar a").removeClass("black");
	});
	$(".social div").click(expandNav);
	$(".burger").click(expandNav);
	var w = $(window).width();
 	$("#mobilePadding").css("width", w);
 	console.log(w);
});

function slideToPage () {
	var page = $($(this).attr("href"));
	var location = page.offset().top;
	$("body").animate({scrollTop:location}, 600);
}

function expandFooter () {
	$("#longFooter").toggleClass("expand");
	$('html, body').animate({
          scrollTop: $("footer").offset().top + $('window').height()
        }, 2000);
	$("footer").toggleClass("expand");
	}

function expandNav () {
	$(".aboutNav").toggleClass("extendAbout");
}
/**help!!!!**/
	if ($("#longfooter").hasClass("expand")) {
		$(".fa-angle-double-down").show();
		$("fa-angle-double-up").hide();
		}

	else {
		$("fa-angle-double-up").show();
		$("fa-angle-double-down").hide();
		console.log("DONE");
	}
/**fix above**/


