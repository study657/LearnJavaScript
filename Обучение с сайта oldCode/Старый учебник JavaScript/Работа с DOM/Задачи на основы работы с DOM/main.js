// 1. 

// function func(){
//     alert('Привет!');
// };




// 2. 

// function func(){
//     alert('Привет!');
// };




// 3. 

// function func(){
//     alert('Привет!');
// };




// 4. 

// function func(){
//     alert('Привет!');
// };




// 5. 

// function func(){
//     input = document.getElementById('test');
//     alert(input.value);
// };




// 6. 

// function func(){
//     let input = document.getElementById('test');
//     input.value = 'Ой, я поменял свой текст!';
// };




// 7. 

// function go(){
//     let input = document.getElementById('text');
//     input.src = 'images/2.jpg';
// };


// Работа с this
// 8. 

// function go(elem){
//     elem.value = 'Ой, я поменял текст!';
// };




// 9. 

// function go(elem){
//     elem.value = 'Ой, я поменял текст!';
// };

// function stop(elem){
//     elem.value = 'Ой, а теперь еще раз поменял!';
// };




// 10. 

// function go(elem){
//     elem.value = 'Ку-ку';
// }




// 11. 

// function go(elem){
//     elem.value = 'О, теперь на меня больше не нажать!';
//     elem.setAttribute('disabled', '');
// };




// 12. 

// function go(elem){
//     elem.src = 'images/2.jpg';
// };

// function stop(elem){
//     elem.src = 'images/1.jpg';
// };











// Работа с CSS

// 13. 

// function go(){
//     let input = document.getElementById('test');
//     input.style.color = 'red';
//     input.style.width = '300px';
// };




// 14. 

// function hide(){
//     let input = document.getElementById('test');
//     input.style.display = 'none';
// };

// function show(){
//     let input = document.getElementById('test');
//     input.style.display = 'inline-block';
// };




// 15. 

// function go(){
//     let input = document.getElementById('test');
//     input.value = 'Ой, я поменял свой текст и css!';
//     input.style.color = 'red';
//     input.style.width = '300px';
//     input.style.height = '50px';
//     input.style.borderRadius = '10px';
// };




// 16. 

// let sow   = document.getElementById('sow');
// let block = document.getElementById('block');
// function show(){
//     block.value = 'О, теперь на меня больше не нажать!';
//     block.setAttribute('disabled', '');
//     sow.style.display = 'block';
// };

// function hide(){
//     sow.style.display = 'none';
//     block.value = 'О, на меня снова можно нажимать!';
//     block.removeAttribute('disabled');
// };




// 17. 

// let sum = 1;
// function getQuantity(){
//     let input = document.getElementById('text');
//     input.value = sum++;
// };




// 18. 

// function go(){
//     let input = document.getElementById('test');

//     input.value = 'Теперь я плаваю справа!';
//     input.style.cssFloat = 'right';
// };




// 19. 

// function go(){
//     let input = document.getElementById('test');
//     input.value = 'Мои css классы: ' + input.className;
// };















// Закрепление пройденного

// 21.

// let text1 = document.getElementById('text1');
// let text2 = document.getElementById('text2');

// function go(){
//     if(text1.value == 'Привет!' && text2.value == 'Пока!'){
//         text1.value = 'Пока!';
//         text2.value = 'Привет!';
//     }else{
//         text1.value = 'Привет!';
//         text2.value = 'Пока!';
//     }
// };




// 22. 

// let text = document.getElementById('text');
// let result = document.getElementById('result');
// console.log(text.value);
// let res = 0;
// function go(){
//     res = Math.pow(text.value, 2);
//     result.value = res;
// };




// 23. 

// let text = document.getElementById('text');
// let result = document.getElementById('result');
// sum = 0;
// console.log(isNaN(sum)); // Метод isNaN проверяет какой тип данных. Если число, то будет false, если строчный тип данных, то true.

// function go(){
//     if(isNaN(text.value) == false){
//         sum = Math.pow(text.value, 2);
//         result.value = sum;
//     }else{
//         alert('Введено не число!');
//     }
// };




// 24.

// function go(){
//     let text = document.getElementById('text');

//     text.setAttribute('disabled', '');
//     text.style.cursor = 'not-allowed';
// };




25.

let input = document.getElementById('input');

function add(text){
    input.value = input.value + text;
};