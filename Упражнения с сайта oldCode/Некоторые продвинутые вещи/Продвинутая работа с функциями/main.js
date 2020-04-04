// // // На работу с функциями
// // // 1. Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !

// // // ПЕРВЫЙ СПОСОБ РЕШЕНИЯ
// // let a = -1;

// // if(a > 0){
// //     var ggg = function(){
// //         alert('!');
// //     };
// // }else{
// //     var ggg = function(){
// //         alert('!!');
// //     };
// // }
// // ggg();


// // ВТОРОЙ СПОСОБ РЕШЕНИЯ
// let a = 3;

// if(a > 0){
//     function ggg(){
//         alert('!');
//     };
// }else{
//     function ggg(){
//         alert('!!');
//     };
// }
// ggg();




// // 2. Функция ggg принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ)
// var func = function(num){
//     return Math.pow(num, 2);
// };

// function ggg(num, stepen){
//     return Math.pow(func(num), stepen);
// };
// console.log(ggg(3, 4));


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (ВАРИАНТ ПРЕПОДАВАТЕЛЯ)
// var ggg = function(n, f){
//     return f(n);
// }

// funcNew = function(a){
//     return Math.pow(a, 2)
// };
// num = 3;
// alert(ggg( (ggg(num, funcNew)), funcNew));




// // 3. Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4

// function ggg(func1, func2){
//     return func1() + func2();
// };

// var get1 = function(){
//     return 3;
// };

// var get2 = function(){
//     return 4;
// };
// console.log(ggg(get1, get2));




// // 4. Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб. 
// // Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа

// function ggg(num, func1, func2){
//     return func1(num) + func2(num);
// };

// function kvadrat(num){
//     return Math.pow(num, 2);
// };

// function kub(num){
//     return Math.pow(num, 3);
// };
// console.log(ggg(2, kvadrat, kub));




