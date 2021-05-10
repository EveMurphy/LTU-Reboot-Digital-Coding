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


/*
check drink
    coke
    lemonade
    orangeade
    default, what if non of those drinks are selected
*/

//function drinkOrder (drink, size) {

/*

    let drinkLow = drink.toLowerCase();

    switch( drinkLow ) {
    case 'coke':
        console.log( drink, size ); // coke
        break;
    case 'lemonade':
        console.log( drink, size ); // lemonade
        break;
    case 'orangeade':
        console.log( drink, size ); // orangeade
        break; 
    default:
        console.log(drink, 'is not available');
        break;
    }
}

//drinkOrder('coke', 'extra large');

function calculator (num1 , num2, operator)

switch(operator){
    case '+':
        console.log( '${num1} ${operator} ${num2} = ${num1 + num2}');
        break;
    case '-':
        console.log( '${num1} ${operator} ${num2} = ${num1 - num2}');
        break;
    case '/':
        console.log( '${num1} ${operator} ${num2} = ${num1 / num2}');
        break;
    case '*':
        console.log( '${num1} ${operator} ${num2} = ${num1 * num2}');
        break;
    default:

        break;
    }

}
calculator (5, 5, '+');

*/ 

let productAsAnArray = [ productName, price, quantity, inStock, discountAmount ] ;

let firstItem = productAsAnArray [0]; // Baked beans

let lastItem = productAsAnArray [4];

console.log( firstItem );
console.log( lastItem);