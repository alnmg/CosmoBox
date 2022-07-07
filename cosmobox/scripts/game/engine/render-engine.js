function clearCanvas(){
    render.clearRect(0,0, canvas.width, canvas.height) 
}

function renderObjects(){
    objects.forEach((object) => {
        object.drawn()
    })
}
function updateobjects(){
    objects.forEach((object) => {
        object.update()
    })
}