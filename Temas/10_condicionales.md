# Condicionales

if

sintaxis:
1. Usar palabra reservada *if*
2. condicional verdadera entre parentesis ( )
3. {}

````
if (true) {

}
````

El *if* valida que la (condicional) sea verdadera. Si no es verdadera, no hace nada.

if, else if, else

````
// legal age validation
var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu 1era votación");
} else if(edad > 18) {
    console.log("Puedes votar otra vez")
} else {
    console.log("Aún no puedes votar")
}
````

## Operador ternario

Permite generar if y else en una sola línea de código:

Sintaxis:
1. Crear condición
2. Signo *?*
3. "Respuesta si la condición es verdadera"
4. :
5. "Respuesta si la condición es falsa"
6. terminar con ;

````
condición ? true : false;
````
ejemplo

````
var edad = 18;

var legalAge = edad > 18 ? "Eres mayor de edad" : "No eres mayor de edad";
console.log(legalAge);
````
otro ejemplo

````
var numero = 1;

var resultado = numero === 1 ? "Si soy un 1 😉 " : "No soy un 1 😛 ";
console.log(resultado);
````

### Reto: crear el juego de piedra, papel o tijera

1. Use funciones de epxresión y condicionales.

````
var papel_gana_piedra = true;
var tijeras_gana_papel = true;
var piedra_gana_tijeras = true;
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
var persona_1 = "piedra";
var persona_2 = "papel";

if (persona_1 == piedra && persona_2 == papel || persona_1 == papel && persona_2 == piedra) {
    console.log(papel_gana_piedra + ": Papel le gana a piedra ✋ ");
    var ganador = function(){
        if (persona_1 == papel) {
            console.log("Ganó: persona_1" );
        } else if (persona_2 == papel) {
            console.log("Ganó: persona_2" );
        }
    }
    console.log(ganador())
} else if(persona_1 == tijeras && persona_2 == papel || persona_1 == papel && persona_2 == tijeras) {
    console.log(tijeras_gana_papel + ": Tijeras le gana a papel ✌️ ")
    var ganador = function(){
        if (persona_1 == tijeras) {
            console.log("Ganó: persona_1" );
        } else if (persona_2 == tijeras) {
            console.log("Ganó: persona_2" );
        }
    }
    console.log(ganador())
} else if (persona_1 == piedra && persona_2 == tijeras || persona_1 == tijeras && persona_2 == piedra) {
    console.log(piedra_gana_tijeras + ": Piedra le gana a tijeras 👊 ")
    var ganador = function(){
        if (persona_1 == piedra) {
            console.log("Ganó: persona_1" );
        } else if (persona_2 == piedra) {
            console.log("Ganó: persona_2" );
        }
    }
    console.log(ganador())
} else {
    console.log("Empate, intenten de nuevo 😜 ")
}
````
Resultado

![Resultado](/Doc/images/resultado.png)


