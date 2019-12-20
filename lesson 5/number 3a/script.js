const modalWindow = document.querySelector('.wrap');
const openWindow = document.querySelector('button');
const closeWindow = document.querySelector('span');

openWindow.addEventListener('click', function(){
    modalWindow.classList.remove('hidden');
});

closeWindow.addEventListener('click', function(){
    modalWindow.classList.add('hidden');
});


