const objects = []

class object{
    //:: position{X,Y}, initialvelocity{x,y}, acceleration{x,y}, isstatic?, size, mass, color ::
    constructor(position, inivelocity, acceleration, color,size, mass, isstatic){

        this.position = new vector(position.x,position.y)

        this.velocity = new vector (inivelocity.x,inivelocity.y)
        this.acceleration = new vector(acceleration.x,acceleration.y)

        this.mass = mass;
        this.size = size;
        this.color = color;
        this.isstatic = isstatic;
        

    }
    drawn(){
        render.beginPath()
        render.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false)
        render.fillStyle = this.color
        render.fill();
       
       
    }

    update(){
        /*this.posX = this.posX + this.velocity.x
        this.posY = this.posY + this.velocity.y*/

        this.velocity = vector.add(this.velocity,this.acceleration)
        this.position = vector.add(this.position,this.velocity)
        
        this.drawn()


    }
    
}

function createObj(posX, posY, size, velocity, color){
    objects.push(new object(posX, posY, size, velocity, color))
}

class vector{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    static add (v1,v2){
        let res = new vector(0,0)
        res.x = v1.x + v2.x
        res.y = v1.y + v2.y
        return res;
    }
    static subtract (v1,v2){
        let res = new vector(0,0)
        res.x = v1.x - v2.x
        res.y = v1.y - v2.y
        return res;
    }
    static multiply (v1,v2){
        let res = new vector(0,0)
        res.x = v1.x * v2.x
        res.y = v1.y * v2.y
        return res;
    }
    magnitude(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    static normalize(v){
        let res = new vector(0,0)
        let mag = v.magnitude
        res.x = v.x/mag
        res.y = v.y/mag
        return res;
    }
}
