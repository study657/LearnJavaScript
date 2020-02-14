// // Работа с классами
// // 1. Дан элемент #elem. Добавьте ему класс www

// let elem    = document.getElementById('elem');
// elem.classList.add('www');




// // 2. Дан элемент #elem. Удалите у него класс www

// let elem    = document.getElementById('elem');
// elem.classList.remove('www');




// // 3. Дан элемент #elem. Проверьте наличие у него класса www

// let elem    = document.getElementById('elem');
// console.log(elem.classList.contains('www'));




// // 4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть

// let elem    = document.getElementById('elem');

// function changeClass(){
//     if(elem.classList.contains('www') == true){
//         elem.classList.remove('www');
//     }else{
//         elem.classList.add('www');
//     }
// };




// // 5. Дан элемент #elem. Узнайте количество его классов

// let elem    = document.getElementById('elem');
// console.log(elem.classList.length);




// // 6. Дан элемент #elem. Выведите последовательно алертом его классы.

// let elem    = document.getElementById('elem');
// let classes = elem.classList;

// for(let i = 0; i < classes.length; i++){
//     alert(classes[i]);
// }




// // Работа с CSS
// // 7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText

// let elem    = document.getElementById('elem');
// elem.style.cssText = 'color: red; font-size: 30px; border: 10px';




// // Свойство tagName
// // 8. Дан элемент #elem. По клику на него выведите название его тега

// let elem    = document.getElementById('elem');

// function go(){
//     console.log(elem.tagName);
// };




// // 9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре

// let elem    = document.getElementById('elem');

// function go(){
//     console.log(elem.tagName.toLowerCase());
// };




// // 10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре

// let pagagr  = document.getElementsByTagName('p');

// for(let i = 0; i < pagagr.length; i++){
//     pagagr[i].innerHTML = pagagr[i].tagName.toLowerCase();
// }




// // Вставка элементов через appendChild
// // 11. Дан ul. Вставьте ему в конец li с текстом 'пункт'

// let www = document.querySelector('.www');
// let li  = document.createElement('li');
// li.innerHTML    = 'пункт';
// www.appendChild(li);




// // 12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li

// let uls = document.getElementsByTagName('ul');

// for(let i = 0; i < uls.length; i++){
//     let li  = document.createElement('li');
//     li.innerHTML    = 'пункты';
//     uls[i].appendChild(li);
// }




// // Привязывание событий при вставке
// // 13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
// // Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст

// let uls = document.getElementsByTagName('ul');

// for(let i = 0; i < uls.length; i++){
//     let li  = document.createElement('li');
//     li.innerHTML    = 'пункт ' + Number(i + 1);
//     uls[i].appendChild(li);

//     li.addEventListener('click', showText);

//     function showText(){
//         alert(li.innerHTML);
//     };
// }




// // Вставка элементов через insertBefore
// // 14. Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'

// let parent      = document.getElementById('parent');
// let elem        = document.getElementById('elem');
// let li          = document.createElement('li');
// li.innerHTML    = '!!!';

// parent.insertBefore(li, elem);




// // Вставка элементов через insertAdjacentHTML
// // 15. Дан элемент #elem. Вставьте перед ним span с текстом '!!!'

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');




// // 16. Дан элемент #elem. Вставьте после него span с текстом '!!!'

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');




// // 17. Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');




// // 18. Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'

// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML('beforend', '<span>!!!</span>');




// // Потомки
// // 19. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета

// let elem    = document.getElementById('elem');
// let pot1    = elem.firstElementChild;
// pot1.style.color = 'red';




// // 20. Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета

// let elem    = document.getElementById('elem');
// let potLast = elem.lastElementChild;
// potLast.style.color = 'red';




// // 21. Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'

// let elem        = document.getElementById('elem');
// let allChild    = elem.children;

// for(let i = 0; i < allChild.length; i++){
//     allChild[i].innerHTML += '!';
// }




// // Соседи
// // 22. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

// let elem        = document.getElementById('elem');
// let prev        = elem.previousElementSibling;
// prev.innerHTML += '!';




// // 23. Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'

// let elem        = document.getElementById('elem');
// let next        = elem.nextElementSibling;
// next.innerHTML += '!';




// // 24. Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'

// let elem        = document.getElementById('elem');
// let next1       = elem.nextElementSibling;
// let next2       = next1.nextElementSibling;
// next2.innerHTML += '!';




// // Родители
// // 25. Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет

// let elem    = document.getElementById('elem');
// let parent  = elem.parentElement;
// parent.style.color = 'red';




// 26. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет







// // Удаление и клонирование
// // 27. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child

// let parent  = document.getElementById('parent');
// let child   = document.getElementById('child');

// function removeElem(){
//     parent.removeChild(child);
// };




// // 28. Дан ul. По нажатию на кнопку получите его последнего потомка и удалите его

// let elem        = document.getElementById('elem');
// let lastElem    = elem.lastElementChild;

// function removeElem(){
//     elem.removeChild(lastElem);
// };




// // 29. Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     elem.remove();
// });




// // 30. Дан ul, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась

// let ul    = document.getElementsByTagName('li');

// for(let i = 0; i < ul.length; i++){
//     ul[i].addEventListener('click', function(){
//         ul[i].remove();
//     });
// }




// // Клонирование
// // 31. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут

// let elem    = document.getElementById('elem');
// let parent  = document.getElementById('parent');

// function cloneInpute(){
//     let clone = elem.cloneNode(true);

//     parent.insertBefore(clone, elem);
// };




// // Практика
// // 32. Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body

// let arr     = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5'];

// let ul  = document.createElement('ul');

// for(let i = 0; i < arr.length; i++){
//     let li  = document.createElement('li');

//         li.innerHTML = arr[i];
//         ul.appendChild(li);
// }
// document.body.appendChild(ul);




// // 33. Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('button');

// function addInput(){
//     let newElem = elem.cloneNode(true);
//     document.body.insertBefore(newElem, btn);
// };




// // 34. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. 
// // Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта

// let elem    = document.getElementById('elem');

// function addNewInput(){
//     if(isNaN(elem.value) == false){
//         let arr = elem.value.split('');
        
//         for(let i = 0; i < arr.length; i++){
//             let cloneInpute = elem.cloneNode(true);
//             cloneInpute.value = arr[i];

//             document.body.appendChild(cloneInpute);
//         }
//     }else{
//         alert('Вы ввели не число в инпут!');
//     }
// };




// 35. Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки

let parrent = document.getElementById('parrent');
let btn     = document.getElementById('btn');
let paragr  = document.getElementsByTagName('p')[0];

btn.addEventListener('click', function(){
    parrent.style.display = 'none';

    setTimeout(show, 5000);

    function show(){
        parrent.style.display = 'block';
    };
});