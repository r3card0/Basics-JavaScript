// objects

var car = {
    marca: "Audi",
    modelo: "A4",
    anio: 2021
};

// create an object method

var car = {
    marca: "Audi",
    modelo: "A4",
    anio: 2021,
    cardetails: function() {
        console.log(`Car ${this.modelo} ${this.anio}`);
    }
};

car.cardetails();