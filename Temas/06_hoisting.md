# hoisting

Es cuando las variables y las funciones se declaran antes de que el código exista. 

Pertenece del 5 al 0

6 en adelante

## hoisting en las variables

Es el proceso que realiza JavaScript para asignar el valor *undefined* a una variable o función que aún no ha sido declarara ni definida por el programador.

Esto ocurre cuando se invoca una función o una variable antes de declararla.

````
console.log(myvariable);
````
En este ejemplo, se invoca a la variable *myvariable* sin ser declarada.

Como resultado, JavaScript asignará el valor *undefined*

````
console.log(myvariable);
undefined
````

## hoisting en las funciones

````
hey();

function hey() {
    console.log("hola " + myvariable)
}

var myvariable = "Bruce"

-> hola undefined
````

En este ejemplo, se ejecuto el texto dentro de la función junto con el valor designdaod por Javascript, *undefined*

Las funciones serán procesadas antes de ser declaradas siempre y cuando, las variables estén declaradas e inicializadas antes de invocar a la función que . . .  aun no está declarada 🤪

Por lo tanto:
1. Las variables y las funciones se pueden ejecutar antes de ser declaradas e inicializadas.
2. JavaScript, les asignará el valor *undefined*
3. Para que exista el hoisting se debe invocar a la funcion/variable y despues declararla.
4. Las funciones son declaradas antes que de las variables.

El hoisting no es buen práctica, por lo tanto, no hay que usarlo.

¡EVÍTALO!
