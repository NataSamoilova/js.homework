 
let game = {
    score: 0,
    nextQuestionIndex: 0,
    run(){
        if(!this.isQuestionExists()){
            console.log(`Игра окончена`);
        }
        let rusult = leader.askQuestion(questions[this.nextQuestionIndex]);
        
    },
    isQuestionExists(){
        return questions[this.nextQuestionIndex] !== undefined;
    }
};

console.log('Напишите game.run(), чтобы начать игру')