// // Задача №1. Поиск и замена
// // Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));


// // Задача №2. Методы substr, substring, slice
// // Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

// let str = 'aaa bbb ccc';

// console.log(str.substr(4, 3));
// console.log(str.substring(4, 7));
// console.log(str.slice(4, 7));


// // Задача №3. Преобразование формата даты
// // Задача. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

// let date = '2025-12-31';

// // let correctDate = date.split('-').reverse().join().replace(/,/g, '/');  // Первый метод решения задачи
// let correctDate = date.split('-');                                         // Второй метод решения задачи
// console.log(correctDate[2] + '/' + correctDate[1] + '/' + correctDate[0]);


// // Работа с регистром символов
// // 1. Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js';
// console.log(str.toUpperCase());


// // 2. Дана строка 'JS'. Сделайте из нее строку 'js'.

// let str = 'JS';
// console.log(str.toLowerCase());


// // Работа с length, substr, substring, slice. Работа с indexOf
// // 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// let str = 'я учу javascript!';
// console.log(str.length);


// // 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// let str = 'я учу javascript!';

// console.log(str.substr(2, 3));      // Первый метод
// console.log(str.substr(6, 10));

// console.log(str.substring(2, 5));   // Второй метод
// console.log(str.substring(6, 16));

// console.log(str.slice(2, 5));       // Третий метол
// console.log(str.slice(6, 16));


// // 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));


// // 6. Дана переменная str, в которой хранится какой-либо текст. 
// // Реализуйте обрезание длинного текста по следующему принципу: 
// // если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. 
// // В противном случае в переменную result запишем содержимое переменной str.

// let str = 'Здесь есть какой-то текст!';
// let n = 30;
// let result = '';

// if(str.length >= n){
//     result = str.substr(0, n);
//     console.log(result + '...');
// }else{
//     result = str;
//     console.log(result);
// }


// // Работа с replace
// // 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

// let str = 'Я-учу-javascript!';
// console.log(str.replace(/-/g, '!'));


// // Работа с split
// // 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// let str = 'я учу javascript!';
// console.log(str.split(' '));


// // 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = 'я учу javascript!';
// console.log(str.split(''));


// // 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// let date = '2025-12-31';

// let correctDate = date.split('-').reverse().join().replace(/,/g, '.');
// console.log(correctDate);


// // Работа с join
// // 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

// let arr = ['я', 'учу', 'javascript', '!'];
// console.log(arr.join('+'));


// // 12. Преобразуйте первую букву строки в верхний регистр.

// let str = 'здесь есть какой-то текст';

// let upStr = str.substr(1);                               // Первый метод решения
// let correctStr = str[0].toUpperCase() + upStr;
// console.log(correctStr);

// // let strS = str[0];
// // let correctStr = strS.toUpperCase() + str.substr(1);        // Второй метод решения
// // console.log(correctStr);


// // 13. Преобразуйте первую букву каждого слова строки в верхний регистр.

// let str     = 'здесь есть какой-то текст';
// let arr     = str.split(' ');
// correctStr  = '';

// for(let key in arr){
//     correctStr += arr[key].substr(0, 1).toUpperCase() + arr[key].substr(1) + ' ';
// }
// console.log(correctStr);


// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

let str = 'var_test_text';
let arr = str.split('_');
let result = arr[0];

for(let i = 1; i < arr.length; i++){
    result += arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
}
console.log(result);