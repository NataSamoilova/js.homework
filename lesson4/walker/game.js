let game = {
    /**
     * Запускает игру
     */
    run(){
        while(true){
            //Получаем направление игрока
            const direction = mover.getDirection();
            if (direction === null){
                console.log("Игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if(mover.canPlayerMakeStep(nextPoint)){
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    /**
     * Выполняется при открытии страницы
     */
    init(){
       console.log("Ваше положение на поле в виде быквы о");
       renderer.render();
       console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();
