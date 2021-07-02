class platform4{
    constructor(){
       this. platform=createSprite(4050,400,1000,50)
       this.i = loadImage("p3.jpg")
        
       this. platform.shapeColor="brown"
       this. platformd=createSprite(4050,401,1000,50)
      this.platformd.visible=false
        this.platform.visible=false
    
       // this.tower=createSprite(500,200,200,50)
    }

    display(){
       imageMode(CENTER)
       image (this.i,4000,250,1000,300)
    }
    
    }