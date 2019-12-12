'use strict'

let result1 = 10 + 10 + '10';
console.log(result1);

// К числу 10 прибавляем число 10 и получаем число 20
// К числу 20 прибавляем строку 10 и получаем 2010
// Результат 2010 присваивается к переменной result1
// С помощью console.log выводим результат в консоль

let result2 = 10 + '10' + 10;
console.log(result2);

// К числу 10 прибавляем строку 10 и получаем  1010
// К 1010 прибавляем число 10 и получаем 101010
// Результат 101010 присваивается к переменной result2
// С помощью console.log выводим результат в консоль

let result3 = 10 + 10 + +'10';
console.log(result3);

// К числу 10 прибавляем число 10 и получаем число 20
// Унарный плюс, поставленный перед строкой '10' преобразует строку в число 10
// К числу 20 прибавляем число 10 и получаем 30
// Результат 30 присваивается к переменной result3
// С помощью console.log выводим результат в консоль

let result4 = 10 / -'';
console.log(result4);

// Унарный минус перед пустым строчным элементом преобразует его в число 0 с отрицательным значением: -0
// Число 10 делим на -0 получаем отрицательную бесконечность -infinity
// Результат -infinity присваивается к переменной result4
// С помощью console.log выводим результат в консоль

let result5 = 10 / +'2,5';
console.log(result5);

// Унарный плюс перед строчным элементом преобразует его в значение 2,5. Данное значение не является числом, 
// поскольку javascript распознает точки, а не запятые в числовых значениях.
// Число 10 делим на 2,5 и получаем результат NaN, т.е. получаем не числовое выражение 
// Результат NaN присваивается к переменной result5
// С помощью console.log выводим результат в консоль
