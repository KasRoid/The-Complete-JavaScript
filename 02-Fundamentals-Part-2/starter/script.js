'use strict';

// Function Declarations vs. Expressions
// Function Declaration
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const myAge = calcAge1(1988);

// Function Expression
const calcAge2 = function (birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const myAge2 = calcAge2(1988);
console.log(myAge, myAge2);

/*
// Functions
function logger() {
    console.log('My name is Kas');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/
