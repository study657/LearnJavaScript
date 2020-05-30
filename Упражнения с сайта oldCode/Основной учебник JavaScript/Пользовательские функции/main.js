// // Основы работы с пользовательскими функциями в JavaScript
// // Задача №1
// // Сделайте функцию, выводящую на экран ваше имя.

// function showName(){
//     let name = 'Мое имя';
//     alert(name);
// };
// showName();




// // Задача №2
// // Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// function sumNumbers(){
//     let sum = 0;

//     for(let i = 1; i <= 100; i++){
//         sum += i;
//     }
//     alert(sum);
// };
// sumNumbers();














// // Параметры функций в JavaScript
// // Задача №1
// // Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

// function kubNumber(num){
//     alert(Math.pow(num, 3));
// };
// kubNumber(3);




// // Задача №2
// // Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function checkNumber(num){
//     if(num >= 0){
//         alert('+++');
//     }else{
//         alert('---');
//     }
// };
// checkNumber(-100);




// // Несколько параметров
// // Задача №3
// // Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

// function sumNumbers(num1, num2, num3){
//     alert(num1 + num2 + num3);
// };
// sumNumbers(1, 2, 1);




// // Параметры-переменные
// // Задача №4
// // Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму.
// // Пусть даны 3 переменные с числами:
// // let param1 = 1;
// // let param2 = 2;
// // let param3 = 3;
// // С помощью созданной вами функции выведите на экран сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function func(num1, num2, num3){
//     alert(num1 + num2 + num3);
// };
// func(param1, param2, param3);














// // Инструкция return в JavaScript
// // Задача №1
// // Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

// function kubNumber(num){
//     return Math.pow(num, 3);
// };
// let result = kubNumber(3);
// console.log(result);




// // Использование функций в выражении
// // Задача №2
// // Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// // С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

// function getSqrtNumber(num){
//     return Math.sqrt(num);
// };
// console.log(getSqrtNumber(3) + getSqrtNumber(4));




// // Функции в функциях
// // Задача №3
// // Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// // function sqrt(num) {
// // 	return Math.sqrt(num);
// // }

// // function round(num) {
// // 	return num.toFixed(3);
// // }
// // С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

// function sqrt(num) {
// 	return Math.sqrt(num);
// };

// function round(num) {
// 	return num.toFixed(3);
// };
// console.log(round(sqrt(2)));




// // Задача №4
// // Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// // function sqrt(num) {
// // 	return Math.sqrt(num);
// // }

// // function sum(num1, num2, num3) {
// // 	return num1 + num2 + num3;
// // }
// // С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// function sqrt(num) {
// 	return Math.sqrt(num);
// };

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// };

// let result = sum(sqrt(2), sqrt(3), sqrt(4));
// console.log(result);




// // Задача №5
// // Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// // function round(num) {
// // 	return num.toFixed(3);
// // }
// // С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.


// function sqrt(num) {
// 	return Math.sqrt(num);
// };

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// };

// let result = sum(sqrt(2), sqrt(3), sqrt(4));

// function round(num) {
// 	return num.toFixed(3);
// };
// console.log(round(result));




// // Применение return в цикле
// // Задача №6
// // Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
// // Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

// function func(num){
//     let curr = 0;
//     while(true){
//         num = num / 2;
//         curr++;
//         if(num < 10){
//             return curr;
//         }
//     }
// };
// console.log(func(100));














// // Примеры на создание функций в JavaScript
// // Задача №1
// // Напишите функцию, которая будет находить сумму квадратов элементов массива.

// function getSumKvadratElemsArr(arr){
//     let sum = 0;
//     for(let elem of arr){
//         sum += Math.pow(elem, 2);
//     }
//     return sum;
// };




// // Задача №2
// // Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

// function getDigitsSum(num){
//     let str = String(num);
//     let elems = str.length;
//     let sum = 0;

//     for(let i = 0; i < elems; i++){
//         sum += Number(str[i]);
//     }
//     return sum;
// };




// // Задача №3
// // Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. 
// // К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].

// function getDivisors(num){
//     let arr = [];
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// };




// // Задача №4
// // Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

// function reverseStr(string){
//     let arr     = string.split('');
//     let newStr  = arr.reverse().join('');
//     return newStr;
// };




// // Задача №5
// // Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// let arr = ['a', 'b', 'c', 'a', 'd', 'd', 'c', 'a', 'c'];

// function delElem(elem, arr){
//     let elems = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == elem){
//             elems.push(i);
//         }
//     }
//     for(let i = 1; i <= elems.length; i++){
//         arr.splice(arr.indexOf(elem), 1);
//     }
//     return arr;
// };
// console.log(delElem('c', arr));




// // Задача №6
// // Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// function fillArr(num){
//     let arr = [];
//     for(let i = 1; i <= num; i++){
//         arr.push(i);
//     }
//     return arr;
// };
// console.log(fillArr(10));




// // Задача №7
// // Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.

// function fillArr(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         arr.push(i);
//     }
//     return arr;
// };
// console.log(fillArr(3, 7));














// // Флаги в функциях JavaScript
// // Задача №1
// // Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

// let arr = [2, 4, 5, 6, 8, 10];

// function checkEvenNumber(arr){
//     for(let elem of arr){
//         if(elem % 2 != 0){
//             return false;
//         }
//     }
//     return true;
// };
// console.log(checkEvenNumber(arr));




// // Задача №2
// // Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// function checkNumber(num){
//     let str = String(num);

//     for(let i = 0; i < str.length; i++){
//         if(Number(str[i]) % 2 == 0){
//             return false;
//         }
//     }
//     return true;
// };
// console.log(checkNumber(113571));




