// // Исходный код функции и ее результат в JavaScript
// // Задача №1
// // Запустите приведенный выше код у себя и убедитесь в том, что алерт выводит исходный код функции.

// function func(){
// 	return '!';
// };
// alert(func);














// // Функция как переменная в JavaScript
// // Задача №1
// // Сделайте функцию func, которая будет возвращать через return какую-либо строку.

// function func(){
//     return 'string';
// };




// // // Задача №2
// // // Выведите результат работы функции func алертом на экран.
// // alert(func());




// // // Задача №3
// // // Выведите исходный код функции func алертом на экран.
// // alert(func);




// // // Задача №4
// // // Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func на экран.

// // func    = 123;
// // alert(func);




// // Задача №5
// // Сделайте функцию func1, которая будет возвращать через return число 3.

// function func1(){
//     return 3;
// };




// // Задача №6
// // Скопируйте исходный код функции func1, в переменную func2.

// let func2   = func1;




// // Задача №7
// // Выведите на экран сумму результатов работы функций func1 и func2.
// alert(func1() + func2());




// // Задача №8
// // Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

// let func1   = function(){
//     return 1;
// };




// // Задача №9
// // Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

// let func2   = function(){
//     return 2;
// };




// // Задача №10
// // Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом на экран.
// alert(func1() + func2());














// // Function expression и Function declaration в JavaScript
// // Задача №1
// // Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

// console.log(declar());
// function declar(){
//     return 3;
// };




// // Задача №2
// // Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

// console.log(func());
// let func    = function(){
//     return 3;
// };














// // Массив с анонимными функциями в JavaScript
// // Задача №1
// // Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

// let arr = [
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// ];




// // Задача №2
// // Используя созданный вами массив arr выведите на экран число 3, вызвав соответствующую функцию.

// let arr = [
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// ];
// alert(arr[2]());




// // Задача №3
// // Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

// let arr = [
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// ];
// console.log(arr[0]() + arr[1]() + arr[2]());




// // Задача №4
// // Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.

// let arr = [
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// ];

// for(let func of arr){
//     console.log(func());
// }














// // Объект с анонимными функциями в JavaScript
// // Задача №1
// // Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите на экран сумму возвращаемых чисел.

// let obj     = {
//     'func1': function(){return 1},
//     'func2': function(){return 2},
//     'func3': function(){return 3}
// };
// console.log(obj['func1']() + obj['func2']() + obj['func3']());




// // Задача №2
// // Переберите созданный объект циклом и выведите результаты работы функций на экран.

// let obj     = {
//     'func1': function(){return 1},
//     'func2': function(){return 2},
//     'func3': function(){return 3}
// };

// for(let key in obj){
//     console.log(obj[key]());
// }




// // Задача №3
// // Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. 
// // Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

// let obj = {
//     'func1': function(arr){
//         let result = 0;

//         for(let elem of arr){
//             result += elem;
//         }
//         return result;
//     },
//     'func2': function(arr){
//         let result  = 0;

//         for(let elem of arr){
//             result += Math.pow(elem, 2);
//         }
//         return result;
//     },
//     'func3': function(arr){
//         let result  = 0;

//         for(let elem of arr){
//             result += Math.pow(elem, 3);
//         }
//         return result;
//     }
// };
// let mass = [1, 2, 3, 4, 5];

// for(let key in obj){
//     console.log(obj[key](mass));
// }
// console.log(obj['func1'](mass));














// // Передача функций параметрами в JavaScript
// // Задача №1
// // Сделайте функцию test, параметрами принимающую 3 функции. 
// // Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.

// test(
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// );

// function test(func1, func2, func3){
//     alert(func1() + func2() + func3());
// };




// // Задача №2
// // Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. 
// // Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

// function func1(){
//     return 1;
// };

// function func2(){
//     return 2;
// };

// function func3(){
//     return 3;
// };

// function test(func1, func2, func3){
//     alert(func1() + func2() + func3());
// };
// test(func1, func2, func3);




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

// let func1 = function(){
//     return 1;
// };

// let func2 = function(){
//     return 2;
// };

// let func3 = function(){
//     return 3;
// };

// function test(func1, func2, func3){
//     alert(func1() + func2() + func3());
// };
// test(func1, func2, func3);




// // Задача №4
// // Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

// function test(func) {
// 	alert( func(3) );
// };

// test(function(num){
//     return Math.pow(num, 3);
// });




// // Задача №5
// // Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

// function test(func) {
// 	alert( func(3) );
// };

// function func(num){
//     return Math.pow(num, 3);
// };
// test(func);




// // Задача №6
// // Переделайте передаваемую функцию на Function Expression с тем же именем func.

// function test(func) {
// 	alert( func(3) );
// };

