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
