 /**
  * 
  */

let mover = {
    /**
     * Проверяет может ли игрок перейти на точку
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем
     * @returns {boolean} true если игрок может перейти на точку, false если нет
     */
    canPlayerMakeStep(nextPoint){
        return  nextPoint.x >= 0 &&
                nextPoint.x < config.colsCount &&
                nextPoint.y >= 0 &&
                nextPoint.y < config.rowsCount;
    },

    /**
    * Получает и отдает направление от пользователя
    * @returns {int} возвращает направление, введенное пользователем
    */
    getDirection(){
        const availableDirection = [1, 2, 3, 4, 6, 7, 8, 9];
        while(true){
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться или "Отмена" для выхода'));
            if(isNaN(direction)){
                return null;
            }
            if(!availableDirection.includes(direction)){
                alert('Для перемещения необходимо ввести одно из чисел: 1, 2, 3, 4, 6, 7, 8, 9');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку, в кот будет находиться пользователь после движения
     * @param {int} direction Направление движения игрока
     * @returns {{x: int, y: int}} Следующая позиция игрока
     */

    getNextPosition(direction){
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction){
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
};