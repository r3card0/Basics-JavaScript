# Scope

Alcance que tiene las variables.

Alcance global: región completa del programa

Alcance local: región del codigo donde se genero la variable

![scope]()

La variable creada en el scope global, puede ser ejecutada en la region local

La variable local no puede ser ejecutada en la región global.

````
var miNombre = "Bruce";

function nombre(){
    var miApellido = "Wayne";
    console.log(miNombre + " " + miApellido);
}

nombre();

Bruce Wayne
````
