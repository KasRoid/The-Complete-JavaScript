'use strict';
console.clear();

defaultParameters();

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
