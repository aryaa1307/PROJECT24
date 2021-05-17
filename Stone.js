class Stone
{
    constructor(x,y)
    {
       var options=
       {
          restitution:0.8,
          friction:0.9,
          density:12
       } 
       this.body= Bodies.rectangle(x,y,50,50,options)
       this.width=30;
       this.height=60;
       World.add(world,this.body);
    }
    display()
    {
      var spos= this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(spos.x,spos.y,this.width,this.height);
    }
}