// // Дружественные числа на JavaScript
// // Решим задачу на определение дружественных чисел. 
// // Числа являются дружественными, если сумма собственных делителей (с числом 1, но без самого числа) первого числа равна второму числу и, наоборот, сумма делителей второго числа равна первому.
// // Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются следующие числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. 
// // Сумма этих чисел 284. Собственными делителями числа 284, являются числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.

// function isFriendly(num1, num2){
//     let sum1 = getSum(getOwnDivisors(num1));
//     let sum2 = getSum(getOwnDivisors(num2));

//     return sum1 == num2 && sum2 == num1;
// };
// console.log(isFriendly(220, 284));

// function getOwnDivisors(num){
//     let arr = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function getSum(arr){
//     let sum = 0;
//     for(let elem of arr){
//         sum += elem;
//     }
//     return sum;
// };




// // Задача №1
// // Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива вида [ [220, 284], [1184, 1210], [2620, 2924] ]. 
// // С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 9000.

// function getFreindly(){
//     let arr = [];
//     let min = 1;
//     let max = 300;

//     for(let i = min; i <= max; i++){
//         for(let k = i; k <= max; k++){
//             if(isFriendly(i, k)){
//                 arr.push([i, k]);
//                 break;
//             }
//         }
//     }
//     return arr;
// };
// console.log(getFreindly());

// // Функция, которая разбивает наше число на делители
// function getOwnDivisors(num){
//     let arr = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// // Функция, которая высчитывает сумму из массива делителей
// function getSum(arr){
//     let sum = 0;
//     for(let elem of arr){
//         sum += elem;
//     }
//     return sum;
// };

// // Функция, которая проверяет является ли пара чисел дружественными, если да, то выводит true
// function isFriendly(num1, num2){
//     let sum1 = getSum(getOwnDivisors(num1));
//     let sum2 = getSum(getOwnDivisors(num2));

//     return sum1 == num2 && sum2 == num1;
// };




// // Задача №2
// // Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). 
// // Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

// function getPerfect(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         if(checkPerfect(i)){
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// console.log(getPerfect(1, 1000));

// // Функция, которая разбивает наше число на делители
// function getOwnDivisors(num){
//     let arr = [];
//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// // Функция, которая высчитывает сумму из массива делителей
// function getSum(arr){
//     let sum = 0;
//     for(let elem of arr){
//         sum += elem;
//     }
//     return sum;
// };

// function checkPerfect(num){
//     let check   = getSum(getOwnDivisors(num));

//     return num == check;
// };




// // Задача №3
// // Сделайте функцию getSimpleDivisors, которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.

// function getSimpleDivisors(num){
//     let arr = [];
//     let divizors = getDivisors(num);

//     for(let i = 0; i < divizors.length; i++){
//         if(isSimple(divizors[i])){
//             arr.push(divizors[i]);
//         }
//     }
//     return arr;
// };
// console.log(getSimpleDivisors(9345));

// function getDivisors(num){
//     let arr = [];
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function isSimple(num){
//     let flag = false;
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// };














// // Пересечение массивов на JavaScript
// // Задача №1
// // Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов.
// // Пусть пересечение возвращается в виде массива, состоящего из общих элементов.

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];

// function getInt(arr1, arr2){
//     let result = [];

//     for(let elem of arr1){
//         if(isArray(elem, arr2)){
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function isArray(elem, arr){
//     return arr.indexOf(elem) != -1;
// };
// console.log(getInt(arr1, arr2));














// // Разность массивов на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.
// // Пусть у нас даны два массива:
// // let arr1 = [1, 2, 3];
// // let arr2 = [2, 3, 4, 5];
// // Можно заметить, что числа 1, 4 и 5 не присутствуют одновременно в обоих массивах. Такие элементы называются разностью массивов.
// // Давайте функцию getDiff, которая будет находить разность двух массивов.

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];

// function getDiff(arr1, arr2){
//     let diff1   = getFirstDiff(arr1, arr2);
//     let diff2   = getFirstDiff(arr2, arr1);

//     return [].concat(diff1, diff2);
// };
// console.log(getDiff(arr1, arr2));

// function isArray(elem, arr){
//     return arr.indexOf(elem) != -1;
// };

// function getFirstDiff(arr1, arr2){
//     let result = [];

//     for(let elem of arr1){
//         if(!isArray(elem, arr2)){
//             result.push(elem);
//         }
//     }
//     return result;
// };














