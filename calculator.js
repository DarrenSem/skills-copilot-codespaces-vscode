// calculator.js
function calculate(number1, number2, operation) {
    let result;
    switch(operation) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            if(number2 != 0) {
                result = parseFloat(number1) / parseFloat(number2);
            } else {
                throw new Error('Division by zero.');
            }
            break;
        default:
            throw new Error('Invalid operation!');
    }
    return result;
}

module.exports = calculate;
