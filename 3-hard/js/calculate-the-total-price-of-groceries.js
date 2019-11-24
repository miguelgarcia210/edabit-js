"use strict";

const getTotalPrice = groceries => {
    return parseFloat((groceries.reduce((accumulator, produce) => {
        return accumulator + (produce.quantity * produce.price);
    }, 0)).toFixed(2));
};

console.log(getTotalPrice([
    {product: "Milk", quantity: 1, price: 1.50}
])); // 1.5
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
])); // 4
console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
])); // 4.5
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
])); // 10.4
console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])); // 0.3