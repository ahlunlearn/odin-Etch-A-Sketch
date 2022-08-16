let side = 16
let sidelength = 750
let isColored = false

const container = document.querySelector('.container')
function createGrid(){
    for(let i=0; i<side;i++){
        const row = document.createElement('div')
        row.classList.add('flex')
        for(let j=0; j<side; j++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.style.width = `${sidelength/side}px`
            square.style.height = `${sidelength/side}px`
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}

function clearGrid(){
    container.innerHTML = ''
    createGrid()
}

createGrid()
const sideBtn = document.querySelector('.btn_side')
sideBtn.addEventListener('click', ()=>{
    do{
        side = parseInt(prompt('How many square do you want of a side? cannot bigger than 100','16'))
    }while(side > 100 || side < 1)
    clearGrid()
})

const blackBtn = document.querySelector('.black')
blackBtn.addEventListener('click', ()=>{
    isColored = false
})

const rainbowBtn = document.querySelector('.rainbow')
rainbowBtn.addEventListener('click', ()=>{
    isColored = true
})

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', clearGrid)


function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

window.addEventListener('mouseover', (e)=>{
    if(e.target.classList.contains('square')){
        if(isColored){
            e.target.style.backgroundColor = generateRandomColor()
        } else {
            e.target.style.backgroundColor = 'black'
        }
    }
})