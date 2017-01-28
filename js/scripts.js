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
	$("#pulpButton").click(loadPage);
});


// function loadPage (e) {
// 	e.preventDefault();
// 	$(this).children("a").trigger("click");
// }
	
	