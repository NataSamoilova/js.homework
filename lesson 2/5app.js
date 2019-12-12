 
  function sum(a, b){
    return a + b;
  }

  function multi(a, b){
    return a * b;
  }
  
  function diff(a, b){
    return a - b; 
  }
  function division(a, b){
    if (a == 0 || b == 0){
        throw new Error("На ноль делить нельзя!");
    } else {
        return a / b;
    }
  }
  
  console.log(multi(15, 3));
  console.log(sum(3, 4));
  console.log(diff(84, 21));
  console.log(division(25, 5));

  //задание 5
/**
 * Функция получает 2 числа и осуществляет над ними математическую операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть + - * /
 * @throws {Error} в случае, если введена неверная операция, выбрасывается ошибка
 * @returns {number}
 */

  function mathOperation (arg1, arg2, operation){

      switch(operation){
          case '*':
              return multi(arg1, arg2);
          case '+':
              return sum(arg1, arg2);
          case '-':
              return diff(arg1, arg2);
          case '/':
              return division(arg1, arg2);
          default:
              throw new Error('Вы можете использовать следующие операции:\n- * ;\n- + ;\n- - ;\n- /');
            }
          }   

              console.log(mathOperation(5, 2, 'multi'));
              console.log(mathOperation(33, 8, 'sum'));
              console.log(mathOperation(25, 5, 'diff'));
              console.log(mathOperation(16, 2, 'division'));

