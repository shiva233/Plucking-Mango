class Tree{

    constructor(x,y){
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, 500, options);


        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);



    }

    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 500);
        pop();
      }
}