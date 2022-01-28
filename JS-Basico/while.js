// while

var estudiantes = ["Harry", "Hermaione", "Luna","Ron"];

function holaEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    holaEstudiantes(estudiante)

}