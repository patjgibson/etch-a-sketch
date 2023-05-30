const TOTAL_WIDTH = 720;
let numSquares = 16;

let pixels = document.querySelectorAll('.pixel');
const btn = document.querySelector(`button`);
const container = document.querySelector('.box');

let rowDiv = "<div class='row'>";
let pixelDiv = "<div class='pixel'></div>";
let innerHTML = "";

// Functions

/*
  setGridSize
  sets the number of boxes across the grid is
 */
function setGridSize(numSquares) {

    // Set-up the grid
    innerHTML = '';
    
    for (let i=0; i<numSquares; i++) {
	innerHTML += rowDiv;
	for (let j=0; j<numSquares; j++) {
	    innerHTML += pixelDiv;
	}
	innerHTML += "</div>";
    }
    
    container.innerHTML = innerHTML;
    
    pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach(pixel => {
	let width = TOTAL_WIDTH / numSquares;
	pixel.style.width = width + "px";
	pixel.style.height = width + "px";
    });

    pixelListener();
    
}

/*
  pixelListener
  adds event listener to each pixel
 */

function pixelListener() {
    pixels.forEach(pixel => pixel.addEventListener('click', function(e) {
	togglePixel(e.srcElement);
    }));
}

/*
  togglePixel
  toggles the color of the pixel
*/

function togglePixel(pixel) {
    console.log(pixel);
    let color = pixel.style.backgroundColor;
    console.log(color);

    if (color == 'black') {
	pixel.style.backgroundColor = 'white';
    } else {
	pixel.style.backgroundColor = 'black';
    }
}

// Set by default
setGridSize(numSquares);


// Add event listener to button on top

btn.addEventListener('click', function (e) {
    do {
	numSquares = parseInt(prompt('Enter the width in squares less than 30.'));
	if (isNaN(numSquares)) break;
    } while (numSquares < 1 || numSquares > 30);
    if (!isNaN(numSquares)){
	setGridSize(numSquares);
    }
});
