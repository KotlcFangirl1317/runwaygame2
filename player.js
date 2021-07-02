class player{

constructor(){
   this. playerm = createSprite(150,300,30,70)
    this.playerm.addAnimation("running", p1)
    this.playerm.addAnimation("bending", p2)
    this.playerm.addAnimation("jumping", p3)
    this.playerm.addAnimation("falling", p4)
}

move(){
     this.playerm.velocityX=10
     if(keyWentDown("UP_ARROW")) { 
       this.playerm.velocityY=-20 
      //this.playerm.changeAnimation("jumping", p3) 
    }
    
    if(keyWentUp("UP_ARROW"))
    { this.playerm.changeAnimation("running",p1) }
    
    if(keyWentDown("DOWN_ARROW"))
    {
        this.playerm.setCollider("circle",0,20,30)
      console.log("WORKING")
      this.playerm.changeAnimation("bending", p2)
      
      
    }
    if(keyWentUp("DOWN_ARROW")){
      this.playerm.changeAnimation("running",p1)
      this.playerm.setCollider("rectangle",0,10,50,110)
    }
    
  }

characteristics(){
    this.playerm.collide(platformA.platformd)
    this.playerm.collide(platformB.platformd)
    this.playerm.collide(platformC.platformd)
    this.playerm.collide(platformD.platformd)
    this.playerm.collide(platformE.platformd)
    this.playerm.collide(platformA.tower)
    this.playerm.velocityY=this.playerm.velocityY+0.8

    if(this.playerm.y>1000){ 
    this.playerm.changeAnimation("falling",p4)
   }
      
    if(this.playerm.isTouching(platformA.platform)||this.playerm.isTouching(platformB.platform)||this.playerm.isTouching(platformC.platform)||this.playerm.isTouching(platformD.platform)||this.playerm.isTouching(platformE.platform)){
     this.move()
      }
if(this.playerm.isTouching(platformE.platform)){
  this.playerm.velocityX = 0
  this.playerm.changeAnimation("jumping",p3)
}
       
     camera .position.x=this.playerm.x
     camera .position.y=this.playerm.y
 
}



}