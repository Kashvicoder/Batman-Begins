const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops=[];
var t1,t2,t3,t4; 
var rand;
var tf;
var um

function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    um = new Umbrella(200,500);
    if (frameCount%150 === 0){
        for (var i = 0 ; i<100 ; i++){
            drops.push(new createDrop(random(0,800),random(0,200)))
        }
    }

   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rand = Math.round(random(1,4));
    if (frameCount%80 === 0){
        tf = frameCount;
        thunder = createSprite(random(10,750),random(10,650),10,10);
        switch(rand){ 
             case 1: thunder.addImage(t1); break;
             case 2: thunder.addImage(t2); break; 
             case 3: thunder.addImage(t3); break; 
             case 4: thunder.addImage(t4); break;
             default: break;
        }
        thunder.scale = random(03,0.6);
        
    }

    if(tf+ 10 ===frameCount && thunder){
        thunder.destroy();
    }

    um.display();
   //displaying rain drops
    for(var i = 0; i<100; i++){
         drops[i].showDrop(); 
         drops[i].updateY() 
    } 
    drawSprites();
}