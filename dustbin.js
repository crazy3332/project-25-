class dustbin {
  constructor(x,y,width,height){

      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
        }
        display(){
          push();
          translate(this.body.position.x, this.body.position.y)
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          imageMode(CENTER);
          image(this.image, 0, -100, this.width,this.height+200);
          fill(0);
          pop();
        }
  }
