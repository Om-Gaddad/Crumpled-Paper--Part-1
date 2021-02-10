class Box {
    constructor(x, y, height, angle) {
      var options = {
         
          'friction':1.0,
          'isStatic': true
         
      }


      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;

      Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
        
      var pos =this.body.position;
      var angles = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angles);
     
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();

    }
  };