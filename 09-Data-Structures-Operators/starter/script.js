// "use strict";
console.clear();

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${time} at ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Rest Pattern and Parameters
const arr1 = [1, 2, ...[3, 4]]; // Spread
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const arrayX = [23, 5, 7];
add(...arrayX);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");

// The Spread Operator
const array = [7, 8, 9];
const newArray = [1, 2, ...array];
// console.log(newArray);
// console.log(...newArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menuMerged = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menuMerged);

const str = "Kas"; // Iterables: arrays, strings, maps, sets. NOT Objects
const letters = [...str, "Q"];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredients 1?"),
//   prompt("Let's make pasta! Ingredients 2?"),
//   prompt("Let's make pasta! Ingredients 3?"),
// ];

// restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: "Kas Song" };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Goodnight Way. Apt 2",
//   starterIndex: 1,
// });

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant; // Defualt Values
// console.log(menu, starters);

let g = 111; // Mutating Variables
let h = 999;
const obj = { g: 23, h: 7, i: 14 };
({ g, h } = obj);
// console.log(g, h);

const {
  fri: { open: openHour, close: closeHour },
} = openingHours; // Nested Objects
// console.log(openHour, closeHour);

// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

const [x, y, z] = arr;
// console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main]; // Switching Varibales
// console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0); // Receive 2 return values from a function
// console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested; // Nested Destructuring
// console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9]; // Defualt Values
// console.log(p, q, r);
