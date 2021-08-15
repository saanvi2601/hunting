class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness :0.03
        }
 
        this.sling1 = loadImage("images/sling1.png");
        this.sling2 = loadImage("images/sling2.png");
        this.sling3 = loadImage("images/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

        

    }
    display(){
        image(this.sling1,200,50);
        image(this.sling2,170,50);


    }
    fly(){
        this.sling.bodyA = null;
    }
}