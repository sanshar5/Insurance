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

function keyClick(id) {
    if (id === 'clear') {
        document.getElementById('display-result').value = '';
        stack = [];
        return;
    }

    if (id in numbers) {
        num = numbers[id];
        if (lastInput === 'number') {
            document.getElementById('display-result').value += numbers[id];
        } else {
            document.getElementById('display-result').value = numbers[id];
        }
        lastInput = 'number';
    }

    if (id in operators) {
        if (lastInput === 'operator') {
            stack[stack.length - 1] = operators[id];
        } else {
            stack.push(document.getElementById('display-result').value);
            stack.push(operators[id]);
        }
        lastInput = 'operator';
    }

    if (id === 'equals') {
        stack.push(document.getElementById('display-result').value);
        let expression = stack.join('');
        document.getElementById('display-result').value = eval(expression);
    }
}