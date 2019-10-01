var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtn = document.querySelectorAll('.mode');

init();

function init(){
    setupModeButtons();
    //mode buttons event listener
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click",function(){
            modeBtn[0].classList.remove('selected')
            modeBtn[1].classList.remove('selected')
            this.classList.add('selected');
            this.textContent === 'EASY' ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct'
                resetButton.textContent = 'Play Again?'
                changeColors(clickedColor);
                h1Background.style.backgroundColor = clickedColor;
            }      
            else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again'
            }
        })
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors";

    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1Background.style.backgroundColor = '#232323';
}


resetButton.addEventListener("click", function(){
    reset();
})
colorDisplay.textContent = pickedColor;
 
 
function changeColors(pickedColor){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}


function pickColor(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor]
}

function generateRandomColors(num){
    var colorArr = []
    for(var i=0; i<num; i++){
        colorArr.push(randomColor())
    }
    return colorArr;
}

function randomColor(){
    //red
    var r = Math.floor(Math.random() * 256);
    //green
    var g = Math.floor(Math.random() * 256);
    //blue
    var b = Math.floor(Math.random() * 256);
    //rgb()
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 