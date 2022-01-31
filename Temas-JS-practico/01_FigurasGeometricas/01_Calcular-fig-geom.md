# Como calcular figuras geométricas

Figuras geométricas
* Cuadrado
* Triángulo
* Círculo

Cuadrado:
- Perímetro (lado x 4 ; l+l+l+l)
- Área(b*a; base * altura)

Triángulo:
- Perímetro (l+l+l)
- Area (b*a/2 ; (base * altura)/2)

Círculo:
- Perímetro = circunferencia (diámetro * π)
- Área ((radio * radio)* π)

## Pasos

1. Crear directorio
2. Crear archiv.html -> figuras.html
3. Crear archivo.js -> figuras.js

En el archivo figuras.html
1. html:5
2. Cambiar el titulo por: Figuras Geometricas
3. En body crear titulo: h1 -> Figuras Geométricas
6. Vincular JavaScript con HTML con la etiqueta *script*

````
<script src="./figuras.js"></script>
````
Código

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Figuras Geométricas</title>
</head>
<body>
    <h1>Figuras Geométricas</h1>

    <script src="./figuras.js"></script>
</body>
</html>
````

![bonito](/Doc/images/bonito.png "Que bonito 🤗 ")

Es la muestra de que el archivo html y el archivo JavaScript están vinculados

# Calculando figuras geométricas en JavaScript

¿cómo agrupar mensajes en la consola?

Usando los comandos console.group y console.groupEnd en el archivo de JavaScript

````
console.group()

console.groupEnd()
````

Ejemplo:

````
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// perimetro
const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

// área
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

console.group("Triángulos");
// triángulo  Isóceles

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

console.log(
    "Los lados del triángulo miden:" 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, "
    + ladoTriangulo3 + "cm")


console.groupEnd();
````
Asi se ven:

![agrupado](/Doc/images/agrupado.png)


Herramienta de JavaScript para obtener el valor de π

````
var pi = Math.PI;
````

# Convertir las *const* en funciones.

1. Cambiar la palabra *const* por *function*
2. después del nombre colocar la estructura de una función
3. ()
4. Abrir {
5. Palabra reservada *return* y la expresión
6. Cerrar }

````
// const to function
const perimetroCuadrado = ladoCuadrado * 4

// function

function perimetroCuadrado(){
    return ladoCuadrado * 4
}
`````

Cambiar las const que realizan operaciones por funciones nos trae el siguiente resultado:
![funciones-resultados](/Doc/images/funciones-resultados.png)

Así se pueden cambiar los valores de las medidas. 😉

