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


