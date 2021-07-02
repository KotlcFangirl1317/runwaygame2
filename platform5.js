class platform5{
    constructor(){
       this. platform=createSprite(5050,500,1000,50)
       this.i = loadImage("youwin.JPG")
        
       this. platform.shapeColor="brown"
       this. platformd=createSprite(5050,501,1000,50)
       this.platformd.visible=false
       this.platform.visible=false
    
       // this.tower=createSprite(500,200,200,50)
    }

    display(){
       imageMode(CENTER)
       image (this.i,5000,350,1000,300)
    }
    
    }