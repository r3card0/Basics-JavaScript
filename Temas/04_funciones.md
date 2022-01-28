# Funciones

Las funciones son un conjunto de sentencias que se usan para realizar acciones, tareas o procedimientos, con los valores asignados a las variables.

Una función es un procedimiento

Hay dos tipos de funciones:

1. Funciones declarativas
2. Funciones de expresion

## ¿Cómo se genera una función declarativa?

1. Usar la palabra reservada *function*
2. Darle nombre a la función
3. Abrir ()
4. Abrir {}

````
function gomagoma(){
    
}
````
La función puede guardar valores 

````
function gomagoma(){
    return 3;
}
````
### Las variables pueden guardar funciones

## ¿cómo se genera una función de expresión o expresiva?

1. Usar palabra reservada *var*
2. nombre de la variable
3. signo de asignación =
4. palabra reservada *function*
5. Parentesis ()
6. Llaves {}

````
var gomagoma = function(){
    return a + b;
}
````

En ambas funciones, la forma de llamar una función es:

1. Nombre de la función
2. ()
3. ;

````
function gomagoma(){
    return 3;
}

gomagoma();
````

En algunas ocasiones las funciones requieren parámetros, a los cuales se les asignarán valores.

en el ejemplo:

````
var gomagoma = function(){
    return a + b;
}
````
las variables *a* y *b* requieren valores para ejecutar la sentencia de suma.

La form acorrecta de asignar parámetros:

````
var gomagoma = function(a,b){
    return a + b;
}

gomagoma()
````
Las funciones de expresión tambien se conocen como funciones anónimas, porque la función no tiene nombre, ya que está asignada a una variable. La variable si tiene nombre.

Las funciones declarativas, se invocan con el nombnre de la función.

Las funciones de expresion, se invocan con el nombre de la variable.

Practicando en el navegador Chrome:

````
function saludo(estudiante) {
    console.log(estudiante)
}
````
Se llama la función:

````
saludo("Batman");
````


El comando *console.log*, es una herramienta del navegador que permite imprimir valores en la la consola y verlo en tiempo real.

Imprimir el resultado de la función con un texto extra

````
function saludo(estudiante) {
    console.log(`Hola ${estudiante}`)
}

saludo("Batman");

Hola Batman
````

````
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(12,13);

25
````
En esta función, se creo un variable llamada resultado.

Ejemplo son la variable:

````
function sumar(a,b) {
    return a + b;
}

sumar(12,13);

25
````

Y dará el mismo resultado.

### Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.


Es la palabra clave que necesita una función para devolver una salida: *return*

Además de la sintaxis ¿cuál es la principal diferencia entre una función declarativa y una expresión de función? *con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada*

Son los tipos de datos primitivos que maneja JavaScript: *string, number, boolean, null y undefined*