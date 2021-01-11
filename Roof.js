class Roof{
    constructor(x,y){
      var options={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,300,30,options);
      this.width=300;
      this.height=30;
      World.add(world,this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}