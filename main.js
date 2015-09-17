/* FIRST VIEW */
var firstView = tabris.create("Page", {
	topLevel: true,
	style: ["FULLSCREEN"],
});

var firstComposite = tabris.create("Composite", {
	layoutData: {
		top: 0,
		left:0,
		right:0,
		bottom:0
	},
	background: "#fff"
}).appendTo(firstView);


var image = tabris.create("ImageView", {
	centerX: 0,
	centerY: 0,
	image: {src: "img/last.png"},
	scaleMode: "auto"
}).appendTo(firstComposite);

var titolo = tabris.create("ImageView", {
	layoutData: {
		top: [image, -40],
		left:40,
		right:40
	},
	image: {src: "img/logo.png"},
	scaleMode: "auto"
}).appendTo(firstComposite);


firstView.open();
