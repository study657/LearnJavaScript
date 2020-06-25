// // Пользовательские атрибуты в JavaScript
// // Задача №1
// // Дан следующий код:
// // <div id="elem" data-text="str">text</div>
// // Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     elem.innerHTML += elem.dataset.text;
// });




// // Задача №2
// // Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
// // <div data-num="1">text</div>
// // <div data-num="2">text</div>
// // <div data-num="3">text</div>
// // <div data-num="4">text</div>
// // <div data-num="5">text</div>
// // Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// let elems   = document.getElementsByTagName('div');

// for(let elem of elems){
//     elem.addEventListener('click', function func(){
//         this.innerHTML += this.dataset.num;
//         this.removeEventListener('click', func);
//     });
// }




// // Задача №3
// // Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. 
// // Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     let curr    = Number(btn.dataset.curr);
//     btn.dataset.curr = curr + 1;
// });
// btn.addEventListener('dblclick', function(){
//     alert(btn.dataset.curr);
// });




// // Задача №4
// // Дан инпут:
// // <input id="elem" data-length="5">
// // В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. 
// // Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.

// let elem    = document.getElementById('elem');

// elem.addEventListener('blur', function(){
//     if(elem.value.length == Number(elem.dataset.length)){
//         console.log('Количество символов совпадает!');
//     }else{
//         console.log('Количество символов НЕ совпадает! Введите корректное кол-во символов!');
//     }
// });




// // Задача №5
// // Дан инпут:
// // <input id="elem" data-min="5" data-max="10">
// // В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.

// let elem    = document.getElementById('elem');

// elem.addEventListener('blur', function(){
//     let length  = elem.value.length;
//     if(length >= Number(elem.dataset.min) && length <= Number(elem.dataset.max)){
//         console.log('Введенные символы попадают в нужный диапазон!');
//     }else{
//         console.log('Введенные символы НЕ попадают в нужный диапазон!');
//     }
// });














// // Пользовательские атрибуты с дефисами в JavaScript
// // Задача №1
// // Дан следующий код:
// // <div id="elem" data-product-price="1000" data-product-amount="5">
// // 	товар яблоки
// // </div>
// // Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.

// let elem    = document.getElementById('elem');

// elem.addEventListener('click', function(){
//     elem.innerHTML += ' стоимость покупки: ' + Number(elem.dataset.productPrice) * Number(elem.dataset.productAmount) + ' рублей';
// });














// Обращение через методы к data атрибутам в JavaScript
// Задача №1
// Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.

let elems   = document.getElementsByTagName('p');

for(let elem of elems){
    elem.setAttribute('data-num', elem.innerHTML);
}