// // Задачи для решения
// // На forEach
// // 1. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// let arr     = [5, 6, 7, 8, 9];
// let newArr  = [];

// arr.forEach(function(elem){
//     newArr.push(Math.pow(elem, 2));
// });
// console.log(newArr);




// // 2. Дан массив с числами. Найдите сумму этих чисел

// let arr     = [5, 6, 7, 8, 9, 10];
// let sum     = 0;

// arr.forEach(function(elem){
//     sum += elem;
// });
// console.log(sum);




// // На map
// // 3. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел

// let arr     = [5, 6, 7, 8, 9, 10];

// let result  = arr.map(function(elem){
//     return Math.pow(elem, 2);
// });
// console.log(result);




// // На every, some
// // 4. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля

// let arr     = [5, 6, 7, 8, 9, 10, 12, -1, 13, 14, 15];

// let check   = arr.every(function(elem){
//     if(elem > 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(check);




// // 5. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы

// let arr     = [5, 6, 7, 8, 9, 10, 12, 13, -3, 14, 15];

// let check   = arr.some(function(elem){
//     if(elem < 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(check);




// // На filter
// // 6. Дан массив с числами. Оставьте в нем только отрицательные числа

// let arr     = [5, 6, -3, 8, 9, -5, 10, 12, 13, -3, 14, -21];

// let result  = arr.filter(function(elem){
//     if(elem < 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(result);




// // 7. Дан массив с числами. Оставьте в нем только четные числа

// let arr     = [5, 6, -3, 8, 9, -5, 10, 12, 13, -3, 14, -21, -22];

// let result  = arr.filter(function(elem){
//     if(elem % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(result);




// // 8. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов

// let arr     = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

// let result  = arr.filter(function(elem){
//     if(elem.length >= 5){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(result);




// // // 9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ (МОЙ ВАРИАНТ)
// // let arr = [1, 2, [3, 4], 5, [6, 7]];

// // let result = arr.filter(function(elem, index, arr){
// //     return (Array.isArray(elem));
// // });
// // console.log(result);


// // ВТОРОЙ ВАРИАНТ РЕШЕНИЯ (РЕШЕНИЕ ОТ ПРЕПОДАВАТЕЛЯ)
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// function func(elem){return Array.isArray(elem)};
// let newArr = arr.filter(func);
// alert(newArr);




// // 10. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве

// let arr = [5, -3, 6, -5, 0, -7, 8, 9];

// let result = arr.filter(function(elem){
//     if(elem < 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// let negativeNumbers = result.length;
// console.log(negativeNumbers);









// // На reduce, reduceRight
// // 11. Дан массив с числами. Найдите сумму этих чисел

// let arr = [5, -3, 6, -5, 0, -7, 8, 9];

// let result = arr.reduce(function(sum, elem){
//     return sum + elem;
// }, 0);
// console.log(result);




// // 12. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. 
// // Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0

// let arr     = [1, 2, 3, 3.5, 0, 4, 5, 6];
// let resultN = 0;

// let result  = arr.reduce(function(sum, elem){
//     if(elem == 0){
//         resultN = sum;
//     }else{
//         return elem + sum;
//     }
// }, 0);
// console.log(resultN);




// // 13. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. 
// // Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0

// let arr     = [1, 2, 3, 0, 4, 5, 6];
// let resultN = 0;

// let result  = arr.reduceRight(function(sum, elem){
//     if(elem == 0){
//         resultN = sum;
//     }else{
//         return elem + sum;
//     }
// }, 0);
// console.log(resultN);




// // 14. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти

// let arr     = [1, 2, 3, 0, 1, 0, 4, 5, 6];
// let i       = 0;

// let result  = arr.reduce(function(sum, elem){
//     if(sum > 10){
//         console.log(i);
//     }else{
//         i++;
//         return elem + sum;
//     }
// }, 0);




// // 15. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти

// let arr     = [1, 2, 3, 0, 1, 0, 4, 5, 6];
// let i       = 0;

// let result  = arr.reduceRight(function(sum, elem){
//     if(sum > 10){
//         console.log(i);
//     }else{
//         i++;
//         return elem + sum;
//     }
// }, 0);









// // Закрепление
// // 16. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел

// // ПЕРВЫЙ ВАРИАНТ РЕШЕНИЯ
// let arr     = [1, -2, 3, 0, 4, -5, 6, -11];
// let newArr  = [];

// arr.forEach(function(elem){
//     if(elem >= 0){
//         newArr.push(elem);
//     }
// });
// console.log(newArr);

// let result  = newArr.map(function(elem){
//     return Math.pow(elem, 2);
// });
// console.log(result);


// ВТОРОЙ ВАРИАНТ РЕШЕНИЯ
let arr         = [1, -2, 3, 0, 4, -5, 6, -11];

let correctArr  = arr.filter(function(elem){
    if(elem >= 0){
        return true;
    }else{
        return false;
    }
});
console.log(correctArr);

let result      = correctArr.map(function(elem){
    return Math.pow(elem, 2);
});
console.log(result);