// // Наибольший общий делитель на JavaScript
// // Задача №1
// // Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.
// // При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.
// // Обязательно тестируйте каждую вспомогательную функцию перед использованием.

// let num1    = 12;
// let num2    = 18;

// function getGreatestCommonDivisor(num1, num2){
//     let result  = getInt(getDivisors(num1), getDivisors(num2));

//     return result[result.length - 1];
// };
// console.log(getGreatestCommonDivisor(num1, num2));

// function getDivisors(num){
//     let result = [];

//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             result.push(i);
//         }
//     }
//     return result;
// };
// console.log(getDivisors(num1));

// function getInt(arr1, arr2){
//     let result = [];

//     for(let elem of arr1){
//         if(isArray(elem, arr2)){
//             result.push(elem);
//         }
//     }
//     return result;
// };
// console.log(getInt(getDivisors(num1), getDivisors(num2)));

// function isArray(elem, arr){
//     return arr.indexOf(elem) != -1;
// };




// // Задача №2
// // Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми.
// // Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.
// // Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.

// let num1 = 35;
// let num2 = 36;

// function isSimple(num1, num2){
//     let arr     = getInt(getDivisors(num1), getDivisors(num2));

//     if(check(arr)){
//         console.log('Эти два числа взаимно простые');
//     }else{
//         console.log('Эти два числа НЕ взаимно простые');
//     }
// };
// isSimple(num1, num2);

// function getDivisors(num){
//     let result = [];

//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             result.push(i);
//         }
//     }
//     return result;
// };

// function getInt(arr1, arr2){
//     let result = [];

//     for(let elem of arr1){
//         if(isArray(elem, arr2)){
//             result.push(elem);
//         }
//     }
//     return result;
// };
// console.log(getInt(getDivisors(num1), getDivisors(num2)));

// function check(arr){
//     if(arr.length == 1){
//         return true;
//     }else{
//         return false;
//     }
// }

// function isArray(elem, arr){
//     return arr.indexOf(elem) != -1;
// };














// // Случайный элемент из массива на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.
// // Реализуем функцию, возвращающую случайный элемент из массива.

// let arr = [1, 2, 3, 4, 5];

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// console.log(getRandomInt(1, 5));

// function randomElemFromArr(arr){
//     return arr[getRandomInt(0, arr.length - 1)];
// };
// console.log(randomElemFromArr(arr));




// // Задача №2
// // Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function randomElemFromArr(arr){
//     return arr[getRandomInt(0, arr.length - 1)];
// };

// function sumAnyNumbers(value, arr){
//     let sum = 0;

//     for(let i = 1; i <= value; i++){
//         sum += randomElemFromArr(arr);
//     }
//     return sum;
// };
// console.log(sumAnyNumbers(3, arr));














// // Перемешивание массива на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.
// // Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном порядке.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function shuffle(arr){
//     let result  = [];

//     while(arr.length > 0){
//         let random  = getRandomInt(0, arr.length - 1);
//         let elem    = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// };
// console.log(shuffle(arr));




// // Задача №2
// // Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

// let num1    = 4;
// let num2    = 12;

// function range(num1, num2){
//     let result = [];

//     for(let i = num1 + 1; i < num2; i++){
//         result.push(i);
//     }
//     return result;
// };
// console.log(range(num1, num2));




// // Задача №3
// // Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. 
// // При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.

// let num1    = 4;
// let num2    = 12;

// function rangeRand(num1, num2){
//     let arr         = range(num1, num2);
//     let result      = shuffle(arr);

//     return result;
// };
// console.log(rangeRand(num1, num2));

// function range(num1, num2){
//     let result = [];

//     for(let i = num1 + 1; i < num2; i++){
//         result.push(i);
//     }
//     return result;
// };

// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// function shuffle(arr){
//     let result = [];

//     while(arr.length > 0){
//         let random  = getRandomInt(0, arr.length - 1);
//         let elem    = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//     return result;
// };














// // Случайные элементы из массива на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функций getRandomInt и shuffle скопируйте из учебника.
// // Давайте теперь реализуем функцию randoms, возвращающую заданное количество случайных элементов из массива.
// // Пусть первым параметром функция принимает массив, а вторым - количество элементов, которое следует вернуть.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function random(arr, length){
//     return firstShuffle(shuffle(arr), length);
// };
// console.log(random(arr, 5));

// function shuffle(arr){
//     let result = [];

//     while(arr.length > 0){
//         let random  = getRandomInt(0, arr.length - 1);
//         let diff    = arr.splice(random, 1)[0];
//         result.push(diff);
//     }
//     return result;
// };

