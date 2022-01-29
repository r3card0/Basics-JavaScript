# Variables y operaciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
* Es una caja contenedora de información que será almacenada en la memoria RAM

¿Cuál es la diferencia entre declarar e inicializar una variable?
* Una variable es declarada cuando cuando no se le asgina un valor-> var variable;
* Una variable es inicializada cuando se el asigna un valor-> var variable= 3;

¿Cuál es la diferencia entre sumar números y concatenar strings?
* Sumar numeros dara un resultado numérico. Concatenar significa juntar los textos. En ambos casos se usa el operador "+"

¿Cuál operador me permite sumar o concatenar?
* el operador "+"


2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

* Nombre -> texto:String
* Apellido -> texto:String
* Nombre de usuario en Platzi -> texto:String
* Edad -> numérico:Number
* Correo electrónico -> alfanmérico:String
* Mayor de edad -> booleano:Bool
* Dinero ahorrado -> numérico:Number
* Deudas -> numérico:Number

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

````
var name = "nombre;
var last_name = "apellido";
var user = "user123";
var age = 24;
var email = "miemail@email.com";
var legal_age = true; 
var savings = 1000;
var debts = 150;

````

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

````
//1
var name = "nombre;
var last_name = "apellido";

console.log(name + " " + last_name);

// 2
var savings = 1000;
var debts = 150;
var balance = savings - debts

console.log(balance);
````
# Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
* Una función es un bloque de codigo que permite ejecutar tareas especificas en un programa

¿Cuándo me sirve usar una función en mi código?
* Para no repetir código y seccionar en tareas un programa

¿Cuál es la diferencia entre parámetros y argumentos de una función?

* Un parámetro son variables que recibe una función y los argumentos, son los valores que reciben las variables o parametros

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

````
// function
const name1 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name1 + lastname;
const nickname = "juandc";

function complete() {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

complete();

// function using parameters and arguments
function complete(completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

complete("Juan David Castro Gallego","juandc");
````
# Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
* Es una herramienta que permite elegir caminos en base a condiciones que pueden o no cumplir

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

* if ->, else if, else
* switch -> case, break
* Diferencias: el switch se puede usar cuando el codigo se presente con mucho else if

¿Puedo combinar funciones y condicionales?
* Si se puede

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

````
// original code
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// using if, else if, else
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
};
````

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

````
const tipoDeSuscripcion = "Basic";

var subscripcion = tipoDeSuscripcion == "Basic" ? "Puedes tomar casi todos los cursos de Platzi durante un mes": "Puedes elegir entre Expert, donde puedes tomar casi todos los cursos de Platzi durante un año. O bien Expert Plus, donde Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año o finalmente Free, donde solo puedes tomar los cursos gratis";
console.log(subscripcion);
````
# Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
* Es una tarea que se repetirá hasta que se encuentre una condición y de por terminado el ciclo

¿Qué tipos de ciclos existen en JavaScript?
* for y while

¿Qué es un ciclo infinito y por qué es un problema?
* Es un proceso que no termina y si no se controla puede ciclar al computador

¿Puedo mezclar ciclos y condicionales?
* Si

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

````
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
````
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

````
var respuesta = prompt("Responde. ¿Cuanto es 2 + 2 ?: ");

function reto() {
    var contesta = respuesta == 4 ? "Felicidades! Haz resuelto el acertijo": "Intenta de nuevo por favor";
    console.log(contesta);
}

reto();
````
# Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
* Es una estructura de datos y una variable que almacena varios elementos y varios tipos de datos.

¿Qué es un objeto?
* Un objeto es la representación en código de un objeto de la vida real. Persona, cosa, concepto.

¿Cuándo es mejor usar objetos o arrays?
* Objetos cuando se requere representar una persona o una objeto de la vida real
* Cuando se tiene un conjunto de datos que se requiera hacer algo con ellos.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
* si

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

````
var lista = ["Fortnite", "Mario Bros", "Pac-man"];

function recibir(elemento) {
    console.log(`El primer elemento es: ${lista[0]}`);
}

recibir();
````
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

````
// función que pueda recibir cualquier array como parámetro e 
//imprima su primer elemento.

var lista = ["Fortnite", "Mario Bros", "Pac-man"];

function recibir(elemento) {
    console.log(`El primer elemento es: ${lista[0]}`);
}
recibir();

// función que pueda recibir cualquier array como parámetro
// e imprima todos sus elementos uno por uno

var lista = ["Fortnite", "Mario Bros", "Pac-man"];

function listajuegos(juego){
    console.log(juego);
}
for(var i = 0; i < lista.length; i++) {
    listajuegos(lista[i]);
};
````

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

````
// función que pueda recibir cualquier objeto como parámetro e 
// imprima todos sus elementos uno por uno



var personas = [
    {nombre:"Bruce Wayen", profesion: "Multimillonario"},
    {nombre:"Hugo Sánchez", profesion: "Futbolista"},
    {nombre:"Shakira", profesion: "Cantante"},
    {nombre:"Gregory House", profesion: "Doctor"},
    {nombre:"Tom Brady", profesion: "Mariscal"},
    {nombre:"Frida Kahlo", profesion: "Artista"},
    {nombre:"J. K. Rowling", profesion: "Escritora"},
];

personas.forEach(function(persona){
    console.log(persona.nombre + " : " + persona.profesion );
});
````

Tan tan 😅