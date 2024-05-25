const elementAppMain = document.getElementById('app-main')
const btnPlayAgain = '<button id="play-again" class="btn-play-again">Jogar novamente</button>'

function validateAttempt(shoot) {
    const number = +shoot

    if (gameOver(shoot)) {
        elementAppMain.innerHTML = `
        <h2 class="">Você encerrou a partida!</h2>
        <h3 class="">O número secreto era ${secretNumber}</h3>
        ${btnPlayAgain}
        `
        return
    }

    if (validateNumber(number)) {
        elementShoot.innerHTML += `<div>Valor inválido: O valor não corresponde a um número. Tente novamente.</div>`
        return
    }

    displayTentative(shoot)

    if (validateNumericRange(number)) {
        elementShoot.innerHTML += `<div>Valor inválido: O número secreto está entre ${lowerValue} e ${highestValue}. Tente novamente.</div>`
        return
    } else if (number > secretNumber) {
        elementShoot.innerHTML += `<div>O número secreto é menor!</div>`
    } else if (number < secretNumber) {
        elementShoot.innerHTML += `<div>O número secreto é maior!</div>`
    }

    if (number === secretNumber) {
        elementAppMain.innerHTML = `
        <h2 class="">Você acertou!</h2>
        <h3 class="">O número secreto era ${secretNumber}</h3>
        ${btnPlayAgain}
        `
    }
}

function validateNumber(number) {
    return Number.isNaN(number)
}

function validateNumericRange(number) {
    return number > highestValue || number < lowerValue
} 

document.body.addEventListener('click', e => {
    if (e.target.id === 'play-again') {
        window.location.reload()
    }
})

function gameOver(shoot) {
    const gameOverKeywords = ['terminar', 'encerrar', 'game over', 'desistir']
    return gameOverKeywords.includes(shoot.toLowerCase())
}