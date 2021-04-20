class Ball 
{
    constructor(x,y,r)
    {
    var opt={
    friction:0.001,
    restitution:0.1
    }
    this.body = Bodies.circle(x,y,r);
    this.r = r;
    World.add(world,this.body);
    
    }
    display()
    {
     fill(rgb(random(0,255),random(0,255),random(0,255)))
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
      
    }
    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(windowWidth-500,windowHeight-700), y:random(windowWidth-500,windowHeight-700)})
        }
    }

}