let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    score = 0,
    gameTime = 0,
    interval = 0;
    
btn.addEventListener('click', () => {
    if (input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        if (result) {
            result.style.display = 'none'
        }
        clearInterval(interval)
        score = 0
        start()
    }
})

gameBlock.addEventListener('click', (event) => {
    if (event.target.classList.contains('shape')) {
        score++
        event.target.style.backgroundColor = getRandomColor()
        event.target.remove()
        createShape()
    }
})

function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createShape()
}

function decrease() {
    if (gameTime == 0) {
        end()
    } else {
        let currentTime = --gameTime
        timeOut.innerHTML = currentTime
    }
}

function end() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}

function createShape() {
    let shapeType = getRandomShape()
    let shapeColor = getRandomColor()
    let shape = document.createElement('div')
    shape.classList.add('shape', shapeType)
    shape.style.backgroundColor = shapeColor
    let { width, height } = gameBlock.getBoundingClientRect()
    let size = random(20, 100)
    let leftValue = random(0, width - size)
    let topValue = random(0, height - size)
    shape.style.width = size + 'px'
    shape.style.height = size + 'px'
    shape.style.left = leftValue + 'px'
    shape.style.top = topValue + 'px'
    gameBlock.append(shape)
}

function getRandomColor() {
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff']
    return colors[Math.floor(Math.random() * colors.length)]
}

function getRandomShape() {
    let shapes = ['circle', 'square', 'triangle']
    return shapes[Math.floor(Math.random() * shapes.length)]
}

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
