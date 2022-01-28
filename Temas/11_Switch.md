# Switch

Es otra forma de validar expresiones, como lo hace if.
Genera condiciones, por casos.
Si el primer caso es verdadero, entonces se detiene, pero si no es verdadero, continua a validar el segundo caso, y a su sucesivamente hasta encontrar la verdad. 

Sintaxis:

1. Usar palabra reservada *switch* y ()
2. llaves {}
3. Dentro de las llaves
4. Palabra reservada *case*, seguido de un identificador y ";"
5. Tarea
6. Palabra reservada *break*

Ejemplo práctico: 

```
var numero = 1;

switch(numero) {
    case 1:
        console.log("Soy 1");
        break;
    case 10:
        console.log("Soy 10");
        break;
    case 100:
        console.log("Soy 100");
        break;
    default:
        console.log("Jajaja, No! no soy un " + numero)
}
```
Si no se usa el break, no respeta la validación y corre todas las condiciones

````
witch(numero) {
    case 1:
        console.log("Soy 1");
        
    case 10:
        console.log("Soy 10");
        
    case 100:
        console.log("Soy 100");
        
    default:
        console.log("Jajaja, No! no soy un " + numero)
}

Soy 1
Soy 10
Soy 100
Jaja, No! no soy un 1
````
## Reto switch 

Hacer nuevamente el juego de piedra, papel y tijera usando *switch*

````
// con switch
// afirmaciones
var papel_gana_piedra = true;
var tijeras_gana_papel = true;
var piedra_gana_tijeras = true;
var juego = papel_gana_piedra || tijeras_gana_papel || piedra_gana_tijeras;
// opciones
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
// jugadores
var persona_1 = "piedra";
var persona_2 = "papel";



switch(juego) {
    case persona_1 == piedra && persona_2 == papel || persona_1 == papel && persona_2 == piedra:
        console.log(papel_gana_piedra + ": Papel le gana a piedra ✋ ");
        var ganador = function() {
            switch(persona_1 == papel || persona_2 == papel) {
                case persona_1 == papel:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == papel:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    case persona_1 == tijeras && persona_2 == papel || persona_1 == papel && persona_2 == tijeras:
        console.log(tijeras_gana_papel + ": Tijeras le gana a papel ✌️ ");
        var ganador = function() {
            switch(persona_1 == tijeras || persona_2 == tijeras) {
                case persona_1 == tijeras:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == tijeras:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    case persona_1 == piedra && persona_2 == tijeras || persona_1 == tijeras && persona_2 == piedra:
        console.log(piedra_gana_tijeras + ": Piedra le gana a tijeras 👊 ");
        var ganador = function() {
            switch(persona_1 == piedra || persona_2 == piedra) {
                case persona_1 == piedra:
                    console.log("Ganó: persona_1" );
                    break;
                case persona_2 == piedra:
                    console.log("Ganó: persona_2" );
                    break;
            }
        }
        console.log(ganador())
        break;
    default:
        console.log("Empate, intenten de nuevo 😜 ")
}
````
Resultado:

![1](/Doc/images/switch1.png)
![2](/Doc/images/switch2.png)

¿Qué pasa si no coloco la sentencia `break` en un `switch`?
Se validan todos los casos como verdaderos y se realizan las acciones asignadas a cada uno.


¿Qué retorna el siguiente código? if (false === !true) { console.log(false == true) } else { console.log(true === !false) }

false

¿En qué casos es conveniente utilizar `switch`?
cuando se tiene multiples casos a evaluar y evitar el uso de multiples if else

¿Para qué nos sirve el operador ternario "?" ?
Para definir una condición, el resultado cuando se cumple y cuando no se cumple en una sola línea.