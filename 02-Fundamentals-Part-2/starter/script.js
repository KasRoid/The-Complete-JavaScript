"use strict";

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  let total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}

console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

const calcAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  const average = total / arr.length;
  return average;
};

console.log(calcAverage(totals));

/*
// The while Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`You Finally rolled a ${dice}!!!`)
}

// Looping Backwards and Loops in Loops
const kas = [
    'Kas',
    'Song',
    2021 - 1988,
    'iOS Developer',
    ['Michael', 'Peter', 'Steven']
];

for (let i = kas.length - 1; i >= 0; i--) {
    console.log(i, kas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}🏋🏼‍♀️`);
    }
}

// Looping Arrays, Breaking and Continuing
const kas = [
    'Kas',
    'Song',
    2021 - 1988,
    'iOS Developer',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < kas.length; i++) {
    console.log(kas[i], typeof kas[i]);
    // types[i] = typeof kas[i];
    types.push(typeof kas[i]);
}

console.log(types);

const years = [1988, 2007, 1969, 2012];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

// The for Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// Coding Challenges #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const compareBMI = (lhs, rhs) => {
    if (lhs > rhs) {
        console.log(`Mark's BMI (${lhs}) is higher than John's (${rhs})!`);
    } else if (rhs > lhs) {
        console.log(`John's BMI (${rhs}) is higher than Mark's (${lhs})!`);
    }
};

compareBMI(mark.calcBMI(), john.calcBMI());

// Objects Methods
const kas = {
    firstName: 'Kas',
    lastName: 'Song',
    birthYear: 1988,
    job: 'iOS Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge1: function (birthYear) {
        return 2021 - birthYear;
    },
    calcAge2: function () {
        return 2021 - this.birthYear;
    },
    calcAge3: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} driver's license`
    }
};

console.log(kas.calcAge1(kas['birthYear']));
console.log(kas.calcAge2());
kas.calcAge3();
console.log(kas.age);
console.log(kas.getSummary());

// Dot vs. Bracket Notation
const kas = {
    firstName: 'Kas',
    lastName: 'Song',
    age: 2021 - 1988,
    job: 'iOS Developer',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(kas);
console.log(kas.lastName);
console.log(kas['lastName']);

const nameKey = 'Name';
console.log(kas['first' + nameKey]);
console.log(kas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Kas? Choose between firstName, lastName, age, job, and friends');

if (kas[interestedIn]) {
    console.log(kas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

kas.location = 'South Korea';
kas['email'] = 'KasRoid@gmail.com';
console.log(kas);

// Challenge
console.log(`${kas.firstName} has ${kas.friends.length} friends, and his best friend is called ${kas.friends[0]}`);

// Introduction to Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// Coding Challenge #2
const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

console.log(total);

// Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1

console.log(friends.includes('Steven')); // True
console.log(friends.includes('Bob')); // False

// Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // Counting properties in the array
console.log(friends[friends.length - 1]); // Access to last property

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Kas';
const kas = [firstName, 'song', 2021 - 1988, 'teacher', friends];
console.log(kas);

// Exercise
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years)); // NaN

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);

// Coding Challenge #1
const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;

const koalasScore1 = 65;
const koalasScore2 = 54;
const koalasScore3 = 49;

const calcAverage = (score1, score2, score3) => {
    return (score1, score2, score3) / 3;
}

const dolphinsAvg1 = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const koalasAvg1 = calcAverage(koalasScore1, koalasScore2, koalasScore3);

checkWinner(dolphinsAvg1, koalasAvg1);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins')
    }
}

// Reviewing Functions

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1
    }
}

console.log(yearsUntilRetirement(1988, 'Kas'));
console.log(yearsUntilRetirement(1970, 'Mike'));
console.log(yearsUntilRetirement(1940, 'David'));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Arrow Functions
const calcAge3 = birthYear => 2021 - birthYear;
const myAge3 = calcAge3(1988);
console.log(myAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1988, 'Kas'));

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
