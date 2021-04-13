class Calculator {
    constructor(previousOperandTextElemnet, currentOperandTextElemnet) {
        this.previousOperandTextElemnet = previousOperandTextElemnet;
        this.currentOperandTextElemnet = currentOperandTextElemnet;
        this.clear()
    }

    clear() {
        this.currentOperand = '';
        thies.previousOperand = '';
        thies.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElemnet = document.querySelector('[data-previous-operand]')
const currentOperandTextElemnet = document.querySelector('[data-current-operand]')