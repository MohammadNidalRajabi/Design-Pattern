// Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// this example to convert Bicycle to Vehicale
const { Car, Bicycle, BicycleAdapter } = require('./adapter.js');
useVehicale = (vehicale) => {
    vehicale.accelerate();
    vehicale.pushBreak();
    vehicale.soundHorn();
}
const car = new Car();

// this not work 
// const bicycle = new Bicycle();
// useVehicale(bicycle);

// this work using adapter
const bicyclePlus = new BicycleAdapter(new Bicycle);
useVehicale(bicyclePlus);