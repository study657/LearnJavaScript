// let test = document.getElementById('test');

// function func(){
//     test.innerHTML = '<b>Уже другой текст</b>';
// };




// let test = document.getElementById('test');

// function func(){
//     test.outerHTML = '<b>Уже другой текст и тег</b>';
// };




// let elem = document.getElementsByTagName('p');

// function func(){
//     elem[0].innerHTML = 'Другой текст уже 1';
//     elem[1].innerHTML = 'Другой текст уже 2';
//     elem[2].innerHTML = 'Другой текст уже 3';
// };





// let elem = document.getElementsByTagName('p');

// function func(){
//     for(let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = 'Другой текст';
//     }
// };




// document.forms[0].innerHTML = '!';
// let form = document.forms;
// for(let i = 0; i < form.length; i++){
//     form[i].innerHTML = '!';
// }



// document.forms.form1.innerHTML = '!';
// document.forms['form2'].innerHTML = '?';




// document.forms[0].elements[1].value = '!';


// let elem = document.forms[1].elements;
// for(let i = 0; i < elem.length; i++){
//     elem[i] = '!';
// }




// let test = document.getElementById('test');

// function func(){
//     console.log(test.getAttribute('value'));
// };



// function func() {
// 	var elem = document.getElementById('test');
// 	elem.setAttribute('value', 'www');
// };




// let test = document.getElementById('test');

// function func(){
//     console.log(test.hasAttribute('value'));
// };



// let www = document.getElementsByClassName('www');

// function func(){
//     for(let i = 0; i < www.length; i++){
//         www[i].innerHTML = '!';
//     }
// };















































// // Задача 1. Изменение текста в span

// function go(){
//     let span = document.getElementById('span');
//     span.innerHTML = '!!!';
// };




// // Задача 2. Замена span на тег b без изменения текста

// function buttonClick(){
//     let elem = document.getElementById('elem');

//     elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
// };




// // Задача 3. На getElementsByTagName

// function go(){
//     let elem = document.getElementsByTagName('p');

//     for(let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = i+1;
//     }
// };




// // Задача 4. На getElementsByClassName

// function go(){
//     let elem = document.getElementsByClassName('zzz');

//     for(let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = i+1;
//     }
// };




// // Задача 5. На querySelectorAll

// function go(){
//     let elem = document.querySelectorAll('.zzz');

//     for(let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = i+1;
//     }
// };








































// Свойства innerHTML, outerHTML

// 1.

// function go(){
//     let text = document.getElementById('text');

//     text.innerHTML = 'Ку-ку! А я <b>жирный</b>!'
// };




// 5.

// function go(){
//     let text = document.getElementById('text');
//     text.outerHTML = '<h3>Абзац превратился в h3</h3>';
// };




// 6.

// function go(){
//     let text = document.getElementById('text');
//     text.outerHTML = '<h3>' + text.innerHTML + '</h3>';
// };




// 7.

// function sum(){
//     let input1 = +document.getElementById('input1').value;
//     let input2 = +document.getElementById('input2').value;
//     let result = document.getElementById('result');
//     let res = 0;

//     res = input1 + input2;
//     if(isNaN(res) == false){
//         result.innerHTML = res;
//     }else{
//         alert('Вы ввели не числа!');
//     }
// };




// // Метод getElementsByTagName

// 8.

// function changeText(){
//     let elem = document.getElementsByTagName('p');

//     for(let i = 0; i < elem.length; i++){
//         elem[i].innerHTML = 'Ку-ку!';
//     }
// };




// // Метод getElementsByClassName

// 9.

// let www = document.getElementsByClassName('www');

// for(let i = 0; i < www.length; i++){
//     www[i].innerHTML = i+1;
// }




// // Метод querySelectorAll

// 10.

// let elem = document.querySelectorAll('.www');

// for(let i = 1; i < elem.length; i++){
//     elem[i].innerHTML = i;
// }

// console.log(elem);




// Методы setAttribute, getAttribute, removeAttribute, hasAttribute

// 11.

// function showClass(){
//     let text = document.getElementById('text');
//     alert(text.getAttribute('class'));
// };




// 12.

// let text = document.getElementById('text');

// function showClass(){
//     alert(text.getAttribute('class'));
// };

// function delClass(){
//     alert('Класс удален. Нажмите на первую кнопку, чтобы проверить это!');
//     text.removeAttribute('class');
// };




// 13.

// let text = document.getElementById('text');

// function showClass(){
//     alert(text.getAttribute('class'));
// };

// function changeClass(){
//     alert('Класс изменен. Нажмите на первую кнопку, чтобы проверить это!');
//     text.setAttribute('class', 'new-class');
// };




// 14.

// let text  = document.getElementById('text');
// let text1 = document.getElementById('text1');

// function newText(){
//     text1.innerHTML = text.value;
// };




// 15.

// let links = document.getElementsByTagName('a');
// console.log(links);

// function showSite(){
//     for(let i = 0; i < links.length; i++){
//         links[i].innerHTML = links[i].innerHTML + ' (' + links[i].getAttribute('href') + ')';
//     }
// };




// 16.

// let text = document.getElementById('text');

// function changeText(elem){
//     text.innerHTML = 'Привет, мир!';
//     text.style.color = 'red';

//     elem.value = 'О, на меня нельзя больше нажать!';
//     elem.setAttribute('disabled', '');
// };




// 17.

// let paragr = document.getElementsByTagName('p');

// function changeAbzac(){
//     for(let i = 0; i < paragr.length; i++){
//         paragr[i].innerHTML = i+1;
//     }
// };




18.

let paragr = document.getElementsByTagName('p');

function changeAbzac(){
    for(let i = 0; i < paragr.length; i++){
        paragr[i].innerHTML = (i+1) + '. ' + paragr[i].innerHTML;
    }
};