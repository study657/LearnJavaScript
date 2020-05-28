// // Математические методы в JavaScript
// // Работа со степенью и корнем
// // Задача №1
// // Возведите 2 в 10 степень.

// console.log(Math.pow(2, 10));




// // Задача №2
// // Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));




// // Задача №3
// // Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;

// for(let elem of arr){
//     sum += Math.pow(elem, 3);
// }
// console.log(Math.sqrt(sum));




// // Работа с функциями округления
// // Задача №4
// // Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let num = Math.sqrt(379);
// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));




// // Задача №5
// // Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let num = Math.sqrt(587);
// let obj = {};
// obj['floor']    = Math.floor(num);
// obj['ceil']     = Math.ceil(num);
// console.log(obj);




// // Нахождение максимального и минимального числа
// // Задача №6
// // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let min = Math.min(4, -2, 5, 19, -130, 0, 10);
// let max = Math.max(4, -2, 5, 19, -130, 0, 10);
// console.log(min);
// console.log(max);




// // Работа с рандомом
// // Задача №7
// // Выведите на экран случайное целое число от 1 до 100.

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// console.log(getRandomInt(1, 100));




// // Задача №8
// // Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).

// let arr = [];
// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// for(let i = 0; i < 10; i++){
//     arr.push(getRandomInt(1, 100));
// }
// console.log(arr);




// // Работа с модулем
// // Задача №9
// // Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// let a = -20;
// let b = 10;
// let result = Math.abs(a) - Math.abs(b);
// console.log(result);














// // Строковые методы JavaScript
// // Работа с регистром символов
// // Задача №1
// // Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js';
// let newStr = str.toUpperCase();
// console.log(newStr);




// // Задача №2
// // Дана строка 'JS'. Сделайте из нее строку 'js'.

// let str = 'JS';
// let newStr = str.toLowerCase();
// console.log(newStr);




// // Работа с substr, substring, slice
// // Задача №3
// // Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// let str = 'я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.substr(6, 10));

// console.log(str.substring(2, 5));
// console.log(str.substring(6, 16));

// console.log(str.slice(2, 5));
// console.log(str.slice(6, -1));




// // Задача №4
// // Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));




// // Работа с indexOf
// // Задача №5
// // Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

// let str = 'abcde';
// console.log(str.indexOf('c'));




// // Задача №6
// // Дана строка. Проверьте, есть ли в этой строке символ 'a'.

// let str = 'abcde';
// console.log(str.indexOf('a'));




// // Задача №7
// // Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

// let str = 'abcde';

// if(str.indexOf('a') == 0){
//     console.log('Строка начинается с символа а');
// }else{
//     console.log('Строка не начинается с символа a');
// }




// // Задача №8
// // Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

// let str         = 'abcde';
// let lastSymbol  = str.length - 1;
// if(str.indexOf('a', lastSymbol) == lastSymbol){
//     console.log('Строка заканчивается на а');
// }else{
//     console.log('Строка не заканчивается на а');
// }




// // Задача №9
// // Дана строка. Проверьте, начинается ли эта строка на http://.

// let str = 'http://';
// if(str.indexOf('http://') == 0){
//     console.log('Строка начинается с http://');
// }else{
//     console.log('Строка не начинается с http://');
// }




// // Задача №10
// // Дана строка. Проверьте, заканчивается ли эта строка на .html.

// let str = 'sdf.html';
// let lastSymbol = str.length - 5;
// if(str.indexOf('.html', lastSymbol) != -1){
//     console.log('строка заканчивается на .html');
// }else{
//     console.log('строка не заканчивается на .html');
// }




// // Работа с startsWith, endsWith
// // Задача №11
// // Дана строка. Проверьте, начинается ли эта строка на http://.

// let str = 'http://asdasd';
// if(str.startsWith('http://')){
//     console.log('Да, начинается');
// }else{
//     console.log('Нет, не начинается');
// }




// // Задача №12
// // Дана строка. Проверьте, заканчивается ли эта строка на .html.

// let str = 'sdfsdf.html';
// if(str.endsWith('.html')){
//     console.log('Да, заканчивается');
// }else{
//     console.log('Нет, не заканчивается');
// }




// // Работа с split
// // Задача №13
// // Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);




// // Задача №14
// // Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = '12345';
// let arr = str.split('');
// console.log(arr);




// // Работа с join
// // Задача №15
// // Дан следующий массив:
// // let arr = [1, 2, 3, 4, 5];
// // С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3, 4, 5];
// let str = arr.join('-');
// console.log(str);














// // Методы для массивов в JavaScript
// // Работа с push, unshift
// // Задача №1
// // Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);




// // Задача №2
// // Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);




// // Работа с shift, pop
// // Задача №3
// // Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq'];
// let firstElem   = arr.shift();
// console.log(firstElem);




// // Задача №4
// // Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];
// let lastElem    = arr.pop();
// console.log(lastElem);




// // Работа с slice
// // Задача №5
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(0, 3);
// console.log(sub);




// // Задача №6
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(3);
// console.log(sub);




// // Работа с splice
// // Задача №7
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);




// // Задача №8
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let arr     = [1, 2, 3, 4, 5];
// let newArr  = arr.splice(1, 3);
// console.log(newArr);




// // Задача №9
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);




// // Задача №10
// // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);




// // Работа с indexOf
// // Задача №11
// // Дан массив с числами. Проверьте, есть ли в этом массиве число 3.

// let arr = [1, 2, 3, 4, 5, 6];
// if(arr.indexOf(3) != -1){
//     console.log('Да, число 3 есть в массиве');
// }else{
//     console.log('Нет, число 3 нету в массиве');
// }














// // Практика на использования изученных методов
// // Регистр символов
// // Задача №1
// // Преобразуйте последнюю букву строки в верхний регистр.

// let str     = 'Casual';
// let newStr  = str.slice(0, str.length - 1) + str.substr(-1).toUpperCase();
// console.log(newStr);




// // Задача №2
// // Преобразуйте первые 2 буквы строки в верхний регистр.

// let str     = 'mirror';
// let newStr  = str[0].toUpperCase() + str[1].toUpperCase() + str.substring(2);
// console.log(newStr);




// // Задача №3
// // Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// // let str = 'London';
// // Преобразуйте первую букву строки в нижний регистр.

// let str     = 'London';
// let newStr  = str.slice(0, 1).toLowerCase() + str.substr(1);
// console.log(newStr);




// // Слова в строке
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, повторите мое решение описанной задачи.

// let str     = 'word1 word2 word3 word4';
// let words   = str.split(' ');
// console.log(words);

// for(let i = 0; i < words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// let result = words.join(' ');
// console.log(result);




// // Задача №5
// // Преобразуйте строку 'var_test_text' в 'VarTestText'.
// // Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).

// let str = 'var_test_text';
// let arr = str.split('_');
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].substr(1);
// }
// let result = arr.join('');
// console.log(result);




// // Задача №6
// // Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.

// let str = 'var_test_text';
// let arr = str.split('_');
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].substr(1);
// }
// let result  = arr.join('');
// result      = result[0].toLowerCase() + result.substr(1);
// console.log(result);




// Задача №7
// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.

let str     = 'moon light';
let newStr  = str.split(' ').reverse().join(' ');
console.log(newStr);