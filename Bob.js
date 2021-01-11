class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }
        this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display(){
    push();
    var pos=this.body.position;
    ellipseMode(RADIUS);
    fill(0,0,0)
    ellipse(pos.x,pos.y,25,25);
    pop();
    }
}