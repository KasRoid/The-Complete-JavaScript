"use strict";
console.clear();

codingChallenge1();
// theCallAndApplyMethods();
// functionsReturningFunctions();
// functionsAcceptingCallbackFunctions();
// passingArguments();
// defaultParameters();

function codingChallenge1() {
  const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Swift", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {
      const answer = prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      );
      if (answer >= 0 && answer < 4) this.answers[answer]++;
      console.log(this.answers);
    },
    displayResults: function (type) {
      if (typeof type === "String") {
        console.log("asdf");
      }
    },
  };
  poll.registerNewAnswer();
  poll.displayResults("asdss");

  document
    .querySelector(`.poll`)
    .addEventListener("click", poll.registerNewAnswer.bind(poll));
}

function theCallAndApplyMethods() {
  const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNumber, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
    },
  };

  lufthansa.book(239, "Kas Song");
  lufthansa.book(635, "John Smith");
  console.log(lufthansa.bookings);

  const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
  };

  const book = lufthansa.book;

  // book(23, 'Sarah Williams');
  book.call(eurowings, 23, "Sarah Williams");
  console.log(eurowings);
  book.call(lufthansa, 239, "Mary Cooper");

  const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
  };

  book.call(swiss, 583, "Mary Cooper");
  console.log(swiss);

  const flightData = [583, "George Cooper"];
  book.apply(swiss, flightData);
  book.call(swiss, ...flightData);

  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  const bookLX = book.bind(swiss);
  bookEW(23, "Steven Williams");
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23("Steven Williams");

  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
  };
  document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  const addVAT = addTax.bind(null, 0.2);
  console.log(addVAT(200));

  function addTaxRate(rate) {
    return function (value) {
      const result = value + value * rate;
      console.log(result);
      return result;
    };
  }
  addTaxRate(0.2)(400);
}

function functionsReturningFunctions() {
  const greet = (greeting) => {
    return (name) => {
      console.log(`${greeting} ${name}`);
    };
  };
  const greeterHey = greet("Hey");
  greeterHey("Kas");
  greeterHey("Steven");
  greet("Hello")("Kas");
}

function functionsAcceptingCallbackFunctions() {
  const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
  };

  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
  };

  const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
  };
  transformer("JavaScript is the best!", upperFirstWord);
  transformer("JavaScript is the best!", oneWord);

  const punch = () => {
    console.log("👊🏼");
  };
  document.body.addEventListener("click", punch);

  ["Kas", "Martha", "Adam"].forEach(punch);
}

function passingArguments() {
  const flight = "LH234";
  const kas = {
    name: "Kas Song",
    passport: 23242523523,
  };
  const checkIn = (flightNumber, passenger) => {
    flightNumber = "LH999";
    passenger.name = "Mr. " + passenger;
    if (passenger.passport === 23242523523) {
      console.log("Checked in");
    } else {
      console.log("Wrong passport!");
    }
  };
  checkIn(flight, kas);
  console.log(flight);
  console.log(kas);

  const flightNumber = flight;
  const passenger = kas;

  const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 10000000000);
  };
  newPassport(kas);
  checkIn(flight, kas);
}

function defaultParameters() {
  const bookings = [];
  const createBooking = (flightNumber, numberOfPassengers = 1, price = 199) => {
    const booking = {
      flightNumber,
      numberOfPassengers,
      price,
    };
    console.log(booking);
    bookings.push(booking);
  };
  createBooking("LH123");
  createBooking("LH123", "2", "800");
}