// // Задача №3
// // Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

// let arr = [1, 2, 3, 4, 5, 5];

// function checkArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == arr[i + 1]){
//             return true;
//         }
//     }
//     return false;
// };
// console.log(checkArr(arr));














// // Правильное использование функций JavaScript
// // Задача №1
// // Дана функция, проверяющая числа на простоту:
// // function isPrime(num) {
// // 	for (let i = 2; i < num; i++) {
// // 		if (num % i == 0) {
// // 			return false;
// // 		}
// // 	}
// // 	return true;
// // }
// // С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// function interval(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         if(isPrime(i)){
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// console.log(interval(1, 100));




// // Задача №2
// // Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
// // function getDigitsSum(num) {
// // 	let sum = 0;
// // 	let digits = String(num).split('');
	
// // 	for (let digit of digits) {
// // 		sum += Number(digit);
// // 	}
// // 	return sum;
// // }
// // С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
// 	return sum;
// };

// function checkDate(from, to){
//     let arr = [];
//     for(let i = from; i <= to; i++){
//         if(getDigitsSum(i) == 13){
//             arr.push(i);
//         }
//     }
//     return arr;
// };
// console.log(checkDate(1, 2030));





// // Задача №3
// // Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.
// // Некий программист уже написал решение задачи, вот оно:
// // let num1 = 234;
// // let num2 = 531;
// // let digits1 = String(num1).split('');
// // let digitsSum1 = 0;
// // for (let digit1 of digits1) {
// // 	digitsSum1 += Number(digit1);
// // }

// // let digits2 = String(num1).split('');
// // let digitsSum2 = 0;
// // for (let digit2 of digits2) {
// // 	digitsSum2 += Number(digit2);
// // }

// // if (digitsSum1 == digitsSum2) {
// // 	alert('суммы цифр совпадают');
// // } else {
// // 	alert('суммы цифр не совпадают');
// // }
// // В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.

// let num1 = 234;
// let num2 = 531;

// function checkSumNumbers(num){
//     let digits = String(num).split('');
//     let digitsSum = 0;
//     for (let digit of digits) {
// 	    digitsSum += Number(digit);
//     }
//     return digitsSum;
// };

// if(checkSumNumbers(num1) == checkSumNumbers(num2)){
//     alert('суммы цифр совпадают');
// }else{
//     alert('суммы цифр не совпадают');
// }




// // Задача №4
// // Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число).
// // Некий программист уже написал решение задачи:
// // let nums = [12, 24, 35, 14];

// // for (let num of nums) {
// // 	console.log(num + ': ' + getDivisors(num).join(', '));
// // }

// // function getDivisors(num) {
// // 	let result = [];
	
// // 	for (let i = 2; i < num; i++) {
// // 		if (num % i == 0) {
// // 			result.push(num);
// // 		}
// // 	}
// // 	return result;
// // }
// // Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. 
// // При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
// // Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. 
// // После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

// let nums = [12, 24, 35, 14];

// for (let i = 0; i < nums.length; i++) {
// 	console.log(nums[i] + ': ' + getDivisors(nums[i]).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
    
//     for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// 	return result;
// };














// // Комбинация вспомогательных функций JavaScript
// // Задача №1
// // Дана функция getSum, находящая сумму элементов переданного массива:

// // function getSum(arr) {
// // 	let sum = 0;
	
// // 	for (let elem of arr) {
// // 		sum += Number(elem);
// // 	}
	
// // 	return sum;
// // }
// // Дана функция getDigits, возвращающая массив цифр числа:

// // function getDigits(num) {
// // 	return String(num).split('');
// // }
// // Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// };

// function getDigits(num) {
// 	return String(num).split('');
// };

// console.log(getSum(getDigits(12345)));




// // Задача №2
// // Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран.
// // Некий программист уже написал решение задачи:

// // console.log( getAvg(getDivisors(24)) );
// // // Нахождение среднего арифметического:
// // function getAvg(arr) {
// // 	let sum = 0;
	
// // 	for (let elem of arr) {
// // 		sum = elem;
// // 	}
	
// // 	return sum / arr.length;
// // }
// // // Нахождение массива делителей числа:
// // function getDivisors(num) {
// // 	let result = [];
	
// // 	for (let i = 2; i > num; i++) {
// // 		if (num % i == 0) {
// // 			result.push(i);
// // 		}
// // 	}
// // }
// // Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает неверно.
// // Найдите и исправьте ошибки программиста. Потестируйте отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок. 
// // После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum / arr.length;
// };
// console.log(getAvg([1, 2, 3]));

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 1; i <= num; i++) {
// 		if(num % i == 0){
// 			result.push(i);
// 		}
//     }
//     return result;
// };
// console.log(getDivisors(22));

// console.log(getAvg(getDivisors(24)));














// Вспомогательные функции внутри других функций в JavaScript
// Задача №1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.
// Давайте теперь решим нашу исходную задачу. Напомню ее: дан массив с числами, запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

let arr     = [12, 19, 28, 13, 14, 345];
let result  = [];

function getDigits(num){
    return String(num).split('');
};
console.log(getDigits(123));

function getSum(arr){
    let sum = 0;
    for(let elem of arr){
        sum += Number(elem);
    }
    return sum;
};
console.log(getSum(getDigits(123)));

function inRange(num){
    let sum = getSum(getDigits(num));

    return sum >= 1 && sum <= 9;
};

for(let elem of arr){
    if(inRange(elem)){
        result.push(elem);
    }
}
console.log(result);