console.log("hola mundo 🤗 ")

console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2;
}


console.groupEnd();

console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}


console.groupEnd();

console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return (Math.PI) * diametro
}


function areaCirculo(radio) {
    return (Math.PI) * (radio ** 2);
}

console.groupEnd();

// que pedo

function calcularPerimetroDelCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaDelCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

