function setup() {createCanvas(1000, 800);
}

var X;
var Y;
X=0;
Y=0;
var R = 255;
var G = 0;
var B = 0;
var AUX;
var W = 3;



function draw() {
	fill(R,G,B);
	strokeWeight(0);
	ellipse(X, Y, W, W);
}


var microBit;

microBit= new uBit();

microBit.onConnect(function(){
	console.log("connected");
});


microBit.onDisconnect(function(){
	console.log("disconnected");
});
	
function searchDevice(){
	microBit.searchDevice();
}

function limpiarPantalla(){
	clear();
}

microBit.setButtonBCallback(function(){
	AUX = R;
	R = G;
	G = B;
	B = AUX;
	}
);

microBit.setButtonACallback(function(){
	if (W<30) {
		W = W + 3;
	} else {
		W = 3;
	}
});

microBit.onBleNotify(function(){
	X= X + microBit.getAccelerometer().x / 1024;
	Y= Y + microBit.getAccelerometer().y / 1024;
})