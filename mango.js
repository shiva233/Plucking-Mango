class mango {

    constructor(x,y,r){

        var options ={
            isStatic : true,
            restitution : 0,
            friction : 1,
            


        }

        

        this.radius = r;

        this.image = loadImage("sprites/mango.png");
        this.x = x
        this.y = y
        
        this.body = Bodies.circle(x,y,this.radius,options);
        
        
        
       

        
        

        World.add(world, this.body);

    }

    display(){


        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        


       

        fill(255);
        

        imageMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();


    }

}