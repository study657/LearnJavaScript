// // Работа с рекурсией в JavaScript
// // Задача №1
// // Сделайте функцию, которая с помощью рекурсии выведет первые 10 чисел Фибоначчи. Числа Фибоначчи строятся следующим образом: каждое новое число равно сумме двух предыдущих. 
// // Первые два числа Фибоначчи - это 1 и 2. Следующее число будет равно 1 + 2 = 3, следующее число будет равно 2 + 3 = 5 и так далее.
// // Вот основа кода, который вы должны написать:
// // function func(prevPrevNum, prevNum){
// // 	// тут код с рекурсией, который вы должны написать
// // }
// // func(1, 2); // вызываем функцию с первыми двумя числами

// let i   = 1;

// function func(prevPrevNum, prevNum){
//     let sum = prevPrevNum + prevNum;
//     console.log(sum);
//     i++;

//     if(i  <= 10){
//         func(prevNum, sum);
//     };
// };
// func(1, 2);




// // Задача №2
// // Модифицируйте предыдущую задачу так, чтобы функция не выводила числа, а возвращала массив первых 10 чисел Фибоначчи:
// // console.log(func(1, 2)); // выведет массив чисел

// let i = 1;
// let arr = [1, 2];

// function func(prevPrevNum, prevNum){
//     let sum = prevPrevNum + prevNum;
//     arr.push(sum);
//     i++;

//     if(i <= 10){
//         func(prevNum, sum);
//     }
//     return arr;
// };
// console.log(func(1, 2));




// // Задача №3
// // Пусть нас есть какое-то число, например, 12345. Давайте будем последовательно складывать цифры этого числа до тех пор, пока сумма не станет однозначным числом.

// function getArrFromNumber(num){
//     return String(num).split('');
// };

// function getSum(arr){
//     let sum = 0;

//     for(let elem of arr){
//         sum += Number(elem);
//     }
//     return sum;
// };

// function getDelizers(num){
//     return getSum(getArrFromNumber(num));
// };

// function reduce(num){
//     let sum = getDelizers(num);

//     if(sum <= 9){
//         return sum;
//     }else{
//         return reduce(sum);
//     }
// };

// function checkDelits(delitel, num){
//     let sum = reduce(num);

//     if(sum % delitel == 0){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(reduce(2345674));
// console.log(checkDelits(4, 2345674));














// // Рекурсия и многомерные структуры в JavaScript
// // Задача №1
// // Дан многомерный объект произвольного уровня вложенности, например, такой:
// // {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// // С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

// let obj     = {
//     a: 1, 
//     b: {
//         c: 2, d: 3, e: 4
//     }, 
//     f: {
//         g: 5, j: 6
//     }, 
//     k: {
//         l: 7, m: 
//         {
//             n: 8,
//             o: 9
//         }
//     }
// };

// function showElemsOfObj(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) == 'object'){
//             showElemsOfObj(obj[key]);
//         }else{
//             console.log(obj[key]);
//         }
//     }
// };
// showElemsOfObj(obj);




// // Сумма элементов массива
// // Задача №2
// // Дан многомерный объект произвольного уровня вложенности, например, такой:
// // {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// // С помощью рекурсии найдите сумму элементов этого объекта.

// let obj     = {
//     a: 1, 
//     b: {
//         c: 2, d: 3, e: 4
//     }, 
//     f: {
//         g: 5, j: 6
//     }, 
//     k: {
//         l: 7, m: 
//         {
//             n: 8,
//             o: 9
//         }
//     }
// };

// function getSum(obj){
//     let sum = 0;

//     for(let key in obj){
//         if(typeof(obj[key]) == 'object'){
//             sum += getSum(obj[key]);
//         }else{
//             sum += obj[key];
//         }
//     }
//     return sum;
// };
// console.log(getSum(obj));




// // Задача №3
// // Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// // ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// // С помощью рекурсии слейте элементы этого массива в одну строку:
// // 'abcdefgjk'

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// function func(arr){
//     let sum = '';
//     for(let elem of arr){
//         if(typeof(elem) == 'object'){
//             sum += func(elem);
//         }else{
//             sum += elem;
//         }
//     }
//     return sum;
// };
// console.log(func(arr));




// // Задача №4
// // Дан многомерный массив произвольного уровня вложенности, например, такой:
// // [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// // Возведите все элементы-числа этого массива в квадрат.

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

// function square(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) == 'object'){
//             arr[i] = square(arr[i]);
//         }else{
//             arr[i] = Math.pow(arr[i], 2);
//         }
//     }
//     return arr;
// };
// console.log(square(arr));




// // Задача №5
// // Дан многомерный массив произвольного уровня вложенности, например, такой:
// // [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// // Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// // [1, 2, 7, 8, 3, 4, 5, 6, 7]

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let result  = [];

// function simplifyArr(arr){
//     for(let elem of arr){
//         if(typeof(elem) == 'object'){
//             simplifyArr(elem);
//         }else{
//             result.push(elem);
//         }
//     }
//     return result;
// };
// console.log(simplifyArr(arr));




// // Задача №6
// // Дан многомерный массив произвольного уровня вложенности, например, такой:
// // [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// // Выведите на экран все элементы-массивы, содержащие внутри себя только примитивы.

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

// function func(arr){
//     for(let elem of arr){
//         if(typeof(elem) !== 'number' && typeof(elem) == 'object'){
//             console.log(elem);
//         }
//     }
// };
// func(arr);




// // Задача №7
// // Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// // Например:
// // sumTo(1) = 1
// // sumTo(2) = 2 + 1 = 3
// // sumTo(3) = 3 + 2 + 1 = 6
// // sumTo(4) = 4 + 3 + 2 + 1 = 10
// // ...
// // sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// // Сделайте три варианта решения:
// // С использованием цикла.
// // Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

// // function sumTo(n){
// //     let sum = 0;
// //     for(let i = n; i >= 0; i--){
// //         sum += i;
// //     }
// //     return sum;
// // };
// // console.log(sumTo(100));


// let sum = 0;
// function sumTo(n){
//     let i = n;
//     sum += i;
//     i--;

//     if(i >= 1){
//         sumTo(i);
//     }
//     return sum;
// };
// console.log(sumTo(100));




// Задача №8
// Вычислить факториал
// важность: 4
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120

// function factorial(num){
//     let factorial = 1;
//     for(let i = 1; i <= num; i++){
//         factorial *= i;
//     }
//     return factorial;
// };
// console.log(factorial(5));



let sum = 1;
let i = 2;
function factorial(num){
    sum *= i;
    i++;

    if(i != num + 1){
        factorial(num);
    }
    return sum;
};
console.log(factorial(7));