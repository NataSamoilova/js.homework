 
let a = +(prompt("Введите первое число:"));
let b = +(prompt("Введите второе число:"));

function sum(){
if (a >= 0 && b >= 0){
    return a - b;
} else if (a < 0 && b < 0){
    return a * b;
} else {
    return a + b;
  }
}

let result = sum(a,b);
alert(result);