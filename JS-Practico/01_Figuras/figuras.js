console.log("hola mundo 🤗 ")

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// perimetro
// const perimetroCuadrado = ladoCuadrado * 4;

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

// área
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2;
}

// console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();

console.group("Triángulos");
// triángulo  Isóceles

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
// )

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/ 2;
// console.log("El área del Triángulo es: " + areaTriangulo + "cm2");

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}


console.groupEnd();

console.group("Círculo");

// Círculo:
// - Perímetro = circunferencia (diámetro * π)
// - Área ((radio * radio)* π)

// const diametro = 8;
// // const pi = 3.1416;
// const radio = diametro/2;


// const circunferencia = diametro * pi;
// console.log("La circunferencia del círculo es: " + circunferencia + "cm2");

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return (Math.PI) * diametro
}

// const areaCirculo = (radio ** 2) * pi;
// console.log("El área del Círculo es: " + areaCirculo + "cm2");

function areaCirculo(radio) {
    return (Math.PI) * (radio ** 2);
}

// const pi_2 = Math.PI;
// console.log("El valor de PI según JavaScript es:" + pi_2);

console.groupEnd();