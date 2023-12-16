window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;
  

  class Mandrake {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.image = document.getElementById('mandrake');
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.canvasWidth/2;
        this.y = this.canvasHeight/2;
        this.minFrame = 0;
        this.maxFrame = 355;
    }
    draw(context){
        context.drawImage(this.image, 6 * this.spriteWidth, 8 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    update(){

    }
  }
  const mandrake = new Mandrake(canvas.width, canvas.height);

  function animate(){
   
    mandrake.draw(ctx);
    
  }
  animate();
});