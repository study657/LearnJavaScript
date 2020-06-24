// // Работа с выпадающими списками в JavaScript
// // Задача №1
// // Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.

// let select  = document.getElementById('select');
// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');

// select.addEventListener('change', function(){
//     btn.addEventListener('click', function(){
//         elem.innerHTML = select.value;
//     });
// });




// // Задача №2
// // Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

// let select  = document.getElementById('select');

// select.addEventListener('change', function(){
//     let date    = new Date(select.value, 2, 0);
//     if(date.getDate() == 28){
//         console.log('Год не весокосный!');
//     }else{
//         console.log('Год весокосный!');
//     }
// });




// // Атрибут value
// // Задача №3
// // Сделайте выпадающий список с названиями дней недели. 
// // В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

// let select  = document.getElementById('select');

// select.addEventListener('change', function(){
//     if(select.value == 6 || select.value == 7){
//         console.log('Это выходной день!');
//     }else{
//         console.log('Это рабочий день!');
//     }
// });














// // Изменение выбранного пункта списка на JavaScript
// // Задача №1
// // Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий месяц.

// let select  = document.getElementById('select');

// let date        = new Date();
// let currMonth   = date.getMonth();
// select.value    = currMonth;














// // Номер выбранного пункта выпадающего списка
// // Задача №1
// // Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.

// let input   = document.getElementById('input');
// let select  = document.getElementById('select');

// input.addEventListener('blur', function(){
//     select.selectedIndex = Number(input.value) - 1;
// });




// // Задача №2
// // Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.

// let select  = document.getElementById('select');

// let date    = new Date();
// let currDay = date.getDay();
// select.selectedIndex = currDay;














// // Получение пунктов выпадающего списка на JavaScript
// // Задача №1
// // Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.

// let select  = document.getElementById('select');

// for(let option of select){
//     option.innerHTML += ' ' + option.value;
// }














// // Работа с пунктами выпадающего списка на JavaScript
// // Задача №1
// // Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

// let select  = document.getElementById('select');

// let date    = new Date();
// let currDay = date.getDay();
// select.selectedIndex    = currDay;

// for(let option of select){
//     if(option.selected){
//         option.text += '!';
//     }else{
//         option.text += '?';
//     }
// }




// // Задача №2
// // Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.

// let select  = document.getElementById('select');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let lastElement = select.lastElementChild;
//     lastElement.selected    = true;
// });




// // Получение выбранного оптиона
// // Задача №3
// // Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.

// let select  = document.getElementById('select');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     console.log(select[select.selectedIndex].text);
// });




// Задача №4
// Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.

let select  = document.getElementById('select');
let btn     = document.getElementById('btn');

btn.addEventListener('click', function(){
    select[select.selectedIndex].text += '!';
});