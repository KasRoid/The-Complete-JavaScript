"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  const output = `${firstName}, You are ${age}, born in ${birthYear}`;
  console.log(output);

  if (birthYear >= 1981 && birthYear <= 1996) {
    const firstName = "Steven";
    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);
  }
  return age;
}

const firstName = "Kas";
calcAge(1988);

// Hoisting and TDZ Practice
console.log(me);
// console.log(teacher);
// console.log(year);

var me = "Kas";
let job = "iOS Developer";
const year = 1988;

console.log(addDecl(2, 3));
// console.log(addEConst(2, 3));
// console.log(addArror(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addEConst = function addDecl(a, b) {
  return a + b;
};
var addArror = (a, b) => a + b;

// Example of Hoisting
if (!numberOfProducts) deleteShoppingCart();
var numberOfProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
