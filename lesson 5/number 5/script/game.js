let app = {
    config:{
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        let board = this.generateBoard();
        //добавляем доску в body
        document.body.innerHTML = board;
    },

    /**
     * Метод генерирует игровое поле 8х8
     * @returns {string} html разметка в виде строки
     */
    generateBoard() {
        let board = '';
        let rowStartWithColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++){
            let row = '';
            if (rowStartWithColor === 'white') {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'black';
            } else {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейками)
     * @param {string} startWithColor с какого цвета строка начинается с левого края
     * => 'black' или 'white'
     * @param {number} rowNumber номер строки от 8 до 1, т.к. шахматная доска
     * формируется сверху вниз
     * @returns {string} html-разметка, тег tr с оформлением внутри тегами td
     */
    generateRow (startWithColor, rowNumber) {
        let currentColorClass = startWithColor;
        let row = '';
        for (let i = 0; i < this.config.cols.length; i++){
            let field = '';
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNumber, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNumber, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) c нужным классом цвета 
     * и координатами на поле
     * @param {string} color класс цвета ячейки: "white" or "black"
     * @param {number} rowNumber номер строки игровой доски
     * @param {string} colChar буква колонки игровой доски
     * @returns {string} html-разметка с заполненными атрибутами координат 
     * и классом цвета
     */
    generateField(color, rowNumber, colChar) {
        return `<td data-rownum="${rowNumber}" data-colchar="${colChar}" class="${color}"></td>`;

    },
};

app.run();