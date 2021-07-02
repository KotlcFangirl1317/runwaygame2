
function preload(){
  p1=loadAnimation("stickman (1).png","stickman (2).png")
  p2 = loadAnimation("stickman (6).png")
  p3 = loadAnimation("stickman (1).png")
  p4 = loadAnimation("stickman (4).png")
  bg = loadImage("bg.jpg")
}




function setup(){
    var canvas = createCanvas(1200,600);



    player1 = new player()
     platformA= new platform1()
     platformB=new platform2()
     platformC =new platform3()
     platformD =new platform4()
     platformE = new platform5()
}

function draw(){
    background("black");
    image(bg,0,-1500,6000,3000)
    text (mouseX+"  "+mouseY,-400,50)
    platformA.display()
    platformB.display()
    platformC.display()
    platformD.display()
    platformE.display()
    drawSprites()
    player1.characteristics()
}

