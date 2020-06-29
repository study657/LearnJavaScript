// // Основы работы с функцией setInterval в JavaScript
// // Задача №1
// // Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.

// setInterval(function(){
//     console.log('Выводим что-то!');
// }, 3000);














// // Счетчик через функцию setInterval в JavaScript
// // Задача №1
// // Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.

// let num = 100;

// setInterval(function(){
//     console.log(num--);
// }, 1000);














// // Остановка таймера JavaScript
// // Задача №1
// // Пусть дана переменная, в которой изначально хранится число 10. 
// // Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

// let num = 10;

// let timerId = setInterval(function(){
//     console.log(num--);

//     if(num == 0){
//         clearInterval(timerId);
//     }
// }, 1000);














// // Кнопка для запуска таймера на JavaScript
// // Задача №1
// // Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.

// let timer   = document.getElementById('timer');

// timer.addEventListener('click', function(){
//     let num = 100;

//     let id  = setInterval(function(){
//         console.log(num--);

//         if(num == 0){
//             clearInterval(id);
//         }
//     }, 1000);
// });




// // Задача №2
// // Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.

// // // ПЕРВЫЙ СПОСОБ
// // let timer   = document.getElementById('timer');

// // timer.addEventListener('click', function func(){
// //     let num = 100;

// //     let id  = setInterval(function(){
// //         console.log(num--);

// //         if(num == 0){
// //             clearInterval(id);
// //         }
// //     }, 1000);
// //     timer.removeEventListener('click', func);
// // });


// // ВТОРОЙ СПОСОБ
// let timer   = document.getElementById('timer');

// timer.addEventListener('click', function func(){
//     let num = 100;

//     let id  = setInterval(function(){
//         console.log(num--);

//         if(num == 0){
//             clearInterval(id);
//         }
//     }, 1000);
    
//     timer.disabled = true;
// });














// // Кнопки для запуска и остановки таймера на JavaScript
// // Задача №1
// // Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. 
// // По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. 
// // Как только значение переменной достигнет нуля - остановите таймер.
// // По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

// let startTimer   = document.getElementById('start');
// let stopTimer    = document.getElementById('stop');
// let num          = 100;
// let timerId;

// startTimer.addEventListener('click', function(){
//     timerId = setInterval(function(){
//         console.log(num--);

//         if(num == 0){
//             clearInterval(timerId);
//         }
//     }, 1000);
// });

// stopTimer.addEventListener('click', function(){
//     clearInterval(timerId);
// });




// // Задача №2
// // Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
// // <input type="submit" id="start" value="start">
// // <input type="submit" id="stop"  value="stop">
// // let start = document.querySelector('#start');
// // let stop  = document.querySelector('#stop');

// // start.addEventListener('click', function() {
// // 	let timerId = setInterval(function() {
// // 		let date = new Date;
// // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// // 	}, 1000);
// // });
// // stop.addEventListener('click', function() {
// // 	clearInterval(timerId);
// // });
// // После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let startTimer = document.querySelector('#start');
// let stopTimer  = document.querySelector('#stop');
// let timerId;

// startTimer.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stopTimer.addEventListener('click', function() {
// 	clearInterval(timerId);
// });




// // Задача №3
// // Еще один программист также написал код для решения предыдущей задачи:
// // <input type="submit" id="start" value="start">
// // <input type="submit" id="stop"  value="stop">
// // let start = document.querySelector('#start');
// // let stop  = document.querySelector('#stop');
// // let timerId;
// // start.addEventListener('click', function() {
// // 	let timerId = setInterval(function() {
// // 		let date = new Date;
// // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// // 	}, 1000);
// // });
// // stop.addEventListener('click', function() {
// // 	clearInterval(timerId);
// // });
// // После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.

// let startTimer = document.querySelector('#start');
// let stopTimer  = document.querySelector('#stop');
// let timerId;

// startTimer.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stopTimer.addEventListener('click', function() {
// 	clearInterval(timerId);
// });




// // Задача №4
// // Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. 
// // Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.

// let startTimer   = document.getElementById('start');
// let stopTimer    = document.getElementById('stop');
// let num          = 100;
// let timerId;

// startTimer.addEventListener('click', func);

