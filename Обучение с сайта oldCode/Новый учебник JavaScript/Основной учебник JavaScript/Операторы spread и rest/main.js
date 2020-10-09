// // Оператор spread в JavaScript
// // Задача №1
// // Дан массив:
// // let arr = [1, 2, 3, 4, 5];
// // Дана также функция:
// // function func(num1, num2, num3, num4, num5) {
// // 	return num1 + num2 + num3 + num4 + num5;
// // }
// // Найдите с помощью приведенной функции сумму элементов массива.

// let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// };
// console.log(func(...arr));




// // Задача №2
// // Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = Math.min(...arr);
// console.log(min);














// // Оператор spread для строк и чисел в JavaScript
// // Задача №1
// // Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

// function getArithmeticMean(...nums){
//     let sum = 0;

//     for(let num of nums){
//         sum += num;
//     }
//     return sum / nums.length;
// };
// console.log(getArithmeticMean(1, 2, 3, 4, 5));




// // Задача №2
// // Для сравнения реализуйте нашу функцию без использования оператора rest.

// // Без использования оператора rest
// // function unite(arr1, arr2, arr3){
// //     let result  = [];

// //     result.push(arr1, arr2, arr3);
// //     return result;
// // };
// // console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// // Вывод: без использования оператора rest наша функция становится не универсальной, т.к. мы должны строго передавать не более 3 параметров, а если у нас будет 4 массива, то функция уже не сработает!


// // С использованием опрератора rest
// function unite(...arrs){
//     return arrs;
// };
// let result  = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);
// // Вывод: с использованием rest наша функция стала полностью уинверсальной, так как теперь мы можем передавать сколько угодно парметров в функцию и все они будут возвращать двухмерный массив.
// // Почему так? Потому что оператор ... возвращает нам массив итак, а если в него записывать еще массивы, то это автоматически будет создавать в нем подмассивы и получится двухмерный массив.














// // Пересечение произвольного количества массивов на JavaScript
// // Давайте напишем функцию getInt, которая будет находить пересечение любого количества массивов.
// // Пример работы такой функции:
// // let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
// // console.log(result); // выведет [2, 3]

// function getInt(...arrs){
//     let result  = [];
//     let arr0    = arrs.shift();

//     for(let elem of arr0){
//         if(isArrays(elem, arrs)){
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function isArrays(elem, arrs){
//     for(let arr of arrs){
//         if(isArray(elem, arr)){
//             return true;
//         }
//     }
//     return false;
// };

// function isArray(elem, arr){
//     return arr.indexOf(elem) != -1;
// };
// console.log(getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]));














// Разность произвольного количества массивов на JavaScript
// В данном уроке мы с вами напишем функцию getDiff, которая будет находить разность произвольного количества массивов.

function getDiff(...arrs){
    let elems   = getElems(...arrs);
    let result  = [];

    for(elem of elems){
        for(let arr of arrs){
            if(!isArray(elem, arr)){
                result.push(elem);
            }
        }
    }
    return check(result);
};

function check(arr){
    let result  = [];
    let curr    = arr.length;

    for(let i = 1; i <= curr; i++){
        let check   = arr.shift();
        if(arr.indexOf(check) == -1){
            result.push(check);
        }
    }
    return result;
};

function getElems(...arrs){
    let result  = [];

    for(let arr of arrs){
        for(let elem of arr){
            result.push(elem);
        }
    }
    return result;
};

function isArray(elem, arr){
    return arr.indexOf(elem) != -1;
};
console.log(getDiff([1, 2, 3, 6], [2, 3, 4, 6], [4, 3, 2, 5]));