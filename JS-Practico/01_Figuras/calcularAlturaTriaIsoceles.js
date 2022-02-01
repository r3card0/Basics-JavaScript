// * tiene 3 lados iguales
// * 1 de sus lados es la base
// * cuando se corta por la mitad (altura), la base se divide en 2
// * Le lado mas largo (hipotenusa), mantiene el valor de los lados
// * aplicar teorema de pitagoras

// función que calcula la altura
// function alturaIsoceles(lado) {
//     const baseIsoceles = lado * 0.5;
//     const radicando = (lado ** 2) - ((baseIsoceles ** 2) / 4);
//     return Math.sqrt(radicando);
// }

// función que valida y calcula la altura
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