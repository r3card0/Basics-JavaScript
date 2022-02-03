// cupones
// 1. array

var cupones = ["45", "30", "25"];

// funcion que recibe el array cupones

function couponDiscount(cupon){
        switch(cupones) {
        case 45:
            percentagePriceWithCoupon = 100 - `${cupones[0]}`;
            break;
        case 30:
            percentagePriceWithCoupon = 100 - `${cupones[1]}`;
            break;
        case 25:
            percentagePriceWithCoupon = 100 - `${cupones[2]}`;
            break;  
    }    
}

function precioConDescuento(precio, cupon) {
    const porcentajePrecioConDescuento = 100 - couponDiscount(cupon); // switch
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

function onclickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    const precioDescuento = precioConDescuento(priceValue, couponValue); 

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: $" + precioDescuento;
}