console.log('starting')
//global variables

const canvas = document.querySelector('canvas');
const render = canvas.getContext('2d');

let mouseX;
let mouseY;

//manage window

resizecanvas();

function resizecanvas(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

//start engine
enginestart();