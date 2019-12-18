/**
 * Объект игрока, здесь будуь все методы и св-ва, связанные с ним
 * @property {int} x Позиция по Х-коорд
 * @property {int} y Позиция по У-коорд
 */


const player = {
    x: 0,
    y: 0,  
    
    /**
     * Двигает игрока по переданному направлению
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя
     */
    move(nextPoint){
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    },
};
