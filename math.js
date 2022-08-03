function add(varA, varB) {
    return varA + varB
}

function subtract(varA, varB) {
    return varA - varB
}

function multiply(varA, varB) {
    return varA * varB
}

function divide(varA, varB) {
    return varA / varB
}

function operate(operator, numA, numB) {

    if (operator === 'add') {
        return add(numA, numB)
    }

    else if (operator === 'subtract') {
        return subtract(numA,numB)
    }

    else if (operator === 'multiply') {
        return multiply(numA, numB)
    }

    else if (operator === 'divide') {
        return divide(numA, numB)
    }

}

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.screen')

const numberOne = document.querySelector('.numberOne')
const numberTwo = document.querySelector('.numberTwo')
const addFunction = document.querySelector('.addFunction')

buttons.forEach((button) => {

    let counter = 0

    button.addEventListener('click', () => {

        const value = button.textContent


        if (value === 'AC') {
            numberOne.textContent = ''
            numberTwo.textContent = ''
            addFunction.textContent = ''
        }

        else if (value === '1') {

            if (counter === 0) {
                numberOne.textContent += 1
            }
            else {
                numberTwo.textContent += 1
            }

        }

        else if (value === '2') {

            if (counter === 0) {
                numberOne.textContent += 2
            }
            else {
                numberTwo.textContent += 2
            }

        }

        else if (value === '3') {

            if (counter === 0) {
                numberOne.textContent += 3
            }
            else {
                numberTwo.textContent += 3
            }

        }

        else if (value === '4') {

            if (counter === 0) {
                numberOne.textContent += 4
            }
            else {
                numberTwo.textContent += 4
            }

        }

        else if (value === '5') {

            if (counter === 0) {
                numberOne.textContent += 5
            }
            else {
                numberTwo.textContent += 5
            }

        }

        else if (value === '6') {

            if (counter === 0) {
                numberOne.textContent += 6
            }
            else {
                numberTwo.textContent += 6
            }

        }

        else if (value === '7') {

            if (counter === 0) {
                numberOne.textContent += 7
            }
            else {
                numberTwo.textContent += 7
            }

        }

        else if (value === '8') {

            if (counter === 0) {
                numberOne.textContent += 8
            }
            else {
                numberTwo.textContent += 8
            }

        }

        else if (value === '9') {

            if (counter === 0) {
                numberOne.textContent += 9
            }
            else {
                numberTwo.textContent += 9
            }

        }

        else if (value === '0') {

            if (counter === 0) {
                numberOne.textContent += 0
            }
            else {
                numberTwo.textContent += 0
            }

        }

        else if (value === '+') {
            counter++
        }

        console.log(numberOne)
        console.log(numberTwo)
        console.log(addFunction)

    })
})