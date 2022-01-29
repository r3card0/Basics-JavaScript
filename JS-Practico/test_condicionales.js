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

// operador ternario

const tipoDeSuscripcion = "Basic";

var subscripcion = tipoDeSuscripcion == "Basic" ? "Puedes tomar casi todos los cursos de Platzi durante un mes": "Puedes elegir entre Expert y Expert Plus o Free, pero sin opción a certificación";
console.log(subscripcion);