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
		$(".social a").attr("class", "black");
	}, function (){
		$(".social a").removeClass("black");
	}
	);
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


// elem.scroll(function() {
//    if(elem.scrollLeft() + elem.width() == inner.width()) {
//        alert("end!");
//        console.log(elem.scrollLeft() + elem.width());
//    }
// });