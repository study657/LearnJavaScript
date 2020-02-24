// // Блок №1. Разминка
// // 1. Дан ul с несколькими li. По нажатию на любую li на экран должен вывестись ее текст. Решить не через делегирование, а обычным способом - задача разминочная

// let li  = document.getElementsByTagName('li');
// console.log(li);

// for(let i = 0; i < li.length; i++){
//     li[i].addEventListener('click', addSing);

//     function addSing(){
//         alert(li[i].innerHTML);
//     };
// }




// // 2. Дан ul с несколькими li и кнопка. 
// // Сделайте так, чтобы по нажатию на кнопку в конец ul добавлялась новая li с текстом 'пункт'. 
// // Задачу решите с помощью методов createElement и appendChild.

// let ul  = document.getElementById('ul');
// let li  = document.getElementsByTagName('li');
// let btn = document.getElementById('button');

// btn.addEventListener('click', addSing);

// function addSing(){
//     let newLi = document.createElement('li');
//     newLi.innerHTML = 'Пункт n';
//     ul.appendChild(newLi);
// };




// // 3. Дан div 200 на 200 пикселей. Сделайте так, чтобы по клику на этот div на экран выводились координаты места нажатия. Задача на основы работы с объектом Event

// let elem        = document.getElementById('elem');
// let coordinates = document.getElementById('coordinates');

// elem.addEventListener('click', function(event){
//     let coordinatX  = event.clientX;
//     let coordinatY  = event.clientY;

//     coordinates.innerHTML = 'X: ' + coordinatX + ' Y: ' + coordinatY;
// });




// // Блок №2. Простое делегирование
// // 4. Дан ul с несколькими li. По нажатию на любую li на экран должен вывестись ее текст. Дана кнопка. 
// // Сделайте так, чтобы по нажатию на эту кнопку в конец ul добавлялась новая li с текстом 'пункт'. 
// // Сделайте так, чтобы вновь добавленные li также реагировали на нажатие. Задачу решите с помощью делегирования

// let ul      = document.getElementById('ul');
// let button  = document.getElementById('button');

// ul.addEventListener('click', function(event){
//     let target = event.target;
//     alert(target.innerHTML);
// });

// button.addEventListener('click', function(){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = 'Пункт n';
//     ul.appendChild(newLi);
// });




// // Блок №3. Универсальное делегирование
// // https://www.youtube.com/watch?v=f1oub0l9Jx8
// // 5. Посмотрите видео выше и доделайте решение предыдущей задачи в соответствии с этим видео

// let ul      = document.getElementById('ul');
// let button  = document.getElementById('button');

// ul.addEventListener('click', function(event){
//     let target  = event.target;
    
//     // СПОСОБ №1 ДЛЯ ВСЕХ БРАУЗЕРОВ (В ТОМ ЧИСЛЕ И СТАРЫХ)

//     // while(target != this){
//     //     if(target.tagName == 'LI'){
//     //         target.innerHTML += '!';
//     //         break;
//     //     }
//     //     target = target.parentNode;
//     // }

//     // СПОСОБ №2 ДЛЯ БОЛЕЕ СОВРЕМЕННЫХ БРАУЗЕРОВ

//     let li      = target.closest('li');
//     if(li){
//         li.innerHTML += '!';
//     }
// });

// button.addEventListener('click', function(){
//     let newLi       = document.createElement('li');
//     newLi.innerHTML = 'Новая li';
//     ul.appendChild(newLi);
// });




// // Блок №4. Практика
// // 6. Дана таблица с колонками 'имя', 'фамилия', 'удалить'. Сделайте под ней 2 инпута и кнопку. 
// // Если ввести в эти инпуты имя и фамилию и нажать на кнопку - в таблицу должен добавиться новый ряд. 
// // В каждом ряду должна быть кнопочка 'удалить' (третий столбец), по нажатию на которую этот ряд удалится.

// // Также сделайте так, чтобы можно было поредактировать любую ячейку с именем и фамилией - по клику на ячейку в ней должен появиться инпут с текстом этой ячейки, 
// // этот текст можно поменять, нажать Enter - и инпут исчезнет, а информация в ячейке обновится


// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (БЕЗ ДЕЛИГИРОВАНИЯ)
// let table           = document.getElementById('table');
// let trr             = document.getElementById('trr');

// let namePerson      = document.getElementById('namePerson');
// let furnamePerson   = document.getElementById('surnamePerson');

// let btn             = document.getElementById('button');


// btn.addEventListener('click', function(){
//     let newTr   = document.createElement('tr');
//     newTr.classList.add('newTrr');
//     table.appendChild(newTr);

