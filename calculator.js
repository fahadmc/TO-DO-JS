const prompt = require('prompt-sync')()
let num1 = parseFloat(prompt("enter first number"));
let operator = prompt("enter the operation you need");
let num2 = parseFloat(prompt("enter second number"));
// if (operator === '+') {
//     sum(num1, num2);
// }
// else if (operator === '-') {
//     minus(num1, num2)
// }
// else if (operator === '*') {
//     mult(num1, num2)
// }
// else if (operator === '/') {
//     div(num1, num2)
// }
switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    default:
        console.log("enter valid operatpor");
        break;
}

// function sum(a, b) {
//     let sum2 = a + b;
//     alert(sum2);
// }
// function mult(a, b) {
//     let mult = a * b;
//     alert(mult);
// }
// function div(a, b) {
//     let div = a / b;
//     console.log(div);
// }
// function minus(a, b) {
//     let minus = a - b;
//     alert(minus);
// }
// sum(4, 4);
// const b=minus(8,5)
// console.log("difference is",b);
// const a = () => {

// }
// function sum11(){


// }
// const v = function(){

// }