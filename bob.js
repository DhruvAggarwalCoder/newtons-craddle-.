class Bob{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution:1,
            friction:0,
            density:0.8,
        }
        this.body = Bodies.circle(x , y , 20 , options);
        World.add(world,this.body);

        console.log(this.body);

    }
    display(){
        var bobPosition = this.body.position;
        push();
        translate(bobPosition.x,bobPosition.y);
        ellipseMode(CENTER);
        fill(254 , 0 , 255);
        ellipse(0,0,40,40);
        pop();
    }
 
}