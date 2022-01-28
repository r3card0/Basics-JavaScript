var estudiantes = ["Hugo", "Paco", "Luis","Rosita"];

function holaEstudiantes(estudiante) {
    console.log(`Hola,${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    holaEstudiantes(estudiantes[i]);
}

// otra forma de for

var estudiantes = ["Harry", "Hermaione", "Luna","Ron"];

function holaEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    holaEstudiantes(estudiante);
}