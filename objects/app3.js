/* Bracket Notation
Another way to access a key's value is by using a bracket notation, []

*/
console.log(['A', 'B', 'C'][0]);
// pass in the property name (key) as a string

// spaceship['Fuel Type']; object[property name]

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5

};
console.log(spaceship['Active Duty']);
console.log(spaceship['Fuel Type']);
console.log(spaceship['numCrew']);

let returnAnyProp = (object, propName) => object[propName];

console.log(returnAnyProp(spaceship, 'homePlanet'));
let isActive = spaceship['Active Duty'];
console.log(isActive);

