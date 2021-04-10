// "use strict";
console.clear();

// Enhanced Object Literals
const restaurnatWeekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurantOpeningHours = {
  [restaurnatWeekdays[3]]: {
    open: 12,
    close: 22,
  },
  [restaurnatWeekdays[4]]: {
    open: 11,
    close: 23,
  },
  [restaurnatWeekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: restaurantOpeningHours,

  order(starterIndex, mainIndex) {
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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Working with Strings Part 2
const workingWithStrings2 = () => {
  const airline = "TAP Air Portugal";
  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());

  const passenger = "kAs";
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);

  const email = "hello@kas.io";
  const loginEmail = "  Hello@kAs.Io \n";
  const loginEmailLower = loginEmail.toLowerCase();
  const trimmedEmail = loginEmailLower.trim();
  console.log(trimmedEmail);

  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail);

  const priceKR = "288,97₩";
  const priceUS = priceKR.replace("₩", "$").replace(",", ".");
  console.log(priceUS);

  const announcement =
    "All passengers come to boarding door 23. Boarding door 23!";
  console.log(announcement.replace("door", "gate"));
  console.log(announcement.replaceAll("door", "gate"));
  console.log(announcement.replace(/door/g, "gate")); // Regular Expression

  const plane = "Airbus A320neo";
  console.log(plane.includes("A320"));
  console.log(plane.includes("Boeing"));
  console.log(plane.startsWith("Air"));

  if (plane.startsWith("Airbus") && plane.endsWith("neo"))
    console.log("Part of the NEW Airbus family");

  const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
      console.log("You are NOT allowed on board");
    } else {
      console.log("Welcome aboard!");
    }
  };
  checkBaggage("I have a laptop, some Food and a pocket Knife");
  checkBaggage("Socks and camera");
  checkBaggage("Got some snacks and a gun for protection");
};

workingWithStrings2();

// Working with Strings Part 1
const workingWithStrings1 = () => {
  const airline = "TAP Air Portugal";
  const plane = "A320";

  console.log(plane[0]);
  console.log(plane[1]);
  console.log(plane[2]);
  console.log("B737"[0]);

  console.log(airline.length);
  console.log("B737".length);

  console.log(airline.indexOf("r"));
  console.log(airline.lastIndexOf("r"));
  console.log(airline.indexOf("Portugal"));

  console.log(airline.slice(4));
  console.log(airline.slice(4, 7));

  console.log(airline.slice(0, airline.indexOf(" ")));
  console.log(airline.slice(airline.lastIndexOf(" " + 1)));

  console.log(airline.slice(-2));
  console.log(airline.slice(1, -1));

  const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === "B" || s === "E") {
      console.log("You got the middle seat");
    } else {
      console.log("You got lucky");
    }
  };

  checkMiddleSeat("11B");
  checkMiddleSeat("23C");
  checkMiddleSeat("3E");
};

// workingWithStrings1();

// Coding Challenge #3
const codingChallenge3 = () => {
  const gameEvents = new Map([
    [17, "⚽️ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽️ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽️ GOAL"],
    [80, "⚽️ GOAL"],
    [92, "🔶 Yellow card"],
  ]);
  const gameMinutes = 90;

  // 1
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  // 2
  gameEvents.delete(64);
  console.log(gameEvents);
  // 3
  console.log(
    `An event happend, on average, every ${
      gameMinutes / gameEvents.size
    } minutes`
  );
  // 4
  for (const [key, value] of gameEvents) {
    const time = key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
    console.log(`${time} ${key}: ${value}`);
  }
};

// codingChallenge3();

// Maps - Iteration
const mapsIteration = () => {
  const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct"],
    [false, "Try again!"],
  ]);
  console.log(question);

  const hoursMap = new Map(Object.entries(restaurantOpeningHours));
  console.log(hoursMap);

  console.log(question.get("question"));
  for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
  }
  const answer = Number(prompt("Your answer"));
  console.log(
    answer === question.get("correct")
      ? question.get(true)
      : question.get(false)
  );

  console.log([...question]);
  // console.log([...question.entries()]);
  console.log([...question.keys()]);
  console.log([...question.values()]);
};
// mapsIteration();

