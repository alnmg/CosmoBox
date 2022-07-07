const objects = []

class object{
    constructor(posX, posY, size, velocity, color){

        this.posX = posX;
        this.posY = posY;

        this.velocity = velocity

        this.size = size;
        this.color = color;

    }
    drawn(){
        render.beginPath()
        render.arc(this.posX, this.posY, this.size, 0, Math.PI * 2, false)
        render.fillStyle = this.color
        render.fill();
    }

    update(){
        this.posX = this.posX + this.velocity.x
        this.posY = this.posY + this.velocity.y
        this.drawn()
    }
    
}

function createObj(posX, posY, size, velocity, color){
    objects.push(new object(posX, posY, size, velocity, color))
}
