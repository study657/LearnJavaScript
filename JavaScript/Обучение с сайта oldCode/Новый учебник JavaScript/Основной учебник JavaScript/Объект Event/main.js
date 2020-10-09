// // Основы работы с объектом Event в JavaScript
// // Задача №1
// // Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     console.log(event);
// });














// // Координаты события в JavaScript
// // Задача №1
// // Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:

// let elem    = document.getElementById('elem');

// document.addEventListener('mousemove', function(event){
//     elem.innerHTML = 'Координаты X: ' + event.clientX + 'Y: ' + event.clientY;
// });














// // Тип события в объекте Event в JavaScript
// // Задача №1
// // В следующем коде в двум событиям привязан один и тот же обработчик:
// // <button id="elem">text</button>
// // let elem = document.querySelector('#elem');
// // elem.addEventListener('click', func);
// // elem.addEventListener('dblclick', func);
// // function func() {
	
// // }
// // Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if(event.type == 'click'){
//         elem.style.color = 'green';
//     }else{
//         elem.style.color = 'red';
//     }
// };














// // Элемент события в объекте Event в JavaScript
// // Задача №1
// // Пусть у вас есть список ul с тегами li:
// // ul {
// // 	padding: 30px;
// // 	border: 1px solid red;
// // }
// // li {
// // 	list-style-type: none;
// // 	margin-bottom: 20px;
// // 	border: 1px dashed black;
// // }
// // <ul id="elem">
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. 
// // Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     let target  = event.target;
//     if(target.tagName == 'LI'){
//         target.innerHTML += '!';
//     }else{
//         let newLi = document.createElement('li');
//         newLi.innerHTML = 'text';
//         elem.appendChild(newLi);
//     }
// });














// // Получение нажатых клавиш в JavaScript
// // Задача №1
// // Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

// let input   = document.getElementById('input');
// let elem    = document.getElementById('elem');

// input.addEventListener('keydown', function(event){
//     let key = event.key;
//     if(key == 'Enter'){
//         elem.innerHTML = input.value;
//     }
// });














// // Отслеживание клавиш-модификаторов в JavaScript
// // Задача №1
// // Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     let press   = event.altKey;
//     if(press){
//         elem.style.color = 'red';
//     }
// });




// // Задача №2
// // Пусть у вас есть список ul с тегами li:
// // <ul id="elem">
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // 	<li>text</li>
// // </ul>
// // Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(event){
//     let target      = event.target;
//     let pressCtrl   = event.ctrlKey;
//     let pressShift  = event.shiftKey;
//     if(target.tagName == 'LI' && pressCtrl){
//         target.innerHTML += 1;
//     }else if(target.tagName == 'LI' && pressShift){
//         target.innerHTML += 2;
//     }
// });














// // Отмена действия по умолчанию в JavaScript
// // Задача №1
// // Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.

// let links   = document.getElementsByTagName('a');

// for(let link of links){
//     link.addEventListener('click', function(event){
//         event.preventDefault();
//         this.innerHTML += ' ' + this.href;
//     });
// }




// Задача №2
// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.

let inp1    = document.getElementById('inp1');
let inp2    = document.getElementById('inp2');
let elem    = document.getElementById('elem');
let link    = document.getElementById('link');

link.addEventListener('click', function(event){
    event.preventDefault();
    let sum = Number(inp1.value) + Number(inp2.value);
    elem.innerHTML = sum;
});