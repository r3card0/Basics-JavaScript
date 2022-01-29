// original code 1

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

// loop while 1
let i = 0

while(i < 5) {
    console.log("El valor de i es: " + i);
    i ++;
};

// original code 2
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// loop while 2
let i = 10

while(i >= 2){
    console.log("El valor de i es: " + i);
    i--
};

// operación 2+2
// ¿cuanto es 2+2? si la repuesta del usuario = 4, entonces los felicitamos
// si no le decimos que vuelva a intentar


var respuesta = prompt("Responde. ¿Cuanto es 2 + 2 ?: ");

if(respuesta == 4){
    console.log("Felicidades! Haz resuelto el acertijo");
  
} else {
    console.log("Intenta de nuevo por favor");
};

// opcion 2

var respuesta = prompt("Responde. ¿Cuanto es 2 + 2 ?: ");

function reto() {
    var contesta = respuesta == 4 ? "Felicidades! Haz resuelto el acertijo": "Intenta de nuevo por favor";
    console.log(contesta);
}

reto();