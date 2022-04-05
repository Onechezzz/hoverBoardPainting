const board = document.querySelector('#board');
const colors = ['#874AB0', '#E68970', '#EB5F84', '#FFDFB7', '#1A91CD']
const colorPanel = document.querySelector('#panel');
// const randomColor = `linear-gradient(215.32deg, #FDE2C5 -1%, #575016 124%)`;
const panelColors=["Red", "Orange", "Yellow", "Green","skyblue", "Blue", "Indigo"];
const panelSquares = panelColors.length;
const SQUARES_NUMBER = 500;
let activeColor;

for (let i = 0; i<panelColors.length+1; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.backgroundColor = panelColors[i];
    colorPanel.append(square)
    square.addEventListener('click', ()=>{
        activeColor = panelColors[i]
        // getColor(panelColors[i])
    })
}
for(let i = 0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })


    board.append(square)
}

function setColor(element){
    let color = activeColor;
    if (color == undefined){
        console.log('here')
        color = getRandomColor()
    }
    // const color = getColor();
    console.log('color',color);
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`;
}
function getColor(element){
    console.log('square', element)
    console.log('activeColor', activeColor);
    let index = element;
    console.log('element',element);
    if(index == undefined){
        index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
     return element
    
    
    // return colors[index]
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}