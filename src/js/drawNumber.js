const elementLowerValue = document.getElementById('lower-value')
const elementHighestValue = document.getElementById('highest-value')

const lowerValue = 1 
const highestValue = 100

elementLowerValue.innerHTML = lowerValue
elementHighestValue.innerHTML = highestValue


function generateRandomNumber() {
    return parseInt(Math.random() * highestValue + 1)
}

const secretNumber = generateRandomNumber()

console.log(`Número secreto: ${secretNumber}` )