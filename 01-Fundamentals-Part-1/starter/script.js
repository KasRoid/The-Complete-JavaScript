// The Conditional Operators
const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷' : "water💧"
console.log(drink)

/*
// Statements and Expressions
// Statements - it produce values
3 + 4
1991
true && false && !false

// Expressions
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'kas'
console.log(`I'm ${2037 - 1988} years old ${me}.`)

// The switch statement
const day = 'monday';
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    // break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'satuday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// Coding Challenge 3
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;
let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;
let koalasAverage = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAverage > koalasAverage) {
    console.log('Dolphin is Winner');
} else if (dolphinsAverage < koalasAverage) {
    console.log('Koala is Winner');
} else {
    console.log('DRAW');
}
console.log(`Dolphin: ${dolphinsAverage}, Koalas: ${koalasAverage}`);

dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;
dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;

koalas1 = 109;
koalas2 = 95;
koalas3 = 123;
koalasAverage = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('Dolphin is Winner');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('Koala is Winner');
} else {
    console.log('DRAW');
}

console.log(`Dolphin: ${dolphinsAverage}, Koalas: ${koalasAverage}`);

koalas3 = 106;
koalasAverage = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
    console.log('Dolphin is Winner');
} else if (dolphinsAverage < koalasAverage && koalasAverage > 100) {
    console.log('Koala is Winner');
} else if (dolphinsAverage === koalasAverage && dolphinsAverage > 100 && koalasAverage > 100) {
    console.log('DRAW');
} else {
    console.log('No Winner');
}

console.log(`Dolphin: ${dolphinsAverage}, Koalas: ${koalasAverage}`);

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

// Equality Operators
const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
    console.log("Cool! 23 is an amazing number! (loose)");
} else if (favorite == 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");

if (favorite === 23) console.log("Cool! 23 is an amazing number! (strict)");

// Truthy and Falsy Values
// Falsy Values - 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YaY! Height is defined");
} else {
    console.log("Height is undefined");
}

// Type Conversion and Coercion
// Type Conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number(`Kas`)); // NaN
console.log(typeof NaN);

console.log(String(23));

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n)

// Coding Challenge 2
const marksBMI = 28.3;
const johnsBMI = 23.9;

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`);
} else if (marksBMI == johnsBMI) {
    console.log(`Same`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`)
}

// Taking Decisions: If/Else Statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Kas can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Kas is too young Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas)

const jonasNew = `I'm ${firstName}, a${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

// Coding Challenge

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnsHeight = 1.95;

const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnsHeight = 1.76;

const marksBMI = marksWeight / marksHeight ** 2;
const marksBMI2 = marksWeight / (marksHeight * marksHeight);
const johnsBMI = johnsWeight / johnsHeight ** 2;
const johnsBMI2 = johnsWeight / (johnsHeight * johnsHeight);

const markHigherBMI = marksBMI > johnsBMI;
const markHigherBMI2 = marksBMI2 > johnsBMI2;

console.log(markHigherBMI, marksBMI, johnsBMI);
console.log(markHigherBMI2, marksBMI2, johnsBMI2);

// Operator Precedence
const now = 2037;
const ageKas = now - 1988;
const ageChu = now - 2009;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageKas + ageChu) / 2;
console.log(ageKas, ageChu, averageAge)


// Basic Operators
const now = 2037
const ageKas = now - 1988;
const ageChuChu = now - 2007;
console.log(ageKas, ageChuChu);
console.log(ageKas * 2, ageKas / 10, 2 ** 3);

const firstName = "Doyoung";
const lastName = "Song"
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10
x *= 4
x++;
x--;
console.log(x);

console.log(ageKas > ageChuChu);

const isFullAge = ageChuChu >= 18;
console.log(isFullAge);

// let, const and var
let age = 30;
age = 31;

const birthYear = 1988;

var job = "Programmer"
job = "Software Engineer"


let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Variable name conventions
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Song");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1988;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
