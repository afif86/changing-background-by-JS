//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'lightGreen', 'skyBlue', 'yellow', 'violet', 'purple', 'orange']

body.style.backgroundColor = 'pink'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}