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

function percent(varA, varB) {
    return varA % varB
}

function clear() {
    numberOne = ''
    numberTwo = ''
    factor = ''
    // finish = false
    display.textContent = '0'
}


const digit = ['0','1','2','3','4','5','6','7','8','9', '.']
const operation = ['%','/','X','-','+']
const ac = document.querySelector('.ac')
const buttons = document.querySelector('.buttons')

let numberOne = ''
let numberTwo = ''
let factor = ''
// let finish = false

const display = document.querySelector('.screen')

buttons.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) clear();

    display.textContent = ''

    const key = event.target.textContent

    if (digit.includes(key)) {

        if (numberTwo === '' && factor === '') {
            numberOne += key
            display.textContent = numberOne
        }
        else {
            numberTwo += key
            display.textContent = numberTwo
        }

    }

    else if (operation.includes(key)) {
        factor = key
        display.textContent = key
    }

    if (key === '=') {
        
        switch (factor) {
            case '+':
                display.textContent = add(+numberOne, +numberTwo)
                numberOne = display.textContent
                numberTwo = ''
                factor = ''
                break

            case '-':
                display.textContent = subtract(+numberOne, +numberTwo)
                numberOne = display.textContent
                numberTwo = ''
                factor = ''
                break

            case '/':
                if (numberTwo === '0') {
                    display.textContent = 'ERROR'
                    numberOne = ''
                    numberTwo = ''
                    factor = ''
                    break
                }

                else {
                    display.textContent = divide(+numberOne, +numberTwo)
                    numberOne = display.textContent
                    numberTwo = ''
                    factor = ''
                    break
                }

            case 'X':
                display.textContent = multiply(+numberOne, +numberTwo)
                numberOne = display.textContent
                numberTwo = ''
                factor = ''
                break

            case '%':
                display.textContent = percent(+numberOne, +numberTwo)
                numberOne = display.textContent
                numberTwo = ''
                factor = ''
                break

            case '+/-':

        }


    }
})