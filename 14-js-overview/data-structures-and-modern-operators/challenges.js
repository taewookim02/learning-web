const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*

///////////////////////////////////////
// Challenge #5 (STRING)
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(output);
}

///////////////////////////////////////
// Challenge #4

//  Test data

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


const parsedList = [];
document.querySelector('button').onclick = function changeContent() {
  const text = document.querySelector('textarea').value;
  const theText = document.querySelector('textarea').value;
  const parsedText1 = theText.split('\n');

  for (const item of parsedText1) {
    parsedList.push(item.trim());
  }
  for (let i = 0; i < parsedList.length; i++) {
    parsedList[i] = parsedList[i].toLowerCase();
    let index = parsedList[i].indexOf('_');
    parsedList[i] = parsedList[i].replaceAll('_', '');
    parsedList[i][index] = parsedList[i][index].toUpperCase();

    console.log(
      `${parsedList[i]
        .replace(parsedList[i][index], parsedList[i][index].toUpperCase())
        .padEnd(15, ' ')} ${'✅'.repeat(i + 1)}`
    );
  }
};

/*
///////////////////////////////////////
// Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],

  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1 (no duplicates, set)

const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2 (delete a map element)
gameEvents.delete(64);
console.log(gameEvents);

// Task 3 (log to console)
const avg = [...gameEvents.keys()].length;
// const avg = 6;

console.log(
  `An event happened, on average, every ${90 / gameEvents.size}  minutes`
);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// Task 4
for (const [time, event] of gameEvents.entries()) {
  time <= 45
    ? console.log(`[FIRST HALF] ${time}: ${event}`)
    : console.log(`[SECOND HALF] ${time}: ${event}`);
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}


///////////////////////////////////////
// Challenge #2

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// const entries = Object.entries(openingHours);
// console.log(entries);

// Task 1

for (const [i, scoredPlayer] of Object.entries(game.scored)) {
  console.log(`Goal ${+i + 1}: ${scoredPlayer}`);
}
console.log('---------------------');

// Task 2
let sum = 0;
for (const num of Object.values(game.odds)) {
  sum += num;
}
console.log(`Average of odds: ${sum / Object.values(game.odds).length}`);
console.log('---------------------');
// Task 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
console.log('----------------------');

// Task 4
const scorers = {};

// Object.values aint necessary because we are looping through an array
// for (const scoredPlayer of Object.values(game.scored)) {
//   scorers[scoredPlayer] ||= 1;
// }

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
//

///////////////////////////////////////
// Challenge #1

// task 1 (assign 2 lists from object)
const [players1, players2] = game.players;
console.log(players1, players2);

// task 2 (rest pattern to slice a list into 2 lists)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// task 3 (merge 2 lists)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// task 4 (new array called with added items)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// task 5 (create varibles based on nested object)
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// task 6 (function that receives arbitrary numbers)
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
};
printGoals(...game.scored);

// task 7 (comparing values between 3 variables without if else and ternary)
// const likely = team2 < team1 || team1 < team2;
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
// console.log(`Likely winner: ${likely}`);
// 0 || console.log('this is on');
 */
