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
Cosas nuevas aprendidas
* ResultP.innerText

## Reto: funciones más inteligentes

Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

Analicemos el problema y nuestra propuesta de solución:

Crearemos un array con cada uno de nuestros cupones.
Cambiaremos el input de descuento en HTML por un input de cupones.
Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.

1. crear el array

````
var cupones = ["Cupon 1", "Cupon 2", "Cupon 3"];
````
2. Cambiar el input de descuento en HMTL por un input de cupones

body -> header, section, script

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cupones</title>
</head>
<body>
    <header>
        <h1>Cupones</h1>
        <p>implementar descuentos con cupones</p>
    </header>
    <section>
        <h2>Calcular el precio de la compra con cupones</h2>
        <form action="">
            <label for="InputPrice"></label>
            <input id="InputPrice" type="number">
            <label for="InputCoupon"></label>
            <input id="InputCoupon" type="number">
            <button type="button" onclick="onclickButtonPriceCoupon"></button>
            <p id="ResultP"></p>
        </form>
    </section>
    <script src=""></script>
</body>
</html>
````
3. Crear una condicional switch para aplicar cierto porcentaje de descuento en nuestros productos

````


````
