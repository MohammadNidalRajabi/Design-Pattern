class VehicaleTemplate {
    constructor() {
        if (new.target === VehicaleTemplate)
            throw new Error("Abstraction class cannot be instantiated");
    }

    buildVehical() {
        this.collectComponents();
        this.assembleCompnents();
        this.installGearBox();
        this.startVehical();
        console.log("Vehicale start.");
    }

    collectComponents() {
        console.log("Bring rear and front light ...etc");
    }
    assembleCompnents() { }
    installGearBox() { }
    startVehical() {
        console.log("Engine is power on");
    }

}

class Car extends VehicaleTemplate {
    assembleCompnents() {
        console.log("Adding android screen");
    }
    installGearBox() {
        console.log("installing 3 shifts gear box");
    }
}

class Truck extends VehicaleTemplate {
    assembleCompnents() {
        console.log("Adding Truck air horn");
    }
    installGearBox() {
        console.log("installing 8 shifts gear box");
    }
}


module.exports = {
    VehicaleTemplate,
    Car,
    Truck
};


