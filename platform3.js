class platform3{
    constructor(){
       this. platform=createSprite(3000,600,1000,50)
       this.i = loadImage("p2.jpg")
        
       this. platform.shapeColor="brown"
       this. platformd=createSprite(3000,601,1000,50)
      this.platformd.visible=false
        this.platform.visible=false
    
       // this.tower=createSprite(500,200,200,50)
    }

    display(){
       imageMode(CENTER)
       image (this.i,3000,500,1000,300)
    }
    
    }