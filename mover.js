
function Mover(x, y, id){

  this.loc = createVector(x, y);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.acc = createVector(0, 0);
  this.w = 40;
  this.id = id;
  this.angle = 0;


 this.c = colors[Math.floor(random(colors.length))];

  this.update = function(){

    //  if the two balls are over lapping
    //  draw a line between them
     for(var i = 0; i < movers.length; i++){
      var r1 = movers[i].w;
      var r2 = this.w;
      if(this !== movers[i] && this.loc.dist(movers[i].loc) < (r1 + r2 + 50)){
        stroke(this.c);
        strokeWeight(.3);
        line(this.loc.x, this.loc.y, movers[i].loc.x, movers[i].loc.y);
      }
    }

    if(this.id >= 0 && this.loc.dist(attr.loc) < 600){
      this.acc = p5.Vector.sub(attr.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.012);
    }

    if(this.loc.dist(attr.loc) < 150){ // check this
    this.acc = p5.Vector.sub( this.loc, attr.loc );
    this.acc.normalize();
    this.acc.mult(0.12);
  }


    this.checkEdges();
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);

    this.render();
  }


  this.checkEdges = function(){
    if(this.loc.x < this.w/2 || this.loc.x > width-this.w/2) this.vel.x = -this.vel.x;
    if(this.loc.y < this.w/2 || this.loc.y > height-this.w/2) this.vel.y = -this.vel.y;


  }


  this.render = function(){
    if(this.id >= 0){
      fill(21, 10, 10, 12);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
      if(this.loc.dist(attr.loc) < 300){
        stroke(21, 10, 10);
        line(this.loc.x, this.loc.y, attr.loc.x, attr.loc.y);
      }
    }else if (this.id === -1){
       fill(238, 0, 0, 15);
     ellipse(this.loc.x, this.loc.y, this.w, this.w);
      if(this.loc.dist(attr.loc) < 150){
        stroke(238, 0, 0);
        line(this.loc.x, this.loc.y, attr.loc.x, attr.loc.y)
      }

    }else{
      fill(238, 0, 0);
      stroke(238, 0, 0);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

    fill(40, 165, 0);
    stroke(40, 165, 0);
    if(this.id < movers.length - 2){
        line(this.loc.x, this.loc.y, movers[this.id+1], movers[this.id+1]);
    }


  }
}//  end of constructor
