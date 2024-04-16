// CTRL+I then I typed this...
// @workspace Write markdown documentation describing the usage and functionality of test.js
// result was... fail (it hallucinated; now retry at the bottom of the file itself!)

// test.js

/**
 * This is a test file.
 * It is used to demonstrate the usage of documentation comments.
 */

/**
 * This function adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(a, b) {
    return a + b;
}

/**
 * This function multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiplyNumbers(a, b) {
    return a * b;
}

===

MEH! Move on.


// create a new markdown file which is documentation describing the usage and functionality of the above. Also test examples.
# Calculator Documentation

## Usage

The `calculate` function is used to perform basic arithmetic operations on two numbers. It takes three parameters: `number1`, `number2`, and `operation`. The function returns the result of the operation.

# why is this not appearing as staged file (!?)
