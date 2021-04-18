'use strict';
console.clear();

passingArguments();
// defaultParameters();

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
