class paper {
    constructor(x,y){
        var options = {
            isStatic :false,
            'restitution' :0.3,
            'friction':0,
            'density':1.2
        }
        this.body = bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);

        function  keyPressed(){
            if(keyCode === UP_ARROW){
                Matter.body.applyForce(paperObj.body,paperObject.body.position,{x:130,y:145});
    
            }
        }
    }
     
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        imgMode(CENTRE);
        image(this.image,0,0,this.width,this.height);
        pop();
        
    }
}





