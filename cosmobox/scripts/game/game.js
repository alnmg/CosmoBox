//called on game start
function gameStart(){

    createObj(500, 150, 15, {x:0.8,y:-0.5}, 'black')

}

//in game loop
function gameUpdate(){


    render.beginPath()
    render.arc(100, 100, 35, 0, Math.PI * 2, false)
    render.fillStyle = "blue"
    render.fill();

    
}

//every 30fps
function gameFixedUpdate(){

}
function onWindowClick(){
    createObj(mouseX, mouseY, 15, {x:0.8,y:-0.5}, 'black')
    
}