'use strict' 
// ваш вариант
for (let x = 'x'; x.length <= 20; x += 'x'){
    console.log(x);
}


// мой вариант

let a = "x";
for(let i = 0; i<20;i++){
    console.log(a);
    a +="x";
}
