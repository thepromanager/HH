var colour = 1;
var colors = 0;
var c;
var colorCode = 0;
var speed = 0;
var Draw = 1;
var Frames = 0;
var going = 1;
var angle = 0;
var rangle = 0;
var inverse = 0;
var StrokeWeight = 3;
function setup() {
  colorMode(HSB);
  hi = windowHeight;
  wi = windowWidth;
  inp = createInput('');
  buttonSave = createButton('Save');
  buttonSave.mousePressed(Save);
  buttonTracer = createButton('Tracing');
  buttonTracer.mousePressed(Tracer);
  sliderRy = createSlider(1,25,10);
  sliderRex = createSlider(1,25,10);
  sliderScale = createSlider(10,2000,500);
  sliderSpeed = createSlider(1,320,20);
  sliderDown = createSlider(0,hi,hi/2);
  sliderSide = createSlider(0,wi,wi/2);
  buttonColor = createButton('Color');
  buttonColor.mousePressed(Colour);
  sliderBR = createSlider(0,255,255);
  sliderBG = createSlider(0,255,255);
  sliderBB = createSlider(0,255,255);
  sliderSR = createSlider(0,255,0);
  sliderSG = createSlider(0,255,0);
  sliderSB = createSlider(0,255,0);
  sliderWeight = createSlider(10,640,30);
  buttonColorMode = createButton('ColorMode');
  buttonColorMode.mousePressed(ColorMode);
  buttonRandom = createButton('Random');
  buttonRandom.mousePressed(Random);
  buttonDark = createButton('Dark');
  buttonDark.mousePressed(Dark);
  buttonLight = createButton('Light');
  buttonLight.mousePressed(Light);
  buttonInverse = createButton('Inverse');
  buttonInverse.mousePressed(Inverse);
  buttonReset = createButton('Reset');
  buttonReset.mousePressed(Reset);
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  side = sliderSide.value();
  down = sliderDown.value();
  translate(side,down);
  scale(sliderScale.value()/1000);
  if(Draw === 1){
  colorMode(RGB);
  background(sliderBR.value(),sliderBG.value(),sliderBB.value());
  colorMode(HSB);
  }
  speed = sliderSpeed.value()/10;
  var ry = sliderRy.value();
  var rex = sliderRex.value();
 for(var x = 0; x<rex;x++){
 	for(var y = 0; y<ry;y++){
 		translate(x*width/rex,y*height/ry);
 		rotate(angle);
 		
 		translate(-x*width/rex,-y*height/ry);
 		if(colour === 1){
 			if(colorCode === 0){
 			colors =(map(x+y,0,rex+ry,0,255))
 			}else if(colorCode === 1){
 			colors =((map(x+y,0,rex+ry,0,255)+100)%256)
 			}else if(colorCode === 2){
 			colors =((map(x+y,0,rex+ry,0,255)+Frames)%256)
 			}else if(colorCode === 3){
 			colors =((rangle*(x+1)*10)%256)
 			}else if(colorCode === 4){
 			colors =(map(sin(Frames*0.01),-1,1,0,255))
 			}else if(colorCode === 5){
 			colors =(map(sin(x+y*0.1+Frames*0.1),-1,1,0,255))
 			}else if(colorCode === 6){
 			colors = (map(noise(x+y*0.1+Frames*0.1),0,1,0,255))
 			}else if(colorCode === 7){
 			colors = (map(noise(Frames*0.01),0,1,0,255))
 			}else if(colorCode === 8){
 			colors = (map(sin(map(random(Frames),0,1000,0,255)*0.001),0,1,0,255)%256)
 			}else if(colorCode === 9){
 			colors = ((angle)%256)
 			}else if(colorCode === 10){
 			colors = (map(x+y+10,0,rex+ry+10,0,255));
 			}else if(colorCode === 11){
 			colors = (random(256))
 			}
 			if(inverse === 1){
 				c = color(colors,255,255)
 				colorMode(RGB);
 				stroke(255-red(c),255-green(c),255-blue(c))
 				colorMode(HSB);
 			}else{
 			stroke(colors,255,255)
 			}
 		}else{
 			colorMode(RGB);
 			stroke(sliderSR.value(),sliderSG.value(),sliderSB.value());
 			colorMode(HSB);
 		}
 		StrokeWeight = sliderWeight.value()/10;
 		H(x*(width/rex),y*(height/ry),StrokeWeight,width/rex,height/ry);
 		translate(x*width/rex,y*height/ry);
 		rotate(-rangle);
 		translate(-x*width/rex,-y*height/ry);
 	}
 }
 if(going === 1){
 
 Frames++;
 angle += 0.0100;
 rangle += (0.0100+(speed*0.0001));
 }
}
function H(x,y,s,w,h){
	strokeWeight(s);
	line(x,y,x,y+h);
	line(x+w,y,x+w,y+h);
	line(x,y+(h/2),x+w,y+(h/2));
	
}
function Tracer(){
	if(Draw === 1){
  			Draw = 0;
  	}else{
  		Draw = 1;
    }
	
}
function Save(){
	k = inp.value()
  	saveCanvas("PHOTOS/"+k, 'jpg');
	
}
function Colour(){
		if(colour === 1){
  			colour = 0;
  	}else{
  		colour = 1;
  	}
	
}


