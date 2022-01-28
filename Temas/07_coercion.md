# Coerción

Cambiar un tipo de dato a otro tipo de dato

````
4 * '7'; 
28
````
Este es un ejemplo de coerción. Aquí, el valor de 7 está declarado como string y de forma lógica no debería sumarse con el número 4. Sin embargo JavaScript lo permite porque es un lenguaje débilmente tipado.

Hay dos tipos de coercion:

1. Coerción Implícita
2. Coerción Explícita

La coerción implicita es cuando el lenguaje ayuda cambiando los tipos de datos, como en el ejemplo. Cambio de string a numérico.

La coerción explícita se aplica cuando el programador de forma deliberada  produce el cambio de un tipo a otro.

¿cómo?

### Ejemplos de coerción implícita:

````
4 + "7";
"47"
````

En este ejemplo, concateno un numérico con un string. el tipo de dato del resultado es string

````
var b = 5 * "5";
25
````

En este ejemplo, se realizó la operación de forma normal y cambio el string "5" a numérico. El tipo de dato del resultado es numérico.

### Ejemplos de coerción explícita:

Se usa un método para cambiar de un tipo de dato a otro tipo de dato. Como el casting de Python, pero con comandos distintos.

| Método   |       ¿Qué?       | ¿Cómo?           |
|----------|-------------------|------------------|
| String() | Cambia a string   | String(variable) |
| Number() | Cambia a numerico | Number(variable) |

Ejmplo:
````
var b = "5";

typeof b;
'string'

var b = Number(b);

typeof b;
'number'
````

