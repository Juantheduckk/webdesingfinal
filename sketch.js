var movers = [];
var attr, repl;
var colors = ["rgb(229, 235, 9)", "rgb(127, 21, 214)", "rgb(9, 239, 474)"];
var testVec;
var gamePaused = false;

function setup() {
  var cnv = createCanvas(900, 800);
  cnv.position((windowWidth - width)/2, 30);
  background(225);

  loadMovers(50);
  frameRate (50)
  testVec =  createVector(5*Math.sqrt(3), 5);

}

function draw(){
  fill(255)
    //rect(0,0, width, height);

  if(!gamePaused){
    for(var i = 0; i < movers.length; i++){
    movers[i].update();


  }

  attr.update();

}
}


function loadMovers(n){
  for(var i = 0; i < n; i++){
    movers.push(new Mover(random(width), random(height), i));
  }
  attr = new Mover(width/2, height/2, -1);

}

function mouseClicked(){
  gamePaused = !gamePaused;
}