// let func = function(num){
//     return Math.pow(num, 3);
// };
// test(func);




// // Задача №7
// // Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
// // При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

// function test(func1, func2){
//     alert(func1() + func2());
// };

// function func1(){
//     return 2;
// };

// function func2(){
//     return 3;
// };
// test(func1, func2);




// // Задача №8
// // Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
// // Пусть функция test возвращает сумму результатов переданных функций:
// // function test(num, func1, func2) {
// // 	return func1(num) + func2(num);
// // }
// // Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.

// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// };

// console.log(test(3, function(num){
//     return Math.pow(num, 2);
// }, function(num){
//     return Math.pow(num, 3);
// }));




// // Задача №9
// // Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
// // Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет применится к каждому элементу массива:

// let arr = [1, 2, 3];

// function test(arr, func){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// };

// let result  = test(arr, function(num){
//     return Math.pow(num, 2);
// });
// console.log(result);




// // Задача №10
// // Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.

// function test(arr, func){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// };

// let result  = test([1, 2, 3], function(num){
//     return Math.pow(num, 3);
// });
// console.log(result);














// // Функция в функции в JavaScript
// // Задача №1
// // Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа.
// // Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

// function func(num1, num2){
//     function square(num){
//         return Math.pow(num, 2);
//     };

//     function cube(num){
//         return Math.pow(num, 3);
//     };

//     return square(num1) + cube(num2);
// };
// console.log(func(2, 3));














// // Функция, возвращающая функцию в JavaScript
// // Задача №1
// // Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

// function func1(){
//     return function(){
//         return 1;
//     };
// };
// let result1     = func1()();

// function func2(){
//     return function(){
//         return 2;
//     };
// };
// let result2     = func2()();
// console.log(result1 + result2);




// // Задача №2
// // Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

// function func(){
//     return function(){
//         return function(){
//             return function(){
//                 return function(){
//                     return function(){
//                         return '!';
//                     }
//                 };
//             }
//         };
//     };
// };
// console.log(func()()()()()());




// // Задача №3
// // Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// function func(num1){
//     return function(num2){
//         return function(num3){
//             return num1 + num2 + num3;
//         };
//     };
// };
// console.log(func(2)(3)(4));




// // Задача №4
// // Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// function func(num1){
//     return function(num2){
//         return function(num3){
//             return function(num4){
//                 return function(){
//                     return arr = [num1, num2, num3, num4];
//                 }
//             }
//         }
//     }
// };
// console.log(func(2)(3)(4)(5)());














// // Замыкания в JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function test(){
//     let num = 1;

//     return function(){
//         alert(num);
//         num++;
//     };
// };
// let func1   = test();
// func1();
// func1();
// func1();
// func1();




// // Задача №2
// // Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

// function test(){
//     let num = 10;

//     return function(){
//         alert(num);
//         num--;
//     };
// };
// let func    = test();
// func();
// func();
// func();
// func();
// func();




// // Задача №3
// // Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// function test(){
//     let num     = 10;

//     return function(){
//         if(num >= 0){
//             alert(num);
//             num--;
//         }else{
//             alert('Отсчет окончен!');
//         }
//     }
// };
// let func    = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();














// // Вызов функции на месте в JavaScript
// // Задача №1
// // Допишите следующий код так, чтобы его запуск алертом выводил '!':
// // (function() {
// // 	// какой-то код
// // })()()();

// (function() {
// 	return function(){
//         return function(){
//             return alert('!');
//         };
//     };
// })()()();




// // Задача №2
// // Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
// // (function() {
// // 	// какой-то код
// // })(1)(2);

// (function(num1) {
//     return function(num2){
//         return alert(num1 + num2);
//     };
// })(1)(2);




// // Задача №3
// // Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
// // (function() {
// // 	// какой-то код
// // })(1)(2)(3);

// (function(num1) {
// 	return function(num2){
//         return function(num3){
//             return alert(num1 + num2 + num3);
//         };
//     };
// })(1)(2)(3);














// // Понятие функции-коллбэка в JavaScript
// // Задача №1
// // Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

// let arr = ['str', 'number', 'bool'];

// function each(arr, callback){
//     let result  = [];

//     for(let elem of arr){
//         result.push(callback(elem));
//     }

//     return result;
// };

// function changeStr(str){
//     let newStr  = str.split('').reverse().join('');
//     return newStr;
// };
// console.log(each(arr, changeStr));




// // Задача №2
// // Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

// let arr = ['str', 'number', 'bool'];

// function each(arr, callback){
//     let result = [];

//     for(let elem of arr){
//         result.push(callback(elem));
//     }
//     return result;
// };

// function bigSymbolElem(str){
//     let newStr = str[0].toUpperCase() + str.substr(1);
//     return newStr;
// };
// console.log(each(arr, bigSymbolElem));




