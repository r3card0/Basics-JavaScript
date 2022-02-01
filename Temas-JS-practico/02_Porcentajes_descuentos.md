# Calcular porcentajes y descuentos

Crear un programa que de forma directa de como resultado el precio de la compra cuando se le aplica algún descuento

![descuento](/Doc/images/descuento.png)


* precio = 120 USD
* Descuento = 15%
* compra = (P * (100-D))/100

Crear la función que calcule el precio con descuento:

````
function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}
````
