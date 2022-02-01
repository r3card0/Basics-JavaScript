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
````


Cambiar las const que realizan operaciones por funciones nos trae el siguiente resultado:
![funciones-resultados](/Doc/images/funciones-resultados.png)

Así se pueden cambiar los valores de las medidas. 😉


# Interactuando con JavaScript desde HTML

Cuando las etiquetas button están dentro de las etiquetas form, tienen la función de enviar la información recopilada en el formulario

1. html -> Preparar html
2. JavaScript -> funciones para ejecutar
3. Navegador

HTML

En el boton para calcular el perimetro
1. En la etiqueta label, usar el atributo for para asignar el valor "InputCuadrado"
2. En la etiqueta input, usar el atributo id para asignar el valor "InputCuadrado" usado en el atributo for de la etiqueta label. De esta forma se conecta la etiqueta label con al etiqueta input
3. En la etiqueta button, usar el atributo onclick para asignar el nombre de la función de JavaScript que realizará el cálculo.
4. Salvar el archivo

````
<label for="InputCuadrado">
    Escribe cuanto mide cada lado del cuadrado:
</label>
<input  id= "InputCuadrado" type="number">
<button type= "button" onclick="nombrefuncion()">
    Calcular el perímetro
</button>
````

Navegador
1. conseguir los valores que el usuario haya ingresado en el input en el navegador
2. Abrir inspect del navegador
3. Abri consola del naveador (Asegurarse que el arhivo html este salvado)
4. Escribir document.getElementById("InputCuadrado"). Esto es para asegurarse que este llamando al input correctro en el archivo html


JavaScript
Crear las funciones en la parte baja del archivo.

1. Crear estuctura de la función
2. Palabra clave function
3. Nombre de la función (deberá tener el mismo nombre del paso 3 de HTML)
4. Abrir {
5. Crear constante: const seguida de la palabra input
6. Operador de asignación
7. pegar o escribir lo escrito en el paso 4 de Navegador:  document.getElementById("InputCuadrado")
8. ;
9. Crear constante: const value = input.value; (para obtener el dato ingresado por el usuario)
10. Crear constante: const perimetro = perimetroCuadrado(value); (Usar la función que calcula el perimetro y como parametro el valor que ingreso el usuario)
11. Crear un alert: palabra clave *alert* y como parametro la constante del paso 10 -> alert(perimetro)

[Leer mas de: document.getElementById(parametro) ](https://www.w3schools.com/js/js_htmldom_document.asp)

Aquí resume lo que entendiste de document.getElementById 😁

````
resumen aqui
````

Reto:

En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
- La función debe retornar la altura del triángulo.

Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

![Formula](/Doc/images/formula.png)

* tiene 3 lados iguales
* 1 de sus lados es la base
* cuando se corta por la mitad (altura), la base se divide en 2
* Le lado mas largo (hipotenusa), mantiene el valor de los lados
* aplicar teorema de pitagoras



Asi quedo:
````
function alturaIsoceles(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado1 == lado3) {
        const baseIsoceles = lado1 * 0.5;
        const radicando = (lado1 ** 2) - ((baseIsoceles ** 2) / 4);
        return Math.sqrt(radicando);
    } else {
        console.log("No es un triángulo Isoceles");
    }
}

alturaIsoceles(5,5,3);
````
Resultado

![Resultado1](/Doc/images/no-isoceles.png)

![Resultado2](/Doc/images/calculo-altura.png)

