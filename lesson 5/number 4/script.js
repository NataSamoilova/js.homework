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
 * 
 * @param {*} card 
 */
function showMoreText(card){
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}