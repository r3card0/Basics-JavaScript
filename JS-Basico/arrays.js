// Arrays

var frutas = ["Manzana", "Papaya", "Melón"];
console.log(frutas)


var frutas = ["Manzana", "Papaya", "Melón"];

function lista_mercad() {
    console.log(frutas);
}

lista_mercad()

 var masfrutas = frutas.unshift("Uvas");

 console.log(frutas);

 var otrafruta = frutas.push("Piña");

 console.log(frutas);

 var quitarErafruta = frutas.shift();

 console.log(frutas);

 var quitarUltimafruta = frutas.pop();

 console.log(frutas);

 var posicion = frutas.indexOf("Papaya")

 console.log(posicion);

 var longitud = frutas.length;

 console.log(longitud);