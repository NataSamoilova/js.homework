'use strict' 
const product = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

product.forEach(item => {
    item.price = item.price - item.price * 0.15;
});
console.log(product);

//15% forEach
