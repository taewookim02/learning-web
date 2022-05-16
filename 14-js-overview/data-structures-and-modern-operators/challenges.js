
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

///////////////////////////////////////
// Challenge #2

for (const player of )


///////////////////////////////////////
// Challenge #1
/*
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