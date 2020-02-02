const prompt = require('readline-sync')


let femaleNames = [];
console.log("Hi you, let's mash. Give me 3 Female names, could be family, friends, classmates, if you want to be part of the game include yours.");
let name1 = prompt.question("name 1: ");
femaleNames.push(name1);
let name2 = prompt.question("name 2: ");
femaleNames.push(name2);
let name3 = prompt.question("name 3: ");
femaleNames.push(name3);
console.log(femaleNames)


let maleNames = [];
console.log("Give me 3 Male names, could be family, friends, classmates, if you want to be part of the game include yours.")
let name4 = prompt.question ("name 1: ");
maleNames.push(name4);
let name5 = prompt.question("name 2: ");
maleNames.push(name5);
let name6 = prompt.question ("name 3: ");
maleNames.push(name6);
console.log(maleNames);


let favThings = [];
console.log("What are 3 of random things that you like doing : if it is travel say traveling, if it is yoga say doing yoga, if it is picking my nose, say picking my nose etc.")
let thing1 = prompt.question ("thing 1: ");
favThings.push(thing1);
let thing2 = prompt.question("thing 2: ");
favThings.push(thing2);
let thing3 = prompt.question ("thing 3: ");
favThings.push(thing3);
console.log(favThings);


let favPlaces = [];
console.log("Tell me 3 places you want to go/be at, it could be as random as ‘bathtub’ or a destination")
let place1 = prompt.question ("place 1: ");
favPlaces.push(place1);
let place2 = prompt.question("place 2: ");
favPlaces.push(place2);
let place3 = prompt.question ("place 3: ");
favPlaces.push(place3);
console.log(favPlaces);


let favFood = [];
console.log("And last 3 of your favorite foods/meals.")
let food1 = prompt.question ("1: ");
favFood.push(food1);
let food2 = prompt.question ("2: ");
favFood.push(food2);
let food3 = prompt.question ("3: ");
favFood.push(food3);
console.log(favFood);
 
let Result = [];
console.log("Mash is done! Now let’s see what we have got! ")

const randomize = () => {
  const felmaleNamesLength = femaleNames.length
  for (i = 0; i < felmaleNamesLength; i++) {
    let randomFermale = femaleNames.splice(Math.floor(Math.random()*femaleNames.length), 1)
    let randomMale = maleNames.splice(Math.floor(Math.random()*maleNames.length), 1)
    let randomMFavThing = favThings.splice(Math.floor(Math.random()*favThings.length), 1)
    let randomFavFood= favFood.splice(Math.floor(Math.random()*favFood.length), 1)
    let randomFavLocal= favPlaces.splice(Math.floor(Math.random()*favPlaces.length), 1)
    console.log(`${randomFermale} and ${randomMale} are ${randomMFavThing} in ${randomFavLocal} while eating ${randomFavFood} `)
  }
}
randomize()

console.log('Thanks for playing. \nGoodbye.')


// console.log('prints random name', randomNumber) 

// for (i = 0; i < femaleNames.length; i++) {
//   let randomNumber1 = Math.floor(Math.random() * femaleNames.length);
//   let randomNumber2 = Math.floor(Math.random() * femaleNames.length);
//   let randomNumber3 = Math.floor(Math.random() * femaleNames.length);
//   // console.log(randomNumber);
//   console.log(`${femaleNames[randomNumber1]} and ${maleNames[randomNumber2]} are ${favThings[randomNumber3]} and like to eat ${favFood[randomNumber2]} in ${favPlaces[randomNumber3]}`)
// }