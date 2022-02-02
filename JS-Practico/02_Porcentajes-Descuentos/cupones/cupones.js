// cupones

function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento
}

// function onclickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioDescuento = precioConDescuento(priceValue, discountValue); 

//     const ResultP = document.getElementById("ResultP");
//     ResultP.innerText = "El precio con descuento es: $" + precioDescuento;
// }

// 1. array

var cupones = ["45", "30", "25"];

// funcion que recibe el array cupones

function couponDiscount(cupon){
    
}

// 2. condicional switch

switch(cupones) {
    case 45:
        percentagePriceWithCoupon = 100 - 45;
        priceWithCoupon = (price * percentagePriceWithCoupon)/100;
        break;
    case 30:
        percentagePriceWithCoupon = 100 - 30;
        priceWithCoupon = (price * percentagePriceWithCoupon)/100;
        break;
    case 25:
        percentagePriceWithCoupon = 100 - 25;
        priceWithCoupon = (price * percentagePriceWithCoupon)/100;
        break;
        
};