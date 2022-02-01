// * precio = 120 USD
// * Descuento = 15%
// * compra = (P * (100-D))/100

// const precio = 100;
// var descuento = 15;
// var compra = (precio * (100 - descuento) / 100);
// var porcentajePrecioConDescuento = 100 - descuento;
// var precioConDescuento = (precio * porcentajePrecioConDescuento) ( 100);

// console.log(compra);

// console.log({
//     precio, descuento, porcentajePrecioConDescuento, precioConDescuento
// });

function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}