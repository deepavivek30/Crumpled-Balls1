class Dustbin2{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
this.width=width
this.height=height
    }
    display(){
        var pos=this.body.position
        fill ("brown")
        rect(pos.x,pos.y,20,100)
    }
}