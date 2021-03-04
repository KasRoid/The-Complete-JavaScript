"use strict";
console.clear();

// Primitives vs. Objects
let age = 30;
let oldAge = age;
age = 31;
// console.log("age: ", age);
// console.log("oldAge: ", oldAge);

const i = {
  name: "Kas",
  age: 30,
};
const friend = i;
friend.age = 27;
console.log("I: ", i);
console.log("Friend: ", friend);

// Regular Functions vs. Arrow Functions
const myself = {
  fistName: "kas",
  year: 1988,
  calcAge: function () {
    console.log("myself: ", 2021 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log("myself isMillenial this: ", this);
      console.log("myself isMillenial self: ", self);
    };
    const isMillenialArrow = () => {
      console.log("myself isMillenialArrow this: ", this);
    };
    isMillenial();
    isMillenialArrow();
  },
  greet: () => {
    console.log("myself greet this: ", this);
  },
};

// myself.calcAge();
// myself.greet();

// The this Keyword in Practice
// console.log("this: ", this);
const calculate = function (number) {
  console.log(100 - number);
  console.log("this in calculate: ", this);
};

const calculateArrow = number => {
  console.log(100 - number);
  console.log("this in calculateArrow: ", this);
};
// calculate(10);
// calculateArrow(10);

const kas = {
  year: 1988,
  calcAge: function () {
    console.log("this in kas: ", this);
  },
};
// kas.calcAge();

const matilda = {
  year: 1993,
};
matilda.calcAge = kas.calcAge;
// matilda.calcAge();

const f = kas.calcAge;
// f();

// Hoisting and TDZ Practice
// console.log(me);
// console.log(teacher);
// console.log(year);

var me = "Kas";
let job = "iOS Developer";
const year = 1988;

// console.log(addDecl(2, 3));
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
// if (!numberOfProducts) deleteShoppingCart();
var numberOfProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// Scoping in Practice
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
// calcAge(1988);
