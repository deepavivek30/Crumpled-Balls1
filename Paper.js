class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options)
        
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    
    
    fill ("white")
    
    ellipse(pos.x,pos.y,40)
    
        if(keyDown(UP_ARROW)){
          Body.applyForce(this.body,{x:pos.x,y:pos.y},{x:85,y:-85})
        }
      }
    
}


	
