// Accessing Properties
/* First way, dot notation to access the properties and methods 
 of built-in objects and data instances*/

 console.log('hello'.length); //Returns 5, object.propert name(key)

let spaceShip = {
    homePlanet: 'Earth',
    color: 'Silver',
};

console.log(spaceShip.homePlanet);
console.log(spaceShip.color);
// if we try to access a property that does not exist on 
// that object, undefined will be returned

console.log(spaceShip.favoriteIcecream); //returns undefined

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
