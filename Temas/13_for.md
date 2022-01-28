# For

Es un loop

Sintaxis:
1. Palabra reservada *for*
2. Condición entre parentesis
3. Llave {
4. tarea
5. ;
6. Cierra llave }

````
for(condicion) {
    tarea;
}
````
Otra forma:

````
var estudiantes = ["Harry", "Hermaione", "Luna","Ron"];

function holaEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    holaEstudiantes(estudiante);
}
````
