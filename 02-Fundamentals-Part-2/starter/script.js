'use strict';

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

/*
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
