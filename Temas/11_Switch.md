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

