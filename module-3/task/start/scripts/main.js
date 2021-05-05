let productName = 'Baked beans'; // string
let price = 0.89; //
let quantity = 2;
let inStock = true;
let discountAmount = 0.20;

// console.log( productName, price );

function showProductName() {
 console.log(productName); 
}

function totalPrice( productPrice,productQuantity ) {

 console.log(productPrice * productQuantity) ;

}

// totalPrice(price, quantity);

//function checkAvailability(productInStock) {
//    console.log( productInStock);
// }

let checkAvailability = productInStock => console.log(productInStock );

// checkAvailability(inStock);

function productDiscount() {
 if ( quantity > 1) {
    let newPrice = (price - discountAmount * quantity);
    console.log ( newPrice);
 } else {
     console.log ( price * quantity);
    }

}

// productDiscount ();