// function firstShuffle(arr, length){
//     return arr.slice(0, length);
// };

// function getRandomInt(max, min){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };














// // Счастливые билеты на JavaScript
// // Задача №1
// // Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.
// // Давайте попрактикуемся использовать вспомогательные функции при решении какой-нибудь более сложной задачи.
// // Пусть нам нужно вывести на экран все возможные счастливые автобусные билеты. 
// // Билет называется счастливым, если сумма первых трех цифр билета равна сумме вторых трех цифр (будем рассматривать только билеты, в номере которых 6 цифр).

// function getLuckyTickets(){
//     let result  = [];

//     for(let i = 1001; i <= 999999; i++){
//         if(isLucky(i)){
//             result.push(getZeroInEnd(i));
//         }
//     }
//     return result;
// };
// console.log(getLuckyTickets());

// function isLucky(num){
//     let str     = getZeroInEnd(num);

//     let sum1    = Number(str[0]) + Number(str[1]) + Number(str[2]);
//     let sum2    = Number(str[3]) + Number(str[4]) + Number(str[5]);

//     return sum1 == sum2;
// };

// function getZeroInEnd(num){
//     let str     = String(num);

//     if(str.length == 4){
//         str = '00' + str;
//     }
//     if(str.length == 5){
//         str = '0' + str;
//     }

//     return str;
// };














// // Счастливые билеты любой длины на JavaScript
// // Задача №1
// // В предыдущем уроке мы с вами решили задачу на нахождение всех счастливых чисел. Давайте теперь обобщим наш код так, чтобы в билете было не 6 цифр, а любое заданное количество.
// // Сейчас я предлагаю вынести нормализацию за функцию. Пусть isLucky параметром принимает уже нормализованное число (то есть строку, дополненную при необходимости нулями спереди).
// // Давайте считать, что в функцию всегда будет передаваться число с любым четным количеством цифр. 
// // Наша функция должна взять первую половину цифр, найти их сумму, затем взять вторую половину цифр, найти их сумму, а затем проверить равенство сумм.

// function isLucky(num) {
//     let length = num.length;
//     let sum1;
//     let sum2;
	
// 	if(length == 2){
//         sum1 = Number(num[0]);
//         sum2 = Number(num[1]);
//     }
//     if(length == 4){
//         sum1 = Number(num[0]) + Number(num[1]);
//         sum2 = Number(num[2]) + Number(num[3]);
//     }
//     if(length == 6){
//         sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
//         sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
//     }
//     return sum1 == sum2;
// };




// // Задача №2
// // Вот так будет выглядеть наша функция formStr:
// // function formStr(data, length) {
// // 	// какой-то код
// // }
// // Допишите недостающий код функции formStr. Потестируйте ее работу.

// function formStr(data, length) {
//     let zero    = '';
    
//     if(length == 0){
//         zero = zero;
//     }
//     if(length == 1){
//         zero += data;
//     }
//     if(length == 2){
//         zero += data + data;
//     }
//     if(length == 3){
//         zero += data + data + data;
//     }
//     if(length == 4){
//         zero += data + data + data + data;
//     }
//     return zero;
// };
// // console.log( formStr('0', 4) ); // выведет '0000'
// // console.log( formStr('0', 3) ); // выведет '000'
// // console.log( formStr('0', 2) ); // выведет '00'
// // console.log( formStr('0', 1) ); // выведет '0'
// // console.log( formStr('0', 0) ); // выведет ''




// // Задача №3
// // Возьмите код функции normalizeNum:

// // function normalizeNum(num, digitsAmount) {
// // 	let str = String(num);
// // 	return formStr('0', digitsAmount - str.length) + str;
// // }
// // Возьмите написанную вами функцию formStr и потестируйте работу функции normalizeNum, например, вот так:
// // function normalizeNum(num, digitsAmount) {
// // 	let str = String(num);
// // 	return formStr('0', digitsAmount - str.length) + str;
// // }
// // function formStr(data, length) {
// // 	// написанный вами код
// // }
// // console.log(normalizeNum(123, 6)); // выведет '000123'
// // console.log(normalizeNum(1234, 6)); // выведет '001234'
// // console.log(normalizeNum(12345, 6)); // выведет '012345'
// // console.log(normalizeNum(123456, 6)); // выведет '123456'

