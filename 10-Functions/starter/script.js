'use strict';
console.clear();

functionsAcceptingCallbackFunctions();
// passingArguments();
// defaultParameters();

function functionsAcceptingCallbackFunctions() {
  const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };

  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };

  const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
  };
  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);

  const punch = () => {
    console.log('👊🏼');
  };
  document.body.addEventListener('click', punch);

  ['Kas', 'Martha', 'Adam'].forEach(punch);
}

function passingArguments() {
  const flight = 'LH234';
  const kas = {
    name: 'Kas Song',
    passport: 23242523523,
  };
  const checkIn = (flightNumber, passenger) => {
    flightNumber = 'LH999';
    passenger.name = 'Mr. ' + passenger;
    if (passenger.passport === 23242523523) {
      console.log('Checked in');
    } else {
      console.log('Wrong passport!');
    }
  };
  checkIn(flight, kas);
  console.log(flight);
  console.log(kas);

  const flightNumber = flight;
  const passenger = kas;

  const newPassport = person => {
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
  createBooking('LH123');
  createBooking('LH123', '2', '800');
}
