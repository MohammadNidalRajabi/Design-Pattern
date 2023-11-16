// The Singleton Pattern ensures a class has only one instance, type of Creational Patterns
// and provides a global point of access to it.
// this example to conection to db
const Singleton = require('./singleton.js');
// Try create new instance 
const myInstanceA = new Singleton('instance', "admin", "123456");

// Create new instance using create
const myInstance = Singleton.create('instance1', "admin", "123456");
console.log(myInstance);
// Create new instance using create but not create bucuse have already instance
const myInstance2 = Singleton.create('instance2', "admin", "123456");

console.log(myInstance2);;