// // 5. Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива возводя его в квадрат. 
// // Функция each должна вернуть измененный массив

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function each(arr, func){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr[i] = func(arr[i]);
//     }
//     return newArr;
// };

// let powNumberArr = function(arr){
//     return Math.pow(arr, 2);
// };
// console.log(each(arr, powNumberArr));




// // 6. Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди применятся к каждому элементу массива: 
// // к первому элементу массива - первая функция, ко второму - вторая и так далее пока функции в массиве не закончатся, 
// // после этого возьмется первая функция, вторая и так далее по кругу

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function each(arr, massFunc){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr[i] = massFunc[i % massFunc.length](arr[i]);
//     }
//     return newArr;
// };

// let func1 = function(a){
//     return a + 1;
// };

// let func2 = function(a){
//     return a + 2;
// };

// let func3 = function(a){
//     return a + 3;
// };

// let func4 = function(a){
//     return a + 4;
// };

// let func5 = function(a){
//     return a + 5;
// };

// let massFunc = [func1, func2, func3, func4, func5];
// console.log(each(arr, massFunc));









// // На замыкания
// // 7. Сделайте функцию, которая считает и выводит количество своих вызовов

// function createCounter(){
//     let num = 0;
//     return function(){
//         num++;
//         return num;
//     }
// };

// let counter1 = createCounter();
// let counter2 = createCounter();

// console.log(counter1());
// console.log(counter2());
// console.log(counter1());
// console.log(counter2());
// console.log(counter1());
// console.log(counter2());




// // 8. Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки. 
// // Количество нажатий для каждой кнопки должно хранится в замыкании

// let button      = document.getElementsByTagName('button');

// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', (function(){
//         let num = 0;
//         return function(){
//             num++;
//             this.innerHTML = num;
//         };
//     })());
// }




// // 9. Дан массив цветов. Даны абзацы. По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее. 
// // Все абзацы работают независимо

// let arrColors   = ['red', 'green', 'yellow'];
// let p           = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
//     p[i].addEventListener('click', (function(){
//         let num = 0;
//         return function(){
//             this.style.color = arrColors[num];
//             num++;
//             if(num == arrColors.length){
//                 num = 0;
//             }
//         };
//     })());
// }




// // 10. Даны кнопки. Каждая кнопка по нажатию на нее выводит следующее число Фибоначчи. Кнопки работают независимо. Решить через замыкания

// let button = document.getElementsByTagName('button');

// for(let i = 0; i < button.length; i++){
//     button[i].addEventListener('click', (function(){
//         let a = 1;
//         let b = 2;
//         let temp;
//         return function(){
//             this.nextElementSibling.innerHTML = a;
//             temp    = a;
//             a       = b;
//             b       = a + temp;
//         };
//     })());
// }




// // 11. Даны инпуты. Сделайте так, чтобы каждый инпут хранил историю своих изменений. Каждый инпут свою. 
// // Изменением считается событие onchange. История должна хранится в замыкании. 
// // Над каждым инпутом должны быть стрелочки назад и вперед, с помощью которых можно передвигаться по истории

// // КОД НАПИСАН МНОЙ, ПРИМЕРА ПРЕПОДАВАТЕЛЯ НЕТ. МОЙ КОД РАБОТАЕТ, ЕСТЬ НЕДОЧЕТЫ (СВЯЗАНЫЫЕ С НЕКОРРЕКТНОЙ РАБОТОЙ ПРИ НАЖАТИИ КЛАВИШ), НО ВАРИАНТ ВПОЛНЕ РАБОЧИЙ! 
// // ИСТОРИЯ ИЗМЕНЕНИЙ ИНПУТОВ ХРАНИТСЯ В ЗАМЫКАНИИ В ОБОИХ БЛОКАХ
// function historyInputStart(){
//     let con         = document.getElementById('conteiner');
//     let block1      = con.firstElementChild;
//     let block2      = con.lastElementChild;

//     let buttonBl1   = block1.getElementsByTagName('button');
//     let inputBl1    = block1.getElementsByTagName('input')[0];

//     let buttonBl2   = block2.getElementsByTagName('button');
//     let inputBl2    = block2.getElementsByTagName('input')[0];

//     inputBl1.addEventListener('change', (function(){
//         let newArr = [];
//         let k = 2;
    
    
//         for(let i = 0; i < buttonBl1.length; i++){
//             buttonBl1[i].addEventListener('click', function(){
//                 if(this.innerHTML == '←'){
//                     inputBl1.value = newArr[newArr.length - k];
//                     k++;
//                     if(inputBl1.value == 'undefined'){
//                         inputBl1.value = '';
//                     }
//                 }else{
//                     inputBl1.value = newArr[newArr.length - k];
//                     k--;
//                     if(inputBl1.value == 'undefined'){
//                         inputBl1.value = newArr[newArr.length - 1];
//                     }
//                 }
//             });
//         }
    
//         return function(){
//             newArr.push(this.value);
//         };
//     })());
    
//     inputBl2.addEventListener('change', (function(){
//         let newArr = [];
//         let k = 2;
    
    
//         for(let i = 0; i < buttonBl2.length; i++){
//             buttonBl2[i].addEventListener('click', function(){
//                 if(this.innerHTML == '←'){
//                     inputBl2.value = newArr[newArr.length - k];
//                     k++;
//                     if(inputBl2.value == 'undefined'){
//                         inputBl2.value = '';
//                     }
//                 }else{
//                     inputBl2.value = newArr[newArr.length - k];
//                     k--;
//                     if(inputBl2.value == 'undefined'){
//                         inputBl2.value = newArr[newArr.length - 1];
//                     }
//                 }
//             });
//         }
    
//         return function(){
//             newArr.push(this.value);
//         };
//     })());
// }
// historyInputStart();




// 12. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, 
// пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией

let button      = document.getElementsByTagName('button')[0];
let p           = document.getElementsByTagName('p')[0];

button.addEventListener('click', (function(){
    let arr = [];

    return function(){
        let randomNumber = Math.floor(Math.random() * 100 + 1); // Случайные числа от 1 до 100 (с интернета)
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == randomNumber){
                return;
            }
        };

        arr.push(randomNumber);
        p.innerHTML = arr;
    };
})());