// Maps - Fundamentals
const mapsConsoleLog = () => {
  const restaurantMap = new Map();
  restaurantMap.set("name", "Classico Italiano");
  restaurantMap.set(1, "Firenze, Italy");
  restaurantMap.set(2, "Lisbon, Portugal");

  restaurantMap
    .set("categories", ["Italian", "Pizzeria"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open")
    .set(false, "We are closed");

  console.log(restaurantMap);
  console.log(restaurantMap.get("name"));
  console.log(restaurantMap.get(true));
  console.log(restaurantMap.get(1));

  const time = 21;
  console.log(
    restaurantMap.get(
      time > restaurantMap.get("open") && time < restaurantMap.get("close")
    )
  );

  console.log(restaurantMap.has("open"));
  restaurantMap.delete(2);
  console.log(restaurantMap.has(2));
  console.log(restaurantMap.size);
  restaurantMap.clear();
  console.log(restaurantMap.size);

  const arrayKey = [1, 2];
  restaurantMap.set(arrayKey, "Test");
  console.log(restaurantMap.get(arrayKey));
};

// mapsConsoleLog();

// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

const setConsoleLog = () => {
  console.log(ordersSet);
  console.log(new Set("Kas"));
  console.log(ordersSet.size);
  console.log(ordersSet.has("Pizza"));
  console.log(ordersSet.has("Bread"));
  ordersSet.add("Garlic Bread");
  ordersSet.add("Garlic Bread");
  console.log(ordersSet);
  ordersSet.delete("Garlic Bread");
  console.log(ordersSet);
  // ordersSet.clear();
  console.log(ordersSet);

  for (const order of ordersSet) console.log(order);

  const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
  const staffSet = new Set(staff);
  const staffArray = [...new Set(staff)];
  console.log(staffSet);
  console.log(staffArray);

  const sample = "My name is Kas Song";
  console.log(sample.length);
  console.log(new Set(sample).size);
};

// setConsoleLog();

// Coding Challenge #2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const codingChallenge2 = () => {
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }

  const values = Object.values(game.odds);
  let sumOfOdds = 0;
  let average = 0;
  for (const odd of values) sumOfOdds += odd;
  average = sumOfOdds / values.length;
  console.log(`Average of Odds: ${average}`);

  const keys = Object.keys(game.odds);
  for (const key of keys) {
    let teamName = game[key] ?? "Draw";
    if (teamName !== "Draw") teamName = `victory ${teamName}`;
    console.log(`Odd of ${teamName}: ${game.odds[key]}`);
  }

  for (const player of game.scored) {
    if (game.scorer) {
      if (game.scorer[player]) {
        const score = game.scorer[player] + 1;
        game.scorer[player] = score;
      } else {
        game.scorer[player] = 1;
      }
    } else {
      game.scorer = {};
      game.scorer[player] = 1;
    }
  }
  console.log(game.scorer);
};

// codingChallenge2();

// Looping Objects: Object Keys, Values, and Entries
const loopingObjectsConsoleLog = () => {
  const properties = Object.keys(restaurantOpeningHours);
  console.log(properties);

  let openStr = `We are open on ${properties.length} days: `;

  for (const day of Object.keys(restaurantOpeningHours)) {
    openStr += `${day}, `;
  }
  console.log(openStr);

  const values = Object.values(restaurantOpeningHours);
  console.log(values);

  const entries = Object.entries(restaurantOpeningHours);
  console.log(entries);

  for (const entry of entries) {
    console.log(entry);
  }
  for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
  }
};

// loopingObjectsConsoleLog();

// Optional Chaining
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const optionalChainingConsoleLog = () => {
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours.fri?.open);

  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
  }

  console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
  console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

  const users = [
    {
      name: "Kas",
      email: "KasRoid@gmail.com",
    },
  ];
  console.log(users[0]?.name ?? "User array empty");

  if (users.length > 0) console.log(users[0].name);
  else console.log("User array empty");
};

// optionalChainingConsoleLog();

// Looping Arrays: The for-of Loop
const restaurantMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const loopingArraysConsoleLog = () => {
  for (const item of restaurantMenu) console.log(item);

  for (const [index, element] of restaurantMenu.entries()) {
    console.log(`${index + 1}: ${element}`);
  }
  console.log(...restaurantMenu.entries());
};

// loopingArraysConsoleLog();

// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
const nullishCoalescingConosoleLog = () => {
  console.log(guestCorrect);
};

// nullishCoalescingConosoleLog();

// Coding Challenge #1
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = game.players[0];

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
};

const challenge1ConsoleLog = () => {
  console.log(gk, fieldPlayers);
  console.log(allPlayers);
  console.log(players1Final);
  console.log(team1, draw, team2);
  printGoals(...game.scored);
  team1 < team2 && console.log("Team 1 is more likely to win");
  team1 > team2 && console.log("Team 2 is more likely to win");
};

// challenge1ConsoleLog();

// Short Circuiting
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guest2 = restaurant.numGuests || 10;

const shortCircuitingConsoleLog = () => {
  console.log("---OR---");
  console.log(3 || "Kas");
  console.log("" || "Kas");
  console.log(true || 0);
  console.log(undefined || null);
  console.log(undefined || null || "" || 0);
  console.log(guest1);
  console.log(guest2);
  console.log("---AND---");
  console.log(0 && "Kas");
  console.log(7 && "Kas");
  console.log("Hello" && 23 && null && "Kas");

  if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
  }

  restaurant.orderPizza && restaurant.orderPizza("onion");
};

// shortCircuitingConsoleLog();

// Rest Pattern and Parameters
const arr1 = [1, 2, ...[3, 4]]; // Spread
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
// console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// add(2, 3);
// add(5, 3, 7, 2);

const arrayX = [23, 5, 7];
// add(...arrayX);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");

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
