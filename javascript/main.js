const numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
};

const operators = {
    'plus': '+',
    'minus': '-',
    'multiply': '*',
    'divide': '/',
};

let stack = [];
let lastInput = '';
let lastOperator = '';
let plusMinusIndicator = '+';

function keyClick(id) {
    const inputRef = document.getElementById('display-result');
    if (id === 'clear') {
        inputRef.value = '';
        plusMinusIndicator = '';
        document.getElementById('plus-minus-indicator').innerHTML = '';
        stack = [];
        return;
    }

    if (id in numbers) {
        num = numbers[id];
        if (lastInput === 'number') {
            inputRef.value += numbers[id];
        } else {
            inputRef.value = numbers[id];
        }
        lastInput = 'number';
    }

    if (id in operators) {
        if (lastInput === 'operator') {
            stack[stack.length - 1] = operators[id];
        } else {
            stack.push(inputRef.value);
            stack.push(operators[id]);
        }
        lastInput = 'operator';
    }

    if (id === 'equals') {
        stack.push(inputRef.value);
        let expression = stack.join('');
        const result = eval(expression);
        inputRef.value = eval(expression);
        stack = [];
    }

    if (id === 'plus-minus') {
        plusMinusIndicator = plusMinusIndicator === '' ? '-' : '';
        document.getElementById('plus-minus-indicator').innerHTML = plusMinusIndicator;
    }
}