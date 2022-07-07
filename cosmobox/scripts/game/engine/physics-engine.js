function colision(){

}

function gravity(){
   for(let i = 0; i < objects.length; i++){
    for(let e = 0; e < objects.length; e++){
       if(e != i){
           let obj1 = objects[i]
           let obj2 = objects[e]
           let drf = vector.subtract(obj1, obj2)
           let dsf = drf.magnitude()
           drf = vector.normalize(drf)
           console.log(drf)
       }
    }
   }
}

function getdistance(obj1, obj2){
    var xdif = obj1.posX = obj2.posX
    var ydif = obj1.posY = obj2.posY

    return Math.sqrt(xdif * xdif + ydif * ydif);
}