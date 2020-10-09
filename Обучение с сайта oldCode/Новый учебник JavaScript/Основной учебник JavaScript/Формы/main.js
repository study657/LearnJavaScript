// // Работа с текстареа в JavaScript
// // Задача №1
// // Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.

// let areaElem    = document.querySelector('.areaElem');
// let elem        = document.getElementById('elem');

// areaElem.addEventListener('blur', function(){
//     elem.innerHTML = areaElem.value;
// });














// // Атрибут disabled в JavaScript
// // Задача №1
// // Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     elem.disabled   = true;
// });




// // Задача №2
// // Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('btn1');
// let btn2    = document.getElementById('btn2');

// btn1.addEventListener('click', function(){
//     elem.disabled   = true;
// });
// btn2.addEventListener('click', function(){
//     elem.disabled   = false;
// });




// // Задача №3
// // Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('btn1');

// btn1.addEventListener('click', function(){
//     if(elem.disabled){
//         console.log('Инпут заблокирован!');
//     }else{
//         console.log('Инпут НЕ заблокирован!');
//     }
// });














// // Работа с чекбоксами в JavaScript
// // Задача №1
// // Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('btn1');
// let btn2    = document.getElementById('btn2');

// btn1.addEventListener('click', function(){
//     elem.checked    = true;
// });
// btn2.addEventListener('click', function(){
//     elem.checked    = false;
// });




// // Задача №2
// // Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('btn1');
// let abz     = document.getElementById('abz');

// btn1.addEventListener('click', function(){
//     if(elem.checked){
//         abz.innerHTML = 'Привет';
//     }else{
//         abz.innerHTML = 'Пока';
//     }
// });














// // Чередование атрибутов без значений
// // Задача №1
// // Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.

// let elem    = document.getElementById('elem');
// let btn1    = document.getElementById('btn1');

// btn1.addEventListener('click', function(){
//     elem.checked   = !elem.checked;
// });














// // Работа с радиокнопками в JavaScript
// // Задача №1
// // Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let radioButtons    = document.querySelectorAll('input[type="radio"]');
// let elem            = document.querySelector('.elem');
// let btn             = document.querySelector('input[type="submit"]');

// btn.addEventListener('click', function(){
//     for(let radio of radioButtons){
//         if(radio.checked){
//             elem.innerHTML = radio.value;
//         }
//     }
// });














// // Событие change в JavaScript
// // Задача №1
// // Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let input   = document.querySelector('.input');
// let elem    = document.querySelector('.elem');

// input.addEventListener('change', function(){
//     elem.innerHTML = input.value;
// });




// // Задача №2
// // Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// let elem    = document.getElementById('elem');
// let p       = document.querySelector('.p');

// elem.addEventListener('change', function(){
//     p.innerHTML = elem.checked;
// });




// Задача №3
// Расскажите, в чем разница между событиями blur и change.
// Ответ: Событие blur сработает в том случае, если у инпута есть поле для ввода и после того, как мы уйдем с поле ввода оно сработает, а событие change сработает только по изменению какого-либо элемента
// Например, если у нас чекбокс, то событие blur вообще не сработает, здесь нужно применять только событие change




// // Задача №4
// // Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let input   = document.querySelector('.input');

// input.addEventListener('change', function(){
//     if(input.value.length <= 5){
//         input.style.border = '2px solid green';
//     }else{
//         input.style.border = '2px solid red';
//     }
// });














// // Событие input в JavaScript
// // Задача №1
// // Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.

// let input   = document.querySelector('.input');

// input.addEventListener('input', function(){
//     if(input.value.length == 5){
//         console.log('Длина текста равна пяти символам!');
//     }
// });




// // Задача №2
// // Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. 
// // Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// let input   = document.querySelector('.input');
// let elem    = document.querySelector('.elem');
// let curr1   = 5;
// let curr2   = -5;

// input.addEventListener('input', function(){
//     if(curr1 - input.value.length >= 0){
//         elem.innerHTML = 'Вы можете ввести еще: ' + (curr1 - input.value.length) + ' символ' + getCorrectWorld(curr1 - input.value.length);
//     }else{
//         elem.innerHTML = 'Длина текста превышана на: ' + (curr2 + input.value.length) + ' символ' + getCorrectWorld(curr2 + input.value.length);
//     }
// });

// function getCorrectWorld(num){
//     let arr1 = [4, 3, 2];
//     let arr2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//     for(let elem of arr1){
//         if(num == elem){
//             return 'а';
//         }
//     }
//     if(num == 1){
//         return '';
//     }
//     if(num == 0){
//         return 'ов';
//     }

//     for(let elem of arr2){
//         if(num == elem){
//             return 'ов';
//         }
//     }
//     if(num > 20){
//         return '';
//     }
// };














// Методы focus и blur в JavaScript
// Задача №1
// Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

let inp1    = document.querySelector('.input1');
let inp2    = document.querySelector('.input2');

inp1.addEventListener('input', function(){
    if(inp1.value.length == 2){
        inp2.focus();
    }
});