// function normalizeNum(num, digitsAmount) {
// 	let str = String(num);
// 	return formStr('0', digitsAmount - str.length) + str;
// };
// // console.log(normalizeNum(123, 6)); // выведет '000123'
// // console.log(normalizeNum(1234, 6)); // выведет '001234'
// // console.log(normalizeNum(12345, 6)); // выведет '012345'
// // console.log(normalizeNum(123456, 6)); // выведет '123456'




// // Задача №4
// // Потестируйте совместную работу функций normalizeNum и isLucky, например, вот так:
// // console.log( isLucky(normalizeNum(1203, 4)) ); // выведет true
// // console.log( isLucky(normalizeNum(312, 4)) ); // выведет true

// // console.log( isLucky(normalizeNum(6123, 6)) ); // выведет true
// // console.log( isLucky(normalizeNum(600123, 6)) ); // выведет true

// // console.log( isLucky(normalizeNum(700123, 6)) ); // выведет false
// // console.log( isLucky(normalizeNum(070123, 6)) ); // выведет false




// // Задача №5
// // Сделайте функцию getLast, которая параметром будет принимать число цифр в билете и возвращать число, соответствующее концу цикла. Потестируйте эту функцию на различных значениях.

// function getLast(digitsAmount){
//     let result = '';
//     if(digitsAmount == 2){
//         result += 99;
//     }
//     if(digitsAmount == 4){
//         result += 9999;
//     }
//     if(digitsAmount == 6){
//         result += 999999;
//     }
//     return Number(result);
// };




// // Задача №6
// // Сделайте функцию getFirst, которая параметром будет принимать число цифр в билете и возвращать число, соответствующее началу цикла. Потестируйте эту функцию на различных значениях.

// function getFirst(digitsAmount){
//     let result = '';
//     if(digitsAmount == 2){
//         result += 11;
//     }
//     if(digitsAmount == 4){
//         result += 101;
//     }
//     if(digitsAmount == 6){
//         result += 1001;
//     }
//     return Number(result);
// };




// // Функция getLuckyTickets

// function getLuckyTickets(digitsAmount) {
// 	let result = [];
	
// 	let first = getFirst(digitsAmount);
// 	let last  = getLast(digitsAmount);
	
// 	for (let i = first; i <= last; i++) {
// 		let ticketNum = normalizeNum(i, digitsAmount);
		
// 		if (isLucky(ticketNum)) {
// 			result.push(ticketNum);
// 		}
// 	}
	
// 	return result;
// };
// console.log(getLuckyTickets(6));




// Задача №7
// Соберите весь код вместе, запустите его. Потестируйте общую работу кода для билетов с различным количеством цифр.

function getLuckyTickets(digitsAmount){
    let result  = [];
    let first   = firstNumberForCik(digitsAmount);
    let last    = lastNumberForCik(digitsAmount);

    for(let i = first; i <= last; i++){
        let ticketNum   = addZero(i, digitsAmount);
        if(isLucky(ticketNum)){
            result.push(ticketNum);
        }
    }
    return result;
};
console.log(getLuckyTickets(6));

function isLucky(num){
    let str     = addZero(num);
    let length  = str.length;
    let sum1;
    let sum2;

    if(length == 2){
        sum1    = Number(str[0]);
        sum2    = Number(str[1]);
    }
    if(length == 4){
        sum1    = Number(str[0]) + Number(str[1]);
        sum2    = Number(str[2]) + Number(str[3]);
    }
    if(length == 6){
        sum1    = Number(str[0]) + Number(str[1]) + Number(str[2]);
        sum2    = Number(str[3]) + Number(str[4]) + Number(str[5]);
    }
    return sum1 == sum2;
};

function addZero(num, digitsAmount){
    let str = String(num);

    return formStr('0', digitsAmount - str.length) + str;
};

function formStr(data, length){
    let zero    = ''
    if(length == 0){
        zero = zero;
    }
    if(length == 1){
        zero += data;
    }
    if(length == 2){
        zero += data + data;
    }
    if(length == 3){
        zero += data + data + data;
    }
    if(length == 4){
        data += data + data + data + data;
    }
    return zero;
};

function firstNumberForCik(digitsAmount){
    let result  = '';
    if(digitsAmount == 2){
        result += 11;
    }
    if(digitsAmount == 4){
        result += 101;
    }
    if(digitsAmount == 6){
        result += 1001;
    }
    return Number(result);
};

function lastNumberForCik(digitsAmount){
    let result  = '';
    if(digitsAmount == 2){
        result += 99;
    }
    if(digitsAmount == 4){
        result += 9999;
    }
    if(digitsAmount == 6){
        result += 999999;
    }
    return Number(result);
};