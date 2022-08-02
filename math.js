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

