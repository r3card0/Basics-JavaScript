# Calcular porcentajes y descuentos

Se quiere llegar a esto:

![porcentajes](/Doc/images/porcentajes-descuentos.png)


Crear un programa que de forma directa imprima en pantalla el precio de la compra cuando se le aplica algún descuento.

![descuento](/Doc/images/descuento.png)


* precio = 120 USD
* Descuento = 15%
* compra = (P * (100-D))/100

1. Crear la función que calcule el precio con descuento:

````
function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}
````
2. Crear la estructura del archivo html  etiquetas de header, h1

3. Enlazar los archivos html-JavaScript 

Crear la función del botón: 
````
function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioDescuento = precioConDescuento(priceValue, discountValue); 

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: $" + precioDescuento;
}
````
