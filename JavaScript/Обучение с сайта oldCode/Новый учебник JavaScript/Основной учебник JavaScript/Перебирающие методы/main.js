// // Перебирающие методы
// // Метод map для перебора массива в JavaScript
// // Задача №1
// // Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

// let arr     = [16, 25, 4, 36, 64];
// let result  = arr.map(function(elem){
//     return Math.sqrt(elem);
// });
// console.log(result);




// // Задача №2
// // Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr     = ['Привет', 'сегодня', 'хорошая', 'погода'];
// let result  = arr.map(function(elem){
//     return elem + '!';
// });
// console.log(result);




// // Задача №3
// // Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// let arr     = ['привет', 'сегодня', 'хорошая', 'погода'];
// let result  = arr.map(function(elem){
//     return elem.split('').reverse().join('');
// });
// console.log(result);




// // Задача №4
// // Дан следующий массив:
// // let arr = ['123', '456', '789'];
// // Используя метод map преобразуйте этот массив в следующий:
// // let arr = [
// // 	[1, 2, 3],
// // 	[4, 5, 6],
// // 	[7, 8, 9]
// // ];

// let arr     = ['123', '456', '789'];
// arr.map(function(elem, index){
//     let correctStr  = [];
//     for(let i = 1; i <= elem.length; i++){
//         correctStr.push(Number(elem[i - 1]));
//     }
//     arr[index] = correctStr;
// });
// console.log(arr);




// // Задача №5
// // Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

// let arr     = [1, 2, 3, 4, 5];
// let result  = arr.map(function(elem, index){
//     return elem * index;
// });
// console.log(result);














// // Метод forEach для перебора массива в JavaScript
// // Задача №1
// // Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem){
//     sum += Math.pow(elem, 2);
// });
// console.log(sum);














// // Метод filter для фильтрации массива в JavaScript
// // Задача №1
// // Дан массив с числами. Оставьте в нем только положительные числа.

// let numbers = [1, -2, 3, -4, 5, -10, -12, 15];
// let result  = numbers.filter(function(elem){
//     return elem >= 0;
// });
// console.log(result);




// // Задача №2
// // Дан массив с числами. Оставьте в нем только отрицательные числа.

// let numbers = [1, -2, 3, -4, 5, -10, -12, 15];
// let result  = numbers.filter(function(elem){
//     return elem < 0;
// });
// console.log(result);




// // Задача №3
// // Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// let numbers = [1, -2, 3, -4, 5, -10, -12, 15];
// let result  = numbers.filter(function(elem){
//     return elem > 0 && elem < 10;
// });
// console.log(result);




// // Задача №4
// // Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ['Строка короткая', 'Строка2', 'str', 'что-то', 'rom'];
// let result  = arr.filter(function(elem){
//     return elem.length > 5;
// });
// console.log(result);




// // Задача №5
// // Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// let numbers = [1, 20, 30, 44, 45, 87, 100, 123, 345, 789];
// let result  = numbers.filter(function(elem){
//     let res  = 1;
//     let str = String(elem).split('');
//     for(let i = 0; i < str.length; i++){
//         res *= Number(str[i]);
//     }
//     return res < 30;
// });
// console.log(result);




// // Задача №6
// // Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let result  = arr.filter(function(elem){
//     return typeof(elem) != 'object';
// });
// console.log(result);




// // Задача №7
// // Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// let numbers   = [1, -2, 3, -4, 5, -10, -12, 15];
// let filtered  = numbers.filter(function(elem){
//     return elem < 0;
// });
// console.log(filtered.length);














// // Метод every для проверки массива в JavaScript
// // Задача №1
// // Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// let numbers = [1, 2, 3, 4, 5, 6, 9, 10, 15];
// let check   = numbers.every(function(elem){
//     return elem >= 0;
// });
// console.log(check);




// // Задача №2
// // Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// let numbers = [1, 2, 3, 4, 5, 6, 9, 10, 15];
// let check   = numbers.every(function(elem, index){
//     return elem * index < 30;
// });
// console.log(check);














// // Метод some для проверки массива в JavaScript
// // Задача №1
// // Дан массив с числами. Проверьте то, что хотябы один элемент в массиве больше нуля.

// let arr   = [1, 2, 3, 4, 5, 10];
// let check = arr.some(function(elem){
//     return elem >= 0;
// });
// console.log(check);




// Задача №2
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение их значений на их порядковый номер меньше 30.

let arr   = [1, 2, 3, 4, 5, 10];
let check = arr.some(function(elem, index){
    return elem * index < 30;
});
console.log(check);