// Reto

function auto(marca,modelo, anio) {
    this.marca = marca;
    this.model = modelo;
    this.anio = anio;
}

var lista_propiedades = [["Tesla", "Model 3", 2021],["Tesla", "Model X", 2018],["Toyota", "Corolla", 2020],["Dodge", "Durango", 2022],["Chevrolet", "Blazer", 1996]];
var lista_carros = ["autoNuevo1","autoNuevo2","autoNuevo3","autoNuevo4","autoNuevo5"]
indice = 0;

function autoObjetos(lista_carros) {
    console.log(`var ${lista_carros} = new auto(${lista_propiedades[indice ++]});`);
}

for(var auto_nuevo of lista_carros) {
    autoObjetos(auto_nuevo);
}


//// notas/////


// de la lista "X" tomar los 3 valores y ponerlos en el () de la clase auto
// colocar la palabra var "nombre del nuevo objeto" = palabra new
// `var ${} = new auto(${nombre de la lista});`

// var lista4 = ["Dodge", "Durango", 2022];
// var carros_30 = ["autoNuevo4","autoNuevo5"]


// function autoObjetos(carros_30) {
//     console.log(`var ${carros_30} = new auto(${lista4});`);
// }

// for(var auto_nuevo of carros_30) {
//     autoObjetos(auto_nuevo);
// }

// listar propiedades

// var lista4 = [["Tesla", "Model 3", 2021],["Tesla", "Model X", 2018],["Toyota", "Corolla", 2020],["Dodge", "Durango", 2022],["Chevrolet", "Blazer", 1996]];
// var carros_30 = ["autoNuevo1","autoNuevo2","autoNuevo3","autoNuevo4","autoNuevo5"]
// indice = 0;
//indice ++;

//var prueba = {"autoNuevo4":["Dodge", "Durango", 2022], "autoNuevo5" :["Chevrolet", "Blazer", 1996]  }


// function autoObjetos(carros_30) {
//     console.log(`var ${carros_30} = new auto(${lista4[indice ++]});`);
// }

// for(var auto_nuevo of carros_30) {
//     autoObjetos(auto_nuevo);
// }



