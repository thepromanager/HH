var colour = 1;
var speed = 0;
var Draw = 1;
var Frames = 0;
var going = 1;
var angle = 0;
var rangle = 0;
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
  sliderWeight = createSlider(10,160,30);
  sliderSR = createSlider(0,255,0);
  sliderSG = createSlider(0,255,0);
  sliderSB = createSlider(0,255,0);
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
  }else{
  
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
 			
 			stroke(map(x+y,0,rex+ry,0,255),255,255);
 			
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
	StrokeWeight = 3;
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
  	sliderWeight.value(30);
 
}

