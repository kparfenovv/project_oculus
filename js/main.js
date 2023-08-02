// В начале код выбирает все элементы с классом "tabs__btn-item" и "tabs__content-item" с помощью метода querySelectorAll. 
// Эти элементы представляют собой кнопки вкладок и секции содержимого вкладок соответственно.

// Затем для каждой кнопки вкладки прикрепляется обработчик событий "click" с помощью метода forEach. 
// Это означает, что когда пользователь щелкает на кнопке вкладки, будет выполнена функция-обработчик "open".

// Функция open определяется для обработки события "click". 
// Она получает объект события (обычно обозначается как evt) в качестве своего параметра, 
// который содержит информацию о событии, которое вызвало функцию.

// Внутри функции open сначала извлекается значение атрибута "data-button" с помощью dataset.button из щелкнутой кнопки вкладки. 
// Этот атрибут содержит соответствующий идентификатор секции содержимого вкладки, связанный с нажатой кнопкой.

// Заудаляются классы "tabs__btn-item--active" у всех кнопок вкладок и "tabs__content-item--active" у всех секций содержимого вкладок. 
// Это гарантирует, что только одна кнопка вкладки и ее соответствующая секция содержимого будут активными в данный момент.

// После удаления активных классов добавляется класс "tabs__btn-item--active" к щелкнутой кнопке вкладки. 
// Этот класс отвечает за визуальное выделение активной кнопки вкладки.

// Наконец, находится секция содержимого вкладки с идентификатором, соответствующим значению "data-button", 
// и добавляется класс "tabs__content-item--active". Этот класс отвечает за отображение соответствующего содержимого вкладки. 

// Код позволяет переключаться между вкладками, позволяя пользователю нажимать на разные кнопки вкладок, 
// чтобы отобразить соответствующие секции с содержимым.

'use strict'

const tabItem = document.querySelectorAll ('.tabs__btn-item');
const tabContent = document.querySelectorAll ('.tabs__content-item');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

}

menuBtn.addEventListener('click', () => {
   menu.classList.toggle ('menu--active');
});