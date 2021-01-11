class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:20,
        }

        this.slingShot=Constraint.create(options);
        World.add(world,this.slingShot);
        this.pointB=pointB;
    }

    display(){
        var bodyA=this.bodyA.position;
        line(this.pointB.x,this.pointB.y,bodyA.x,bodyA.y);
    }
}