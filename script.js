let container = document.getElementById('container');
let colors = ['#e74c3c','#8e44ad','3298bd','#e67e22','#2ecc71'];
let SQUARES=500;


for(let i =0; i<SQUARES; i++){
    let square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square))
    square.addEventListener('mouseout',() => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    let color = getRandomColor()
    element.style.background = color
    element.style.boxshadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor (element) {
    element.style.background = '#1d1d1d'
    element.style.boxshadow='0 0 2px #000'
}
function getRandomColor () {
    return colors[Math.floor(Math.random()*colors.length)]
}

