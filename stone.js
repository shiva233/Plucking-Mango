class Stone {

    constructor(x,y,r){

        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        

        this.radius = r;

        this.image = loadImage("sprites/stone.png");
        this.x = x
        this.y = y
        
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        
        
        
       

        
        

        World.add(world, this.body);

    }

    display(){


        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        
        


       

        fill(255);
        

        imageMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();


    }

}