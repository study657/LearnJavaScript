let menu            = document.getElementsByClassName('menu')[0],                                           // Получаем доступы к элементам на нашей страницу разными методами
    menuItem        = document.querySelectorAll('.menu-item'),
    menuItemLi      = document.createElement('li'),                                                         // С помощью метода createElement создаем новый элемент с тегом  <li></li>
    title           = document.getElementById('title'),
    adv             = document.querySelector('.adv'),
    promptQuestoin  = document.querySelector('#prompt');


menu.insertBefore(menuItem[2], menuItem[1]);                                                                // С помощью метода меняем пункты меню. Сначала пишем то, что меняем, затем то, перед чем меняем (в скобках после метода)
menuItemLi.classList.add('menu-item');                                                                      // В нашем созданном элементе li добавляем класс menu-item
menuItemLi.textContent = 'Пятый пункт';                                                                     // В нашем созданном элементе li добавляем текст "Пятый пункт"
menu.appendChild(menuItemLi);                                                                               // В нашем верхнем меню с помощью метода appendChild, который позволяет нам вставить элемент в конец вставляем наш созданный элемент li

document.body.style.background = 'url(img/apple_true.jpg)';                                                 // С помощью свойства style меняем нашу фоновую картинку на другую

title.textContent = 'Мы продаем только подлинную технику Apple';                                            // С помощью свойства textContent поменяли наш текст в блоке, так же можно было воспользоваться свойством innerHTML

adv.remove();                                                                                               // Удалили не нужный нам блок с помощью метода remove

let question = prompt('Как Вы относитесь к техните Apple?', '');                                            // Спрашиваем у пользователя как он относится к Apple
promptQuestoin.innerHTML = question;                                                                        // Передаем ответ пользователя в блок, который получили через переменные