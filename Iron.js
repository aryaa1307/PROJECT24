class Iron
{
   constructor(x,y)
   {
       var options=
       {
         restitution:0.8,
         friction:3,
         density:30
       }
      this.body= Bodies.rectangle(x,y,50,50,options)
      this.width= 60;
      this.height= 60; 
      World.add(world,this.body)
   }
   display()
   {
      var ipos= this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(ipos.x,ipos.y,this.width,this.height);
   }
}