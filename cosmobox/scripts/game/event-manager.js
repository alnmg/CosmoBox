window.addEventListener('click', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    onWindowClick()
})

//

const newObjButton = document.querySelector('.newobj-button')

newObjButton.addEventListener('click', (event) => {
    
})

const btnstop = document.querySelector('.stop-button')
const btnstart = document.querySelector('.start-button')

btnstop.addEventListener('click', (event) =>{
    btnstop.setAttribute('disabled','')
    btnstart.removeAttribute('disabled')
    loopupdate = false;
})
btnstart.addEventListener('click', (event) =>{
    btnstart.setAttribute('disabled','')
    btnstop.removeAttribute('disabled')
    loopupdate = true;
})