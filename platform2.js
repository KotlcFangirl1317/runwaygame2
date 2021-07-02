class platform2{
    constructor(){
       this. platform=createSprite(1700,300,1000,300)
       this.i = loadImage("p1.jpg")
        
       this. platform.shapeColor="brown"
       this. platformd=createSprite(1700,301,1000,300)
        this.platformd.visible=false
        this.platform.visible=false
        this.zombie = createSprite(1700,100,50,50)
        this.zombie.visible = false
        this.zombie1 = loadImage("zombie2.jpg")
       // this.tower=createSprite(500,200,200,50)
    }

    display(){
       imageMode(CENTER)
      image (this.i,1700,50,1000,300)
      image(this.zombie1,1700,100,50,50)
    }
    
    }