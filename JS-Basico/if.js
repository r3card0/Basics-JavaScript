// estructura de if

if (true) {
    console.log("Hola");
} 

if (false) {
    console.log("Hola");
} else {
    console.log("soy falso");
}

// legal age validation
var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu 1era votación");
} else if(edad > 18) {
    console.log("Puedes votar otra vez")
} else {
    console.log("Aún no puedes votar")
}

// operador ternario
var edad = 18;

var legalAge = edad > 18 ? "Eres mayor de edad" : "No eres mayor de edad";
console.log(legalAge);

var numero = 1;

var resultado = numero === 1 ? "Si soy un 1 😉 " : "No soy un 1 😛 ";
console.log(resultado);