function keyPressed(){
  if(keyCode === 32) {
		if(going === 1){
  			going = 0;
  	}else{
  		going = 1;
    }
  	}
}

function Reset(){
	colour = 1;
 	speed = 0;
 	Draw = 1;
 	Frames = 0;
	going = 1;
	angle = 0;
	rangle = 0;
	colorCode = 0;
	StrokeWeight = 3;
	inverse = 0;
	sliderScale.value(500);
	sliderSpeed.value(20);
  	sliderDown.value(hi/2);
  	sliderSide.value(wi/2);
  	sliderBR.value(255);
  	sliderBG.value(255);
  	sliderBB.value(255);
  	sliderSR.value(0);
  	sliderSG.value(0);
  	sliderSB.value(0);
  	sliderRex.value(10);
  	sliderRy.value(10);
  	sliderWeight.value(30);
  	
 
}

function value(){
	print [
	colour,
 	speed,
 	Draw,
 	Frames,
	going,
	angle,
	rangle,
	StrokeWeight,
	sliderScale.value(),
	sliderSpeed.value(),
  	sliderDown.value(),
  	sliderSide.value(),
  	sliderBR.value(),
  	sliderBG.value(),
  	sliderBB.value(),
  	sliderSR.value(),
  	sliderSG.value(),
  	sliderSB.value(),
  	sliderWeight.value(),
  	sliderRy.value(),
  	sliderRex.value(),
  	colorCode,
  	inverse
  	]

}
function ColorMode(){
	colorCode++
	colorCode = colorCode%12
	
}

function Random(){
	sliderRy.value(int(random(1,26)));
  	sliderRex.value(int(random(1,26)));
	sliderScale.value(int(random(10,2001)));
	sliderSpeed.value(int(random(1,321)));
	sliderDown.value(int(random(1,hi+1)));
  	sliderSide.value(int(random(1,wi+1)));
	sliderBR.value(int(random(0,256)));
  	sliderBG.value(int(random(0,256)));
  	sliderBB.value(int(random(0,256)));
  	sliderSR.value(int(random(0,256)));
    sliderSG.value(int(random(0,256)));
  	sliderSB.value(int(random(0,256)));
  	sliderWeight.value(int(random(10,641)));
	colour = int(random(0,2));
	colorCode = int(random(0,12));
	Draw = int(random(0,2));
	going = int(random(0,2));
	inverse = int(random(0,2));

}

function Dark(){
	sliderBR.value(0);
  	sliderBG.value(0);
  	sliderBB.value(0);
  	sliderSR.value(255);
    sliderSG.value(255);
  	sliderSB.value(255);
}
function Light(){
	sliderSR.value(0);
  	sliderSG.value(0);
  	sliderSB.value(0);
  	sliderBR.value(255);
    sliderBG.value(255);
  	sliderBB.value(255);
}
function Inverse(){
	sliderSR.value(255-sliderSR.value());
  	sliderSG.value(255-sliderSG.value());
  	sliderSB.value(255-sliderSB.value());
  	sliderBR.value(255-sliderBR.value());
    sliderBG.value(255-sliderBG.value());
  	sliderBB.value(255-sliderBB.value());
  	if(inverse === 0){
  		inverse = 1;
  	}else{
  		inverse = 0;
    }
  	
}
