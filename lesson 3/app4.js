'use strict'

const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = product.filter(item => "photos" in item && item.photos.length > 0);
console.log(productsWithPhotos);

const productPriceSortFromLowToHigh = product.sort(function(item1,item2){
    return item1.price - item2.price;
}) 
console.log(productPriceSortFromLowToHigh);



// получить все товары, у которых есть фото - filter
// отсортировать по цене, от низ до выс - sort