# Métodos de recorrido de Arrays

Método ocupados cuando se tiene grandes volumenes de datos.

## método *filter*

¿Qué hace el método `filter()`?
Crea unnuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida

- filtra cosas
- Valida si algo es cierto o falso
- Crea un nuevo array
- No modifica el array original

Sintaxis:

1. Palabra reservada *var*
2. nombre de nuevo array
3. operador =
4. nombre del array original
5. método *.filter()*
6. Entre parentesis (recibe como parámetro una función
7. Palabra reservada *function* 
8. Como parámetro recibe una variable *flotante*
9. Abrir {
10. Expresion
11. Cierra }
12. Cierra );

Ejemplo:

````
var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700},
];

// metodo filter

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});
````

## Método *map*

¿Qué hace el método `map()`?

Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

- Crea un nuevo array
- No modifica el array original
- mapea???
- como parametro se coloca el elementos que se desea "mapear"

Sintaxis:

1. Palabra reservada *var*
2. nombre de nuevo array
3. operador =
4. nombre del array original
5. método *.map()*
6. Entre parentesis (recibe como parámetro una función
7. Palabra reservada *function* 
8. Como parámetro recibe una variable *flotante*
9. Abrir {
10. Expresion
11. Cierra }
12. Cierra );

````
var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700},
];

// método map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos

Array (7)[ Bici,TV,Libro,Celular,Laptop,Teclado,Audifonos ]
````

Para mi, retorna los valores del encabezado "nombre" de la estructura de datos

## método find()

Ayuda a encontrar "algo dentro de un array.

¿Qué hace el método `find()`?
Retorna el primer elemento de un array que cumple con una condicion definida en unnuevo array

- Crea un nuevo array, en caso de que encuentre lo que esta buscando
- No modifica el array original

Sintaxis:

1. Palabra reservada *var*
2. nombre de nuevo array
3. operador =
4. nombre del array original
5. método *.find()*
6. Entre parentesis (recibe como parámetro una función
7. Palabra reservada *function* 
8. Como parámetro recibe una variable *flotante*
9. Abrir {
10. Expresion
11. Cierra }
12. Cierra );


````
var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700},
];

var finditem = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

object { costo:20000,nombre:Laptop }
````

## método  forEach

¿Qué hace el método `forEach()`?
Ejecuta la función indicada una vez por cada elemento del array

- No genera un nuevo array
- trabaja sobre el array original
- 

Sintaxis:

1. Nombre del array original
2. Método *.forEach(*)
3. Entre parentesis (recibe como parámetro una función
4. Palabra reservada *function* 
5. Como parámetro recibe una variable *flotante*
6. Abrir {
7. Expresion
8. Cierra }
9. Cierra );

````
var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700},
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

Bici
TV
Libro
Celular
Laptop
Teclado
Audifonos
````


## método *some( )*

- Crea un nuevo array
- No modifica el array original
- Hace una validación de verdader o falso
- Solo retorna, true o false


Sintaxis:

1. Palabra reservada *var*
2. nombre de nuevo array
3. operador =
4. nombre del array original
5. método *.some()*
6. Entre parentesis (recibe como parámetro una función
7. Palabra reservada *function* 
8. Como parámetro recibe una variable *flotante*
9. Abrir {
10. Expresion
11. Cierra }
12. Cierra );

````
var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"TV", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700},
];

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos

true
````
## Eliminando elementos de un Array


.push()
El método .push() nos permite agregar uno o más elementos al final de un array.

A continuación veremos un ejemplo aplicado con un array que contiene números:

````
algo
````

Como podemos ver, al momento de ejecutar la función se agregan los números 6 y 7 al array.

Ahora revisemos un ejemplo con strings:

````
algo
````

Como podemos ver, agregamos dos cadenas de strings al ejecutar la función donde tenemos txtArray.push(). Es decir, indico el array al que voy agregar elementos, uso el método .push(), y dentro de .push() indico los elementos que quiero agregar al string. Finalmente, el console.log() lo uso para revisar en la consola si esto sucedió o no.

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

````
algo
````

Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.

Bonus Track
Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.

````
algo
````
¡Y listo! Ahora que ya conoces todos estos métodos te recomiendo comenzar a experimentar 💪🏼


