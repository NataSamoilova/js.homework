  /**
   * Функция выполняет операцию сложения
   * @param {number} a 
   * @param {number} b
   * @returns {number} 
   */
  
  function sum(a, b){
    return a + b;
  }
    /**
   * Функция выполняет операцию умножения
   * @param {number} a 
   * @param {number} b
   * @returns {number} 
   */

  function multi(a, b){
    return a * b;
  }

    /**
   * Функция выполняет операцию вычитания
   * @param {number} a 
   * @param {number} b
   * @returns {number} 
   */
  
  function diff(a, b){
    return a - b; 
  }

    /**
   * Функция выполняет операцию деления
   * @param {number} a 
   * @param {number} b
   * @returns {number} 
   */ 
  
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

