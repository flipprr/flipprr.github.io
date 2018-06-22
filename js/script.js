var colors = ["#f9f060", "#bcf770", "#70f7c9", "#70a9f7", "#b370f7","#f770cf","#f7707a","#989898"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 3000);