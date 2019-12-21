const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        handleClick(event);
    })
});

/**
 * Функция срабатывает при произведении клика по карточке товара и попеременно вызывает
 * функции для показа или скрытия информации о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent){
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('.productImg'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее'){
        showMoreText(card);
    } else if (textOnButton === 'Отмена'){
        hideMoreText(card);
    }
}

/**
 * Функция скрывает описание товара и возвращает карточку
 * @param {object} card 
 * @param {HTMLDivElement} card.wrap 
 * @param {HTMLDivElement} card.img 
 * @param {HTMLDivElement} card.productName 
 * @param {HTMLButtonElement} card.button 
 */
function hideMoreText(card){
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает описание товара
 * @param {object} card 
 * @param {HTMLDivElement} card.wrap 
 * @param {HTMLDivElement} card.img 
 * @param {HTMLDivElement} card.productName 
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card){
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}