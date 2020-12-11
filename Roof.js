class Roof {
    constructor(x, y, width, height) {
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("white");
      rect(100,100,this.width,this.height);
      pop();
    }
}
