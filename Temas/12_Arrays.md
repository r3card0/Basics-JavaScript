# Arrays

Es una estructura de datos como las listas de Python.
Es una variable que guarda varios elementos y de varios tipos de datos.
Es un tipo de objeto

¿Cómo se genera un array?
1. Palabra reservada *var*
2. Nombre del array
3. =
4. []
4. ;

````
var frutas = [];
````

imprimiendo los valores del array:

````
var frutas = ["Manzana", "Papaya", "Melón"];
console.log(frutas)
````
En una función:
````
var frutas = ["Manzana", "Papaya", "Melón"];

function lista_mercad() {
    console.log(frutas);
}

lista_mercad()
````
¿Cómo conocer si un array tiene elementos?

usando el método length, se conocerá la longitud de los elementos. Si tiene longitud, tiene elementos

````
console.log(frutas.length);
3
````
¿como acceder a cada elemento de un array?
Con el método []


````
var frutas = ["Manzana", "Papaya", "Melón"];

console.log(frutas[0]);
Manzana
````

Métodos para mutar arrays:

agregar al final-> .push agrega elementos al array
eliminar -> .pop elimina el ultimo elemento del array
agrega al inicio -> .unshift agrega un alemento al inicio del array
eliminar al inicio -> .shift elimina el primer elemnto de un array
saber la posicion del elemento -> .indexof

|  Método  | ¿Qué                            | ¿Cómo                    |
|----------|---------------------------------|--------------------------|
| .unshift | agrega un elemento al inicio    | frutas.unshift("Uvas")   |
| .push    | agrega un elemento al final     | frutas.push("Piñas")     |
| .shift   | elimina el primer elemento      | frutas.shift()           |
| .pop     | elimina el último elemento      | frutas.pop()             |
| .indexof | indica la posición del elemento | frutas.indexOf("Papaya") |
| .length  | indica la longitud del array    | frutas.length            |


Son los elementos principales de un array: índice y elemento.

Los arrays pueden contener más arrays, esto es: Verdadero