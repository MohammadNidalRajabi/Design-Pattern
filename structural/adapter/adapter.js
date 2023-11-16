
class Vehicale {
    accelerate() {

    }

    pushBreak() {

    }

    soundHorn() {

    }

}

class Car extends Vehicale {
    accelerate() {
        console.log("Car start moving---------");
    }

    pushBreak() {
        console.log("Car stop moving---------");
    }

    soundHorn() {
        console.log("Beeb beeb");
    }
}

class Bicycle {
    padel() {
        console.log("Bicycle start moving---------");
    }

    stop() {
        console.log("Bicycle stop moving---------");
    }

    ringBell() {
        console.log("Ring ring");
    }
}




class BicycleAdapter extends Vehicale {
    constructor(bicycle)
    {
        super();
        this.bicycle = bicycle;
    }

    accelerate() {
         this.bicycle.padel();
    }

    pushBreak() {
        this.bicycle.stop();
    }

    soundHorn() {
        this.bicycle.ringBell();
    }
}
module.exports = {
    Vehicale,
    Car,
    Bicycle,
    BicycleAdapter
  };


