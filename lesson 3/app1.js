 'use strict'

 // от 0 до 10

let i = 0;

for (i=0;i<=10;i++){
    if (i == 0){
       console.log(i + ' - это ноль');
       i = i++;
    } 
    else if(i % 2 == 0){
       console.log(i + ' - это четное число');
       i = i++;
    }
    else{
       console.log(i + ' - это нечетное число');
       i = i++; 
    }
}