// // Задача №3
// // Дан массив с числами. С помощью созданной нами функции each найдите произведение каждого элемента массива на его порядковый номер.

// let arr = [1, 2, 3, 4, 5];

// function each(arr, callback){
//     let result  = [];

//     for(let i = 0; i < arr.length; i++){
//         result.push(callback(arr[i], i));
//     }
//     return result;
// };

// function calc(num, curr){
//     return num * curr;
// };
// console.log(each(arr, calc));




// // Задача №4
// // Реализуйте функцию filter, которая будет осуществлять фильтрацию массива. 
// // Пусть первым параметром функция принимает массив, а вторым - функцию-коллбэк, и возвращает массив элементов, для которых функция-коллбэк вернет true.
// // Пример работы такой функции (оставим в массиве только четные числа):
// // let result = filter([1, 2, 3, 4, 5], function(elem) {
// // 	if (elem % 2 == 0) {
// // 		return true;
// // 	} else {
// // 		return false;
// // 	}
// // });
// // console.log(result); // выведет [2, 4]
// // Пусть в первый параметр коллбэка попадает элемент массива, а во второй - его номер.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function filter(arr, callback){
//     let result = [];

//     for(let elem of arr){
//         if(callback(elem)){
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function ChetnNumber(num){
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(filter(arr, ChetnNumber));




// // Задача №5
// // Дан массив с числами. С помощью созданной нами функции filter оставьте в этом массиве только положительные числа.

// let arr = [-2, 3, -10, 4, 3, 5, -20];

// function filter(arr, callback){
//     let result  = [];

//     for(let elem of arr){
//         if(callback(elem)){
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function chack(num){
//     if(num >= 0){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(filter(arr, chack));




// // Задача №6
// // Дан массив со строками. С помощью созданной нами функции filter оставьте в этом массиве только строки, длина которых от 1 до 3 символов.

// let arr = ['ar', 'dsfsdf', 'tydshas', 'r', 'rtr', 'rt'];

// function filter(arr, callback){
//     let result  = [];

//     for(let elem of arr){
//         if(callback(elem)){
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function chack(str){
//     if(str.length >= 1 && str.length <= 3){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(filter(arr, chack));




// // Задача №7
// // Реализуйте функцию every, которая будет возвращать true, если для всех элементов массива функция-коллбэк вернула true, и будет возвращать false в противном случае.
// // Пример работы такой функции (проверим, что в массиве только положительные числа):
// // let result = every([1, 2, 3, 4, 5], function(elem) {
// // 	if (elem > 0) {
// // 		return true;
// // 	} else {
// // 		return false;
// // 	}
// // });
// // console.log(result); // выведет true

// let arr = [1, 2, 3, 4, 5];

// function every(arr, callback){

//     for(let elem of arr){
//         if(callback(elem)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// };

// function chack(num){
//     if(num >= 0){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(every(arr, chack));




// // Задача №8
// // Реализуйте функцию some, которая будет возвращать true, если для хотя бы для одного элемента массива функция-коллбэк вернула true, и будет возвращать false в противном случае.
// // Пример работы такой функции (проверим, что в массиве есть хотя бы одно отрицательное число):
// // let result = every([1, 2, 3, 4, 5], function(elem) {
// // 	if (elem < 0) {
// // 		return true;
// // 	} else {
// // 		return false;
// // 	}
// // });
// // console.log(result); // выведет false

// let arr = [1, 2, 3, 4, 5];

// function some(arr, callback){
//     for(let elem of arr){
//         if(callback(elem)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// };

// function chack(num){
//     if(num < 0){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(some(arr, chack));




// Задача №9
// Реализуйте функцию alternate, которая первым параметром будет принимать массив, а вторым и третьим - коллбэки.
// Функция должна по очереди применять коллбэки к элементам массива. 
// То есть: для первого элемента - первый коллбэк, для второго элемента - второй коллбэк, для третьего - опять первый коллбэк и так далее пока элементы массива не закончатся.
// Пример работы такой функции ():
// let result = alternate(
// 	['a', 'b', 'c', 'd', 'e'],
// 	function(elem) {
// 		return elem + '!';
// 	},
// 	function(elem) {
// 		return elem + '?';
// 	},
// );
// console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

let arr = ['a', 'b', 'c', 'd', 'e'];

function alternate(arr, callback1, callback2){
    let result  = [];
    for(let i = 0, curr = 1; i < arr.length; i++, curr++){
        if(curr % 2 !== 0){
            result.push(callback1(arr[i]));
        }else{
            result.push(callback2(arr[i]));
        }
    }
    return result;
};

function chack1(str){
    return str + '!';
};

function chack2(str){
    return str + '?';
};
console.log(alternate(arr, chack1, chack2));