// Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass 
// but lets subclasses override specific steps of the algorithm without changing its structure.
const { Car, Truck } = require('./template.js');
//example
const car = new Car();
console.log("------------------------------ Car --------------------------------");
car.buildVehical();


const truck = new Truck();
console.log("------------------------------ Truck --------------------------------");
truck.buildVehical();