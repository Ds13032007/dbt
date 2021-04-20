const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bgSprite;
var bag, bomb;
maxBall = 5;
var ballArray=[]
function preload(){
    backgroundImg = loadImage("Spr/BG.png");
    b = loadImage("Spr/b.png")


}
                                                                                              
function setup(){
                    
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(7000,800,2260,500);
    basket = createSprite(700,850,200,200);
    basket.x = World.mouseX;
    basket.addImage("ing",b);
    basket.scale=0.5;
    if(frameCount%1000==0)
    {
       for(var i=0;i<maxBall;i++)
       {
        ballArray.push(new Ball(random(windowWidth-500,windowHeight-1000),random(windowWidth-1000,windowHeight-1500),10));
       }
    }
    
   
    
   
}
function draw()
{
    Engine.update(engine);
    background(backgroundImg);
    ground.display(); 
   
    for(var i = 0; i<maxBall; i++){
        ballArray[i].display();
        ballArray[i].updateY();
        

    }
    
    drawSprites();  
}

