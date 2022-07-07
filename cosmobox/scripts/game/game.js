//called on game start
function gameStart(){
    
    createObj({x:500, y:150}, {x:0.1, y:0.3}, {x:0.001,y:0},'black',15,0, false)
    createObj({x: 100, y:100}, {x:0 , y:0}, {x:0 , y:0},'blue' ,35, 5,  false)
    gravity()
}

//in game loop
function gameUpdate(){



    
}

//every 30fps
function gameFixedUpdate(){

}
function onWindowClick(){
    createObj({x:mouseX, y:mouseY},{x:2, y:0}, {x:0.02,y:-0.08},'black',12,2, )
    
}