// stopTimer.addEventListener('click', function(){
//     startTimer.addEventListener('click', func);
//     clearInterval(timerId);
// });

// function func(){
//     timerId = setInterval(function(){
//         console.log(num--);

//         if(num == 0){
//             clearInterval(timerId);
//         }
//     }, 1000);
//     startTimer.removeEventListener('click', func);
// };














// // Практика на таймеры и работу с DOM в JavaScript
// // Задача №1
// // Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.

// let elem    = document.getElementById('elem');

// setInterval(function(){
//     elem.value = Number(elem.value) - 1;
// }, 1000);




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.

// let elem    = document.getElementById('elem');

// let id = setInterval(function(){
//     elem.value = Number(elem.value) - 1;

//     if(Number(elem.value) == 0){
//         clearInterval(id);
//     }
// }, 1000);














// // Практика на таймеры и работу с DOM в JavaScript
// // Задача №1
// // Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

// let btn     = document.getElementById('input');
// let elem    = document.getElementById('elem');

// btn.addEventListener('click', function(){
//     setInterval(function(){
//         elem.innerHTML = Number(elem.innerHTML) + 1;
//     }, 1000);
// });




// // Задача №2
// // Дана кнопка. Дан абзац, текстом которого является число, например, 10. 
// // По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.

// let btn     = document.getElementById('input');
// let elem    = document.getElementById('elem');

// btn.addEventListener('click', function(){
//     let id  = setInterval(function(){
//         elem.innerHTML = Number(elem.innerHTML) - 1;

//         if(elem.innerHTML == '0'){
//             clearInterval(id);
//         }
//     }, 1000);
// });




// // Задача №3
// // Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

// let elem    = document.getElementById('elem');

// setInterval(function(){
//     elem.value = Math.pow(Number(elem.value), 2);
// }, 1000);




// // Задача №4
// // Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

// let elem    = document.getElementById('elem');
// c

// elem.addEventListener('blur', function(){
//     let score       = Number(elem.value);
//     timer.innerHTML = score;
//     elem.disabled   = true;
//     let id = setInterval(function(){
//         timer.innerHTML = Number(timer.innerHTML) - 1;

//         if(timer.innerHTML == '0'){
//             clearInterval(id);
//             elem.disabled = false;
//         }
//     }, 1000);
// });




// // Задача №5
// // Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
// // По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

// let elem    = document.getElementById('elem');
// let btn     = document.getElementById('btn');
// let timer   = document.getElementById('timer');

// btn.addEventListener('click', function(){
//     timer.innerHTML = elem.value;
//     btn.disabled    = true;
//     let id = setInterval(function(){
//         timer.innerHTML = Number(timer.innerHTML) - 1;

//         if(timer.innerHTML == '0'){
//             clearInterval(id);
//             btn.disabled    = false;
//         }
//     }, 1000);
// });




// // Задача №6
// // Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

// let elem        = document.getElementById('elem');
// let startTimer  = document.getElementById('startTimer');
// let stopTimer   = document.getElementById('stopTimer');
// let id;

// startTimer.addEventListener('click', function(){
//     startTimer.disabled = true;
//     id = setInterval(function(){
//         elem.innerHTML = Number(elem.innerHTML) + 1;
//     }, 1000);
// });

// stopTimer.addEventListener('click', function(){
//     clearInterval(id);
//     startTimer.disabled = false;
// });




// // Задача №7
// // Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

// let elem        = document.getElementById('elem');

// setInterval(function(){
//     let check   = elem.getAttribute('class');
//     if(check == 'red'){
//         elem.classList.remove('red');
//         elem.classList.add('green');
//     }else{
//         elem.classList.remove('green');
//         elem.classList.add('red');
//     }
// }, 1000);




// Задача №8
// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики

let timer   = document.getElementById('timer');
let date    = new Date();
timer.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());

setInterval(function(){
    let date    = new Date();
    timer.innerHTML = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}, 1000);

function addZero(num){
    if(num <= 9){
        num = '0' + num;
    }
    return num;
};














// // Функция setTimeout в JavaScript
// // Задача №1
// // Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.

// let elem    = document.getElementById('elem');

// setTimeout(function(){
//     elem.innerHTML = 'Привет!';
// }, 10000);