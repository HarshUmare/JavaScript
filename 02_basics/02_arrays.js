const marvelHeroes = ["Ironman", "Thor", "CaptainAmeraica"];
const dc_heroes = ["superman", "aquaman", "batman"];

//method 1.
marvelHeroes.push(dc_heroes);
// console.log(marvelHeroes);
/*
 [ 'Ironman','Thor', 'CaptainAmeraica', [ 'superman', 'aquaman', 'batman' ] ]
  Array k andr array aa gya...
*/

//method 2.
const all_heroes = marvelHeroes.concat(dc_heroes);
// console.log(all_heroes);
/*
  [
  'Ironman',
  'Thor',
  'CaptainAmeraica',
  'superman',
  'aquaman',
  'batman'

  ye wala sahi se aaya, but ek aur trika hai isko krne ka using spread operator.
]
*/

const all_new_heroes = [...marvelHeroes, ...dc_heroes];
// console.log(all_new_heroes);
/*
 [
  'Ironman',
  'Thor',
  'CaptainAmeraica',
  'superman',
  'aquaman',
  'batman'
]
*/

const another_Array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const newArr = another_Array.flat(Infinity)
// console.log(newArr);
/*
 [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
 ]
*/

console.log(Array.isArray("harsh")); //checks if it("harsh") is array or not
console.log(Array.from("harsh")); //converts "harsh" into array
console.log(Array.from({name: "harsh"}));  //interesting case....
// interesting case isiliye qki yah apr vo directly array nhi bna paa rha hai.
// we need to specify ki keys ka array bnana hai ya values ka...
// isiloye iss case me(jaha nothing specified), return an empty array, [].


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 
// [ 100, 200, 300 ], array me store kr deta hai