//     let newTd;
//     for(let i = 1; i <= 3; i++){
//         newTd   = document.createElement('td');
//         newTr.appendChild(newTd);
//     }

//     let name    = newTr.firstElementChild;
//     let surname = name.nextElementSibling;
//     let del     = surname.nextElementSibling;

//     name.innerHTML      = namePerson.value;
//     surname.innerHTML   = furnamePerson.value;
//     let n               = name.innerHTML;
//     let s               = surname.innerHTML;

//     namePerson.value    = '';
//     furnamePerson.value = '';

//     del.addEventListener('click', function(){
//         newTr.remove();
//     });

//     name.addEventListener('click', addInputName);
//     function addInputName(){
//             name.innerHTML = '<input type="text" value="" id="correctionName">';
//             let correctionName = document.getElementById('correctionName');
//             name.removeEventListener('click', addInputName);
//             correctionName.value = n;
//             console.log(n);

//             correctionName.addEventListener('keypress', function(event){
//                 let code = event.keyCode;

//                 if(code == 13){
//                     name.innerHTML = correctionName.value;
//                     correctionName.remove();
//                 }
//             });
//     };

//     surname.addEventListener('click', addInputSurname);
//     function addInputSurname(){
//         surname.innerHTML = '<input type="text" value="" id="correctionSurname">';
//             let correctionSurname = document.getElementById('correctionSurname');
//             surname.removeEventListener('click', addInputSurname);
//             correctionSurname.value = s;

//             correctionSurname.addEventListener('keypress', function(event){
//                 let code = event.keyCode;

//                 if(code == 13){
//                     surname.innerHTML = correctionSurname.value;
//                     correctionSurname.remove();
//                 }
//             });
//     };
// });




// // ВТОРОЙ МЕТОД РЕШЕНИЯ (С ДЕЛИГИРОВАНИЕМ)
// let table           = document.getElementById('table');

// let namePerson      = document.getElementById('namePerson');
// let surnamePerson   = document.getElementById('surnamePerson');

// let btn             = document.getElementById('button');

// btn.addEventListener('click', function(){
//     var newTr   = document.createElement('tr');
//     table.appendChild(newTr);

//     for(let i = 1; i <= 3; i++){
//         var newTd   = document.createElement('td');
//         newTr.appendChild(newTd);
//     }

//     let del     = newTd;
//     del.classList.add('delet');
//     del.addEventListener('click', deleteRange);
//     function deleteRange(){
//         newTr.remove();
//     };

//     var surname = newTd.previousSibling;
//     var name    = surname.previousSibling;

//     surname.innerHTML   = surnamePerson.value;
//     name.innerHTML      = namePerson.value;

//     surnamePerson.value   = '';
//     namePerson.value      = '';
// });

// table.addEventListener('click', addInputCorrection);

// function addInputCorrection(event){
//     let target = event.target;

//     if(target.innerHTML == 'Имя' || target.innerHTML == 'Фамилия' || target.innerHTML == 'Удалить'){
//         alert('Вы не можете поменять базовые значения ячеек!');
//     }else if(target.classList.contains('delet') != true){
//         var old              = target.innerHTML;
//         target.innerHTML     = '<input type="text" value="" id="correctionName">';
//         table.removeEventListener('click', addInputCorrection);
//         let correctionName   = document.getElementById('correctionName');
//         correctionName.value = old;

//         correctionName.addEventListener('keypress', function(event){
//             let code = event.keyCode;
            
//                 if(code == 13){
//                     target.innerHTML = correctionName.value;
//                     correctionName.remove();
//                 }
//                 table.addEventListener('click', addInputCorrection);
//             });
//         }
// };




// 7. Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. 
// Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. 
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на table)

let table           = document.getElementById('table');
let namePerson      = document.getElementById('namePerson');
let surnamePerson   = document.getElementById('surnamePerson');
let btn             = document.getElementById('button');

btn.addEventListener('click', function(){
    let newTr   = document.createElement('tr');
    table.appendChild(newTr);

    let newTd;
    for(let i = 1; i <= 2; i++){
        newTd = document.createElement('td');
        newTr.appendChild(newTd);
    }

    let name    = newTd.previousElementSibling;
    let surname = newTr.lastElementChild;

    name.innerHTML      = namePerson.value;
    surname.innerHTML   = surnamePerson.value;

    namePerson.value    = '';
    surnamePerson.value = '';
});

table.addEventListener('click', function(event){
    let target = event.target;

    if(target.innerHTML == 'Имя' || target.innerHTML == 'Фамилия'){
        alert('Вы не можете заменить базовые значения ячеек');
    }else{
        let prom         = prompt('Введите корректировку ячейки', '');
        target.innerHTML = prom;
    }
});