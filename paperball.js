class paperball {
    constructor(x,y,radius){

        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rectMode(CENTER);
            fill(255);
            circle(0, 0, this.radius);
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius+100,this.radius+150);
            pop();
          }
    }
