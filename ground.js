class Ground {

    constructor(x,y) {

        var options = {

            isStatic : true


        }

        this.body = Bodies.rectangle(x,y,1500,20,options)
        this.width = 1500;
        this.height = 20;
        World.add(world, this.body);
    }

    display(){
        var posLeft =this.body.position;
        var angle = this.body.angle;
        push();
        translate(posLeft.x, posLeft.y);
        
        rectMode(CENTER);

        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
        
      }
}